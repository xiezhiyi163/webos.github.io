/*

{
	全部页面一开始调用的公用的方法
}

*/
window.iflteie9 = function(){
	var browser=navigator.appName
	var b_version=navigator.appVersion
	var version=b_version.split(";");
	var trim_Version=version[1].replace(/[ ]/g,"");
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0"){
		
	}
	else if((browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") || (browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") || (browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0")){
		
	}
}

window.ifpagepersonal = function(){
	if(!document.getElementById('personal')){
		iflteie9()
	}
};

(function(){
	ifpagepersonal();
})();
