var openLink_1 = "dianping://shopinfo?id={shopId}&utm_=__27tfo",
    openLink_2 = "",
    openLink_3 = "",
    downloadLink_android = "https://i2.dpfile.com/download/dianping.apk?utm_source=__27tfo",
    downloadLink_iphone = "https://itunes.apple.com/cn/app/da-zhong-dian-ping-mei-shi/id351091731?mt=8&utm_source=__27tfo",
    downloadLink_ipad = "https://itunes.apple.com/cn/app/da-zhong-dian-ping-mei-shi/id351091731?mt=8&utm_source=__27tfo";
function parseUrlFunc(url) {
	if (url.indexOf("{") >= 0) {
	var reg = new RegExp("\{[^\}]+\}", "g");
	var r = url.match(reg);
  if (r != null) {
    for (var i = 0; i < r.length; i++) {
      var name = getUrlParam(r[i].substring(1, r[i].length - 1));
        if (name != null) {
          url = url.replace(r[i], name);
        } else {
          url = url.replace(r[i], '');
				}                    
			}                
		}            
	}            
	return url;        
}        
function getUrlParam(name) {            
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");            
	var r = window.location.search.substr(1).match(reg);            
	if (r != null) return decodeURIComponent(r[2]);            
	return null;        
}        
function processUrlFunc(url) {            
	var result = parseUrlFunc(url);            
	if (result.indexOf("dianping:\/\/") >= 0) {                
		var reg = new RegExp("url=[^&]+", "g");                
		var r = result.match(reg);                
		if (r != null) {                    
			var urlStr = escape(parseUrlFunc(unescape(r[0].substring(4))));                    
			result = result.replace(r[0], "url=" + urlStr);                
		}            
	}            
	return result;        
}        
openLink_1 = processUrlFunc(openLink_1);
openLink_2 = processUrlFunc(openLink_2);        
openLink_3 = processUrlFunc(openLink_3);        
downloadLink_android = processUrlFunc(downloadLink_android);        
downloadLink_iphone = processUrlFunc(downloadLink_iphone);        
downloadLink_ipad = processUrlFunc(downloadLink_ipad);        
var isWeChat = false,            
	isAndroid = false,            
	iPhone = false,            
	iPad = false,            
	userAgent = navigator.userAgent,            
	isIos = false,            
	uaDevice = new UADevice(userAgent);        
if (userAgent.match("Android")) {            
	_hip.push(['mv', { module: 'Synthesislink_UA_Android_11616', action: 'browser' }]);            
	isAndroid = true;        
} else if (userAgent.match("iPhone")) {            
	_hip.push(['mv', { module: 'Synthesislink_UA_IPhone_11616', action: 'browser' }]);            
	iPhone = true;            
	isIos = true;        
} else if (userAgent.match("iPad")) {            
		_hip.push(['mv', { module: 'Synthesislink_UA_IPad_11616', action: 'browser' }]);            
	iPad = true;            
	isIos = true;        
}        
if (/MicroMessenger/i.test(userAgent)) {            
		isWeChat = true;        
}        
_hip.push(['mv', { module: 'Synthesislink_UA_All_11616', action: 'browser' }]);
var target = openLink_1.match(/utm_=[^&]*/gi);        
var tail = ':' + (cookie("msource") || 'null') + ':' + uaDevice.browser.name + ':m';        
if (target && target[0]) {            
	openLink_1 = openLink_1.replace(target[0], target[0] + tail);        
} else {            
	openLink_1 += (~openLink_1.indexOf("?") ? "&" : "?") + ('_utm=null' + tail)        
}        
if (isAndroid) {            
	if (isWeChat) {                
		div = document.createElement('div');                
		div.style.visibility = 'hidden';                
		div.innerHTML = '<iframe id="schema" src="' + openLink_1 + '" scrolling="no" width="1" height="1"></iframe>';
		document.body.appendChild(div);            
	} else {                
		setTimeout(function () {                    
			window.location = openLink_1;                
		}, 50);            
	}        
} else if (isIos) {            
	setTimeout(function () {                
		window.location = openLink_1;            
	}, 50);        
}        
if (openLink_3 != "") {            
	setTimeout(function () {                
		window.location = openLink_3;            
	}, 3000);        
}    