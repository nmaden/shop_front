(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b4cbcf3"],{"0972":function(t,e,a){},"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),s=(a("4b85"),a("2b0e")),r=a("d9f7"),c=a("80d2"),o=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return o.reduce((function(a,n){return a[t+Object(c["w"])(n)]=e(),a}),{})}var _=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:_}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},g=u("justify",(function(){return{type:String,default:null,validator:f}})),h=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},p=u("alignContent",(function(){return{type:String,default:null,validator:h}})),v={align:Object.keys(d),justify:Object.keys(g),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,a){var n=b[t];if(null!=a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var C=new Map;e["a"]=s["default"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},d),{},{justify:{type:String,default:null,validator:f}},g),{},{alignContent:{type:String,default:null,validator:h}},p),render:function(t,e){var a=e.props,i=e.data,s=e.children,c="";for(var o in a)c+=String(a[o]);var l=C.get(c);return l||function(){var t,e;for(e in l=[],v)v[e].forEach((function(t){var n=a[t],i=m(e,t,n);i&&l.push(i)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),C.set(c,l)}(),t(a.tag,Object(r["a"])(i,{staticClass:"row",class:l}),s)}})},"47b7":function(t,e,a){"use strict";var n=a("9f56"),i=a.n(n);i.a},"9f56":function(t,e,a){},a006:function(t,e,a){"use strict";var n=a("0972"),i=a.n(n);i.a},cd56:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header__menu header__tab"},[a("p",{staticClass:"header__logo__text",on:{click:function(e){return t.$router.push("/")}}},[t._v("КЕҢЕС")])]),a("div",{staticClass:"header__menu"},[a("div",{staticClass:"item__row item__ac header__basket"},[a("div",{staticClass:"div header__count",on:{click:t.openB}},[a("div",{staticClass:"header__round item__abs"},[a("span",[t._v(t._s(t.all_count))])]),a("i",{staticClass:"mdi mdi-shopping"})]),t._m(0)])])]),a("Slider"),a("div",{staticClass:"item__column main__links"},[a("a",{on:{click:function(e){return t.openBlank(1)}}},[a("i",{staticClass:"mdi mdi-whatsapp"})]),a("a",{on:{click:function(e){return t.openBlank(2)}}},[a("i",{staticClass:"mdi mdi-instagram"})])]),a("div",{staticClass:"main__row",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"main__block"},[t._m(1),a("div",{staticClass:"item__column"},[!t.subcategory&&t.showLoaderCategory?a("div",{staticClass:"main__block__categories"},t._l(10,(function(t,e){return a("div",{key:e,staticClass:"main__block__category"},[a("v-skeleton-loader",{attrs:{type:"card-avatar"}})],1)})),0):t._e(),t.subcategory||t.showLoaderCategory?t._e():a("div",{staticClass:"main__block__categories"},t._l(t.categories,(function(e,n){return a("div",{key:n},[a("div",{staticClass:"main__block__category"},[a("p",{on:{click:function(a){return t.openSubCategory(e,e.id,t.categories)}}},[t._v(t._s(e.name))])])])})),0),t.subcategory?t._e():a("i",{staticClass:"mdi mdi-keyboard-backspace main__category__back"})]),t.subcategory?a("div",{staticClass:"main__block__categories"},[a("div",{staticClass:"item__column"},[a("div",{staticClass:"item__row main__block__bread"},t._l(t.bread,(function(e,n){return a("p",{key:n,staticClass:"main__link",on:{click:function(a){return t.openBread(e.id,n)}}},[t._v(t._s(e.name+" / "))])})),0),a("div",{staticClass:"item__row"},t._l(t.nested,(function(e,n){return a("div",{key:n,staticClass:"main__block__category"},[a("p",{on:{click:function(a){return t.openSubCategory(e,e.id,t.nested)}}},[t._v(t._s(e.name))])])})),0),a("i",{staticClass:"mdi mdi-keyboard-backspace main__category__back"})])]):t._e(),a("router-view",{attrs:{openBasket:t.openBasket}}),t._m(2),t._m(3)],1)]),t._m(4)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header__menu__last"},[a("p",{staticClass:"header__gray"},[t._v("по будням с 9:00 - 21:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main__block__title"},[a("div",{staticClass:"main__block__round"}),a("p",[t._v("Категории")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main__block__title"},[a("div",{staticClass:"main__block__round"}),a("p",[t._v("О нашем магазине")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main__block__description"},[a("p",{staticClass:"main__block__description"},[t._v(" Более 15 лет мы ответственно работаем вместе с несколькими тщательно отобранными фермерскими хозяйствами центральной части Казахстана и вместе производим по-настоящему лучшее мясо для наших покупателей по доступной цене. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer__first"},[a("p",{staticClass:"footer__phone"}),a("div",[a("p"),a("p")]),a("div",[a("p"),a("p")]),a("p"),a("div",[a("p"),a("p")]),a("div",[a("p"),a("div",[a("i"),a("i"),a("i"),a("i")])])]),a("div",{staticClass:"footer__first"}),a("div",{staticClass:"footer__first"}),a("div",{staticClass:"footer__first"})])}],s=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{staticClass:"corousel__shop",attrs:{cycle:"",height:"400",width:"1150","hide-delimiter-background":""}},t._l(t.slides,(function(e,n){return a("v-carousel-item",{key:n},[0==t.banners.length?a("v-sheet",{attrs:{color:t.colors[n],height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-h2"},[t._v(" "+t._s(e)+" ")])])],1):t._e(),a("img",{attrs:{src:"https://api.kenesmebel.kz"+e.image_path,alt:""}})],1)})),1)}),r=[],c={data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["Мебельный магазин","Second","Высокая качество","Выгодные цены","Fifth"],banners:[]}},mounted:function(){this.getBanner()},methods:{getBanner:function(){var t=this,e={headers:{Authorization:"Bearer ".concat(this.token)}};this.$http.get("/get/banners",e).then((function(e){t.banners=e.data,t.slides=e.data}))}}},o=c,l=(a("47b7"),a("2877")),u=a("6544"),_=a.n(u),d=a("5e66"),f=a("3e35"),g=a("0fd9"),h=a("8dd9"),p=Object(l["a"])(o,s,r,!1,null,null,null),v=p.exports;_()(p,{VCarousel:d["a"],VCarouselItem:f["a"],VRow:g["a"],VSheet:h["a"]});var b={components:{Slider:v},data:function(){return{amount:0,orders:[],count:0,all_count:0,isActive:!0,openBasket:!1,subcategory:!1,showLoaderCategory:!0,categories:[],nested:[],bread:[],bread_categories:[]}},mounted:function(){localStorage.getItem("goods")&&(this.all_count=JSON.parse(localStorage.getItem("goods")).length),this.getCategories()},methods:{openBlank:function(t){1==t?window.open("https://www.instagram.com/kenes_mebel_aktobe/","_blank"):window.open("https://wa.me/+77762906435","_blank")},getCount:function(){this.all_count=JSON.parse(localStorage.getItem("goods")).length},getCategories:function(){var t=this,e={headers:{Authorization:"Bearer ".concat(this.token)}};this.$http.get("/get/categories",e).then((function(e){t.categories=e.data,t.showLoaderCategory=!1}))},openBread:function(t,e){this.nested=this.bread_categories[e],this.bread=this.bread.filter((function(e){return e.id!==t})),this.bread.length=e,0==e&&(this.bread_categories=[])},openSubCategory:function(t,e,a){t.active=!0,this.$router.push("/category/"+e).catch((function(){}));var n=this.categories.filter((function(t){return t.id===e}));0==n.length&&(n=this.nested.filter((function(t){return t.id===e})),n||this.$router.push("/category/"+e).catch((function(){}))),0!=n[0].children.length?(this.bread.push(n[0]),this.bread_categories.push(a),this.nested=n[0].children,this.subcategory=!0):this.$router.push("/category/"+e).catch((function(){}))},openB:function(){this.$router.push("/basket")}},get_api_back_end:function(){return Object({NODE_ENV:"production",VUE_APP_API_VERSION:"v1/nurbol/",VUE_APP_API_VERSION_2:"v2/",BASE_URL:"/"}).BACK_END}},m=b,C=(a("a006"),a("3129")),k=Object(l["a"])(m,n,i,!1,null,null,null);e["default"]=k.exports;_()(k,{VSkeletonLoader:C["a"]})}}]);
//# sourceMappingURL=chunk-3b4cbcf3.3883aff1.js.map