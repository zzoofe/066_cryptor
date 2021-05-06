import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import datepicker from 'js-datepicker'
import 'select2'
import intlTelInput from 'intl-tel-input'

svg4everybody();

let pikerSelector = document.querySelector('.date-input')

if (pikerSelector) {
	const picker = datepicker(pikerSelector, {
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		}
	})
}

const inputPhone = document.querySelector("#phone");

if (inputPhone) {
	intlTelInput(inputPhone, {
		onlyCountries: ["ru", "cn", "us"],
		preferredCountries: [],
	})
}


window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');



(function($){
	$(document).ready(
		function() {
			barShow()
			showList()
			faq()
			tabs()
			select()
		}
	)

	$(document).mouseup(function (e){
		let div = $('.js-click')
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.removeClass('is-open')
		}
	})
})(jQuery)

function select() {
	$('.js-select').select2({
		minimumResultsForSearch: -1
	});
}

function tabs() {
	$('ul.tabs').delegate('li:not(.is-active)', 'click', function() {
		$(this).addClass('is-active').siblings().removeClass('is-active')
			.parents('div.s-tabs').find('div.b-tabs').hide().eq($(this).index()).fadeIn(150);
	})
}

function barShow() {
	$('.b-bar__btn').on('click', function () {
		$('.b-bar-top').toggleClass('is-full')
		$('.b-bar-left').toggleClass('is-min')
		$('.s-content').toggleClass('is-full')
	})
}

function showList() {
	$('.js-click').on('click', function () {
		$(this).toggleClass('is-open')
	})
}

function faq() {
	$('.b-faq__item__title').on('click', function () {
		$(this).next().slideToggle()
		$(this).toggleClass('is-open')
		$(this).parent().toggleClass('is-open')
	})
}
