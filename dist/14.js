(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+s1F":function(t,e){},"0fDZ":function(t,e,n){"use strict";n.r(e);var s={data:function(){return{itemList:[]}},mounted:function(){var t=this;this.$axios.post("/mock/carousel").then(function(e){0===e.data.code&&(t.itemList=e.data.itemList)})},methods:{handleClick:function(){this.$router.push({path:"/zh-CN/simple-sku"})},handleChange:function(t){}}},a=(n("6zOk"),n("KHd+")),i=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("p"),t._v(" "),n("r-lead",[t._v("轮播：")]),t._v(" "),n("p"),t._v(" "),n("r-carousel",{on:{change:t.handleChange}},t._l(t.itemList,function(t,e){return n("r-carousel-item",{key:e},[n("img",{attrs:{src:t.src}})])})),t._v(" "),n("p"),t._v(" "),n("r-lead",[t._v("静态型轮播：")]),t._v(" "),n("p"),t._v(" "),n("r-carousel",{attrs:{autoPlay:!1}},t._l(t.itemList,function(t,e){return n("r-carousel-item",{key:e},[n("img",{attrs:{src:t.src}})])}))],1)},[],!1,null,"de3a40c0",null);e.default=i.exports},"6zOk":function(t,e,n){"use strict";var s=n("+s1F");n.n(s).a}}]);
//# sourceMappingURL=14.js.map