(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e5ef1c2"],{"0972":function(t,e,i){},"1f09":function(t,e,i){},"24b2":function(t,e,i){"use strict";i("a9e3");var a=i("80d2"),s=i("2b0e");e["a"]=s["default"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(a["f"])(this.height),i=Object(a["f"])(this.minHeight),s=Object(a["f"])(this.minWidth),n=Object(a["f"])(this.maxHeight),r=Object(a["f"])(this.maxWidth),o=Object(a["f"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),s&&(t.minWidth=s),n&&(t.maxHeight=n),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},3129:function(t,e,i){"use strict";i("a630"),i("c975"),i("d81d"),i("ac1f"),i("3ca3"),i("5319"),i("1276");var a=i("3835"),s=i("5530"),n=(i("1f09"),i("c995")),r=i("24b2"),o=i("7560"),c=i("58df"),l=i("80d2");e["a"]=Object(c["a"])(n["a"],r["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(s["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(s["a"])(Object(s["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(s["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,i=t.split("@"),s=Object(a["a"])(i,2),n=s[0],r=s[1],o=function(){return e.genStructure(n)};return Array.from({length:r}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var i=this.rootTypes[t]||"";if(t===i);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);i.indexOf(",")>-1?e=this.mapBones(i):i.indexOf("@")>-1?e=this.genBones(i):i&&e.push(this.genStructure(i))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(l["n"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},a006:function(t,e,i){"use strict";var a=i("0972"),s=i.n(a);s.a},c995:function(t,e,i){"use strict";i("a9e3");var a=i("ade3"),s=i("2b0e");e["a"]=s["default"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(a["a"])({},"elevation-".concat(this.elevation),!0)}}})},cd56:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"header"},[i("div",{staticClass:"header__menu header__tab"},[i("p",{staticClass:"header__logo__text",on:{click:function(e){return t.$router.push("/")}}},[t._v("SOĞYM")])]),i("div",{staticClass:"header__menu"},[i("div",{staticClass:"item__row item__ac header__basket"},[i("div",{staticClass:"div header__count",on:{click:t.openB}},[i("div",{staticClass:"header__round item__abs"},[i("span",[t._v(t._s(t.all_count))])]),i("i",{staticClass:"mdi mdi-shopping"})]),t._m(0)])])]),i("div",{staticClass:"main__row",staticStyle:{"margin-top":"100px"}},[i("div",{staticClass:"main__block"},[t._m(1),i("div",{staticClass:"item__column"},[!t.subcategory&&t.showLoaderCategory?i("div",{staticClass:"main__block__categories"},t._l(10,(function(t,e){return i("div",{key:e,staticClass:"main__block__category"},[i("v-skeleton-loader",{attrs:{type:"card-avatar"}})],1)})),0):t._e(),t.subcategory||t.showLoaderCategory?t._e():i("div",{staticClass:"main__block__categories"},t._l(t.categories,(function(e,a){return i("div",{key:a},[i("div",{staticClass:"main__block__category"},[i("p",{on:{click:function(i){return t.openSubCategory(e,e.id,t.categories)}}},[t._v(t._s(e.name))])])])})),0),t.subcategory?t._e():i("i",{staticClass:"mdi mdi-keyboard-backspace main__category__back"})]),t.subcategory?i("div",{staticClass:"main__block__categories"},[i("div",{staticClass:"item__column"},[i("div",{staticClass:"item__row main__block__bread"},t._l(t.bread,(function(e,a){return i("p",{key:a,staticClass:"main__link",on:{click:function(i){return t.openBread(e.id,a)}}},[t._v(t._s(e.name+" / "))])})),0),i("div",{staticClass:"item__row"},t._l(t.nested,(function(e,a){return i("div",{key:a,staticClass:"main__block__category"},[i("p",{on:{click:function(i){return t.openSubCategory(e,e.id,t.nested)}}},[t._v(t._s(e.name))])])})),0),i("i",{staticClass:"mdi mdi-keyboard-backspace main__category__back"})])]):t._e(),i("router-view",{attrs:{openBasket:t.openBasket}}),t._m(2),t._m(3)],1)]),t._m(4)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header__menu__last"},[i("p",{staticClass:"header__gray"},[t._v("по будням с 9:00 - 21:00")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main__block__title"},[i("div",{staticClass:"main__block__round"}),i("p",[t._v("Категории")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main__block__title"},[i("div",{staticClass:"main__block__round"}),i("p",[t._v("О нашем магазине")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main__block__description"},[i("p",{staticClass:"main__block__description"},[t._v(" Более 15 лет мы ответственно работаем вместе с несколькими тщательно отобранными фермерскими хозяйствами центральной части Казахстана и вместе производим по-настоящему лучшее мясо для наших покупателей по доступной цене. ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"footer__first"},[i("p",{staticClass:"footer__phone"}),i("div",[i("p"),i("p")]),i("div",[i("p"),i("p")]),i("p"),i("div",[i("p"),i("p")]),i("div",[i("p"),i("div",[i("i"),i("i"),i("i"),i("i")])])]),i("div",{staticClass:"footer__first"}),i("div",{staticClass:"footer__first"}),i("div",{staticClass:"footer__first"})])}],n=(i("4de4"),{data:function(){return{amount:0,orders:[],count:0,all_count:0,isActive:!0,openBasket:!1,subcategory:!1,showLoaderCategory:!0,categories:[],nested:[],bread:[],bread_categories:[]}},mounted:function(){localStorage.getItem("goods")&&(this.all_count=JSON.parse(localStorage.getItem("goods")).length),this.getCategories()},methods:{getCount:function(){this.all_count=JSON.parse(localStorage.getItem("goods")).length},getCategories:function(){var t=this,e={headers:{Authorization:"Bearer ".concat(this.token)}};this.$http.get("/get/categories",e).then((function(e){t.categories=e.data,t.showLoaderCategory=!1}))},openBread:function(t,e){this.nested=this.bread_categories[e],this.bread=this.bread.filter((function(e){return e.id!==t})),this.bread.length=e,0==e&&(this.bread_categories=[])},openSubCategory:function(t,e,i){t.active=!0,this.$router.push("/category/"+e).catch((function(){}));var a=this.categories.filter((function(t){return t.id===e}));0==a.length&&(a=this.nested.filter((function(t){return t.id===e})),a||this.$router.push("/category/"+e).catch((function(){}))),0!=a[0].children.length?(this.bread.push(a[0]),this.bread_categories.push(i),this.nested=a[0].children,this.subcategory=!0):this.$router.push("/category/"+e).catch((function(){}))},openB:function(){this.$router.push("/basket")}}}),r=n,o=(i("a006"),i("2877")),c=i("6544"),l=i.n(c),d=i("3129"),u=Object(o["a"])(r,a,s,!1,null,null,null);e["default"]=u.exports;l()(u,{VSkeletonLoader:d["a"]})}}]);
//# sourceMappingURL=chunk-5e5ef1c2.be576db3.js.map