(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],m=0,u=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0554":function(t,e,a){"use strict";a("06bf")},"06bf":function(t,e,a){},"52b1":function(t,e,a){"use strict";a("dfad")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/menu"}},[t._v("Menu")])],1),a("router-view"),a("my-footer")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"bottom_border"}),t._m(0),a("md-button",{staticClass:"md-fab md-primary",attrs:{href:"https://www.facebook.com/DumplingVillage"}},[a("md-icon",[t._v(" facebook")])],1),a("md-button",{staticClass:"md-fab md-primary",attrs:{href:"https://www.google.com/maps/place/Dumpling+Village,+7203+Haven+Ave+c,+Rancho+Cucamonga,+CA+91701%E7%BE%8E%E5%9C%8B/@34.1235508,-117.5769406,17z/data=!4m2!3m1!1s0x80c337a490c59feb:0x274385a02ba260c3"}},[a("md-avatar",[a("img",{attrs:{src:"https://maps.gstatic.com/mapfiles/maps_lite/pwa/icons/2x/maps15_bnuw3a_96dp.png",alt:"google"}})])],1),a("md-button",{staticClass:"md-fab md-primary",attrs:{href:"https://www.clover.com/online-ordering/dumpling-village-rancho-cucamonga"}},[a("md-avatar",[a("img",{attrs:{src:"https://checkout.clover.com/assets/icons/clover-symbol.png",alt:"clover"}})])],1),a("md-button",{staticClass:"md-fab md-primary",attrs:{href:"https://www.yelp.com/biz/dumpling-village-rancho-cucamonga"}},[a("md-avatar",[a("img",{attrs:{src:"https://s3-media0.fl.yelpcdn.com/assets/public/burst_desktop_xsmall_outline@2x.yji-dcb526e86d86cc0427ef2e8287d0aa17.png",alt:"yelp"}})])],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"text-center"},[t._v("Copyright @2021 | Designed With by "),a("a",{attrs:{href:"#"}},[t._v("YFC")])])])}],l={name:"footer"},c=l,d=(a("0554"),a("2877")),m=Object(d["a"])(c,r,o,!1,null,"0be75580",null),u=m.exports,p={name:"App",components:{MyFooter:u}},f=p,b=(a("034f"),Object(d["a"])(f,s,n,!1,null,null,null)),v=b.exports,g=a("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"logo"},[i("img",{attrs:{alt:"logo",src:a("b640")}})]),i("div",[t._v(" 知味頭條 Dumpling Village ")])])}],C={name:"home",props:{msg:String}},y=C,w=(a("52b1"),Object(d["a"])(y,_,h,!1,null,"0175e248",null)),x=w.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container"},[i("md-app",[i("md-app-toolbar",{staticClass:"md-primary"},[t.menuVisible?t._e():i("md-button",{staticClass:"md-icon-button",on:{click:t.toggleMenu}},[i("md-icon",[t._v("menu")])],1),i("span",{staticClass:"md-title"},[t._v("Buns")])],1),i("md-app-drawer",{attrs:{"md-active":t.menuVisible,"md-persistent":"full"},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[i("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[i("span",[t._v("Menu")]),i("div",{staticClass:"md-toolbar-section-end"},[i("md-button",{staticClass:"md-icon-button md-dense",on:{click:t.toggleMenu}},[i("md-icon",[t._v("keyboard_arrow_left")])],1)],1)]),i("md-list",[i("md-list-item",[i("span",{staticClass:"md-list-item-text"},[t._v("Drinks and Desserts")])]),i("md-list-item",[i("span",{staticClass:"md-list-item-text"},[t._v("Appetizers")])]),i("md-list-item",[i("span",{staticClass:"md-list-item-text"},[t._v("Buns")])]),i("md-list-item",[i("span",{staticClass:"md-list-item-text"},[t._v("Dumplings")])])],1)],1),i("md-app-content",[i("md-list",{staticClass:"md-double-line"},[i("md-list-item",[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("e8b5"),alt:"Xiaolong bao"}})]),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Xiaolong bao (9)")])]),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("$8.99")])])],1)],1),i("md-list-item",[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("e8b5"),alt:"Xiaolong bao"}})]),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Xiaolong bao (9)")]),i("div",{staticClass:"md-subhead"},[t._v("$8.99")])])],1)],1),i("md-list-item",[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("e8b5"),alt:"Xiaolong bao"}})]),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Xiaolong bao (9)")]),i("div",{staticClass:"md-subhead"},[t._v("$8.99")])]),i("md-card-content",{staticClass:"wrap_text"},[t._v(" Xiaolong bao (9). ")])],1)],1)],1),i("md-list",{staticClass:"md-double-line"},[i("md-list-item",[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("e8b5"),alt:"Xiaolong bao"}})]),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Xiaolong bao (9)")])]),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("$8.99")])]),i("md-card-content",{staticClass:"wrap_text"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi. ")])],1)],1)],1)],1)],1)],1)},O=[],k={name:"menu_page",data:function(){return{menuVisible:!1}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible}}},E=k,M=(a("eeee"),Object(d["a"])(E,j,O,!1,null,"e6d1d938",null)),$=M.exports;i["default"].use(g["a"]);var V=[{path:"/",name:"Home",component:x},{path:"/menu",name:"Menu",component:$}],X=new g["a"]({mode:"history",base:"",routes:V}),D=X,P=a("43f9"),S=a.n(P),A=a("5c96"),B=a.n(A);i["default"].config.productionTip=!1,i["default"].use(S.a),i["default"].use(B.a),new i["default"]({router:D,el:"#app",render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,a){},b640:function(t,e,a){t.exports=a.p+"img/logo.e599d532.jpg"},dfad:function(t,e,a){},e313:function(t,e,a){},e8b5:function(t,e,a){t.exports=a.p+"img/buns-1.1d135aaf.jpeg"},eeee:function(t,e,a){"use strict";a("e313")}});
//# sourceMappingURL=app.05b509dd.js.map