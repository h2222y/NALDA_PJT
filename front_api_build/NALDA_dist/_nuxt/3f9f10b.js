(window.webpackJsonp=window.webpackJsonp||[]).push([[62,14],{1080:function(t,e,n){"use strict";n.r(e);var r=n(1040),o=n(613),l=n(603),c=n(578),d=n(724),f=n(634),h=n(1036),v=n(1042),m=(n(5),n(4),n(2),n(6),n(7),n(9)),y=n(0),x=(n(32),n(1),n(3),n(120)),_=n(601),w=n(54);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={name:"TestPage2",components:{PageLoader:_.default},data:function(){return{finalDetail:[],info:{flightNum:null,mealMenu:null,username:null,seatNum:null,status:"PROGRESS"},select:{},detailOfMeal:[],allergiesOfMeal:[]}},computed:k(k(k({},Object(x.e)("meal",["selectedMeal","flightMeals","details","allergies","validMsg","stock","total"])),Object(x.e)("user",["loginMember","flightNum","seatInfo"])),{},{toggle:function(){return 0===this.flightMeals.length}}),created:function(){var t=this;new Promise((function(t,e){t()})).then(Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getFlightMeal(t.flightNum);case 2:return t.getDetail(t.flightMeals),t.getAllergy(t.flightMeals),e.next=6,t.getMealCnt(t.flightNum);case 6:return e.next=8,t.getMealOrderCnt(t.flightNum);case 8:t.calcStock();case 9:case"end":return e.stop()}}),e)}))))},methods:k(k(k({},Object(x.d)("meal",["PASSENGER_CALC_STOCK"])),Object(x.b)("meal",["getFlightMeal","getSelectedMeal","getDetail","getAllergy","getMealCnt","getMealOrderCnt"])),{},{updateSelected:function(t){this.$store.commit("meal/updateSelected",t)},updateCheck:function(t){this.$store.commit("meal/updateCheck",t)},calcStock:function(){this.PASSENGER_CALC_STOCK()},finalChoice:function(){var t=this;this.flightMeals.forEach((function(e){e.menu===t.selectedMeal&&e.cnt>0&&(t.info.flightNum=t.flightNum,t.info.username=t.loginMember.username,t.info.seatNum=t.seatInfo.seatNum,t.info.mealMenu=t.selectedMeal,new Promise((function(t,e){t()})).then(Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.validMeal(t.info.seatNum);case 2:"가능"===t.validMsg?Object(w.b)(t.info,(function(){t.$router.push("/meal/result")}),(function(t){console.log(t)})):t.$bvModal.show("meal-modal");case 3:case"end":return e.stop()}}),e)})))))}))}},Object(x.b)("meal",["getDetail","getAllergy","registSeatMeal","validMeal"]))},j=(n(925),n(93)),component=Object(j.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"airfood-container"},[e("div",{staticStyle:{height:"6vh","font-size":"30px","text-align":"center"}},[t._v("\n    주메뉴선택\n  ")]),t._v(" "),e("div",{attrs:{id:"app"}},[e(r.a,{attrs:{id:"inspire"}},[e("div",{staticClass:"wrapper"},[e("page-loader",{attrs:{toggle:t.toggle}}),t._v(" "),t._l(t.flightMeals,(function(n,i){return e("div",{key:i,staticClass:"food-box"},[n.cnt>0?e(l.a,{staticClass:"mx-auto my-12",staticStyle:{margin:"0",height:"100%"}},[e(h.a,{attrs:{height:"50%",width:"100%",src:"data:image/jpg;base64,"+n.image,alt:n.menu}}),t._v(" "),e(c.c,{staticStyle:{display:"flex","justify-content":"center","font-size":"25px",height:"15%"}},[t._v(t._s(n.menu))]),t._v(" "),e(c.b,{staticStyle:{height:"20%"}},[e("div",{staticStyle:{"font-size":"17px"}},[t._v(t._s(n.content))])]),t._v(" "),e(d.a,{staticStyle:{margin:"10px"}}),t._v(" "),e(c.a,{staticStyle:{height:"10%",padding:"0"}},[e("div",[e(o.a,{staticStyle:{"font-size":"20px","margin-left":"10px"},attrs:{text:"",color:"teal accent-4",large:""},on:{click:function(e){return t.updateCheck(n)}}},[t._v("세부사항")])],1),t._v(" "),e(v.a),t._v(" "),e("div",[e("button",{staticClass:"mr-3",staticStyle:{width:"80px",height:"100%","font-size":"20px"},on:{click:function(e){return t.updateSelected(i)}}},[t._v("\n                  선택\n                ")])])],1),t._v(" "),e(f.a,[!0===n.check?e(l.a,{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"}},[e(c.b,{staticClass:"pb-0",staticStyle:{padding:"30px",height:"89%"}},[e("div",{staticClass:"text--primary",staticStyle:{"font-size":"40px"}},[t._v("\n                    세부목록\n                  ")]),t._v(" "),e("ul",{staticStyle:{"font-size":"20px","margin-top":"30px"}},t._l(t.flightMeals[i].details,(function(n,r){return e("li",{key:r,staticStyle:{height:"35px"}},[t._v("\n                      "+t._s(n.mealName)+"\n                    ")])})),0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"text--primary",staticStyle:{"font-size":"40px"}},[t._v("\n                    알레르기\n                  ")]),t._v(" "),e("ul",{staticStyle:{"font-size":"20px","margin-top":"30px"}},[e("li",[t._v(t._s(t.flightMeals[i].allergies[0].allergyType))])]),t._v(" "),e("hr")]),t._v(" "),e(c.a,[e(v.a),t._v(" "),e(o.a,{staticStyle:{"font-size":"20px"},attrs:{text:"",color:"teal accent-4"},on:{click:function(e){return t.updateCheck(n)}}},[t._v("닫기")])],1)],1):t._e()],1)],1):n.cnt<=0?e(l.a,{staticClass:"mx-auto my-12",staticStyle:{margin:"0",height:"100%","background-image":"url('/orders/out-of-stock.png')","background-size":"40%","background-position":"center","background-color":"rgba(0, 0, 0, 0.5)"}},[e(h.a,{staticStyle:{filter:"brightness(50%)"},attrs:{height:"50%",width:"100%",alt:n.menu}}),t._v(" "),e(c.c,{staticStyle:{display:"flex","justify-content":"center","font-size":"25px",height:"15%",opacity:"0.3"}},[t._v(t._s(n.menu))]),t._v(" "),e(c.b,{staticStyle:{height:"20%"}},[e("div",{staticStyle:{"font-size":"17px",opacity:"0.5"}},[t._v("\n                "+t._s(n.content)+"\n              ")])]),t._v(" "),e(d.a,{staticStyle:{margin:"10px"}}),t._v(" "),e(c.a,{staticStyle:{height:"10%",padding:"0"}},[e("div",[e(o.a,{staticStyle:{"font-size":"20px",width:"80px",height:"100%","margin-left":"10px",opacity:"0.5"},attrs:{text:""}},[t._v("세부사항")])],1),t._v(" "),e(v.a),t._v(" "),e("div",[e("button",{staticClass:"mr-3",staticStyle:{width:"80px",height:"100%","font-size":"20px",opacity:"0.5"}},[t._v("\n                  선택\n                ")])])],1)],1):t._e()],1)}))],2),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e(o.a,{staticClass:"meal-order-button",staticStyle:{"background-color":"rgb(69, 169, 200)",color:"white"},attrs:{"x-large":""},on:{click:t.finalChoice}},[t._v("주문하기")])],1)])],1),t._v(" "),e("b-modal",{attrs:{id:"meal-modal","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("알림")]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"d-block text-center"},[e("h3",[t._v("이미 주문했습니다.")])]),t._v(" "),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.$bvModal.hide("meal-modal")}}},[t._v("닫기")])],1)],1)}),[],!1,null,"a583d84c",null);e.default=component.exports;installComponents(component,{PageLoader:n(601).default})},578:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n(603),o=n(41),l=Object(o.i)("v-card__actions"),c=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),f=Object(o.i)("v-card__title");r.a},597:function(t,e,n){var content=n(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(119).default)("2aa15e50",content,!0,{sourceMap:!1})},601:function(t,e,n){"use strict";n.r(e);var r={name:"PageLoader",props:{toggle:Boolean},data:function(){return{isloaded:!1}},mounted:function(){var t=this;document.onreadystatechange=function(){"complete"===document.readyState&&(t.isloaded=!0)}}},o=(n(616),n(93)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.toggle?e("div",{staticClass:"page-loader"},[t._m(0)]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t("div",{staticClass:"front"},[t("img",{staticClass:"load-spinner",attrs:{src:"/icon/load_spinner_earth.png",alt:"loading-earth"}})]),this._v(" "),t("div",{staticClass:"back"},[t("img",{staticClass:"load-spinner",attrs:{src:"/icon/load_spinner_plane.png",alt:"loading-spinner-plane"}})])])}],!1,null,"4d243a66",null);e.default=component.exports},616:function(t,e,n){"use strict";n(597)},617:function(t,e,n){var r=n(118)(!1);r.push([t.i,".page-loader[data-v-4d243a66]{display:flex;justify-content:center;align-items:center;position:fixed;top:15vh;left:0;margin-bottom:15vh;width:100vw;height:70vh;background-color:hsla(0,0%,100%,0);z-index:999}.square1[data-v-4d243a66]{background-color:#dadada;-webkit-animation:left-4d243a66 1s infinite;animation:left-4d243a66 1s infinite}.square1[data-v-4d243a66],.square2[data-v-4d243a66]{width:2%;height:2%;margin-right:.5%}.square2[data-v-4d243a66]{background-color:#88c0c5}.square3[data-v-4d243a66]{background-color:#45a9c8}.square3[data-v-4d243a66],.square4[data-v-4d243a66]{width:2%;height:2%;margin-right:.5%}.square4[data-v-4d243a66]{background-color:#206e95}.loading-airplane[data-v-4d243a66]{width:100%;height:100%;margin-right:.5%;transform:rotate(45deg)}.plane[data-v-4d243a66]{width:4%;margin-right:.5%;-webkit-animation:right-4d243a66 1s .5s infinite;animation:right-4d243a66 1s .5s infinite}.load-spinner[data-v-4d243a66]{width:100%;height:100%;-webkit-animation:spinner 2s linear infinite;animation:spinner 2s linear infinite}.load-spinner[data-v-4d243a66],.spinner[data-v-4d243a66]{filter:opacity(.5) drop-shadow(0 0 0 #206e95)}.spinner[data-v-4d243a66]{width:20%;margin-right:.5%;position:relative;margin-bottom:15%}.back[data-v-4d243a66],.front[data-v-4d243a66]{position:absolute}.back[data-v-4d243a66]{-webkit-animation:spin-4d243a66 2s linear infinite;animation:spin-4d243a66 2s linear infinite}@-webkit-keyframes spin-4d243a66{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-4d243a66{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes left-4d243a66{40%{transform:translateX(-60px)}50%{transform:translateX(0)}}@keyframes left-4d243a66{40%{transform:translateX(-60px)}50%{transform:translateX(0)}}@-webkit-keyframes right-4d243a66{40%{transform:translateX(60px)}50%{transform:translateX(0)}}@keyframes right-4d243a66{40%{transform:translateX(60px)}50%{transform:translateX(0)}}",""]),t.exports=r},696:function(t,e,n){var content=n(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(119).default)("7132a15d",content,!0,{sourceMap:!1})},697:function(t,e,n){var r=n(118)(!1);r.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},724:function(t,e,n){"use strict";n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=(n(696),n(580));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},804:function(t,e,n){var content=n(926);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(119).default)("4284ef6a",content,!0,{sourceMap:!1})},925:function(t,e,n){"use strict";n(804)},926:function(t,e,n){var r=n(118)(!1);r.push([t.i,'@font-face{font-family:"twayfly";src:url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twayfly.woff) format("woff");font-weight:400;font-style:normal}*[data-v-a583d84c]{font-family:"twayfly"}.airfood-container[data-v-a583d84c]{height:70vh}.airfood-container>h1[data-v-a583d84c]{text-align:center;vertical-align:middle;line-height:10vh;height:10vh}.wrapper[data-v-a583d84c]{display:flex;justify-content:center;align-items:center;grid-gap:5vw;gap:5vw}.wrapper img[data-v-a583d84c]{width:400px;height:300px}.wrapper-choice[data-v-a583d84c]{display:flex;flex-direction:column;align-items:center}.wrapper-choice>div[data-v-a583d84c]{margin-top:30px}.choice-button[data-v-a583d84c]{display:flex;justify-content:center;width:10vw;padding:12px 25px;border:none;color:#fff;background-color:#45a9c8;margin:auto;left:0;right:0;bottom:25vh}.v-card--reveal[data-v-a583d84c]{bottom:0;opacity:1!important;position:absolute;width:100%}.food-box[data-v-a583d84c]{width:35%;height:60vh;flex-direction:column}.food-box[data-v-a583d84c],.meal-order-button[data-v-a583d84c]{display:flex;justify-content:center;align-items:center}.meal-order-button[data-v-a583d84c]{width:12vw;height:6vh;background-color:#45a9c8;margin-top:20px;font-size:25px;border-radius:60px}.v-application .my-12[data-v-a583d84c]{margin-top:0!important;margin-bottom:0!important}[data-v-a583d84c] .v-application--wrap{min-height:-webkit-fit-content;min-height:-moz-fit-content;min-height:fit-content}',""]),t.exports=r}}]);