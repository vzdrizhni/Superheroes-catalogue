(this["webpackJsonpheroes-catalogue"]=this["webpackJsonpheroes-catalogue"]||[]).push([[0],{137:function(e,t,n){e.exports=n.p+"static/media/Marvel-Logo.78f339d1.png"},141:function(e,t,n){e.exports=n(272)},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},154:function(e,t,n){},160:function(e,t){},162:function(e,t){},172:function(e,t){},174:function(e,t){},201:function(e,t){},202:function(e,t){},207:function(e,t){},209:function(e,t){},233:function(e,t){},272:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(49),i=n.n(c),o=n(34),s=n(41),u=n(5),l=n(51),h=n(52),f=n(140),m=n(139),p=function(e){return{type:"FILTER",val:e}},d=(n(150),Object(o.b)((function(e){return{heroes:e.heroes}}))((function(e){var t=e.name,n=e.imgAdress,a=e.ext,c=e.match,i=e.heroes;if(c){var o=i.find((function(e){return e.id==c.params.id})),s=o.name,u=o.series.items,l=o.thumbnail.path,h=o.thumbnail.extension,f=o.description;return r.a.createElement("div",{className:"hero-card-single"},r.a.createElement("img",{src:"".concat(l,".").concat(h),alt:h}),r.a.createElement("div",{className:"hero-description"},r.a.createElement("h1",null,"Name:",s),r.a.createElement("p",null,"Description:",f),u.slice(0,3).map((function(e){return r.a.createElement("div",{key:Math.random()},"Event:",e.name)}))))}return r.a.createElement("div",{className:"hero-card"},r.a.createElement("img",{src:"".concat(n,".").concat(a),alt:a}),r.a.createElement("div",{className:"hero-info"},r.a.createElement("div",null,t)))}))),v=(n(151),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),E=(n(152),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){(0,e.props.filterHeroes)(t.target.value)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.heroes,n=e.filter,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement(v,{placeholder:"search heroes",handleChange:this.handleChange}),r.a.createElement("div",{className:"hero"},a.map((function(e){return r.a.createElement(s.b,{to:"/".concat(e.id),key:e.id},r.a.createElement(d,{key:e.id,name:e.name,events:e.series.items,imgAdress:e.thumbnail.path,ext:e.thumbnail.extension,id:e.id}))}))))}}]),n}(r.a.Component)),b=Object(o.b)((function(e){return{heroes:e.heroes,filter:e.filter}}),(function(e){return{filterHeroes:function(t){return e(p(t))}}}))(E),g=n(137),w=n.n(g),y=(n(154),function(){return r.a.createElement("div",{className:"marvel-pic"},r.a.createElement("img",{src:w.a,alt:"marvel-logo"}))}),C=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.b,{to:"/"},r.a.createElement(y,null)),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:b}),r.a.createElement(u.a,{path:"/:id",component:d}))))},j=n(19),k=n.n(j),x=n(42),O=n(33),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER":return t.val;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e},L=Object(O.b)({heroes:I,filter:N}),R=n(138),U=n.n(R),A=new(function(){function e(){var t=this;Object(l.a)(this,e),this.PRIV_KEY="d77e1e1bebcc091397f6e711fd5b4e43f3f2793d",this.PUBLIC_KEY="e38349e2b82ef41ad55915dcb2284ac5",this.baseUrl="http://gateway.marvel.com/v1/public/",this.ts=(new Date).getTime(),this.hash=U.a.MD5(this.ts+this.PRIV_KEY+this.PUBLIC_KEY).toString(),this.charUrl="?limit=100&ts=".concat(this.ts,"&apikey=").concat(this.PUBLIC_KEY,"&hash=").concat(this.hash),this.getMarvelResponse=function(){var e=Object(x.a)(k.a.mark((function e(n){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.baseUrl).concat(n).concat(t.charUrl));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(a.status));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(h.a)(e,[{key:"getAllCharacters",value:function(){var e=Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getMarvelResponse("characters");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCharacter",value:function(e){return this.getMarvelResponse("characters/".concat(e))}}]),e}()),M={heroes:[],filter:""};(function(){var e=Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getAllCharacters().then((function(e){return M.heroes=e,Object(O.c)(L,M)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){i.a.render(r.a.createElement(o.a,{store:e},r.a.createElement(C,null)),document.getElementById("root"))}))}},[[141,1,2]]]);
//# sourceMappingURL=main.b2bf856a.chunk.js.map