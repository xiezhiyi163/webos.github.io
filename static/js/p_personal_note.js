var _note = {};
_note['D'] = {
	//@data*/
};
_note['M'] = {
	//@methods*/
	fixheight:function(){
		$('#leftfix').height($(window).height()-61);
		$('#cont').height($(window).height()-61);
		setTimeout(_note.M.fixheight,350)
	}
}
_note['run'] = function(){
	//@mounted*/
	_note.M.fixheight()
};_note['run']()