(function(){"use strict";var e={242:function(e,t,n){var s=n(9242),a=n(3396);function r(e,t,n,s,r,o){const i=(0,a.up)("Navbar"),l=(0,a.up)("SideBar"),d=(0,a.up)("Notification"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),e.isActive?((0,a.wg)(),(0,a.j4)(l,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(d),(0,a.Wm)(u)],64)}const o=e=>((0,a.dD)("data-v-dd4618bc"),e=e(),(0,a.Cn)(),e),i={class:"navbar"},l={class:"navbar__top-section"},d={class:"top-section__title"},u=o((()=>(0,a._)("p",null,"GitLet",-1))),c={class:"top-section__features"},p={class:"features__items"},m={class:"items__item"},_=o((()=>(0,a._)("p",null,"Home",-1))),v=o((()=>(0,a._)("div",{class:"items__item"},[(0,a._)("p",null,"Learn")],-1))),f={class:"items__item"},g=o((()=>(0,a._)("p",null,"Editor",-1))),h=o((()=>(0,a._)("div",{class:"items__item"},[(0,a._)("p",null,"Groups")],-1))),w={class:"items__item"},b=o((()=>(0,a._)("p",null,"Profile",-1))),W=[b];function y(e,t,n,s,r,o){const b=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("nav",l,[(0,a._)("div",d,[(0,a.Wm)(b,{class:"link",to:"/"},{default:(0,a.w5)((()=>[u])),_:1})]),(0,a._)("div",c,[(0,a._)("div",p,[(0,a._)("div",m,[(0,a.Wm)(b,{class:"link",to:"/"},{default:(0,a.w5)((()=>[_])),_:1})]),v,(0,a._)("div",f,[(0,a.Wm)(b,{class:"link",to:"/interaction/lernset"},{default:(0,a.w5)((()=>[g])),_:1})]),h,(0,a._)("div",w,[(0,a._)("button",{onClick:t[0]||(t[0]=t=>e.isSidebarActive?e.hideSidebar():e.showSidebar()),class:"item__button"},W)])])])])])}var k=n(65),S=(0,k.MT)({state:{isActive:!1},getters:{getIsActive:function(e){return e.isActive}},mutations:{SHOW_SIDEBAR(e,t){e.isActive=t}},actions:{async showNotification({commit:e}){e("SHOW_SIDEBAR",!0),setTimeout((()=>{e("SHOW_SIDEBAR")}),1e3)}},modules:{}});function D(){S.state.isActive=!0}function C(){S.state.isActive=!1}var N=(0,a.aZ)({name:"Navbar",data(){return{isSidebarActive:!1}},methods:{showSidebar(){this.isSidebarActive=!0,D()},hideSidebar(){this.isSidebarActive=!1,C()}}}),I=n(89);const x=(0,I.Z)(N,[["render",y],["__scopeId","data-v-dd4618bc"]]);var Z=x,L=n(7139);const E=e=>((0,a.dD)("data-v-5dc41cf0"),e=e(),(0,a.Cn)(),e),A=E((()=>(0,a._)("p",null,"Error!",-1))),V=[A];function U(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,L.C_)([e.isActive?"enabled":"disabled","notification"])},V,2)}var z=(0,k.MT)({state:{isActive:!1},getters:{getIsActive:function(e){return e.isActive}},mutations:{SHOW_NOTIFICATION(e,t){e.isActive=t}},actions:{async showNotification({commit:e}){e("SHOW_NOTIFICATION",!0),setTimeout((()=>{e("SHOW_NOTIFICATION")}),1e3)}},modules:{}}),B=(0,a.aZ)({name:"notification",computed:{isActive(){return z.state.isActive}}});const $=(0,I.Z)(B,[["render",U],["__scopeId","data-v-5dc41cf0"]]);var T=$;const O={key:0,class:"side-bar"};function H(e,t,n,s,r,o){const i=(0,a.up)("Button");return e.user.username&&e.user.email?((0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("div",null,[(0,a._)("p",null,"User: "+(0,L.zw)(e.user.username),1),(0,a._)("p",null,"Email: "+(0,L.zw)(e.user.email),1)]),(0,a.Wm)(i,{onClick:e.logout,class:"side-bar__button",size:"small",label:"logout"},null,8,["onClick"])])):(0,a.kq)("",!0)}n(7658);var F=n(6943);function R(){z.state.isActive=!0,setTimeout((()=>{z.state.isActive=!1}),2e3)}function G(e){for(var t=0,n=0;t<e.length;t++)n=Math.imul(31,n)+e.charCodeAt(t)|0;return n}var M=(0,k.MT)({state:{users:[],user:{}},getters:{getUsers:function(e){return e.users},getUser:function(e){return e.user}},actions:{async fetchUsers({commit:e}){try{F.Z.get("http://localhost:8081/get/users/all").then((t=>{e("SET_USERS",t.data)}))}catch(t){}},async fetchUser({commit:e}){try{F.Z.get("http://localhost:8081/get/user/username").then((t=>{e("SET_USER",t.data)}))}catch(t){}}},mutations:{SET_USERS(e,t){e.users=t},SET_USER(e,t){e.user=t}}});const q=e=>((0,a.dD)("data-v-37648a3e"),e=e(),(0,a.Cn)(),e),P={class:"login"},j={class:"login__modal"},Y=q((()=>(0,a._)("h1",null,"Login",-1))),K={class:"modal__form"},J={class:"modal__link"};function Q(e,t,n,s,r,o){const i=(0,a.up)("InputField"),l=(0,a.up)("Button"),d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",j,[Y,(0,a._)("form",K,[(0,a.Wm)(i,{id:"firstInput",type:"text",modelValue:e.user.username,"onUpdate:modelValue":t[0]||(t[0]=t=>e.user.username=t),label:"username"},null,8,["modelValue"]),(0,a.Wm)(i,{id:"secondInput",disableValidation:!0,type:"password",modelValue:e.user.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.user.password=t),label:"password"},null,8,["modelValue"]),(0,a.Wm)(l,{label:"Login",type:"button",size:"max",onClick:e.loginUser},null,8,["onClick"])]),(0,a._)("div",J,[(0,a.Wm)(d,{class:"link__item",to:"register"},{default:(0,a.w5)((()=>[(0,a.Uk)("Don't have an Account")])),_:1}),(0,a.Wm)(d,{class:"link__item",to:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Forgot Password")])),_:1})])])])}const X={key:0,class:"input__label",for:"field"},ee={class:"input__sub"},te=["type","placeholder"],ne={key:0};function se(e,t,n,r,o,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,L.C_)(["input",[{error:!e.validate(e.text,e.type)},{active:e.active}]])},[""!==e.text?((0,a.wg)(),(0,a.iD)("label",X,(0,L.zw)(e.label),1)):(0,a.kq)("",!0),(0,a._)("div",ee,[(0,a.wy)((0,a._)("input",{autocomplete:"false",type:"password"===e.type?"password":"text",onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",e.text)),"onUpdate:modelValue":t[1]||(t[1]=t=>e.text=t),class:"sub__field",placeholder:e.label},null,40,te),[[s.YZ,e.text]]),""!==e.text&&e.withMaxNumber?((0,a.wg)(),(0,a.iD)("p",ne,(0,L.zw)(e.maxNumber),1)):(0,a.kq)("",!0)])],2)}function ae(e){const t=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);return t.test(e)}function re(e){const t=new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);return t.test(e)}function oe(e){const t=new RegExp(/^[A-Za-z\s]*$/);return t.test(e)}function ie(e){const t=new RegExp(/^\d+$/);return t.test(e)}var le=(0,a.aZ)({name:"inputField",props:{label:{type:String,default:"type something"},withMaxNumber:{type:Boolean,default:!1},modelValue:{},type:{type:String,required:!0,validator(e){return["email","password","text","number"].includes(e)}},disableValidation:{type:Boolean,required:!1}},emits:["update:modelValue"],data(){return{text:"",count:30,maxNumber:0,content:this.value,hasError:!1,active:!1,disableValidations:this.disableValidation}},methods:{validate(e,t){if(""!==e&&!this.disableValidations){if("password"===t)return re(e);if("email"===t)return ae(e);if("text"===t)return oe(e);if("number"===t)return ie(e)}return!0}},watch:{text:function(){this.maxNumber=this.count-this.text.length,this.text.length>0?this.active=!0:this.active=!1}}});const de=(0,I.Z)(le,[["render",se]]);var ue=de;const ce={class:"button"},pe=["disabled"];function me(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",ce,[(0,a._)("button",{disabled:e.disabled,class:(0,L.C_)(["button__item",[{small:"small"===e.size},{medium:"medium"===e.size},{large:"large"===e.size},{max:"max"===e.size},{disabled:e.disabled}]]),type:"button"},(0,L.zw)(e.label),11,pe)])}var _e=(0,a.aZ)({name:"Button",props:{label:{type:String,default:"Click"},size:{type:String,default:"medium",validator(e){return["small","medium","large","max"].includes(e)}},disabled:{type:Boolean,default:!1}}});const ve=(0,I.Z)(_e,[["render",me],["__scopeId","data-v-5e50ba44"]]);var fe=ve;function ge(e){let t=!0;return Object.values(e).forEach((e=>{0===e.length&&(t=!1)})),t}var he=(0,a.aZ)({name:"login",data(){return{user:{username:"",password:""}}},components:{InputField:ue,Button:fe},mounted(){window.addEventListener("keypress",(e=>{"Enter"===e.code&&this.loginUser()}))},methods:{loginUser(){ge(this.user)?jn(this.user):R()}}});const we=(0,I.Z)(he,[["render",Q],["__scopeId","data-v-37648a3e"]]);var be=we,We=n(2483);const ye={class:"home"},ke={class:"home__title"},Se={class:"home__lernsets"},De=(0,a._)("h2",null,"Deine Lernsets",-1),Ce={class:"home__features"},Ne={class:"home__groups"},Ie=(0,a._)("h2",null,"Groups",-1);function xe(e,t,n,s,r,o){const i=(0,a.up)("Lernsets"),l=(0,a.up)("Features"),d=(0,a.up)("Groups");return(0,a.wg)(),(0,a.iD)("div",ye,[(0,a._)("h1",ke,"Guten Tag "+(0,L.zw)(e.user.username)+" ????",1),(0,a._)("div",Se,[De,(0,a.Wm)(i)]),(0,a._)("div",Ce,[(0,a.Wm)(l)]),(0,a._)("div",Ne,[Ie,(0,a.Wm)(d)])])}const Ze={class:"flex-box"},Le=["onClick"],Ee={class:"lernset__title"},Ae={class:"lernset__description"};function Ve(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",Ze,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.lernsets,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"flex-box__lernset",onClick:n=>e.navigateToLernset(t.id),key:t.name},[(0,a._)("p",Ee,(0,L.zw)(t.name),1),(0,a._)("p",Ae,(0,L.zw)(t.description),1)],8,Le)))),128))])}function Ue(e){const t=`; ${document.cookie}`,n=t.split(`; ${e}=`);if(2===n.length)return n.pop().split(";").shift()}function ze(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}async function Be(){const e=Ue("username"),t=Ue("session");return F.Z.get(`http://localhost:8081/get/lernset/username/session?username=${e}&session=${t}`).then((e=>{const t=e.data;return t}))}async function $e(e){const t=Ue("username"),n=Ue("session");try{return F.Z.get(`http://localhost:8081/get/lernset/id?username=${t}&session=${n}&id=${e}`).then((e=>{const t=e.data;return t}))}catch(s){return R(),{}}}var Te=(0,a.aZ)({name:"Lernsets",data(){return{lernsets:{}}},methods:{navigateToLernset(e){Gn.push(`/lernset/${e}`)}},async created(){(await(this)).lernsets=await Be()}});const Oe=(0,I.Z)(Te,[["render",Ve],["__scopeId","data-v-bcd789b6"]]);var He=Oe;const Fe={class:"features"},Re=(0,a.uE)('<div class="features__flexbox" data-v-2a814c6e><div class="flexbox__container" data-v-2a814c6e><p class="container__icon" data-v-2a814c6e>+</p><p data-v-2a814c6e>Create new Lernset</p></div><div class="flexbox__container" data-v-2a814c6e><p class="container__icon" data-v-2a814c6e>+</p><p data-v-2a814c6e>Create new Group</p></div></div>',1),Ge=[Re];function Me(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",Fe,Ge)}var qe=(0,a.aZ)({name:"Features"});const Pe=(0,I.Z)(qe,[["render",Me],["__scopeId","data-v-2a814c6e"]]);var je=Pe;const Ye={class:"search-field"},Ke=["disabled","placeholder"];function Je(e,t,n,r,o,i){return(0,a.wg)(),(0,a.iD)("div",Ye,[(0,a.wy)((0,a._)("input",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=t=>e.input=t),placeholder:e.label,id:"search-field"},null,8,Ke),[[s.nr,e.input]])])}var Qe=(0,a.aZ)({name:"SearchField",props:{disabled:{type:Boolean,default:!1},label:{type:String,deafult:"search"}},data(){return{input:"",label:this.label}}});const Xe=(0,I.Z)(Qe,[["render",Je],["__scopeId","data-v-03d4c01e"]]);var et=Xe;const tt={class:"groups"},nt={class:"group__title"},st={class:"group__description"};function at(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",tt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.groups,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"groups__group",key:e.name},[(0,a._)("p",nt,(0,L.zw)(e.name),1),(0,a._)("p",st,(0,L.zw)(e.description),1)])))),128))])}function rt(){const e=Ue("username"),t=Ue("session");return F.Z.get(`http://localhost:8081/get/teams/by/username/session?username=${e}&session=${t}`).then((e=>{const t=e.data;return t}))}var ot=(0,a.aZ)({name:"Groups",data(){return{groups:{}}},async created(){(await(this)).groups=await rt()}});const it=(0,I.Z)(ot,[["render",at],["__scopeId","data-v-b12b959a"]]);var lt=it,dt=(0,a.aZ)({name:"Home",data(){return{user:{},groups:{}}},components:{Lernsets:He,Features:je,SearchField:et,Groups:lt},methods:{},computed:{},async created(){(await(this)).user=await Mn()}});const ut=(0,I.Z)(dt,[["render",xe]]);var ct=ut,pt=n.p+"img/404.10e10d25.png";const mt={class:"not-found"},_t=(0,a._)("h1",{class:"not-found__title"},"Oops, looks like you're lost in space!",-1),vt=(0,a._)("img",{class:"not-found__image",src:pt},null,-1),ft=[_t,vt];function gt(e,t){return(0,a.wg)(),(0,a.iD)("div",mt,ft)}const ht={},wt=(0,I.Z)(ht,[["render",gt]]);var bt=wt;const Wt={class:"register"},yt={class:"register__modal"},kt=(0,a._)("h1",null,"Register",-1),St={class:"modal__form"},Dt={class:"form__section"},Ct={class:"form__section"},Nt={class:"form__section"},It={class:"form__section"},xt={class:"form__links"},Zt={key:0};function Lt(e,t,n,s,r,o){const i=(0,a.up)("InputField"),l=(0,a.up)("Button"),d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",Wt,[(0,a._)("div",yt,[kt,(0,a._)("form",St,[(0,a._)("div",Dt,[(0,a.Wm)(i,{type:"text",modelValue:e.user.username,"onUpdate:modelValue":t[0]||(t[0]=t=>e.user.username=t),label:"username"},null,8,["modelValue"])]),(0,a._)("div",Ct,[(0,a.Wm)(i,{type:"password",modelValue:e.user.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.user.password=t),label:"password"},null,8,["modelValue"])]),(0,a._)("div",Nt,[(0,a.Wm)(i,{type:"email",modelValue:e.user.email,"onUpdate:modelValue":t[2]||(t[2]=t=>e.user.email=t),label:"email"},null,8,["modelValue"])]),(0,a._)("div",It,[(0,a.Wm)(i,{type:"number",modelValue:e.user.age,"onUpdate:modelValue":t[3]||(t[3]=t=>e.user.age=t),label:"age"},null,8,["modelValue"])]),(0,a.Wm)(l,{onClick:e.createNewUser,label:"Register",size:"max"},null,8,["onClick"])]),(0,a._)("div",xt,[(0,a.Wm)(d,{class:"links__link",to:"login"},{default:(0,a.w5)((()=>[(0,a.Uk)("Have already an Account")])),_:1})]),e.error?((0,a.wg)(),(0,a.iD)("p",Zt,"Error!")):(0,a.kq)("",!0)])])}var Et=(0,a.aZ)({name:"register",data(){return{user:{username:"",password:"",email:"",age:0},error:!1}},components:{InputField:ue,Button:fe},mounted(){window.addEventListener("keypress",(e=>{"Enter"===e.code&&this.createNewUser()}))},methods:{createNewUser(){ge(this.user)?qn(this.user):R()}}});const At=(0,I.Z)(Et,[["render",Lt]]);var Vt=At;const Ut=e=>((0,a.dD)("data-v-97fef758"),e=e(),(0,a.Cn)(),e),zt={class:"lernset-view"},Bt={key:0,class:"lernset-view__container"},$t={class:"container__title"},Tt={class:"container__description"},Ot={class:"container__options"},Ht={class:"options__option"},Ft=Ut((()=>(0,a._)("h3",null,"Alle Begriffe",-1))),Rt={class:"container__overview"},Gt={key:1},Mt=Ut((()=>(0,a._)("h1",null,"Not Found corresponding Lernset ????",-1))),qt=[Mt];function Pt(e,t,n,s,r,o){const i=(0,a.up)("Carousel");return(0,a.wg)(),(0,a.iD)("div",zt,[e.lernset?((0,a.wg)(),(0,a.iD)("div",Bt,[(0,a._)("h1",$t,(0,L.zw)(e.lernset.name),1),(0,a._)("p",Tt,(0,L.zw)(e.lernset.description),1),(0,a._)("div",Ot,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.options,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a._)("p",Ht,(0,L.zw)(e),1)])))),128))]),e.lernset.name?((0,a.wg)(),(0,a.j4)(i,{key:0,lernsetName:e.lernset.name},null,8,["lernsetName"])):(0,a.kq)("",!0),Ft,(0,a._)("div",Rt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.words,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"overview__section",key:e.firstWord.word},[(0,a._)("p",null,(0,L.zw)(e.firstWord.word),1),(0,a._)("p",null,(0,L.zw)(e.secondWord.word),1)])))),128))])])):((0,a.wg)(),(0,a.iD)("div",Gt,qt))])}var jt=JSON.parse('["Antworten","Karteikarten","Testen","Memory"]');const Yt={class:"carousel"},Kt={class:"carousel__container"},Jt={class:"container__card"},Qt={key:0},Xt={key:1},en={class:"carousel__step"},tn={class:"button__count"};function nn(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",Yt,[(0,a._)("div",Kt,[(0,a._)("div",Jt,[(0,a._)("button",{class:(0,L.C_)([e.active?"card__button--front":"card__button--back","card__button"]),onClick:t[0]||(t[0]=(...t)=>e.flipCard&&e.flipCard(...t))},[e.active?((0,a.wg)(),(0,a.iD)("p",Qt,(0,L.zw)(e.words[e.currentWordNumber]?.firstWord.word),1)):((0,a.wg)(),(0,a.iD)("p",Xt,(0,L.zw)(e.words[e.currentWordNumber]?.secondWord.word),1))],2)])]),(0,a._)("div",en,[(0,a._)("button",{class:"step__button",onClick:t[1]||(t[1]=(...t)=>e.previousCard&&e.previousCard(...t))},"???"),(0,a._)("p",tn,(0,L.zw)(e.currentWordNumber+1)+"/"+(0,L.zw)(e.words.length),1),(0,a._)("button",{class:"step__button",onClick:t[2]||(t[2]=(...t)=>e.nextCard&&e.nextCard(...t))},"???")])])}function sn(e){const t=Ue("username"),n=Ue("session");return F.Z.get(`http://localhost:8081/get/words?name=${e}&username=${t}&session=${n}`).then((e=>{let t=e.data;const n=an(t);return n}))}function an(e){const t=[];return e.forEach((e=>{const n={firstWord:e.firstWord,secondWord:e.secondWord};t.push(n)})),t}var rn=(0,a.aZ)({name:"Carousel",props:{lernsetName:{type:String,required:!0}},data(){return{words:{},currentWordNumber:0,active:!1}},async created(){(await(this)).words=await sn(this.lernsetName)},methods:{flipCard(){this.active=!this.active},nextCard(){this.currentWordNumber<this.words.length-1&&(this.currentWordNumber+=1,this.active=!1)},previousCard(){this.currentWordNumber>0&&(this.currentWordNumber-=1,this.active=!1)}}});const on=(0,I.Z)(rn,[["render",nn],["__scopeId","data-v-4bef40b2"]]);var ln=on,dn=(0,a.aZ)({name:"lernset-view",data(){return{lernset:{},options:jt,words:{}}},components:{Carousel:ln},async created(){let e=this.$route.params.id;"string"==typeof e&&((await(this)).lernset=await $e(parseInt(e))),(await(this)).words=await sn(this.lernset.name)}});const un=(0,I.Z)(dn,[["render",Pt],["__scopeId","data-v-97fef758"]]);var cn=un;const pn=e=>((0,a.dD)("data-v-60efe4aa"),e=e(),(0,a.Cn)(),e),mn={class:"interaction-lernset-view"},_n={class:"interaction-lernset-view__top"},vn=pn((()=>(0,a._)("h1",null,"Lernset erstellen",-1))),fn={class:"interaction-lernset-view__action"},gn={key:0,class:"action__label"},hn=pn((()=>(0,a._)("br",null,null,-1))),wn={key:1,class:"action__label"},bn={class:"interaction-lernset-view__selection"},Wn={class:"interaction-lernset-view__word-set"},yn={class:"container__count"},kn=["onClick"],Sn={key:0,class:"container__label"},Dn=["onUpdate:modelValue"],Cn={key:0,class:"container__label"},Nn=["onUpdate:modelValue"],In={class:"word-set__container",style:{padding:"30px",border:"1px solid #3f85ed8f"}};function xn(e,t,n,r,o,i){const l=(0,a.up)("Button"),d=(0,a.up)("Selection");return(0,a.wg)(),(0,a.iD)("div",mn,[(0,a._)("div",null,[(0,a._)("div",_n,[vn,(0,a.Wm)(l,{onClick:e.createNewLernset,disabled:e.createButton,label:"create Lernset",type:"button",size:"max"},null,8,["onClick","disabled"])]),(0,a._)("div",fn,[e.lernsetName?((0,a.wg)(),(0,a.iD)("label",gn,"Titel")):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{class:"action__input","onUpdate:modelValue":t[0]||(t[0]=t=>e.lernsetName=t),placeholder:"Gib einen Titel f??r dein Lernset ein wie 'Chemie: Lektion 22'"},null,512),[[s.nr,e.lernsetName]]),hn,e.lernsetDescription?((0,a.wg)(),(0,a.iD)("label",wn,"Beschreibung")):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{class:"action__input","onUpdate:modelValue":t[1]||(t[1]=t=>e.lernsetDescription=t),placeholder:"Das sollte eine kurze Beschreibung sein"},null,512),[[s.nr,e.lernsetDescription]])]),(0,a._)("div",bn,[(0,a.Wm)(d,{modelValue:e.firstWordLanguage,"onUpdate:modelValue":t[2]||(t[2]=t=>e.firstWordLanguage=t),selection:e.languages,label:"Begriff Language"},null,8,["modelValue","selection"]),(0,a.Wm)(d,{modelValue:e.secondWordLanguage,"onUpdate:modelValue":t[3]||(t[3]=t=>e.secondWordLanguage=t),selection:e.languages,label:"Definition Language"},null,8,["modelValue","selection"])]),(0,a._)("div",Wn,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.lernsetWords,((t,n)=>((0,a.wg)(),(0,a.iD)("div",{key:t.firstWord.word,class:"word-set__container"},[(0,a._)("p",yn,(0,L.zw)(n+1),1),(0,a._)("button",{class:"container__delete",onClick:t=>e.deleteWord(n)},"x",8,kn),(0,a._)("div",null,[t.firstWord.word?((0,a.wg)(),(0,a.iD)("label",Sn,"Begriff")):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{class:"container__input","onUpdate:modelValue":e=>t.firstWord.word=e,placeholder:"Begriff"},null,8,Dn),[[s.nr,t.firstWord.word]])]),(0,a._)("div",null,[t.secondWord.word?((0,a.wg)(),(0,a.iD)("label",Cn,"Definition")):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{class:"container__input","onUpdate:modelValue":e=>t.secondWord.word=e,placeholder:"Definition"},null,8,Nn),[[s.nr,t.secondWord.word]])])])))),128)),(0,a._)("div",In,[(0,a._)("input",{class:"container__input",id:"firstInput",placeholder:"Begriff",onInput:t[4]||(t[4]=(...t)=>e.addFirstWordToList&&e.addFirstWordToList(...t))},null,32),(0,a._)("input",{class:"container__input",id:"secondInput",placeholder:"Definition",onInput:t[5]||(t[5]=(...t)=>e.addSecondWordToList&&e.addSecondWordToList(...t))},null,32)])]),(0,a.Wm)(l,{disabled:e.addButton,label:"add Word",type:"button",size:"medium",onClick:t[6]||(t[6]=t=>e.addWord())},{default:(0,a.w5)((()=>[(0,a.Uk)("add new Word")])),_:1},8,["disabled"])])])}const Zn={class:"select"},Ln={class:"select__label"},En=["value"];function An(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",Zn,[(0,a._)("label",Ln,(0,L.zw)(e.label)+":",1),(0,a._)("select",{onChange:t[0]||(t[0]=t=>e.updateSelection(t)),name:"select",class:"select__selection"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.arrayList,(e=>((0,a.wg)(),(0,a.iD)("option",{class:"selection__option",key:e,value:e.toUpperCase()},(0,L.zw)(e),9,En)))),128))],32)])}var Vn=(0,a.aZ)({name:"Selection",props:{selection:Array,label:String,modelValue:String},emits:["update:modelValue"],data(){return{arrayList:this.selection}},methods:{updateSelection(e){this.$emit("update:modelValue",e.target.value)}}});const Un=(0,I.Z)(Vn,[["render",An],["__scopeId","data-v-f12a82ca"]]);var zn,Bn=Un;(function(e){e["GERMAN"]="GERMAN",e["ENGLISH"]="ENGLISH",e["FRENCH"]="FRENCH",e["SPANISH"]="SPANISH"})(zn||(zn={}));var $n=(0,a.aZ)({name:"InteractionLernsetView",data(){return{wordsSet:{firstWord:"",secondWord:""},createButton:!0,addButton:!0,lernsetWords:[],lernsetName:"",lernsetDescription:"",firstWordLanguage:"",secondWordLanguage:"",languages:["English","German","French","Spanish"]}},components:{Button:fe,InputField:ue,Selection:Bn},mounted(){window.addEventListener("keypress",(e=>{"Enter"===e.code&&this.addWord()}))},watch:{wordsSet:{deep:!0,handler(){""!==this.wordsSet.firstWord&&""!==this.wordsSet.secondWord?this.addButton=!1:this.addButton=!0}},lernsetWords:{deep:!0,handler(){this.lernsetWords.length>0?this.createButton=!1:this.createButton=!0}}},methods:{createNewLernset(){},deleteWord(e){this.lernsetWords.splice(e,1)},addWord(){if(""!==this.wordsSet.firstWord&&""!==this.wordsSet.secondWord){const e={firstWord:{word:this.wordsSet.firstWord,language:this.languageMapper(this.firstWordLanguage)},secondWord:{word:this.wordsSet.secondWord,language:this.languageMapper(this.secondWordLanguage)}};this.lernsetWords.push(e),this.resetWordSet()}},languageMapper(e){return e.toLocaleUpperCase()===zn.ENGLISH.toString()?zn.ENGLISH:e.toLocaleUpperCase()===zn.FRENCH.toString()?zn.FRENCH:e.toLocaleUpperCase()===zn.GERMAN.toString()?zn.GERMAN:zn.SPANISH},resetWordSet(){document.getElementById("firstInput").value="",document.getElementById("secondInput").value="",this.wordsSet.firstWord="",this.wordsSet.secondWord=""},addFirstWordToList(e){this.wordsSet.firstWord=e.target.value},addSecondWordToList(e){this.wordsSet.secondWord=e.target.value}}});const Tn=(0,I.Z)($n,[["render",xn],["__scopeId","data-v-60efe4aa"]]);var On=Tn;function Hn(){return void 0==Ue("username")||void 0==Ue("session")?(console.log("User is not authenticated"),!1):(console.log("User is authenticated"),!0)}const Fn=[{path:"/",name:"home",component:ct},{path:"/login",name:"login",component:be},{path:"/register",name:"register",component:Vt},{path:"/lernset/:id",name:"lernset",component:cn},{path:"/:catchAll(.*)",name:"notFound",component:bt},{path:"/interaction/lernset",name:"interactionLernset",component:On}],Rn=(0,We.p7)({history:(0,We.PO)("/"),routes:Fn});Rn.beforeEach(((e,t,n)=>{"login"===e.name||"register"===e.name||Hn()?n():n({name:"login"})}));var Gn=Rn;async function Mn(){const e=Ue("username"),t=Ue("session");return F.Z.get(`http://localhost:8081/get/user/username/session?username=${e}&session=${t}`).then((e=>{const t=e.data;return t}))}async function qn(e){return await F.Z.post(`http://localhost:8081/new/user?username=${e.username}&password=${e.password}&age=${e.age}&email=${e.email}`).then((e=>{const t=e.data;if(ge(t))R();else{M.state.user=t;const e=G(t.username).toString();Pn(e,t.username,t.password),document.cookie=`username=${t.username}`,document.cookie=`session=${e}`,Gn.push("/")}})).catch((()=>{R()}))}function Pn(e,t,n){F.Z.post(`http://localhost:8081/set/session/user?username=${t}&password=${n}&session=${e}`)}async function jn(e){return await F.Z.post(`http://localhost:8081/login/user?username=${e.username}&password=${e.password}`,{method:"POST"}).then((t=>{const n=t.data;if(ge(n)){M.state.user=n;const t=G(e.username).toString();Pn(t,e.username,e.password),document.cookie=`username=${e.username}`,document.cookie=`session=${t}`,Gn.push("/")}else R()})).catch((()=>R()))}var Yn=(0,a.aZ)({name:"SideBar",data(){return{user:{}}},components:{Button:fe},methods:{logout(){ze("session"),ze("username"),location.reload()}},async created(){(await(this)).user=await Mn()}});const Kn=(0,I.Z)(Yn,[["render",H],["__scopeId","data-v-4e3eb5c2"]]);var Jn=Kn,Qn=(0,a.aZ)({name:"app",components:{Navbar:Z,Notification:T,SideBar:Jn},computed:{isActive(){return S.state.isActive}}});const Xn=(0,I.Z)(Qn,[["render",r]]);var es=Xn,ts=(0,k.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,s.ri)(es).use(ts).use(Gn).mount("#app")}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,a,r){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],r=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,r<o&&(o=r));if(i){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,r,o=s[0],i=s[1],l=s[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var u=l(n)}for(t&&t(s);d<o.length;d++)r=o[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},s=self["webpackChunkgitletfrontend"]=self["webpackChunkgitletfrontend"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(242)}));s=n.O(s)})();
//# sourceMappingURL=app.d1da952f.js.map