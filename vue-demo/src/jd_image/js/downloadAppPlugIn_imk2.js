(function(){var b=function(c){return new a(c)};function a(c){this.init(c)}a.prototype={init:function(d){var c=d||{};this.mainPicSrc=c.mainPicSrc||"//commonst.360buyimg.com/common/indexLayer/main-pic.png";this.btnPicSrc=c.btnPicSrc||"//commonst.360buyimg.com/common/indexLayer/img-btn.png";this.picBtnCallBack=c.picBtnCallBack;this.closeBtnCallBack=c.closeBtnCallBack||this.closeBtndefault;this.container=c.container||"body";this.mycontainer=document.querySelector(this.container);this.head=document.getElementsByTagName("head")[0];this.windowWidth=document.documentElement.clientWidth;this.appendCss();this.appendHtml();this.bind()},closeBtndefault:function(){var c=document.getElementsByClassName("my-indexlayer-layout-tongyong")[0];c.style.display="none"},appendCss:function(){var c=document.createElement("STYLE");c.innerHTML='*{margin:0;padding:0;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:0}html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;color:green!important}body{-webkit-text-size-adjust:100%;background:#fff;min-width:320px;margin:0;padding:0;height:100%;width:100%;overflow-x:hidden;-webkit-overflow-scrolling:touch;font-family:PingFangSC-Regular,Helvetica,"Droid Sans",Arial,sans-serif}img{border:0;vertical-align:middle}.my-indexlayer-layout-tongyong{position:fixed;z-index:9999;height:100%;top:0;left:0;background-color:rgba(0,0,0,.7);display:box;display:-webkit-box;display:-moz-box;display:-ms-box;display:-o-box;box-align:center;-webkit-box-align:center;-moz-box-align:center;-ms-box-align:center;-o-box-align:center}.my-indexlayer-layout-tongyong .img-block-tongy{width:375px;height:375px;position:relative}.my-indexlayer-layout-tongyong .img-block-tongy .layer-pic-tongy{display:block;height:292px;max-width:100%;margin:0 auto}.my-indexlayer-layout-tongyong .img-block-tongy .btn-pic-tongy{display:block;margin:0 auto;margin-top:22px;width:168px;height:60px}.my-indexlayer-layout-tongyong .img-block-tongy .close-btn-tongy{position:absolute;top:0;right:25px;background:url(//commonst.360buyimg.com/common/indexLayer/1/close-btn.png) no-repeat;background-size:25px 25px;width:25px;height:25px}';this.head.appendChild(c)},appendHtml:function(){var d=document.createElement("div");d.classList.add("my-indexlayer-layout-tongyong");d.id="outermostIndexlayerLayoutTongyong";var c="";c+='<div class="img-block-tongy" style="width:'+this.windowWidth+"px;height:"+this.windowWidth+'px">';c+='<img class="layer-pic-tongy" style="height:'+parseInt(this.windowWidth*0.78)+'px" src='+this.mainPicSrc+">";c+='<img class="btn-pic-tongy" id="myLayoutPicBtnTongy" src='+this.btnPicSrc+">";c+='<span class="close-btn-tongy" id="myLayoutCloseBtnTongy"></span>';c+="</div>";d.innerHTML=c;this.mycontainer.appendChild(d)},bind:function(){var e=this;var d=document.getElementById("myLayoutCloseBtnTongy");var c=document.getElementById("myLayoutPicBtnTongy");d.addEventListener("click",function(){e.closeBtnCallBack()});c.addEventListener("click",function(){if(typeof e.picBtnCallBack=="function"){e.picBtnCallBack()}})}};window.indexLayer=b})();(function(){var G=navigator.userAgent;var R=G.match(/Chrome/i)!=null&&G.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i)==null?true:false;var H=(G.match(/(Android);?[\s\/]+([\d.]+)?/))?true:false;var ag=(G.match(/(iPad).*OS\s([\d_]+)/))?true:false;var Y=(G.match(/(Mac\sOS)\sX\s([\d_]+)/))?true:false;var S=(!ag&&G.match(/(iPhone\sOS)\s([\d_]+)/))?true:false;var Z=(S||ag)&&G.match(/Safari/);var s=0;var j=G.match(/(iPhone\sOS)\s([\d_]+)/);var aj=(j&&j.length>2)?(j[2].split("_").length>0?j[2].split("_")[0]:""):"";Z&&(s=G.match(/Version\/([\d\.]+)/));try{s=parseFloat(s[1],10)}catch(B){}var G=window.navigator.userAgent,l=false;var l=G.toUpperCase().indexOf("SAMSUNG-SM-N7508V")!=-1;var W="plugIn_downloadAppPlugIn_loadIframe";var f=false;var P=0;var ar={};var m={};var ac=null;var aa={};var Q=window.Zepto||window.jQuery?true:false;var A=[];var k=window.localStorage?true:false;var O=Math.floor(Math.random()*100)+1;var u=false;var D=false;var M=false;var p=null;var au={closeUaAjax:false,keplerAjax:false,configCenterAjax:false};var c={closeUaAjax:null,configCenterAjax:null};var af={AROUSAL_APP:true,DOWNLOAD_LAYER:true,GENERAL_HEAD:true,msf_type:"auto",cooldown_time:0,scheme_prame:"",use_universallinks:true,appDownCloseIntervalTime:0,appDownOpenIntervalTime:0,downAppConfigData:null};var J={keplerID:null,keplerFrom:1,keplerParamJson:null};var i={isUniversalLinksUa:false,isUniversalLinksOs:false,isUseUniversalLinks:false};var F={login_State:false,pcScan_Layer:null,newPeople_Layer:null};var r={url:"https://mapi.m.jd.com/config/display.action?_format_=json&domain="+encodeURIComponent(document.referrer),method:"POST",async:true,timeout:1400,withCredentials:true,hasAjax:"configCenterAjax",hasAjaxSend:false,error:function(){au.configCenterAjax=true},success:function(az){au.configCenterAjax=true;try{az=JSON.parse(az);g(az)}catch(aA){}}};var N={url:"https://so.m.jd.com/downLoad/closeUa.action?_format_=json",method:"POST",async:true,timeout:1200,hasAjax:"closeUaAjax",hasAjaxSend:false,error:function(){au.closeUaAjax=true},success:function(az){au.closeUaAjax=true;try{az=JSON.parse(az);if(az&&az.ua){az=JSON.parse(az.ua);am(az)}}catch(aA){}}};function ap(){var az=new Date();var aA=az.getFullYear();var aB=az.getMonth()+1;var e=az.getDate();strDate=aA+"-"+aB+"-"+e;return strDate}function an(aA,az,e){if(Q){ac("#"+aA).bind(az,e)}else{ac("#"+aA).addEventListener(az,e,!1)}}function y(e){var az=(e||"mGen")+(++P);return az}if(Q){ac=window.$;aa=window.$}else{ac=function(e){if(typeof e=="object"){return e}return document.querySelector(e)};if(!window.$){window.$=aa=ac}else{aa=window.$}}window.onblur=function(){for(var e=0;e<A.length;e++){clearTimeout(A[e])}};function n(aA){var az=document.cookie.indexOf(aA+"=");if(az==-1){return""}az=az+aA.length+1;var e=document.cookie.indexOf(";",az);if(e==-1){e=document.cookie.length}return document.cookie.substring(az,e)}function ad(aA,aC,e,aD,aB){var aE=aA+"="+escape(aC);if(e!=""){var az=new Date();az.setTime(az.getTime()+e*24*3600*1000);aE+=";expires="+az.toGMTString()}if(aD!=""){aE+=";path="+aD}if(aB!=""){aE+=";domain="+aB}document.cookie=aE}function L(aA,aD){var aC=null;if(aD){aC={downAppURl:"//h5.m.jd.com/active/download/download.html?channel=jd-m",downAppIos:"https://itunes.apple.com/us/app/jing-dong-wang-gou-shou-dan/id414245413",downWeixin:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",downIpad:"https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",inteneUrl:"openapp.jdmobile://virtual?",inteneUrlParams:null,sourceType:"JSHOP_SOURCE_TYPE",sourceValue:"JSHOP_SOURCE_VALUE",M_sourceFrom:"mxz",NoJumpDownLoadPage:false,kepler_param:null,autoOpenAppEventId:"MDownLoadFloat_AppArouse",autoOpenAppEventParam:"",autoOpenIntervalTime:0,autoOpenAppCallback:null,autoOpenAppCallbackSource:null,cookieFlag:null,noJdApp:false,universalLinksUrl:"https://linkst.m.jd.com"}}else{aC={downAppURl:"//h5.m.jd.com/active/download/download.html?channel=jd-m",downAppIos:"https://itunes.apple.com/us/app/jing-dong-wang-gou-shou-dan/id414245413",downWeixin:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",downIpad:"https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",inteneUrl:"openapp.jdmobile://virtual?",inteneUrlParams:null,openAppBtnId:"",closePanelBtnId:"",closePanelId:"",openAppCallback:null,openAppCallbackSource:null,closeCallblack:null,closeCallblackSource:null,cookieFlag:null,sourceType:"JSHOP_SOURCE_TYPE",sourceValue:"JSHOP_SOURCE_VALUE",openAppEventId:"MDownLoadFloat_OpenNow",openAppEventParam:"",closePanelEventId:"MDownLoadFloat_Close",closePanelEventParam:"",appDownCloseIntervalTime:0,appDownOpenIntervalTime:0,noRecord:false,isnotWriteOpenAppCookie:false,M_sourceFrom:"mxz",msf_type:"click",NoJumpDownLoadPage:false,kepler_param:null,noJdApp:false,universalLinksUrl:"https://linkst.m.jd.com"}}if(aA){for(var aB in aA){if((aB&&aA[aB])||(aB=="appDownCloseIntervalTime"&&aA[aB]==0)||(aB=="appDownOpenIntervalTime"&&aA[aB]==0)||(aB=="autoOpenIntervalTime"&&aA[aB]==0)){if(aB=="appDownCloseIntervalTime"||aB=="appDownOpenIntervalTime"||aB=="autoOpenIntervalTime"){var aF=/^(-     |\+)?\d+$/;if(aF.test(aA[aB])&&aA[aB]>=0){try{var az=parseInt(aA[aB],10);aC[aB]=az}catch(aE){}}}else{aC[aB]=aA[aB]}}}}return aC}function ai(aA){var aD=ay(aA,true);var aB=aA.universalLinksUrl+"/ul/ul.action?"+aD;if(navigator.userAgent.indexOf("baidubrowser")>=0){window.location.href=aB}else{var az=document.createElement("a");az.setAttribute("href",aB);az.style.display="none";document.body.appendChild(az);var aC=document.createEvent("HTMLEvents");aC.initEvent("click",!1,!1);az.dispatchEvent(aC)}}function T(e,aB){var aD=ay(e);var az=null;if(ag){az=e.downIpad}else{if(S){az=e.downAppIos}else{az=e.downAppURl}}if((R&&H)||l){var aC=aD;aD=ax(aC);setTimeout(function(){window.location.href=aD},50)}if((Z&&s>=9)||Y){setTimeout(function(){var aF=document.createElement("a");aF.setAttribute("href",aD);aF.style.display="none";document.body.appendChild(aF);var aG=document.createEvent("HTMLEvents");aG.initEvent("click",!1,!1);aF.dispatchEvent(aG)},0)}else{document.querySelector("#"+W).src=aD}var aE=m.outermostIndexlayerLayoutTongyong;if(aB&&aE){var aA=Date.now();setTimeout(function(){var aF=setTimeout(function(){o(aA,aE)},1400);A.push(aF)},100)}else{if(!e.NoJumpDownLoadPage){var aA=Date.now();setTimeout(function(){var aF=setTimeout(function(){aw(aA,az)},1500);A.push(aF)},100)}}}function aw(aA,az){var e=Date.now();if(aA&&(e-aA)<(1500+200)){window.location.href=az}}function o(az,aA){var e=Date.now();if(az&&(e-az)<2000){ae(aA)}}function ay(aC,az){var aM=[];var aF=aC.inteneUrlParams;var aK={category:"jump",des:"HomePage"};if(aC.sourceType&&aC.sourceValue){aK.sourceType=aC.sourceType;aK.sourceValue=aC.sourceValue;if(aF&&!aF.sourceType&&!aF.sourceValue){aF.sourceType=aC.sourceType;aF.sourceValue=aC.sourceValue}}if(aC&&aC.M_sourceFrom){if(az){aC.M_sourceFrom=(aC.M_sourceFrom.indexOf("_UL")>=0)?aC.M_sourceFrom:(aC.M_sourceFrom+"_UL")}aK.M_sourceFrom=aC.M_sourceFrom;if(aF){aF.M_sourceFrom=aC.M_sourceFrom}}if(aF){for(var aL in aF){if(aL&&aF[aL]){aM.push('"'+aL+'":"'+aF[aL]+'"')}}}else{for(var aL in aK){if(aL&&aK[aL]){aM.push('"'+aL+'":"'+aK[aL]+'"')}}}if(aC&&aC.msf_type){aM.push('"msf_type":"'+aC.msf_type+'"')}if(J.keplerID){aM.push('"keplerID":"'+encodeURIComponent(J.keplerID)+'"');aM.push('"keplerFrom":"'+J.keplerFrom+'"')}if(J.keplerParamJson){aM.push('"kepler_param":'+encodeURIComponent(J.keplerParamJson))}if(az){aM.push('"NoJumpDownLoadPage":'+aC.NoJumpDownLoadPage);aM.push('"downAppIos":"'+encodeURIComponent(aC.downAppIos)+'"');aM.push('"locationHref":"'+encodeURIComponent(window.location.href)+'"')}try{var aG=MPing.EventSeries.getSeries();if(aG){var aN=JSON.parse(aG);for(var aL in aN){if(aL&&aN[aL]){aN[aL]=(aL=="utr"||aL=="umd"||aL=="ucp")?encodeURIComponent(aN[aL]):aN[aL]}}aN.jdv=encodeURIComponent(n("__jdv"));aN.unpl=encodeURIComponent(n("unpl"));aN.mt_xid=encodeURIComponent(n("mt_xid"));aN.mt_subsite=encodeURIComponent(n("mt_subsite"))}var aJ={mt_subsite:encodeURIComponent(n("mt_subsite")),__jdv:encodeURIComponent(n("__jdv")),unpl:encodeURIComponent(n("unpl")),__jda:encodeURIComponent(n("__jda"))};aG=JSON.stringify(aN);aM.push('"m_param":'+aG);aM.push('"SE":'+JSON.stringify(aJ))}catch(aI){aM.push('"m_param":null')}var aB="{"+aM.join(",")+"}";var aE=aC.inteneUrl.split("?");var aA=null;var aH="";if(af.scheme_prame){aH="/"+af.scheme_prame}if(aE.length==2&&aE[1]){aA=aE[0]+aH+"?"+aE[1]+"&params="+aB}else{aA=aE[0]+aH+"?params="+aB}if(M){var aD={url:"//ccc-x.jd.com/dsp/op?openapp_url="+encodeURI(aB)+"&openapp_source_type=100",method:"GET",async:true,timeout:1000,error:function(){},success:function(e){}};ah(aD)}return aA}function ax(e){return"intent://m.jd.com/#Intent;scheme="+e+";package=com.jingdong.app.mall;end"}function U(e){if(e.openAppBtnId&&document.querySelector("#"+e.openAppBtnId)){ar[e.openAppBtnId]=e;C(e.openAppBtnId,e.openAppEventId,e.openAppEventParam);an(e.openAppBtnId,"click",function(){var aC=this.getAttribute("id");var az=ar[aC];if(!f){var aB=document.createElement("iframe");aB.id=W;document.body.appendChild(aB);document.getElementById(W).style.display="none";document.getElementById(W).style.width="0px";document.getElementById(W).style.height="0px";f=true}if(az.openAppCallback){var aA=az.openAppCallbackSource?az.openAppCallbackSource:null;az.openAppCallback.call(this,aA)}d(az,"appDownOpenIntervalTime");aq(az);if(i.isUseUniversalLinks&&!az.noJdApp){ai(az)}else{T(az)}})}}function a(az,e){if(az.closePanelBtnId&&az.closePanelId&&document.querySelector("#"+az.closePanelId)&&document.querySelector("#"+az.closePanelBtnId)){ar[az.closePanelBtnId]=az;C(az.closePanelBtnId,az.closePanelEventId,az.closePanelEventParam);if(!e){if(ao(az)){document.querySelector("#"+az.closePanelId).style.display="none";if(az.closeCallblack){var aB=event||window.event;var aA=az.closeCallblackSource?az.closeCallblackSource:null;az.closeCallblack.call(this,aA,aB)}return}else{document.querySelector("#"+az.closePanelId).style.display="block"}}an(az.closePanelBtnId,"click",function(){var aF=this.getAttribute("id");var aC=ar[aF];d(aC,"appDownCloseIntervalTime");document.querySelector("#"+aC.closePanelId).style.display="none";if(aC.closeCallblack){var aE=event||window.event;var aD=aC.closeCallblackSource?aC.closeCallblackSource:null;aC.closeCallblack.call(this,aD,aE)}})}}function d(az,e){var aA=null;if(az.cookieFlag&&az[e]){aA="downloadAppPlugIn_downCloseDate_"+az.cookieFlag}else{aA="downloadAppPlugIn_downCloseDate";az[e]=af[e]}if(!az.isnotWriteOpenAppCookie&&az[e]){if(document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"){I(aA,az[e])}else{ad(aA,Date.now()+"_"+az[e],60,"/",".m.jd.com");ad(aA,Date.now()+"_"+az[e],60,"/","m.jd.hk")}}}function ao(aA,aG){var aB=false;var aF=null;if(aG){if(af.msf_type&&af.msf_type=="auto"){aF=(aA.cookieFlag&&aA.autoOpenIntervalTime)?"autoOpenApp_downCloseDate_"+aA.cookieFlag:"autoOpenApp_downCloseDate_"+af.msf_type}else{aF="autoOpenApp_downCloseDate_"+af.msf_type}if(D||!af.AROUSAL_APP){aB=true}}else{var az=G.indexOf("jdmsxh");var aC=G.indexOf("jdmsxh2");if(G.indexOf("Html5Plus")>=0||(az>=0&&az!=aC)||u||!af.DOWNLOAD_LAYER){aB=true}aF=(aA.cookieFlag&&aA.appDownCloseIntervalTime)?"downloadAppPlugIn_downCloseDate_"+aA.cookieFlag:"downloadAppPlugIn_downCloseDate"}var aD=n(aF);if(!aD&&au.configCenterAjax&&document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"&&p&&p.hasOwnProperty(aF)){aD=p[aF]}var aE=null;if(aD){aE=aD.split("_");if(aE.length==2){aE[0]=parseInt(aE[0],10);aE[1]=parseInt(aE[1],10)}else{aE=null}}var e=Date.now();if(!aB&&!aA.noRecord&&aE&&aE.length==2&&(e-aE[0])<aE[1]&&(aA.closePanelBtnId||aG)){aB=true}return aB}function ah(aA){var az;try{az=new ActiveXObject("Msxml2.XMLHTTP")}catch(aB){try{az=new ActiveXObject("Microsoft.XMLHTTP")}catch(aB){az=new XMLHttpRequest()}}az.ajaxRunError=true;if(aA.withCredentials){try{az.withCredentials=true}catch(aB){}}try{az.open(aA.method,aA.url,aA.async);az.onreadystatechange=function(){var aC=aA.source?aA.source:null;if(az.readyState==4){if(az.status==200){az.ajaxRunError=false;var e=az.responseText;aA.success.call(aC,e)}else{aA.error.call(aC)}}};az.send(null)}catch(aB){}}function z(az){var aB="MAuthentication";var e=document.createElement("script");var aA=function(){q(e);delete window[aB]};var aC=function(){aA()};window[aB]=function(aD){az.callback.call(this,aD);aA()};e.onerror=function(){aC()};e.onload=function(){aC()};e.src=az.url+"&callbackName="+aB;document.getElementsByTagName("head")[0].appendChild(e)}function q(az){var e=az.parentNode;if(e){e.removeChild(az)}}function C(aE,aB,az){try{var aD=document.getElementById(aE);var aA=aD.className;if(aA){aA=aA+" J_ping"}else{aA="J_ping"}aD.className=aA;aD.setAttribute("report-eventid",aB);if(az){aD.setAttribute("report-eventparam",az)}}catch(aC){}}function t(aB,az){try{var aC=new MPing.inputs.Click(aB);if(az){aC.event_param=az}var aA=new MPing();aA.send(aC)}catch(aD){}}function x(az,aF,aL){var aA=aF?aF:1;var aG=aL?true:false;if(!ao(az)&&az.closePanelId){var aM=document.getElementById(az.closePanelId);if(aM){var aJ=aM.getBoundingClientRect();var aK=aJ.height||aJ.bottom-aJ.top;var aE=V(aM,"opacity");var aI=V(aM,"display");if(aI&&aK&&aI!="none"&&aK==0){aG=true}else{if(aK&&aE&&aK==50&&aE==0){aG=true}}}else{aG=true}if(aA<3&&aG==false){aA++;setTimeout(function(){x(az,aA,aG)},2000)}}if(aG){try{var aC=new MPing.inputs.Click("MDownLoadFloat_FloatShield");var aD=new MPing();aC.event_param=az.openAppEventId;aD.send(aC);var aB={url:"//so.m.jd.com/downLoad/checkShield.action?_format_=json",method:"POST",async:true,timeout:1000,error:function(){},success:function(e){}};ah(aB)}catch(aH){}}}function V(az,e){if(az.currentStyle){return az.currentStyle[e]}else{return document.defaultView.getComputedStyle(az,false)[e]}}function v(aC,aA){var aB=aA?false:ao(aC.funcPrame);var e=true;if(!aB&&aC&&Object.prototype.toString.apply(aC.ajaxPrame)==="[object Array]"&&aC.ajaxPrame.length>0){aC.ajaxPrameIsArray=true;for(var az=0;az<aC.ajaxPrame.length;az++){if(!au[aC.ajaxPrame[az].hasAjax]){e=false;if(!aC.ajaxPrame[az].hasAjaxSend){ah(aC.ajaxPrame[az]);aC.ajaxPrame[az].hasAjaxSend=true}}}}else{if(!aB&&!au[aC.ajaxPrame.hasAjax]){e=false;if(!aC.ajaxPrame.hasAjaxSend){ah(aC.ajaxPrame);aC.ajaxPrame.hasAjaxSend=true}}}if(e){X(aC.funcList,aC.funcPrame)}else{b(aC)}}function b(aC,az){var aB=az?az:0;var e=true;if(aC.ajaxPrameIsArray){for(var aA=0;aA<aC.ajaxPrame.length;aA++){if(!au[aC.ajaxPrame[aA].hasAjax]){e=false;break}}}else{e=au[aC.ajaxPrame.hasAjax]}if(aC.funcList&&aC.funcList.length>0){if(e){X(aC.funcList,aC.funcPrame)}else{setTimeout(function(){aB++;if(aB<15){b(aC,aB)}else{X(aC.funcList,aC.funcPrame)}},100)}}}function X(e,aA){if(e.length==1&&Object.prototype.toString.apply(e)==="[object Function]"){e(aA)}else{for(var az=0;az<e.length;az++){e[az](aA)}}}function am(aE){if(aE){if(aE&&aE.clickCloseUa){var aC=aE.clickCloseUa.split("|");for(var aF=0;aF<aC.length;aF++){var aH=aC[aF];if(aH&&G.indexOf(aH)>=0){u=true;break}}}if(aE&&!u&&aE.closeUaMoreKeys){for(var aF=0;aF<aE.closeUaMoreKeys.length;aF++){var e=aE.closeUaMoreKeys[aF];if(e&&e.uaMoreKeys){var aJ=e.uaMoreKeys.split("|");var aG=0;var aD=0;for(var aB=0;aB<aJ.length;aB++){var aI=aJ[aB];if(aI){aD++}if(aI&&G.indexOf(aI)>=0){aG++}}u=(aD==aG)?true:u}if(u){break}}}if(aE&&aE.autoCloseBrowser){for(var aF=0;aF<aE.autoCloseBrowser.length;aF++){var aI=aE.autoCloseBrowser[aF];if(aI.browser&&aI.abtest&&G.indexOf(aI.browser)>=0){at(aI.abtest);break}}}if(!D&&aE&&aE.autoCloseOs){for(var aF=0;aF<aE.autoCloseOs.length;aF++){var aI=aE.autoCloseOs[aF];if(aI.os=="IOS"&&aI.abtest&&(ag||S)){at(aI.abtest);break}else{if(aI.os=="Android"&&aI.abtest&&H){at(aI.abtest);break}}}}if(!D&&aE&&aE.autoCloseOsAndBrowser){for(var aF=0;aF<aE.autoCloseOsAndBrowser.length;aF++){var aI=aE.autoCloseOsAndBrowser[aF];if(aI.os&&aI.browser&&aI.abtest&&aI.os=="IOS"&&(ag||S)&&G.indexOf(aI.browser)>=0){at(aI.abtest);break}if(aI.os&&aI.browser&&aI.abtest&&aI.os=="Android"&&H&&G.indexOf(aI.browser)>=0){at(aI.abtest);break}}}if(aE&&aE.universalLinksUa){var az=aE.universalLinksUa.split("|");for(var aF=0;aF<az.length;aF++){var aH=az[aF];if(aH&&G.indexOf(aH)>=0&&!H){i.isUniversalLinksUa=true;break}}}if(aE&&aE.universalLinksOs){var aA=aE.universalLinksOs.split("|");for(var aF=0;aF<aA.length;aF++){var aH=aA[aF];if(aH&&aj&&aH==aj&&aj>8){i.isUniversalLinksOs=true;break}}}if(aE&&aE.appDownCloseIntervalTime){af.appDownCloseIntervalTime=aE.appDownCloseIntervalTime}if(aE&&aE.appDownOpenIntervalTime){af.appDownOpenIntervalTime=aE.appDownOpenIntervalTime}}}function g(e){if(e){if(e.data){for(var aA=0;aA<e.data.length;aA++){var az=e.data[aA];if(az.compent&&af.hasOwnProperty(az.compent)){af[az.compent]=az.display;if(az.compent=="AROUSAL_APP"&&az.msf_type){af.msf_type=az.msf_type;if(e.cooldown&&e.cooldown[az.msf_type]){af.cooldown_time=e.cooldown[az.msf_type]}if(az.openAppParam){af.scheme_prame=az.openAppParam}if(az.hasOwnProperty("isSpportUL")&&!az.isSpportUL){af.use_universallinks=false}}}}}if(e.kepler){if(e.kepler.kepler_data&&e.kepler.kepler_data.keplerID&&e.kepler.kepler_data.keplerFrom){J.keplerID=e.kepler.kepler_data.keplerID;J.keplerFrom=e.kepler.kepler_data.keplerFrom}if(e.kepler.kepler_param){J.keplerParamJson=JSON.stringify(e.kepler.kepler_param)}}if(e.loginState){F.login_State=e.loginState}if(e.shieldingLayer){F.pcScan_Layer=e.shieldingLayer.pcScan_Layer||"";F.newPeople_Layer=e.shieldingLayer.newPeople_Layer||""}if(e.openSendOutUrl){M=e.openSendOutUrl}if(e.coolDownTimeUtil){p=e.coolDownTimeUtil}if(e.downAppConfigData){af.downAppConfigData=e.downAppConfigData}}}function ak(e){if(!ao(e,true)){if(af.msf_type&&af.msf_type=="auto"){if(e.cookieFlag&&e.autoOpenIntervalTime){cookieName="autoOpenApp_downCloseDate_"+e.cookieFlag}else{cookieName="autoOpenApp_downCloseDate_"+af.msf_type;e.autoOpenIntervalTime=af.cooldown_time}}else{cookieName="autoOpenApp_downCloseDate_"+af.msf_type;e.autoOpenIntervalTime=af.cooldown_time}if(e.autoOpenIntervalTime){if(document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"){I(cookieName,e.autoOpenIntervalTime)}else{ad(cookieName,Date.now()+"_"+e.autoOpenIntervalTime,60,"/",".m.jd.com");ad(cookieName,Date.now()+"_"+e.autoOpenIntervalTime,60,"/","m.jd.hk")}}aq(e);t(e.autoOpenAppEventId,e.autoOpenAppEventParam);e.msf_type=af.msf_type;if(e.autoOpenAppCallback){var az=e.autoOpenAppCallbackSource?e.autoOpenAppCallbackSource:null;e.autoOpenAppCallback.call(this,az)}T(e,true)}}function at(e){if(e&&O<=e){D=true}}function aq(e){if(e&&e.kepler_param){J.keplerParamJson=e.kepler_param}if(J.keplerParamJson){t("MDownLoadFloat_ArouseParam",J.keplerParamJson)}}function av(e){if(i.isUniversalLinksOs&&i.isUniversalLinksUa&&!e.noJdApp&&e.universalLinksUrl&&af.use_universallinks){i.isUseUniversalLinks=true}}function ae(e){r.url="https://mapi.m.jd.com/config/display.action?_format_=json&domain="+encodeURIComponent(document.referrer)+(e.newPeople_Layer?"&newPeopleLayer=true":"&newPeopleLayer=false")+(e.pcScan_Layer?"&pcScanLayer=true":"&pcScanLayer=false");var az={ajaxPrame:r,funcList:h,funcPrame:e};v(az,true)}function h(e){if(e.newPeople_Layer&&F.login_State){if(F.newPeople_Layer){K(e)}else{r.url="https://mapi.m.jd.com/config/display.action?_format_=json&domain="+encodeURIComponent(document.referrer)+(e.newPeople_Layer?"&newPeopleLayer=true":"&newPeopleLayer=false")+(e.pcScan_Layer?"&pcScanLayer=true":"&pcScanLayer=false");au.configCenterAjax=false;r.hasAjaxSend=false;var az={ajaxPrame:r,funcList:K,funcPrame:e};v(az,true)}}else{if(e.pcScan_Layer){K(e)}}}function K(e){var az=null;if(e.newPeople_Layer&&F.login_State&&F.newPeople_Layer&&F.newPeople_Layer.layerShowOrNo){az={M_sourceFrom:e.M_sourceFrom||"mxz",msf_type:e.newPeople_Layer_param.msf_type||"xinrenzzc",downAppURl:e.newPeople_Layer_param.downAppURl||((e.M_sourceFrom&&e.newPeople_Layer_param.msf_type)?"//h5.m.jd.com/active/download/download.html?channel=jd-m"+e.M_sourceFrom+e.newPeople_Layer_param.msf_type:""),downAppIos:e.newPeople_Layer_param.downAppIos,inteneUrl:e.newPeople_Layer_param.inteneUrl,inteneUrlParams:e.newPeople_Layer_param.inteneUrlParams,openAppCallback:e.newPeople_Layer_param.openAppCallback,closeCallblack:e.newPeople_Layer_param.closeCallblack,openAppEventId:e.newPeople_Layer_param.openAppEventId||"MDownLoadFloat_MaskOpen",openAppEventParam:e.newPeople_Layer_param.openAppEventParam||((e.M_sourceFrom&&e.newPeople_Layer_param.msf_type)?e.M_sourceFrom+e.newPeople_Layer_param.msf_type:"mxz"),closePanelEventId:e.newPeople_Layer_param.closePanelEventId||"MDownLoadFloat_MaskClose",closePanelEventParam:e.newPeople_Layer_param.closePanelEventParam||((e.M_sourceFrom&&e.newPeople_Layer_param.msf_type)?e.M_sourceFrom+e.newPeople_Layer_param.msf_type:"mxz"),cookieFlag:"newPeople_Layer",appDownCloseIntervalTime:F.newPeople_Layer.layerCloseCoolDownTime||0,appDownOpenIntervalTime:F.newPeople_Layer.layerOpenCoolDownTime||0,layerMainPicSrc:e.newPeople_Layer_param.layerMainPicSrc||F.newPeople_Layer.layerMainPicSrc,layerOpenPicSrc:e.newPeople_Layer_param.layerOpenPicSrc||F.newPeople_Layer.layerOpenPicSrc};w(az)}else{if(e.pcScan_Layer&&F.pcScan_Layer&&F.pcScan_Layer.layerShowOrNo&&af.msf_type=="pcauto"){az={M_sourceFrom:e.M_sourceFrom||"mxz",msf_type:e.pcScan_Layer_param.msf_type||"pczzc",downAppURl:e.pcScan_Layer_param.downAppURl||((e.M_sourceFrom&&e.pcScan_Layer_param.msf_type)?"//h5.m.jd.com/active/download/download.html?channel=jd-m"+e.M_sourceFrom+e.pcScan_Layer_param.msf_type:""),downAppIos:e.pcScan_Layer_param.downAppIos,inteneUrl:e.pcScan_Layer_param.inteneUrl,inteneUrlParams:e.pcScan_Layer_param.inteneUrlParams,openAppCallback:e.pcScan_Layer_param.openAppCallback,closeCallblack:e.pcScan_Layer_param.closeCallblack,openAppEventId:e.pcScan_Layer_param.openAppEventId||"MDownLoadFloat_MaskOpen",openAppEventParam:e.pcScan_Layer_param.openAppEventParam||((e.M_sourceFrom&&e.pcScan_Layer_param.msf_type)?e.M_sourceFrom+e.pcScan_Layer_param.msf_type:"mxz"),closePanelEventId:e.pcScan_Layer_param.closePanelEventId||"MDownLoadFloat_MaskClose",closePanelEventParam:e.pcScan_Layer_param.closePanelEventParam||((e.M_sourceFrom&&e.pcScan_Layer_param.msf_type)?e.M_sourceFrom+e.pcScan_Layer_param.msf_type:"mxz"),cookieFlag:"pcScan_Layer",appDownCloseIntervalTime:F.pcScan_Layer.layerCloseCoolDownTime||0,appDownOpenIntervalTime:F.pcScan_Layer.layerOpenCoolDownTime||0,layerMainPicSrc:e.pcScan_Layer_param.layerMainPicSrc||F.pcScan_Layer.layerMainPicSrc,layerOpenPicSrc:e.pcScan_Layer_param.layerOpenPicSrc||F.pcScan_Layer.layerOpenPicSrc};w(az)}}}function w(e){e.openAppBtnId="myLayoutPicBtnTongy";e.closePanelBtnId="myLayoutCloseBtnTongy";e.closePanelId="outermostIndexlayerLayoutTongyong";if(!ao(e)){setTimeout(function(){indexLayer({mainPicSrc:e.layerMainPicSrc,btnPicSrc:e.layerOpenPicSrc,});var az=L(e);av(az);U(az);a(az,true)},10)}}function I(aC,aB){try{var az=[];az.push('"'+aC+'":"'+Date.now()+"_"+aB+'"');z({url:"//mapi.m.jd.com/cookie/addCookie.action?cookiePrame={"+az.join(",")+"}",callback:function(){}})}catch(aA){}}function ab(az){var aB="";var aA={downloadAppContentBtn:"������",downloadAppContentBtnStyle:"",downloadAppContentDown:"������188Ԫ���",downloadAppContentDownStyle:"",downloadAppContentUP:"�򿪾���APP����",downloadAppContentUpStyle:"",downloadAppImg:"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png",downloadApplogo:"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png",};if((az.downAppConfigData&&af.downAppConfigData&&af.downAppConfigData.hasOwnProperty("highPriority")&&!af.downAppConfigData.highPriority)||(az.downAppConfigData&&!af.downAppConfigData)){aA.downloadAppContentBtn=az.downAppConfigData.downloadAppContentBtn||"������";aA.downloadAppContentBtnStyle=az.downAppConfigData.downloadAppContentBtnStyle||"";aA.downloadAppContentDown=az.downAppConfigData.downloadAppContentDown||"������188Ԫ���";aA.downloadAppContentDownStyle=az.downAppConfigData.downloadAppContentDownStyle||"";aA.downloadAppContentUP=az.downAppConfigData.downloadAppContentUP||"�򿪾���APP����";aA.downloadAppContentUpStyle=az.downAppConfigData.downloadAppContentUpStyle||"";aA.downloadAppImg=az.downAppConfigData.downloadAppImg||"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png";aA.downloadApplogo=az.downAppConfigData.downloadApplogo||"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"}else{if(af.downAppConfigData){aA.downloadAppContentBtn=af.downAppConfigData.downloadAppContentBtn||"������";aA.downloadAppContentBtnStyle=af.downAppConfigData.downloadAppContentBtnStyle||"";aA.downloadAppContentDown=af.downAppConfigData.downloadAppContentDown||"������188Ԫ���";aA.downloadAppContentDownStyle=af.downAppConfigData.downloadAppContentDownStyle||"";aA.downloadAppContentUP=af.downAppConfigData.downloadAppContentUP||"�򿪾���APP����";aA.downloadAppContentUpStyle=af.downAppConfigData.downloadAppContentUpStyle||"";aA.downloadAppImg=af.downAppConfigData.downloadAppImg||"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png";aA.downloadApplogo=af.downAppConfigData.downloadApplogo||"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"}}if(az.location){var e=az.location;aB=' style = "'+e+'"'}var aC='	<div  id="'+az.tipId+'_div" '+aB+' class="download-pannel download-noBg">	    <div class="pannel-bg"><img src="'+aA.downloadAppImg+'"></div>	    <div id="'+az.tipId+'_x" class="download-close"><img src="//st.360buyimg.com/common/commonH_B/images/2015/icon-close.png"></div>	    <div class="download-logo"><img src="'+aA.downloadApplogo+'"></div>	    <div class="download-txt">	            <span class="download-content">	                <em style="'+aA.downloadAppContentUpStyle+'" class="content-up">'+aA.downloadAppContentUP+'</em>	                <em style="'+aA.downloadAppContentDownStyle+'" class="content-down">'+aA.downloadAppContentDown+'</em>	            </span>	    </div>	    <div id="'+az.tipId+'_trynow" class="download-action">	        <span style="'+aA.downloadAppContentBtnStyle+'" class="font-large">'+aA.downloadAppContentBtn+"</span>	    </div>	</div>";return aC}function E(e){if(e){e.downloadAppPlugIn=e.downloadAppPlugIn?e.downloadAppPlugIn:{};e.downloadAppPlugIn.openAppBtnId=e.tipId+"_trynow";e.downloadAppPlugIn.closePanelBtnId=e.tipId+"_x";e.downloadAppPlugIn.closePanelId=e.tipId+"_div";var az=L(e.downloadAppPlugIn);if(!ao(az)){var aA=ab(e);document.getElementById(e.tipId).innerHTML=aA;if(e.callFunShowTip){e.callFunShowTip.call(this)}an(e.tipId+"_x","click",function(){if(e.onClickTipX){e.onClickTipX.call(this)}});an(e.tipId+"_trynow","click",function(){if(e.onClickTrynow){e.onClickTrynow.call(this)}});al(e.downloadAppPlugIn)}}}function al(e){var az=L(e);U(az);var aA={ajaxPrame:[N,r],funcList:[av,a,x],funcPrame:az};v(aA)}aa.downloadAppPlugIn=al;aa.downloadAppPlugInOpenApp=function(e){var az=L(e,true);if(!f){var aA=document.createElement("iframe");aA.id=W;document.body.appendChild(aA);document.getElementById(W).style.display="none";document.getElementById(W).style.width="0px";document.getElementById(W).style.height="0px";f=true}var aB={ajaxPrame:[N,r],funcList:ak,funcPrame:az};v(aB,true)};aa.downloadAppShowLayer=function(e){m.outermostIndexlayerLayoutTongyong=e};aa.downloadAppLayerConfigData=function(e){var az={ajaxPrame:[N,r],funcList:[E],funcPrame:e};v(az)}})();