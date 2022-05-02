// ==UserScript==
// @name         百度百科添加维基百科
// @version      1.05
// @description  在百度百科中添加跳转到维基百科和互动百科
// @match        https://baike.baidu.com/*
// @updateURL        https://raw.githubusercontent.com/ydx1013/backup/master/%E8%84%9A%E6%9C%AC%E5%A4%87%E4%BB%BD/%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91.js
// @downloadURL        https://raw.githubusercontent.com/ydx1013/backup/master/%E8%84%9A%E6%9C%AC%E5%A4%87%E4%BB%BD/%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91.js
// @grant        none
// @author       sunforbeeing
// @require      https://code.jquery.com/jquery-3.1.1.min.js

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
    $('.professional-header').remove();//分享

    $('.authEdit').remove();//分享
    $('.tashuo_right').remove();//分享
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


GM_addStyle(`    // 设置自定义样式

 /* 导航栏颜色 */
.header-wrapper .header .layout {
	    width: 100%;
	}
	.lemmaWgt-searchHeader {
	    border: none;
	}
	.lemmaWgt-searchHeader,
	.header-wrapper .header {
	    background-color: #547b8e;
	}
	.pc-header-new .wgt-searchbar-main {
	    width: 930px;
	    margin: auto;
	}
/* 百度图标 */
	
	.cmn-icons_logo-du {
	    color: rgba(254, 254, 254, 0.76);
	}
	.cmn-icons_logo-bai,
	.cmn-icons_logo-baike {
	    color: rgba(255, 255, 255, 0.54);
	}
	/* 下拉选项 */
	
	.wgt-searchbar-new.wgt-searchbar .search .form .suggestion li {
	    padding: 0 8px;
	    height: 30px;
	    line-height: 30px;
	    font-size: 16px;
	    cursor: pointer;
	}
	/*  搜索栏 */
	
	.wgt-searchbar-new.wgt-searchbar .search .form input {
	    height: 30px;
	    line-height: 1.5;
	    font-size: 18px;
	    border: none;
	    border-radius: 5px;
	    background: hsla(0, 0%, 100%, .2);
	    color: #fff;
	    transition: background .3s;
	}
	.wgt-searchbar-new.wgt-searchbar .search .form input:focus {
	    box-shadow: 0 0 5px rgba(255, 255, 255, .5);
	    background: hsla(0, 0%, 100%, .9);
	    color: #222;
	    transition: background .3s, box-shadow .5s;
	}
	#searchForm > button {
	    height: 40px;
	    line-height: 1.5;
	    border-radius: 5px;
	    margin-left: 5px;
	    border: none!important;
	    box-shadow: 0 0 0 transparent;
	    color: #fff!important;
	    background: hsla(0, 50%, 100%, .2)!important;
	}
	#searchForm > button:hover {
	    background: hsla(0, 50%, 100%, .9)!important;
	    box-shadow: 0 0 10px rgba(255, 255, 255, .5);
	    color: #222!important;
	    transition: box-shadow .5s, background .5s;
	}
	.wgt-navbar .navbar-bg .navbar-bg-top {
	    height: 43px;
	    border-top: none;
	    border-bottom: none;
	    background: #7c9b9e;
	}
	.wgt-searchbar-new.wgt-searchbar .logo-container {
	    padding: 12px 0 15px;
	}
	.tool-buttons {
	    margin-top: 30px;
	}
	.tool-buttons .button {
	    color: #fff;
	    font-size: 16px;
	}
	.lemmaWgt-searchHeader .user-info {
	    margin-top: 13px;
	}
	.lemmaWgt-searchHeader .user-info a.user-link {
	    text-decoration: none;
	    font-size: 16px;
	    color: #fff;
	}
	.wgt-searchbar-new.wgt-searchbar-large .search {
	    padding: 15px 0px;
	}
	.wgt-searchbar-new.wgt-searchbar-large .logo-container {
	    padding: 10px 0px;
	}
	/* 选中文字时 */
	
	.main-content::selection,
	.body-wrapper a::selection,
	.body-wrapper .para::selection {
	    background: #909aa5;
	    color: #fff;
	}
	.main-content a::selection {
	    color: #0f5290;
	}
	/* 底栏排版 */
	
	.wgt-footer-main {
	    width: 1140px;
	    margin: 10px auto 0px;
	}
	/************************* 加入动画效果 ****************************/
	
	.body-wrapper {
	    animation-name: left_logoR;
	    -webkit-animation-duration: .5s;
	    -moz-animation-duration: .5s;
	    animation-duration: .5s;
	    -webkit-animation-timing-function: ease;
	    -moz-animation-timing-function: ease;
	    animation-timing-function: ease;
	}
	@-webkit-keyframes left_logoR {
	    0% {
	        -webkit-transform: translateY(64px);
	        -moz-transform: translateY(64px);
	        transform: translateY(64px);
	        opacity: 0;
	    }
	    50% {
	        opacity: 0;
	    }
	    100% {
	        opacity: 1;
	    }
	}

`)
    // 初始化
    init()
})();
