(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1055:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(6),n(7);var o=n(9),l=n(0),r=(n(32),n(1),n(3),n(120));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"AttendantMeal",components:{},data:function(){return{isNotSaved:!0,isValid:!0,dialog:!1,mealList:[],total:0,selectedMealList:[],selectedMeal:[]}},computed:d(d({},Object(r.e)("meal",["meals","flightMeals","details","allergies","validMsg","flightMealList"])),Object(r.e)("user",["loginMember","flightNum","seatInfo"])),created:function(){var t=this;new Promise((function(t,e){t()})).then(Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mealList=[],0!==(null===(n=t.flightMealList)||void 0===n?void 0:n.length)){e.next=8;break}return e.next=4,t.getMeal();case 4:return e.next=6,t.meals.forEach((function(e){var n={menu:e.menu,image:e.image,imageName:e.imageName,total:null};t.mealList.push(n)}));case 6:e.next=14;break;case 8:if(!((null===(o=t.flightMealList)||void 0===o?void 0:o.length)>0)){e.next=14;break}return e.next=11,t.getMeal();case 11:return e.next=13,t.meals.forEach((function(e){var n={menu:e.menu,image:e.image,imageName:e.imageName,total:null};t.flightMealList.forEach((function(t){e.menu===t.menu&&(n.total=t.total)})),t.mealList.push(n)}));case 13:t.isValid=!t.isValid;case 14:case"end":return e.stop()}}),e)}))))},methods:d(d({},Object(r.d)("meal",["SET_FLIGHTMEALS_LIST","CLEAR_FLIGHTMEALS_LIST"])),{},{setTotal:function(){0!==this.selectedMealList.length&&(this.CLEAR_FLIGHTMEALS_LIST(),this.SET_FLIGHTMEALS_LIST(this.selectedMealList)),this.$router.push("/attendant/mealset")},fixTotal:function(){var t=this;this.selectedMealList=[],this.mealList.forEach((function(e){e.total>0&&t.selectedMealList.push(e)})),this.isValid=!this.isValid,this.isNotSaved=!this.isNotSaved},unFixTotal:function(){this.isValid=!this.isValid,this.isNotSaved=!this.isNotSaved}},Object(r.b)("meal",["getMeal","getFlightMeal","getSelectedMeal","getDetail","getAllergy","registFlightMeal","registSeatMeal","validMeal"]))},f=(n(872),n(93)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"stock-input-wrap"},[e("div",{staticClass:"stock-table"},[e("div",{staticClass:"stock-input-table"},[e("b-table-simple",{attrs:{id:"stocks-table",hover:"",small:"","caption-top":"",responsive:""}},[e("caption",[e("div",{staticClass:"caption-wrap"},[e("h3",[t._v("항공편 "+t._s(t.flightNum)+" 기내식 목록")])])]),t._v(" "),e("colgroup",[e("col"),t._v(" "),e("col")]),t._v(" "),e("colgroup",[e("col"),t._v(" "),e("col"),t._v(" "),e("col")]),t._v(" "),e("colgroup",[e("col"),t._v(" "),e("col")]),t._v(" "),e("b-thead",{attrs:{"head-variant":"dark"}},[e("b-tr",[e("b-th",{attrs:{colspan:"3"}},[t._v("재고")]),t._v(" "),e("b-th",{attrs:{colspan:"3"}},[t._v("기내식 목록")])],1),t._v(" "),e("b-tr",[e("b-th",[t._v("서비스명")]),t._v(" "),e("b-th",{attrs:{colspan:"2"}},[t._v("메뉴명")]),t._v(" "),e("b-th",[t._v("수량")])],1)],1),t._v(" "),e("b-tbody",[e("b-tr",[e("b-th",{attrs:{rowspan:t.mealList.length+1}},[t._v("기내식")])],1),t._v(" "),t._l(t.mealList,(function(n,o){return e("b-tr",{key:o},[e("b-th",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v(t._s(n.menu))]),t._v(" "),e("b-td",[e("b-form-input",{staticClass:"snack-input-wrap",attrs:{id:"snack-input",type:"number",disabled:!t.isValid,name:n.menu,placeholder:"수량을 입력해주세요."},model:{value:n.total,callback:function(e){t.$set(n,"total",e)},expression:"meal.total"}})],1)],1)}))],2),t._v(" "),e("b-tfoot",[e("b-tr",[e("b-td",{staticClass:"text-right",attrs:{colspan:"7",variant:"secondary"}},[t._v("\n              총 행:\n              "),e("b",[t._v(t._s(t.mealList.length))])])],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"stock-btn-group"},[t.isValid?e("b-button",{attrs:{variant:"info"},on:{click:function(e){return t.fixTotal()}}},[t._v("저장")]):t.isValid?t._e():e("b-button",{attrs:{variant:"info"},on:{click:function(e){return t.unFixTotal()}}},[t._v("수정")]),t._v(" "),t.isNotSaved?t.isNotSaved?e("b-button",{attrs:{variant:"warning"},on:{click:function(e){return t.$bvModal.show("modal-save-alert")}}},[t._v("확인")]):t._e():e("b-button",{attrs:{variant:"warning"},on:{click:function(e){return t.setTotal()}}},[t._v("확인")]),t._v(" "),t.isNotSaved?e("b-modal",{attrs:{id:"modal-save-alert","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("주의")]},proxy:!0}],null,!1,3639093887)},[t._v(" "),e("div",{staticClass:"d-block text-center"},[e("h3",[t._v("저장이 필요합니다!")])]),t._v(" "),e("b-button",{staticClass:"mt-3",staticStyle:{color:"aliceblue"},attrs:{variant:"dark",block:""},on:{click:function(e){return t.$bvModal.hide("modal-save-alert")}}},[t._v("닫기")])],1):t._e()],1)])])}),[],!1,null,"e61be196",null);e.default=component.exports},777:function(t,e,n){var content=n(873);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(119).default)("4c18db94",content,!0,{sourceMap:!1})},872:function(t,e,n){"use strict";n(777)},873:function(t,e,n){var o=n(118)(!1);o.push([t.i,'@font-face{font-family:"twayfly";src:url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twayfly.woff) format("woff");font-weight:400;font-style:normal}*[data-v-e61be196]{margin:0;padding:0;font-family:"twayfly"}.stock-input-wrap[data-v-e61be196]{height:85vh;background-color:hsla(0,0%,93.7%,.511)}.caption-wrap[data-v-e61be196]{display:flex;justify-content:space-around;align-items:baseline;margin-bottom:1%}#flight-num-input[data-v-e61be196]{width:88%}.stock-table[data-v-e61be196]{padding:2%;height:70vh;display:flex;flex-direction:column}.stock-btn-group[data-v-e61be196]{margin-top:.5%;text-align:center}.btn-secondary[data-v-e61be196]{background-color:#206e95;border-color:#206e95}.btn-info[data-v-e61be196],.btn-secondary[data-v-e61be196]{font-size:small;height:100%;width:8%}.btn-info[data-v-e61be196]{color:#fff}.btn-warning[data-v-e61be196]{font-size:small;height:100%;width:8%}input[data-v-e61be196]{border:none;outline:none;height:3vh}.v-messages__message[data-v-e61be196]{float:right}',""]),t.exports=o}}]);