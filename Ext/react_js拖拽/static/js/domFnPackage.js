var createElement = function(ele, obj) {
	var t = document.createElement(ele);
	if (obj) {
		for (var x in obj) {
			if (x == 'className') {
				t.className = obj.className
			}
			if (x == 'style' && obj['style']) {
				for (var m in obj['style']) {
					t.style[m] = obj['style']['' + m + '']
				}
			}
			if (x == 'src') {
				t.src = obj.src
			}
			if (x == 'href') {
				t.href = obj.href
			}
			if (x == 'data') {
				for (var m in obj['data']) {
					t.dataset[m] = obj['data']['' + m + '']
				}
			}
			if (x == 'dom') {
				for (var m in obj['dom']) {
					if (m == 'innerHTML') {
						t.innerHTML = obj['dom']['' + m + '']
					} else {
						t.innerText = obj['dom']['' + m + '']
					}
				}
			}
			if(x == 'id'){
				t.id = obj.id
			}
			if (x != 'className' && x != 'style' && x != 'src' && x != 'href' && x != 'data' && x != 'dom' && x != 'id') {
				t.setAttribute('' + x + '', obj.x)
			}

		}
	}
	return t
};

//useDomFnPackage
setnestDom_ = function(_this){
	//先清空dom写入dom完再渲染拖拽
	var wrap = document.querySelectorAll(".nestwrap")[0]
	wrap.innerHTML = ''
	wrap.appendChild(_this.cElemt('div',{className:'nestable'}));
	datas.draglist.map((v,i) => {
		//0
		var wrap1 = document.querySelectorAll(".nestable")[0]
		/* 第一遍循环的内容 */
		var t = _this.cElemt('div',{className:'nav',data:{id:v.id}})
		v.list.length!=0?
		t.appendChild(_this.cElemt('div',{className:'nav',dom:{innerHTML:v.v}}))
		:t.appendChild(_this.cElemt('div',{dom:{innerHTML:v.v}}))
		var t1 = _this.cElemt('div',{className:'sub1 nestable',id:'type_'+v.id})
		//1
		v.list.length!=0?v.list.map((v1,i1) => {
			/* 第二遍循环的内容 */
			var t1a = _this.cElemt('div',{data:{id:v1.id}})
			v1.list.length!=0?
			t1a.appendChild(_this.cElemt('div',{className:'nav',dom:{innerHTML:v1.v}}))
			:t1a.appendChild(_this.cElemt('div',{dom:{innerHTML:v1.v}}))
			var t2 = _this.cElemt('div',{className:'sub1 nestable',id:'type2_'+v1.id})
			//2
			v1.list.length!=0?v1.list.map((v2,i2) => {
				/* 第三遍循环的内容 */
				var t2a = _this.cElemt('div',{data:{id:v2.id}})
				// v2.list.length!=0?
				t2a.appendChild(_this.cElemt('div',{className:'nav',dom:{innerHTML:v2.v}}))
				// :t2a.appendChild(_this.cElemt('div',{dom:{innerHTML:v2.v}}));
				//2
				t2.appendChild(t2a)
			}):''
			//1
			t1.appendChild(t1a)								
			t1.appendChild(t2)								
		}):''
		//0
		t.appendChild(t1);
		//
		wrap1.appendChild(t)
	});
}
