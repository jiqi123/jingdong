function getCookie(name){if(document.cookie.length>0){var start=document.cookie.indexOf(name+"=");if(start!=-1){start=start+name.length+1;var end=document.cookie.indexOf(";",start);if(end==-1){end=document.cookie.length}return unescape(document.cookie.substring(start,end))}}return""}function setCookie(name,value,expiredays){var exdate=new Date();exdate.setDate(exdate.getDate()+expiredays);document.cookie=name+"="+escape(value)+((expiredays==null)?"":";expires="+exdate.toGMTString())+";path=/;domain=.jd.com"}function getUniq(){var uniq="";for(var i=1;i<=32;i++){var n=Math.floor(Math.random()*16).toString(16);uniq+=n;if((i==8)||(i==12)||(i==16)||(i==20)){uniq+="-"}}var timestamp=Date.parse(new Date());timestamp=timestamp/1000;uniq+="-"+timestamp;return uniq}if(getCookie("shshshfpa")==""){var shshshfpa=getUniq();setCookie("shshshfpa",shshshfpa,10000)}else{var shshshfpa=getCookie("shshshfpa")}var shshshfpb=getCookie("shshshfpb");var xmlHttp;if(window.XMLHttpRequest){xmlHttp=new XMLHttpRequest()}else{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")}var scripts;var businness="mlogin";try{scripts=document.scripts;for(var i=0;i<scripts.length;i++){if((scripts[i].src).indexOf("jdwebm.js")!=-1){businness=scripts[i].src.split("?")[1].split("=")[1]}}}catch(e){}var url="//blackhole.m.jd.com/getinfo";xmlHttp.open("POST",url,true);xmlHttp.setRequestHeader("Content-Type","text/plain");var body='body={"appname":"jdwebm_'+businness+'","jdkey":"","whwswswws":"'+shshshfpb+'","body":{"shshshfpa":"'+shshshfpa+'","whwswswws":"'+shshshfpb+'"}}';xmlHttp.send(body);if(window.XMLHttpRequest){xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState==4&&xmlHttp.status==200){var result=JSON.parse(xmlHttp.responseText);backfp=result.whwswswws;if(getCookie("shshshfpb")!=result.whwswswws){setCookie("shshshfpb","",-1000);setCookie("shshshfpb",backfp,10000)}}}};