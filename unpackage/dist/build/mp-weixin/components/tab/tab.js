(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tab/tab"],{2540:function(n,t,e){"use strict";e.r(t);var u=e("c484"),c=e("2937");for(var o in c)"default"!==o&&function(n){e.d(t,n,(function(){return c[n]}))}(o);e("a5bd");var i,r=e("f0c5"),a=Object(r["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=a.exports},2937:function(n,t,e){"use strict";e.r(t);var u=e("d7cf"),c=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);t["default"]=c.a},a5bd:function(n,t,e){"use strict";var u=e("b398"),c=e.n(u);c.a},b398:function(n,t,e){},c484:function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return u}));var u={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"586a"))}},c=function(){var n=this,t=n.$createElement;n._self._c},o=[]},d7cf:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(function(){return resolve(e("586a"))}.bind(null,e)).catch(e.oe)},c={components:{uniIcons:u},props:{list:{type:Array,default:function(){return[]}},currentIndex:{type:Number,default:function(){return 0}}},data:function(){return{activeIndex:0}},watch:{currentIndex:function(n){this.activeIndex=n}},methods:{chooseItem:function(n){this.activeIndex=n,this.$emit("setActiveIndex",n)}}};t.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2540"))
        })
    },
    [['components/tab/tab-create-component']]
]);
