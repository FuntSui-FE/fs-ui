(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(t,e,i){"use strict";i(50);var s=function(t){t.component(this.name,this)};e.a=function(t){return t.name="funt-".concat(t.name),t.install=t.install||s,t}},167:function(t,e,i){"use strict";var s=i(165),n=Object(s.a)({name:"marquee-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.init()})}}),a=i(0),r=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("li",[this._t("default")],2)},[],!1,null,null,null);e.a=r.exports},173:function(t,e,i){},176:function(t,e,i){"use strict";var s=i(165),n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a=(window,Object(s.a)({name:"marquee",props:{speed:{type:String,default:"fast"},type:{type:String,default:"stair"}},data:function(){return{Height:0,count:0,curY:0,duration:0,Timer:null,status:!0}},beforeDestroy:function(){clearInterval(this.Timer)},methods:{init:function(){if(this.count++,0==this.count||this.count!=this.$refs.list.children.length)return!1;var t=this.$refs.list.cloneNode(!0);this.Height=this.$refs.list.offsetHeight,this.$refs.box.appendChild(t),"stair"==this.type&&this.stairStep(),"line"==this.type&&this.lineStep()},stairStep:function(){var t=this,e=this.$refs.list.children,i="".concat(this.Height/e.length);this.Timer=setInterval(function(){t.curY>-t.Height&&(t.status=!0,t.curY-=i,t.curY==-t.Height&&(clearInterval(t.Timer),setTimeout(function(){t.status=!1,t.curY=0,t.stairStep()},300)))},"fast"==this.speed?800:1500)},lineStep:function(){this.curY-="fast"==this.speed?1:.5,this.curY>-this.Height?n(this.lineStep):(this.curY=0,n(this.lineStep))}}})),r=i(0),u=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"funt-marquee-wrapper",style:{height:this.Height+"px"}},[e("div",{ref:"box",class:["funt-marquee-box",{Animate:this.status&&"stair"==this.type}],style:{transform:"translateY("+this.curY+"px)"}},[e("ul",{ref:"list",staticClass:"funt-marquee"},[this._t("default")],2)])])},[],!1,null,null,null);e.a=u.exports},181:function(t,e,i){"use strict";var s=i(173);i.n(s).a},188:function(t,e,i){"use strict";i.r(e);var s=i(176),n=i(167),a={components:{Marquee:s.a,marqueeItem:n.a},data:function(){return{list:["Javascript是世界上最好的语言1","Javascript是世界上最好的语言2","Javascript是世界上最好的语言3","Javascript是世界上最好的语言4","Javascript是世界上最好的语言5"]}}},r=(i(181),i(0)),u=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"docs-marquee-line"},[i("Marquee",{staticClass:"list",attrs:{type:"line"}},t._l(t.list,function(e,s){return i("marquee-item",{key:s},[t._v(t._s(e))])}))],1)},[],!1,null,"74c7932d",null);e.default=u.exports}}]);