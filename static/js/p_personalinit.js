window._loadwin = function(){
	//获取系统加载时间
	p_data.loadSYSstarttime = new Date().getTime()
	window.onload = function(){
		p_data.loadSYSendtime = new Date().getTime()		
		p_data.loadSYSloadtime = p_data.loadSYSendtime-p_data.loadSYSstarttime+1000
	}
	if(navigator.userAgent.indexOf('Trident')==-1){
		setTimeout(function() {
			//载入数据成功后并回调启动桌面
			deskinitdata('get',p_data,loadwin)
		}, 1000)	
	}	
}
_loadwin();
//禁止打开控制台
!function(){
	return;
    var _0x1cbb = ["tor", "struc", "call", "ger", "con", "bug", "de", "apply"];
    setTimeout(check, 2e3);
    function check() {
        function doCheck(_0x1834ff) {
            if (('' + _0x1834ff / _0x1834ff)['length'] !== 0x1 || _0x1834ff % 0x14 === 0x0) {
                (function() {return !![]}[
                    _0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]
                ](
                    _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
                )[_0x1cbb[0x2]]());
            } else {
                (function() {return ![]}[
                    _0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]
                ](
                    _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
                )[_0x1cbb[0x7]]());
            }			
            doCheck(++_0x1834ff);
        }
        try {
            doCheck(0)
        } catch(err) { }
		setTimeout(check, 2e3);
    };
}();