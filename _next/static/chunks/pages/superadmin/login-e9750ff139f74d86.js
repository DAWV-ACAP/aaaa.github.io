(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8943],{17903:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/login",function(){return e(28188)}])},84846:function(n,r,e){"use strict";e.d(r,{Z:function(){return C}});var t=e(34051),i=e.n(t),o=e(85893),a=e(67294),u=e(11163),c=e(63835),s=e(47426),l=e(11057),f=e(87357),d=e(61903),p=e(20719),g=e(15861),v=e(94229),h={container:{width:"100%",display:"grid",minHeight:"50vh",placeItems:"center"},loginContainer:{width:{xs:"100%",sm:"400px"},display:"flex",flexDirection:"column",textAlign:"center",padding:function(n){return n.spacing(1)},"& .MuiTextField-root, button":{marginTop:function(n){return n.spacing(2)}},"& h5":{marginBottom:function(n){return n.spacing(2)}},"& svg":{fontSize:"45px",margin:"auto",marginBottom:"8px"}},btnContainer:{display:"flex",gap:3,"& button":{flexGrow:1}}};var m=function(n){var r=n.loading,e=n.hasUser,t=n.state,i=n.loginTitle,a=n.onInputChange,u=n.onInputClick,c=n.onBtnClick;return(0,o.jsxs)("div",{children:[r&&(0,o.jsx)(p.Z,{}),!r&&!e&&(0,o.jsx)(f.Z,{sx:h.container,id:"bacap-login",children:(0,o.jsxs)(f.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:h.loginContainer,children:["Superadmin"===i&&(0,o.jsx)(v.Z,{color:"primary",size:"large"}),(0,o.jsxs)(g.Z,{variant:"h5",children:["ACAP ",(0,o.jsx)("br",{}),i||"Admin"," Login"]}),(0,o.jsx)(d.Z,{error:""!==t.error,id:"email",label:"Enter email",variant:"outlined",value:t.email,onChange:a,onClick:u}),(0,o.jsx)(d.Z,{error:""!==t.error,id:"password",label:"Enter password",type:"password",variant:"outlined",value:t.password,onChange:a,onClick:u,helperText:t.error}),(0,o.jsx)(l.Z,{variant:"contained",size:"large",onClick:c,children:"Log in"})]})})]})};function x(n,r,e,t,i,o,a){try{var u=n[o](a),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(t,i)}function b(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var o=n.apply(r,e);function a(n){x(o,t,i,a,u,"next",n)}function u(n){x(o,t,i,a,u,"throw",n)}a(void 0)}))}}function w(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function j(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),t.forEach((function(r){w(n,r,e[r])}))}return n}var y={email:"",password:"",error:""};var C=function(n){var r=n.accLevel,e=void 0===r?2:r,t=n.loginTitle,l=void 0===t?"":t,f=(0,a.useState)(y),d=f[0],p=f[1],g=(0,c.aC)(),v=(0,u.useRouter)();(0,a.useEffect)((function(){if(g.user&&!g.loading&&""===g.error){var n=e===s.DW.ADMIN?"/admin":"/superadmin";g.user.accountlevel===e?v.push(n):(g.logOut(),p((function(n){return j({},n,{error:"Unauthorized account level."})})))}}),[g,e,v]),(0,a.useEffect)((function(){""!==g.error&&p((function(n){return j({},n,{error:g.error})}))}),[g.error]);var h=function(){var n=b(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.signIn({email:d.email,password:d.password});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),p((function(r){return j({},r,{error:(0,c.Z)(n.t0.message)})}));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=b(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.logOut();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.jsx)(m,{loading:g.loading,hasUser:g.user,state:d,loginTitle:l,onInputChange:function(n){var r=n.target,e=r.id,t=r.value;p((function(n){return j({},n,w({},e,t))})),""!==d.error&&p(j({},d,{error:""}))},onInputClick:function(n){p((function(r){var e;return j({},r,(w(e={},n.target.id,""),w(e,"error",""),e))}))},onBtnClick:h,onBtnLogoutClick:x})}},43370:function(n,r,e){"use strict";e(85893),e(9008),e(47426)},20719:function(n,r,e){"use strict";e.d(r,{Z:function(){return l}});var t=e(85893),i=e(87357),o=e(98456),a=e(15861),u={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};function c(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function s(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),t.forEach((function(r){c(n,r,e[r])}))}return n}var l=function(n){var r=n.sx;return(0,t.jsx)(i.Z,{sx:s({},u.container,r&&s({},r)),children:(0,t.jsxs)(i.Z,{sx:u.loading,children:[(0,t.jsx)(a.Z,{variant:"subtitle1",children:"Loading..."}),(0,t.jsx)(o.Z,{size:"32px"})]})})}},28188:function(n,r,e){"use strict";e.r(r),e.d(r,{__N_SSG:function(){return a}});var t=e(85893),i=e(47426),o=e(84846);e(43370);var a=!0;r.default=function(n){return n.media,(0,t.jsxs)(t.Fragment,{children:[!1,(0,t.jsx)(o.Z,{loginTitle:"Superadmin",accLevel:i.DW.SUPERADMIN})]})}}},function(n){n.O(0,[5778,3593,9964,8858,1903,9476,9774,2888,179],(function(){return r=17903,n(n.s=r);var r}));var r=n.O();_N_E=r}]);