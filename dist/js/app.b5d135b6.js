(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],m=0,u=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app",[n("Navbar"),n("v-parallax",{attrs:{height:"100%",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[n("p",{staticStyle:{"margin-top":"75px"}}),n("router-view")],1)],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{color:"light-blue accent-4",dark:"",fixed:"",app:""}},[e.getAdminConnected?n("v-app-bar-nav-icon",{on:{click:e.toggleDrawer}}):e._e(),n("v-btn",{staticClass:"teal--text text--accent-2 title px-3",attrs:{text:"",height:"100%"},on:{click:e.basicsClicked}},[e._v("Basics")]),n("v-btn",{staticClass:"teal--text text--accent-2 title px-3",attrs:{text:"",height:"100%"},on:{click:e.defenseClicked}},[e._v("Defense")]),n("v-btn",{staticClass:"teal--text text--accent-2 title px-3",attrs:{text:"",height:"100%"},on:{click:e.foodClicked}},[e._v("Food ")]),n("v-btn",{staticClass:"teal--text text--accent-2 title px-3",attrs:{text:"",height:"100%"},on:{click:e.toolsClicked}},[e._v("Tools")]),n("v-spacer"),e.getAdminConnected?e._e():n("LoginDialog")],1),e.getDrawerStatus?n("v-navigation-drawer",{attrs:{app:"",color:"light-blue accent-4"}},[n("Drawer")],1):e._e()],1)},r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"light-blue accent-3"},a),[e._v("Connection")])]}}]),model:{value:e.loginDialog,callback:function(t){e.loginDialog=t},expression:"loginDialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"light-blue accent-3 mb-5"}},[n("v-toolbar-title",{staticClass:"white--text"},[e._v("Login Form")])],1),n("v-form",{staticClass:"px-3 ml-3 py-3"},[n("v-text-field",{staticClass:"mb-4",attrs:{label:"Name","prepend-icon":"mdi-account"},model:{value:e.infos.name,callback:function(t){e.$set(e.infos,"name",t)},expression:"infos.name"}}),n("v-text-field",{attrs:{label:"Password",type:"password","prepend-icon":"mdi-lock"},model:{value:e.infos.password,callback:function(t){e.$set(e.infos,"password",t)},expression:"infos.password"}}),n("p",{staticClass:"ml-12 red--text"},[e._v(e._s(e.getErrorMessage))]),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:" white--text px-4 mb-1",attrs:{color:"light-blue accent-3"},on:{click:function(t){return e.validateBtnClicked(e.infos)}}},[e._v("LOGIN")])],1)],1)],1)],1)},c=[],d=n("2f62"),m={data(){return{loginDialog:!1,infos:{name:"",password:""}}},methods:{...Object(d["b"])(["login"]),validateBtnClicked(e){this.getCloseConnectionDialog&&(this.loginDialog=!1),this.login(e)}},computed:{...Object(d["c"])(["getErrorMessage","getCloseConnectionDialog"])}},u=m,p=n("2877"),g=n("6544"),f=n.n(g),h=n("8336"),v=n("b0af"),b=n("99d9"),I=n("169a"),w=n("4bd4"),C=n("2fa4"),x=n("8654"),k=n("71d9"),_=n("2a7f"),y=Object(p["a"])(u,l,c,!1,null,null,null),$=y.exports;f()(y,{VBtn:h["a"],VCard:v["a"],VCardActions:b["a"],VDialog:I["a"],VForm:w["a"],VSpacer:C["a"],VTextField:x["a"],VToolbar:k["a"],VToolbarTitle:_["a"]});var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",[n("v-list-item",[n("v-list-item-avatar",{attrs:{size:"62"}},[n("v-img",{staticClass:"ml-12",attrs:{src:e.getAdminInfos.icon}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"white--text text-uppercase ml-6 headline"},[e._v(e._s(e.getAdminInfos.name))])],1)],1),n("div",{staticClass:"pa-4 mt-4"},[n("v-btn",{staticClass:"title success mb-4",attrs:{block:""}},[e._v("save")]),n("v-btn",{staticClass:"title error mb-4",attrs:{block:""}},[e._v("cancel")]),n("v-btn",{staticClass:"title mb-4",attrs:{block:""},on:{click:e.logout}},[e._v("Logout")])],1)],1)},O=[],j={computed:{...Object(d["c"])(["getAdminInfos"])},methods:{...Object(d["b"])(["logout"])}},S=j,B=n("adda"),D=n("8860"),M=n("da13"),V=n("8270"),A=n("5d23"),L=Object(p["a"])(S,E,O,!1,null,null,null),T=L.exports;f()(L,{VBtn:h["a"],VImg:B["a"],VList:D["a"],VListItem:M["a"],VListItemAvatar:V["a"],VListItemContent:A["a"],VListItemTitle:A["b"]});var N={data(){return{drawer:!1}},methods:{basicsClicked(){this.$router.replace("/basics")},defenseClicked(){this.$router.replace("/defense")},foodClicked(){this.$router.replace("/food")},toolsClicked(){this.$router.replace("/tools")},...Object(d["b"])(["toggleDrawer"])},computed:{...Object(d["c"])(["getAdminConnected","getDrawerStatus"])},components:{LoginDialog:$,Drawer:T}},P=N,R=n("40dc"),U=n("5bc1"),F=n("f774"),J=Object(p["a"])(P,o,r,!1,null,null,null),z=J.exports;f()(J,{VAppBar:R["a"],VAppBarNavIcon:U["a"],VBtn:h["a"],VNavigationDrawer:F["a"],VSpacer:C["a"]});var G={name:"App",components:{Navbar:z},data:()=>({}),methods:{},mounted(){}},q=G,H=n("7496"),K=n("8b9c"),Q=Object(p["a"])(q,s,i,!1,null,null,null),W=Q.exports;f()(Q,{VApp:H["a"],VParallax:K["a"]});var X=n("f309");a["a"].use(X["a"]);var Y=new X["a"]({icons:{iconfont:"mdi"}}),Z=n("bc3a"),ee=n.n(Z),te=n("a7fe"),ne=n.n(te),ae={state:{basicItems:[],defenseItems:[],toolItems:[],foodItems:[],addElementError:""},actions:{createItem({commit:e,rootState:t},n){ee.a.post(`${t.apiURL}/api/items/{"whichItems":"${n.type}"}`,n).then(t=>{e("createItem",t.data)}).catch(t=>{e("createItem",t.response.data),console.log("erreur create: ",t.response.data)})},initItems({commit:e,rootState:t},n){ee.a.get(`${t.apiURL}/api/items/{"whichItems":"${n.whichItems}"}`).then(n=>{e("initItems",n.data),t.adminConnected=n.data.adminConnected,console.log(n.data),n.data.infos&&(t.user=n.data.infos)}).catch(e=>{console.log(`erreur retrieve ${n.whichItems} ${e.response.data}`)})},updateItem({commit:e,rootState:t},n){ee.a.put(`${t.apiURL}/api/items/{"whichItems":"${n.type}"}`,n).catch(a=>{t.adminConnected=!1,e("updateItem",{error:a.response.data,item:n})})},deleteItem({commit:e,rootState:t},n){console.log("id payload recup:",n.id),ee.a.delete(`${t.apiURL}/api/items/{"id":${n.id},"whichItems":"${n.type}"}`).then(t=>{e("initItems",t.data)}).catch(e=>{t.adminConnected=!1,console.log("erreur delete: ",e.response.data)})}},mutations:{createItem(e,t){t.error?e.addElementError=t.error:(e[t.type]=t,e.addElementError="")},initItems(e,t){e[t.type]=t},updateItem(e,t){t.item.enModif=!0,console.log("error lors de l'update",t.error)}},getters:{getBasicItems(e){return e.basicItems},getDefenseItems(e){return e.defenseItems},getFoodItems(e){return e.foodItems},getToolItems(e){return e.toolItems},getAddElementError(e){return e.addElementError}}},se={state:{errorMessage:"",closeConnectionDialog:!1},actions:{login({commit:e,rootState:t},n){ee.a.post(`${t.apiURL}/api/connection/login`,n).then(n=>{t.adminConnected=!0,e("login",n.data),t.user=n.data.infos}).catch(t=>e("login",t.response.data))},logout({rootState:e}){ee.a.post(`${e.apiURL}/api/connection/logout`).then(t=>{e.adminConnected=!1,e.drawer=!1,this.closeConnectionDialog=!0}).catch(e=>console.log(e.response.data))}},mutations:{login(e,t){t.error?e.errorMessage=t:e.errorMessage="",console.log("essaie login, serv renvoi:",t)}},getters:{getErrorMessage(e){return e.errorMessage},getCloseConnectionDialog(e){return e.closeConnectionDialog}}};a["a"].use(d["a"]);const ie=new d["a"].Store({state:{adminConnected:!1,user:{name:"",icon:""},drawer:!1,apiURL:""},modules:{itemsModule:ae,connectionModule:se},actions:{toggleDrawer({commit:e}){e("toggleDrawer")}},mutations:{toggleDrawer(e){e.drawer=!e.drawer}},getters:{getAdminConnected(e){return e.adminConnected},getDrawerStatus(e){return e.drawer},getAdminInfos(e){return e.user}}});var oe=n("8c4f"),re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ShowItems",{attrs:{itemsType:"basicItems",items:e.getBasicItems.items},on:{deleteBtnClicked:e.deleteItem,saveBtnClicked:e.updateItem,addElementBtnClicked:e.createItem}})},le=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"max-width":"80%","margin-left":"auto","margin-right":"auto","text-align":"center"}},[n("table",{staticClass:"my-5"},[e._m(0),n("tbody",[e._l(e.items,(function(t,a){return n("tr",{key:t.id},[t.enModif?e._e():n("td",{staticClass:"title"},[e._v(e._s(t.name))]),t.enModif?e._e():n("td",{staticClass:"title",attrs:{id:"tdIngredients"}},[e._v(e._s(t.ingredients))]),t.enModif?e._e():n("td",{staticClass:"title"},[n("img",{attrs:{src:t.icon,width:"204px",height:"112px"}})]),t.enModif?e._e():n("td",{staticClass:"title"},[e._v(e._s(t.description))]),e.getAdminConnected?[t.enModif?[n("td",[n("v-text-field",{attrs:{label:"Name"},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"item.name"}})],1),n("td",{staticClass:"ingredientsCol"},[n("v-text-field",{attrs:{label:"Ingredients"},model:{value:t.ingredients,callback:function(n){e.$set(t,"ingredients",n)},expression:"item.ingredients"}})],1),n("td",[n("v-text-field",{attrs:{label:"Image URL"},model:{value:t.icon,callback:function(n){e.$set(t,"icon",n)},expression:"item.icon"}})],1),n("td",[n("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(n){e.$set(t,"description",n)},expression:"item.description"}})],1),t.enModif?n("v-btn",{staticClass:"mx-2 my-4",staticStyle:{display:"block"},attrs:{fab:"",dark:"",small:"",color:"success"},on:{click:function(t){return e.saveBtnClicked(a)}}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-check")])],1):e._e()]:e._e(),n("v-btn",{staticClass:"mx-2 my-4 mt-5 red accent-3",staticStyle:{display:"block"},attrs:{fab:"",dark:"",small:""},on:{click:function(t){return e.deleteBtnClicked(a)}}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-minus")])],1),t.enModif?e._e():[t.enModif?e._e():n("v-btn",{staticClass:"mx-2 my-4",staticStyle:{display:"block"},attrs:{fab:"",dark:"",small:"",color:"warning"},on:{click:function(e){t.enModif=!0}}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-pencil")])],1)]]:e._e()],2)})),e.getAdminConnected?n("tr",[n("td",[n("v-text-field",{attrs:{label:"Name"},model:{value:e.newItem.name,callback:function(t){e.$set(e.newItem,"name",t)},expression:"newItem.name"}})],1),n("td",{staticClass:"ingredientsCol"},[n("v-text-field",{attrs:{label:"Ingredients"},model:{value:e.newItem.ingredients,callback:function(t){e.$set(e.newItem,"ingredients",t)},expression:"newItem.ingredients"}})],1),n("td",[n("v-text-field",{attrs:{label:"Image URL"},model:{value:e.newItem.icon,callback:function(t){e.$set(e.newItem,"icon",t)},expression:"newItem.icon"}})],1),n("td",[n("v-text-field",{attrs:{label:"Description"},model:{value:e.newItem.description,callback:function(t){e.$set(e.newItem,"description",t)},expression:"newItem.description"}})],1),n("v-btn",{staticClass:"mx-2 mt-6",attrs:{fab:"",dark:"",small:"",color:"teal accent-3"},on:{click:e.addElementBtnClicked}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-plus")])],1)],1):e._e()],2)]),n("p",{staticClass:"red--text text--darken-3 text-uppercase title"},[e._v(e._s(e.getAddElementError))])])},de=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("th",{staticStyle:{width:"220px","border-left":"3px solid #0091EA"}},[e._v("Name")]),n("th",{staticStyle:{width:"400px"}},[e._v("Ingredients")]),n("th",{staticStyle:{width:"200px"}},[e._v("Image")]),n("th",{staticStyle:{width:"400px","border-right":"3px solid #0091EA"}},[e._v("Description")])])}],me={props:["items","itemsType"],data(){return{newItem:{}}},mounted(){console.log("items recup dans showitems:",this.items)},methods:{saveBtnClicked(e){this.items[e].enModif=!this.items[e].enModif,this.$emit("saveBtnClicked",this.items[e])},deleteBtnClicked(e){this.$emit("deleteBtnClicked",this.items[e])},addElementBtnClicked(){this.newItem.name=this.newItem.name||"",this.newItem.icon=this.newItem.icon||"",this.newItem.description=this.newItem.description||"",this.newItem.ingredients=this.newItem.ingredients||"",this.newItem.enModif=!1,this.newItem.type=this.itemsType||"basicItems",this.$emit("addElementBtnClicked",this.newItem),this.newItem={}}},computed:{...Object(d["c"])(["getAdminConnected","getAddElementError"])}},ue=me,pe=(n("7c03"),n("132d")),ge=Object(p["a"])(ue,ce,de,!1,null,"7b4c45d3",null),fe=ge.exports;f()(ge,{VBtn:h["a"],VIcon:pe["a"],VTextField:x["a"]});var he={components:{ShowItems:fe},data(){return{}},computed:{...Object(d["c"])(["getBasicItems"])},methods:{...Object(d["b"])(["initItems","updateItem","createItem","deleteItem"])},created(){this.initItems({whichItems:"basicItems"})}},ve=he,be=Object(p["a"])(ve,re,le,!1,null,null,null),Ie=be.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ShowItems",{attrs:{itemsType:"defenseItems",items:e.getDefenseItems.items},on:{deleteBtnClicked:e.deleteItem,saveBtnClicked:e.updateItem,addElementBtnClicked:e.createItem}})},Ce=[],xe={components:{ShowItems:fe},data(){return{}},computed:{...Object(d["c"])(["getDefenseItems"])},methods:{...Object(d["b"])(["initItems","updateItem","createItem","deleteItem"])},mounted(){this.initItems({whichItems:"defenseItems"})}},ke=xe,_e=Object(p["a"])(ke,we,Ce,!1,null,null,null),ye=_e.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ShowItems",{attrs:{itemsType:"foodItems",items:e.getFoodItems.items},on:{deleteBtnClicked:e.deleteItem,saveBtnClicked:e.updateItem,addElementBtnClicked:e.createItem}})},Ee=[],Oe={components:{ShowItems:fe},data(){return{}},computed:{...Object(d["c"])(["getFoodItems"])},methods:{...Object(d["b"])(["initItems","updateItem","createItem","deleteItem"])},mounted(){this.initItems({whichItems:"foodItems"})}},je=Oe,Se=Object(p["a"])(je,$e,Ee,!1,null,null,null),Be=Se.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ShowItems",{attrs:{itemsType:"toolItems",items:e.getToolItems.items},on:{deleteBtnClicked:e.deleteItem,saveBtnClicked:e.updateItem,addElementBtnClicked:e.createItem}})},Me=[],Ve={components:{ShowItems:fe},data(){return{}},computed:{...Object(d["c"])(["getToolItems"])},methods:{...Object(d["b"])(["initItems","updateItem","createItem","deleteItem"])},mounted(){this.initItems({whichItems:"toolItems"})}},Ae=Ve,Le=Object(p["a"])(Ae,De,Me,!1,null,null,null),Te=Le.exports,Ne=[{path:"/",component:Ie},{path:"/basics",component:Ie},{path:"/defense",component:ye},{path:"/food",component:Be},{path:"/tools",component:Te}];a["a"].config.productionTip=!1,ee.a.defaults.withCredentials=!0,a["a"].use(ne.a,ee.a),a["a"].use(oe["a"]);const Pe=new oe["a"]({routes:Ne});new a["a"]({router:Pe,store:ie,vuetify:Y,render:e=>e(W)}).$mount("#app")},"7c03":function(e,t,n){"use strict";var a=n("db76"),s=n.n(a);s.a},db76:function(e,t,n){}});
//# sourceMappingURL=app.b5d135b6.js.map