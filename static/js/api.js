/*

{
	所有api
}

*/
var links = function(mth,url,fnc,fnf,data,header,headertype){
	var gxhytogetorpost = $
	var attrs = 'ajax'
	if(mth=='get'){
		var gxhy = {
			async:false,type:mth,url:url,data:data,success:fnc,fail:fnf
		}
		gxhytogetorpost[attrs](gxhy)
		return;
	}
	if(headertype==0){
		var gxhy = {
			async:false,type:mth,url:url,data:data,success:fnc,header:header,fail:fnf,
		}
		gxhytogetorpost[attrs](gxhy)
		return;
	}
	var gxhyi = {
		async:false,type:mth,url:url,data:data,success:fnc,fail:fnf,beforeSend: header,
	}
	gxhytogetorpost[attrs](gxhyi)
}
var links2 = function(mth,url,fnc,fnf,data,header,headertype){
	var gxhytogetorpost = $
	var attrs = 'ajax'
	if(mth=='get'){
		var gxhy = {
			async:false,type:mth,url:url,data:data,success:fnc,error:fnf
		}
		gxhytogetorpost[attrs](gxhy)
		return;
	}
	if(headertype==0){
		var gxhy = {
			async:false,type:mth,url:url,data:data,success:fnc,header:header,error:fnf,
		}
		gxhytogetorpost[attrs](gxhy)
		return;
	}
	var gxhyi = {
		async:false,type:mth,url:url,data:data,success:fnc,error:fnf,beforeSend: header,
	}
	gxhytogetorpost[attrs](gxhyi)
}