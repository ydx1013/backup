// ==UserScript==
// @name         Baidu Google切换
// @namespace     http://tampermonkey.net/
// @author        百度
// @version       22.4.19
// @description   基于Google_baidu_Switcher_(ALL_in_One)修改，分别在百度和google的搜索结果页面增加搜索跳转按钮。
// @match       https://www.google.com/*
// @match       http://www.google.com/*
// @match              *://www.google.com/*
// @match              *://www.google.ad/*
// @match              *://www.google.ae/*
// @match              *://www.google.com.af/*
// @match              *://www.google.com.ag/*
// @match              *://www.google.com.ai/*
// @match              *://www.google.al/*
// @match              *://www.google.am/*
// @match              *://www.google.co.ao/*
// @match              *://www.google.com.ar/*
// @match              *://www.google.as/*
// @match              *://www.google.at/*
// @match              *://www.google.com.au/*
// @match              *://www.google.az/*
// @match              *://www.google.ba/*
// @match              *://www.google.com.bd/*
// @match              *://www.google.be/*
// @match              *://www.google.bf/*
// @match              *://www.google.bg/*
// @match              *://www.google.com.bh/*
// @match              *://www.google.bi/*
// @match              *://www.google.bj/*
// @match              *://www.google.com.bn/*
// @match              *://www.google.com.bo/*
// @match              *://www.google.com.br/*
// @match              *://www.google.bs/*
// @match              *://www.google.bt/*
// @match              *://www.google.co.bw/*
// @match              *://www.google.by/*
// @match              *://www.google.com.bz/*
// @match              *://www.google.ca/*
// @match              *://www.google.cd/*
// @match              *://www.google.cf/*
// @match              *://www.google.cg/*
// @match              *://www.google.ch/*
// @match              *://www.google.ci/*
// @match              *://www.google.co.ck/*
// @match              *://www.google.cl/*
// @match              *://www.google.cm/*
// @match              *://www.google.cn/*
// @match              *://www.google.com.co/*
// @match              *://www.google.co.cr/*
// @match              *://www.google.com.cu/*
// @match              *://www.google.cv/*
// @match              *://www.google.com.cy/*
// @match              *://www.google.cz/*
// @match              *://www.google.de/*
// @match              *://www.google.dj/*
// @match              *://www.google.dk/*
// @match              *://www.google.dm/*
// @match              *://www.google.com.do/*
// @match              *://www.google.dz/*
// @match              *://www.google.com.ec/*
// @match              *://www.google.ee/*
// @match              *://www.google.com.eg/*
// @match              *://www.google.es/*
// @match              *://www.google.com.et/*
// @match              *://www.google.fi/*
// @match              *://www.google.com.fj/*
// @match              *://www.google.fm/*
// @match              *://www.google.fr/*
// @match              *://www.google.ga/*
// @match              *://www.google.ge/*
// @match              *://www.google.gg/*
// @match              *://www.google.com.gh/*
// @match              *://www.google.com.gi/*
// @match              *://www.google.gl/*
// @match              *://www.google.gm/*
// @match              *://www.google.gr/*
// @match              *://www.google.com.gt/*
// @match              *://www.google.gy/*
// @match              *://www.google.com.hk/*
// @match              *://www.google.hn/*
// @match              *://www.google.hr/*
// @match              *://www.google.ht/*
// @match              *://www.google.hu/*
// @match              *://www.google.co.id/*
// @match              *://www.google.ie/*
// @match              *://www.google.co.il/*
// @match              *://www.google.im/*
// @match              *://www.google.co.in/*
// @match              *://www.google.iq/*
// @match              *://www.google.is/*
// @match              *://www.google.it/*
// @match              *://www.google.je/*
// @match              *://www.google.com.jm/*
// @match              *://www.google.jo/*
// @match              *://www.google.co.jp/*
// @match              *://www.google.co.ke/*
// @match              *://www.google.com.kh/*
// @match              *://www.google.ki/*
// @match              *://www.google.kg/*
// @match              *://www.google.co.kr/*
// @match              *://www.google.com.kw/*
// @match              *://www.google.kz/*
// @match              *://www.google.la/*
// @match              *://www.google.com.lb/*
// @match              *://www.google.li/*
// @match              *://www.google.lk/*
// @match              *://www.google.co.ls/*
// @match              *://www.google.lt/*
// @match              *://www.google.lu/*
// @match              *://www.google.lv/*
// @match              *://www.google.com.ly/*
// @match              *://www.google.co.ma/*
// @match              *://www.google.md/*
// @match              *://www.google.me/*
// @match              *://www.google.mg/*
// @match              *://www.google.mk/*
// @match              *://www.google.ml/*
// @match              *://www.google.com.mm/*
// @match              *://www.google.mn/*
// @match              *://www.google.ms/*
// @match              *://www.google.com.mt/*
// @match              *://www.google.mu/*
// @match              *://www.google.mv/*
// @match              *://www.google.mw/*
// @match              *://www.google.com.mx/*
// @match              *://www.google.com.my/*
// @match              *://www.google.co.mz/*
// @match              *://www.google.com.na/*
// @match              *://www.google.com.ng/*
// @match              *://www.google.com.ni/*
// @match              *://www.google.ne/*
// @match              *://www.google.nl/*
// @match              *://www.google.no/*
// @match              *://www.google.com.np/*
// @match              *://www.google.nr/*
// @match              *://www.google.nu/*
// @match              *://www.google.co.nz/*
// @match              *://www.google.com.om/*
// @match              *://www.google.com.pa/*
// @match              *://www.google.com.pe/*
// @match              *://www.google.com.pg/*
// @match              *://www.google.com.ph/*
// @match              *://www.google.com.pk/*
// @match              *://www.google.pl/*
// @match              *://www.google.pn/*
// @match              *://www.google.com.pr/*
// @match              *://www.google.ps/*
// @match              *://www.google.pt/*
// @match              *://www.google.com.py/*
// @match              *://www.google.com.qa/*
// @match              *://www.google.ro/*
// @match              *://www.google.ru/*
// @match              *://www.google.rw/*
// @match              *://www.google.com.sa/*
// @match              *://www.google.com.sb/*
// @match              *://www.google.sc/*
// @match              *://www.google.se/*
// @match              *://www.google.com.sg/*
// @match              *://www.google.sh/*
// @match              *://www.google.si/*
// @match              *://www.google.sk/*
// @match              *://www.google.com.sl/*
// @match              *://www.google.sn/*
// @match              *://www.google.so/*
// @match              *://www.google.sm/*
// @match              *://www.google.sr/*
// @match              *://www.google.st/*
// @match              *://www.google.com.sv/*
// @match              *://www.google.td/*
// @match              *://www.google.tg/*
// @match              *://www.google.co.th/*
// @match              *://www.google.com.tj/*
// @match              *://www.google.tl/*
// @match              *://www.google.tm/*
// @match              *://www.google.tn/*
// @match              *://www.google.to/*
// @match              *://www.google.com.tr/*
// @match              *://www.google.tt/*
// @match              *://www.google.com.tw/*
// @match              *://www.google.co.tz/*
// @match              *://www.google.com.ua/*
// @match              *://www.google.co.ug/*
// @match              *://www.google.co.uk/*
// @match              *://www.google.com.uy/*
// @match              *://www.google.co.uz/*
// @match              *://www.google.com.vc/*
// @match              *://www.google.co.ve/*
// @match              *://www.google.vg/*
// @match              *://www.google.co.vi/*
// @match              *://www.google.com.vn/*
// @match              *://www.google.vu/*
// @match              *://www.google.ws/*
// @match              *://www.google.rs/*
// @match              *://www.google.co.za/*
// @match              *://www.google.co.zm/*
// @match              *://www.google.co.zw/*
// @match       https://ipv6.google.com/*
// @match       http://ipv6.google.com/*
// @match       http://www.baidu.com/*
// @match       https://www.baidu.com/*
// @match       http://image.baidu.com/*
// @match       https://image.baidu.com/*
// @include       http://www.baidu.com/*
// @include       https://www.baidu.com/*
// @include       http://image.baidu.com/*
// @downloadURL  https://raw.githubusercontent.com/ydx1013/backup/master/%E8%84%9A%E6%9C%AC%E5%A4%87%E4%BB%BD/%E7%99%BE%E5%BA%A6%E8%B0%B7%E6%AD%8C%E5%88%87%E6%8D%A2.js
// @updateURL    https://raw.githubusercontent.com/ydx1013/backup/master/%E8%84%9A%E6%9C%AC%E5%A4%87%E4%BB%BD/%E7%99%BE%E5%BA%A6%E8%B0%B7%E6%AD%8C%E5%88%87%E6%8D%A2.js
// @require       https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @note          18.12.30-V0.2.2 谷歌搜索按钮优化。
// @note          18.12.11-V0.2.1 搜索按钮显示效果调整。
// @note          18.12.11-V0.2.0 增加百度图片搜索与谷歌图片搜索之间跳转功能。
// @note          18.01.02-V0.1.2 微调百度页面中google搜索按钮，兼容AC-Baidu。
// @note          17.08.22-V0.1.1 微调Google中百度搜索按钮显示效果。
// @note          16.12.23-V0.1.0

