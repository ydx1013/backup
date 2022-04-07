// ==UserScript==
// @name         百度百科添加维基百科
// @version      1.05
// @description  在百度百科中添加跳转到维基百科和互动百科
// @match        *://baike.baidu.com/*
// @grant        none
// @author       sunforbeeing
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @namespace    https://greasyfork.org/users/20689
// ==/UserScript==

(function() {
	//搜索栏调整
	$('.header .layout').css('width', '95%');
	$('.wgt-searchbar-main').css('width', '100%');
	$('.search .form input').css('width', '400px');
	$('.search .form .help').remove();
	$('.wgt-userbar').css({'position':'static','float':'right'});
	//页面清理
	$('.new-side-share').remove();//分享
	$('.item.appdownload').remove();//分享
    $('.navbar-bg-top').remove();//分享
    $('.secondsknow-large-container').remove();//分享
    $('.J-wgt-seconds-know-container').remove();//分享
    $('.J-secondsknow-large-container').remove();//分享
    $('.num').remove();//分享
    $('.topA').remove();//分享
    $('.J-declare').remove();//分享
    $('.tashuo_right').remove();//分享
    $('.tashuo_bottom').remove();//分享
    $('.tashuo-right').remove();//分享


	$('.lemmaWgt-promotion-vbaike').remove(); //V百科
	$('.wgt-footer-main .content').remove();//页面底部
	$('.after-content').remove();//页面底部
	//添加互动百科词条
	$('#searchForm #search').after('<button class="hudong" type="button" >互动词条</button>');
	$('.hudong').click(function() {
			window.open("http://www.baike.com/wiki/" + $('#query').val());
		});
	//添加维基百科词条
	$('#searchForm #search').after('<button class="wiki" type="button" >维基词条</button>');
	$('.wiki').click(function() {
			window.open("https://zh.wikipedia.org/wiki/" + $('#query').val());
		});
})();
