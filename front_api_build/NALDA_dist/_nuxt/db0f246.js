(window.webpackJsonp=window.webpackJsonp||[]).push([[35,14],{1054:function(t,e,n){"use strict";n.r(e);var r=n(1040),l=n(613),o=n(603),c=n(578),d=n(1104),f=n(724),h=n(634),v=n(611),m=n(1036),x=n(768),y=n(1042),_=n(775),w=n(583),k=(n(5),n(4),n(6),n(7),n(9)),M=n(0),O=(n(32),n(11),n(1),n(3),n(2),n(120));function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(M.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={name:"AttendantMealSet",components:{PageLoader:n(601).default},data:function(){return{readyState:!1,valid:!0,dialog:!1,mealList:[],totalRules:[function(t){return/^[0-9]*$/.test(t)||"숫자만 입력해주세요."}],select:[],selectedMeal:[]}},computed:S(S(S({},Object(O.e)("meal",["meals","flightMeals","details","allergies","validMsg","flightMealList","settedMealList","total","stock"])),Object(O.e)("user",["loginMember","flightNum","seatInfo"])),{},{toggle2:function(){return 0===this.mealList.length}}),created:function(){var t=this;new Promise((function(t,e){t()})).then(Object(k.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.mealList=[],e.next=3,t.getSettedMeal(t.flightNum);case 3:return e.next=5,t.getFlightMeal(t.flightNum);case 5:if(!(t.settedMealList.length>0)){e.next=16;break}return e.next=8,t.getMealCnt(t.flightNum);case 8:return e.next=10,t.getMealOrderCnt(t.flightNum);case 10:return e.next=12,t.calcStock();case 12:return e.next=14,t.settedMealList.forEach((function(e){var n={menu:e.menu,image:e.image,mealId:e.mealId,total:e.total,status:e.status,validated:!1,readyState:!0};"PROGRESS"===e.status&&(n.validated=!0),"DONE"===e.status&&(n.readyState=!1),t.mealList.push(n)}));case 14:e.next=18;break;case 16:return e.next=18,t.flightMealList.forEach((function(e){var n={menu:e.menu,image:e.image,imageName:e.imageName,total:e.total,validated:e.validated};t.mealList.push(n)}));case 18:case"end":return e.stop()}}),e)}))))},methods:S(S(S({},Object(O.b)("meal",["getMeal","getFlightMeal","getSelectedMeal","getDetail","getAllergy","registFlightMeal","registSeatMeal","validMeal","getSettedMeal","getMealOrderCnt","getMealCnt"])),Object(O.d)("meal",["UPDATE_FLIGHTMEALS_LIST","ATTENDANT_CALC_STOCK"])),{},{moveMain:function(){this.$router.push("/attendant/main")},calcStock:function(){this.ATTENDANT_CALC_STOCK()},setMealSelected:function(t){!0!==t.validated&&(this.dialog=!this.dialog),this.selectedMeal=t},setMealtotal:function(t){t.validated=!0;var e={flightNum:this.flightNum,mealMenu:t.menu,total:t.total,status:"READY"};if(!0===t.validated&&(e.status="PROGRESS"),!1===t.readyState&&(e.status="DONE"),0===this.select.length)this.select.push(e);else if(this.select.length<2){var n=!1;this.select.forEach((function(t){t.menu===e.mealMenu&&(n=!0)})),!1===n&&this.select.push(e)}else t.validated=!1;this.UPDATE_FLIGHTMEALS_LIST(t),this.dialog=!this.dialog},unsetMealtotal:function(t){t.validated=!1,this.UPDATE_FLIGHTMEALS_LIST(t),this.select=this.select.filter((function(t){return!1!==t.validated})),this.dialog=!this.dialog},toggle:function(){this.dialog=!this.dialog},setMeal:function(){var t=this,e=[];this.flightMealList.forEach((function(n){var r={flightNum:t.flightNum,mealMenu:n.menu,total:n.total,status:"READY"};!0===n.validated&&(r.status="PROGRESS"),e.push(r)})),this.registFlightMeal(e)},updateSelected:function(t){this.$store.commit("meal/updateSelected",t)},setMealUpdate:function(){var t=this,e=[];this.mealList.forEach((function(n){t.select.forEach((function(t){t.mealMenu===n.menu&&(n.status=t.status)}));var r={flightNum:t.flightNum,mealMenu:n.menu,total:n.total,status:n.status};e.push(r)})),this.registFlightMeal(e)}})},L=(n(870),n(93)),component=Object(L.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"airfood-container fadeInUp"},[e("page-loader",{attrs:{toggle:t.toggle2}}),t._v(" "),e("h1",[t._v("항공편 "+t._s(t.flightNum)+" 기내식 선택")]),t._v(" "),0!==t.mealList.length?e("div",{attrs:{id:"app"}},[e(r.a,{attrs:{id:"inspire"}},[e("div",{staticClass:"wrapper"},t._l(t.mealList,(function(n,i){return e("div",{key:i,staticClass:"food-box"},[e(o.a,{staticClass:"mx-auto my-12",class:{valid:!0===n.validated,finish:"DONE"===n.status},attrs:{"max-width":"374"},on:{click:function(e){return t.setMealSelected(n)}}},[e("template",{slot:"progress"},[e(x.a,{attrs:{color:"",height:"10",indeterminate:""}})],1),t._v(" "),e(m.a,{attrs:{height:"250",src:"data:image/jpg;base64,"+n.image,alt:n.menu}}),t._v(" "),e(c.c,{staticStyle:{"font-size":"x-large",display:"flex","justify-content":"flex-start"}},[t._v("\n              "+t._s(n.menu)+"\n            ")]),t._v(" "),e(c.b,[e("div",[t._v(t._s(n.content))])]),t._v(" "),e(f.a,{staticClass:"mx-4"}),t._v(" "),e(c.a,[null!==n.total?e("div",[e(l.a,{attrs:{text:"",color:"teal accent-4"}},[t._v("수량: "+t._s(n.total))])],1):t._e()]),t._v(" "),e(h.a,[!0===n.check?e(o.a,{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"}},[e(c.b,{staticClass:"pb-0"},[e("div",{staticClass:"text-h4 text--primary"},[t._v("세부목록")]),t._v(" "),e("ul",t._l(t.meals[i].details,(function(n,r){return e("li",{key:r},[t._v("\n                      "+t._s(n.mealName)+"\n                    ")])})),0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"text-h4 text--primary"},[t._v("알레르기")]),t._v(" "),e("ul",[e("li",[t._v(t._s(t.meals[i].allergies[0].allergyType))])]),t._v(" "),e("hr")])],1):t._e()],1)],2)],1)})),0),t._v(" "),e("div",{staticClass:"meal-order-button"},[e(d.a,{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[0===t.settedMealList.length?e(l.a,t._b({staticClass:"ma-2 white--text",staticStyle:{width:"15%","background-color":"rgb(69, 169, 200)","border-radius":"60px","font-size":"x-large",position:"fixed",bottom:"3% !important"},attrs:{"x-large":""},on:{click:t.setMeal}},"v-btn",o,!1),[t._v("기내식입력")]):0!==t.settedMealList.length?e(l.a,t._g(t._b({staticClass:"ma-2 white--text",staticStyle:{width:"15%","background-color":"rgb(69, 169, 200)","border-radius":"60px","font-size":"x-large"},attrs:{"x-large":""},on:{click:t.setMealUpdate}},"v-btn",o,!1),r),[t._v("기내식입력")]):t._e()]}},{key:"default",fn:function(dialog){return[e(o.a,[e(_.a,{attrs:{flat:"",dark:"",color:"rgb(69, 169, 200)"}},[e(w.b,[t._v(" 항공편 "+t._s(t.flightNum)+" ")])],1),t._v(" "),e(c.b,[e("div",{staticClass:"text mt-16 mb-14 ml-5",staticStyle:{"font-size":"xxx-large","font-family":"'twayfly'"}},[t._v("\n                  기내식 입력 완료!\n                ")])]),t._v(" "),e(c.a,{staticClass:"justify-end"},[e(l.a,{staticStyle:{"font-size":"xx-large",color:"grey"},attrs:{"x-large":"",text:""},on:{click:function(e){t.moveMain(),dialog.value=!1}}},[t._v("닫기")])],1)],1)]}}],null,!1,1402851749)})],1)])],1):t._e(),t._v(" "),e(r.a,{attrs:{id:"item-modal"}},[e(d.a,{attrs:{"hide-overlay":"",transition:"dialog-bottom-transition",width:"60%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,t._b({attrs:{tile:""}},"v-card",t.selectedMeal,!1),[e(_.a,{attrs:{flat:"",dark:"",color:"rgb(69, 169, 200)"}},[e(l.a,{attrs:{icon:"",dark:""},on:{click:t.toggle}},[e(v.a,[t._v("mdi-close")])],1),t._v(" "),e(w.b,{staticStyle:{"font-size":"xx-large"}},[t._v(t._s(t.selectedMeal.menu))]),t._v(" "),e(y.a),t._v(" "),e(w.a,[!1===t.selectedMeal.validated?e(l.a,{staticClass:"mx-2",staticStyle:{width:"100%"},attrs:{fab:"",dark:"",large:"",color:"pink"},on:{click:function(e){return t.setMealtotal(t.selectedMeal)}}},[e("div",{staticStyle:{"font-size":"x-large"}},[t._v("Validate")])]):!0===t.selectedMeal.validated?e(l.a,{staticClass:"mx-2",staticStyle:{width:"100%"},attrs:{fab:"",dark:"",large:"",color:"pink"},on:{click:function(e){return t.unsetMealtotal(t.selectedMeal)}}},[e("div",{staticStyle:{"font-size":"x-large"}},[t._v("unValidate")])]):t._e()],1)],1),t._v(" "),e(c.b,{staticClass:"d-flex align-center justify-content-between"},[e("img",{staticClass:"item-img mt-5",staticStyle:{height:"350px",width:"350px"},attrs:{src:"data:image/jpg;base64,"+t.selectedMeal.image}}),t._v(" "),e("div",{staticStyle:{"margin-right":"17%",display:"flex","flex-direction":"column"}},[e("div",{staticStyle:{"font-size":"xx-large"}},[t._v("\n              수량: "+t._s(t.selectedMeal.total)+"\n            ")])])])],1)],1)],1)],1)}),[],!1,null,"acdcbe96",null);e.default=component.exports;installComponents(component,{PageLoader:n(601).default})},578:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n(603),l=n(41),o=Object(l.i)("v-card__actions"),c=Object(l.i)("v-card__subtitle"),d=Object(l.i)("v-card__text"),f=Object(l.i)("v-card__title");r.a},597:function(t,e,n){var content=n(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(119).default)("2aa15e50",content,!0,{sourceMap:!1})},601:function(t,e,n){"use strict";n.r(e);var r={name:"PageLoader",props:{toggle:Boolean},data:function(){return{isloaded:!1}},mounted:function(){var t=this;document.onreadystatechange=function(){"complete"===document.readyState&&(t.isloaded=!0)}}},l=(n(616),n(93)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.toggle?e("div",{staticClass:"page-loader"},[t._m(0)]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t("div",{staticClass:"front"},[t("img",{staticClass:"load-spinner",attrs:{src:"/icon/load_spinner_earth.png",alt:"loading-earth"}})]),this._v(" "),t("div",{staticClass:"back"},[t("img",{staticClass:"load-spinner",attrs:{src:"/icon/load_spinner_plane.png",alt:"loading-spinner-plane"}})])])}],!1,null,"4d243a66",null);e.default=component.exports},616:function(t,e,n){"use strict";n(597)},617:function(t,e,n){var r=n(118)(!1);r.push([t.i,".page-loader[data-v-4d243a66]{display:flex;justify-content:center;align-items:center;position:fixed;top:15vh;left:0;margin-bottom:15vh;width:100vw;height:70vh;background-color:hsla(0,0%,100%,0);z-index:999}.square1[data-v-4d243a66]{background-color:#dadada;-webkit-animation:left-4d243a66 1s infinite;animation:left-4d243a66 1s infinite}.square1[data-v-4d243a66],.square2[data-v-4d243a66]{width:2%;height:2%;margin-right:.5%}.square2[data-v-4d243a66]{background-color:#88c0c5}.square3[data-v-4d243a66]{background-color:#45a9c8}.square3[data-v-4d243a66],.square4[data-v-4d243a66]{width:2%;height:2%;margin-right:.5%}.square4[data-v-4d243a66]{background-color:#206e95}.loading-airplane[data-v-4d243a66]{width:100%;height:100%;margin-right:.5%;transform:rotate(45deg)}.plane[data-v-4d243a66]{width:4%;margin-right:.5%;-webkit-animation:right-4d243a66 1s .5s infinite;animation:right-4d243a66 1s .5s infinite}.load-spinner[data-v-4d243a66]{width:100%;height:100%;-webkit-animation:spinner 2s linear infinite;animation:spinner 2s linear infinite}.load-spinner[data-v-4d243a66],.spinner[data-v-4d243a66]{filter:opacity(.5) drop-shadow(0 0 0 #206e95)}.spinner[data-v-4d243a66]{width:20%;margin-right:.5%;position:relative;margin-bottom:15%}.back[data-v-4d243a66],.front[data-v-4d243a66]{position:absolute}.back[data-v-4d243a66]{-webkit-animation:spin-4d243a66 2s linear infinite;animation:spin-4d243a66 2s linear infinite}@-webkit-keyframes spin-4d243a66{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-4d243a66{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes left-4d243a66{40%{transform:translateX(-60px)}50%{transform:translateX(0)}}@keyframes left-4d243a66{40%{transform:translateX(-60px)}50%{transform:translateX(0)}}@-webkit-keyframes right-4d243a66{40%{transform:translateX(60px)}50%{transform:translateX(0)}}@keyframes right-4d243a66{40%{transform:translateX(60px)}50%{transform:translateX(0)}}",""]),t.exports=r},696:function(t,e,n){var content=n(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(119).default)("7132a15d",content,!0,{sourceMap:!1})},697:function(t,e,n){var r=n(118)(!1);r.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},724:function(t,e,n){"use strict";n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),l=(n(696),n(580));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=l.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},776:function(t,e,n){var content=n(871);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(119).default)("34db2b86",content,!0,{sourceMap:!1})},870:function(t,e,n){"use strict";n(776)},871:function(t,e,n){var r=n(118)(!1);r.push([t.i,'@font-face{font-family:"twayfly";src:url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twayfly.woff) format("woff");font-weight:400;font-style:normal}*[data-v-acdcbe96]{font-family:"twayfly"}[data-v-acdcbe96] .v-application--wrap{flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column;min-height:-webkit-fit-content;min-height:-moz-fit-content;min-height:fit-content;max-width:100%;position:relative;background-color:hsla(0,0%,93.7%,.511)}.airfood-container[data-v-acdcbe96]{height:85vh;background-color:hsla(0,0%,93.7%,.511)}.airfood-container>h1[data-v-acdcbe96]{text-align:center;vertical-align:middle;padding-top:3%}.wrapper[data-v-acdcbe96]{display:flex;justify-content:center;align-items:center;overflow-y:hidden;-webkit-overflow-scrolling:touch;padding-right:11%}.wrapper img[data-v-acdcbe96]{width:400px;height:300px}.wrapper-choice[data-v-acdcbe96]{display:flex;flex-direction:column;align-items:center}.wrapper-choice>div[data-v-acdcbe96]{margin-top:30px}.choice-button[data-v-acdcbe96]{display:flex;justify-content:center;width:10vw;padding:12px 25px;border:none;color:#fff;background-color:#45a9c8;margin:auto;left:0;right:0;bottom:25vh}.v-card--reveal[data-v-acdcbe96]{bottom:0;opacity:1!important;position:absolute;width:100%}.v-card__actions[data-v-acdcbe96]{padding:8px;justify-content:flex-start}.food-box[data-v-acdcbe96],.v-card__actions[data-v-acdcbe96]{align-items:center;display:flex}.food-box[data-v-acdcbe96]{width:20%;flex-direction:column;justify-content:center}.v-card__title[data-v-acdcbe96]{justify-content:flex-start}.meal-order-button[data-v-acdcbe96]{display:flex;justify-content:center}.v-text-field input[data-v-acdcbe96]{flex:1 1 auto;line-height:20px;padding:8px 0;max-width:100%;min-width:0;width:100%;text-align:center}.finish[data-v-acdcbe96]{filter:brightness(50%)}.valid[data-v-acdcbe96]{margin-top:-8%!important;box-shadow:0 0 30px #2fe0ff}.fadeInUp[data-v-acdcbe96]{-webkit-animation:fadeInUp-acdcbe96 1s ease backwards;animation:fadeInUp-acdcbe96 1s ease backwards}@-webkit-keyframes fadeInUp-acdcbe96{0%{transform:translateY(100px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes fadeInUp-acdcbe96{0%{transform:translateY(100px);opacity:0}to{transform:translate(0);opacity:1}}',""]),t.exports=r}}]);