// ==/UserScript==
(function() {
  'use strict';
  if(location.host.indexOf("baidu.com") > -1){
    if (getUrlParam("wd").length > 0 || getUrlParam("word").length > 0 || window.location.href.lastIndexOf("/s?") > 0) {
      baidu2google();
    }
    //2018/11/07 F9y4ng 检测从baidu首页进入的搜索（修正自动提交的Bug）
    if (/^http(s)?:\/\/(www\.)?baidu\.com\/$/ig.test(window.location.href)) {
      $("#kw").on("blur", function () {
        if ($('#kw').val().length > 0) {
          setTimeout(function () {
            if ($('#google_search').length < 1 && getUrlParam("wd").length > 0) {
              baidu2hgoogle();
            }
          }, 600);
        }
      });
    }
  }
  else if(location.host.indexOf(".google.") > -1){
    if (window.location.hash.lastIndexOf("q=") > 0 || window.location.search.lastIndexOf("q=") > 0) {
      google2baidu();
    }
    //2018/11/07 F9y4ng GOOGLE首页自动提交搜索修正
    if (/^http(s)?:\/\/(www\.)?google\.\w+(\.\w+)?\/$/ig.test(window.location.href) || getUrlParam("q") === "") {
      var gfm = $('input[name="q"]');
      if ("undefined" == typeof (gfm)) {
        gfm = $("input[role='combobox']");
      }
      gfm.off('click').on({
        blur: function () {
          if (gfm.val().length > 0) {
            $("form").submit();
          }
        }
      });
    }
    var ua = myBrowser();
    if (ua == "FF" || ua == "Edge") {
      $('#bdyxwz').css('margin-top', '10px');
      $('#bdyxss').css('margin', '12px 2px 0 4px');
    }
    else {
      $('#bdyxwz').css('margin-top', '0px');
      $('#bdyxss').css('margin', '2px 2px 0 4px');
    }
    var elm = $('#bdyx');
    var startPos = $(elm).offset().top;
    $.event.add(window, "scroll", function () {
      var p = $(window).scrollTop();
      $(elm).css('height', ((p) > startPos) ? '37px' : '49px');
      if (ua == "FF" || ua == "Edge") {
        $('#bdyxwz').css('margin-top', ((p) > startPos) ? '5px' : '10px');
        $('#bdyxss').css('margin', ((p) > startPos) ? '7px 2px 0 4px' : '12px 2px 0 4px');
      }
    });
  }
  function baidu2google() {
    $('.s_btn_wr').after('<div class="bg s_btn_wr" style="margin-left:10px"><input type="button" id="google_search" value="Google一下" class="bg s_btn" ></div>');
    var s_url = "https://www.google.com/search?newwindow=1&hl=zh-CN&source=hp";
    if(getUrlParam("tn") == "baiduimage") {
      s_url = s_url + "&tbm=isch";
    }
    $('#google_search').on({
      click: function () {
        window.open(s_url + "&q=" + encodeURIComponent($('#kw').val()));
        return false;
      }
    });
    baidu_resize();
    $(window).on("resize", function(){
      baidu_resize();
    });
  }
  function baidu_resize() {
    if($("#result_logo").css("left") != "auto"){
        $(".s_ipt_wr").width($(".s_ipt_wr").width() - 70);
    }
  }
  function google2baidu(){
    $('#tsf').prepend('<div id="sfdiv_bd" style="display:inline-block;position:relative;height:0px;width:110px;right:-115px;\
top:0px;float:right;"><button id="bdyx" class="lsbb kpbb" style="width:120px;background:#3385ff;color:#fff;height:45px;margin-left:25px;cursor:pointer;\
border-radius: 10px;border: 1px solid #3385ff;box-shadow: none;" type="button"><span id="bdyxwz" style="font-size:16px;">百度一下</span></button></div>');
    var s_url = "https://www.google.com/search?newwindow=1&hl=zh-CN&source=hp";
    $('#sfdiv_bd').off("click").on("click", function(){
      var kw = $('input[name="q"]').val();
      //获取属性标签容错
      if ("undefined" == typeof (kw)) {
        kw = getUrlParam("q");
      }
      var s_url = "https://www.baidu.com/s?ie=utf-8&rqlang=cn";
      if(getUrlParam("tbm") == "isch") s_url = "https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&rqlang=cn";
      window.open(s_url + "&wd=" + encodeURIComponent(kw));
      return false;
    });
  }

  function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if (r != null) return unescape(r[2]);
    return "";
  }
})();

function myBrowser() {
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("Firefox") > -1) {
    return "FF";
  }
  if (userAgent.indexOf("Edge") > -1) {
    return "Edge";
  }
}
