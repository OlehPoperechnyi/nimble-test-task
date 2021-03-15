(this["webpackJsonptime-tracking"]=this["webpackJsonptime-tracking"]||[]).push([[0],{70:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(17),o=n.n(i),s=(n(70),n(13)),l=n(14),u=n(3),j=l.a.header(r||(r=Object(s.a)(['\n  font-size: xxx-large;\n  font-family: "Arial Black", serif ;\n']))),b=function(){return Object(u.jsx)(j,{children:"tracker"})},d=n(41),O=n(97),f=n(101),x=n(100),m=n(55),h=n.n(m),k=n(96),g=n(22),p=n(31),v=n(7),S=n(38),y="SET_NEW_TRACKER",w="REMOVE_TRACKER",N="START_TRACKER",T="STOP_TRACKER",C={trackers:[]};null!==localStorage.getItem("trackersState")&&(C=Object(v.a)({},JSON.parse(localStorage.getItem("trackersState"))));var I,R,B,P,E,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{type:w,index:e}},z=Object(S.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var n=Object(v.a)(Object(v.a)({},e),{},{trackers:[].concat(Object(p.a)(e.trackers),[{name:t.name,startPoint:t.startPoint,value:0,trackerOn:!0}])});return localStorage.setItem("trackersState",JSON.stringify(n)),n;case T:var r=Object(p.a)(e.trackers);r[t.index]=Object(v.a)(Object(v.a)({},r[t.index]),{},{value:t.value,trackerOn:!1});var a=Object(v.a)(Object(v.a)({},e),{},{trackers:r});return localStorage.setItem("trackersState",JSON.stringify(a)),a;case N:var c=Object(p.a)(e.trackers);c[t.index]=Object(v.a)(Object(v.a)({},c[t.index]),{},{startPoint:t.newStartPoint,trackerOn:!0});var i=Object(v.a)(Object(v.a)({},e),{},{trackers:c});return localStorage.setItem("trackersState",JSON.stringify(i)),i;case w:var o=Object(p.a)(e.trackers);o.splice(t.index,1);var s=Object(v.a)(Object(v.a)({},e),{},{trackers:o});return localStorage.setItem("trackersState",JSON.stringify(s)),s;default:return e}})),D=n(24),J=n.n(D),M=Object(k.a)((function(){return{root:{marginBottom:"20px",display:"flex",alignItems:"center",textAlign:"center",width:"100%",border:"solid 1px gray",borderRadius:25},input:{marginLeft:20,flex:1},iconButton:{margin:0,padding:"0px",color:"green",fontSize:50}}})),_=Object(g.b)((function(){}),{setNewTracker:function(e,t){return{type:y,name:e,startPoint:t}}})((function(e){var t=e.setNewTracker,n=Object(a.useRef)(null),r=Object(a.useState)(""),c=Object(d.a)(r,2),i=c[0],o=c[1],s=function(e){var n=Date.now(),r=""===i?J()().format("MMMM Do YYYY, h:mm:ss a"):i;t(r,n),o(""),e.preventDefault()},l=M();return Object(u.jsxs)(O.a,{onSubmit:s,className:l.root,component:"form",children:[Object(u.jsx)(f.a,{className:l.input,placeholder:"Input tracker name",inputProps:{"aria-label":"Input tracker name"},inputRef:n,value:i,onChange:function(){return o(n.current.value)}}),Object(u.jsx)(x.a,{className:l.iconButton,onClick:s,"aria-label":"add tracker",children:Object(u.jsx)(h.a,{fontSize:"inherit",color:"inherit"})})]})})),F=n(42),K=n(98),Y=n(99),L=n(57),H=n.n(L),W=n(58),V=n.n(W),q=n(56),G=n.n(q),Q=Object(k.a)((function(){return{root:{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"space-between",width:"100%",minHeight:"60px",borderTop:"solid 1px gray"},box:{minWidth:"80px"},iconButton:{margin:0,padding:"0px",color:"black",fontSize:30},removeButton:{color:"red"}}})),U={color:"green",backgroundColor:"lightyellow",opacity:.8},X=l.a.div(I||(I=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),Z=l.a.div(R||(R=Object(s.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 80%;\n"]))),$=function(e){var t=e.tracker,n=t.name,r=t.startPoint,c=t.value,i=t.trackerOn,o=e.index,s=Object(F.a)(e,["tracker","index"]),l=Object(a.useState)(c),j=Object(d.a)(l,2),b=j[0],O=j[1],f=Q();Object(a.useEffect)((function(){if(i){var e=setInterval((function(){O(Date.now()-r+c)}),1e3);return function(){clearInterval(e)}}}),[b,r,c,i]);return Object(u.jsx)("section",{children:Object(u.jsxs)(K.a,{className:f.root,style:i?U:{},children:[Object(u.jsx)(Z,{children:n}),Object(u.jsxs)(Y.a,{className:f.box,children:[Object(u.jsx)("div",{children:"".concat(Math.floor(J.a.duration(Number(b)).asHours()),"\n                        : ").concat(J()(Number(b)).format("mm"),"\n                        : ").concat(J()(Number(b)).format("ss"))}),Object(u.jsxs)(X,{children:[i?Object(u.jsx)(x.a,{onClick:function(){s.stopTracker(o,b)},className:f.iconButton,"aria-label":"Stop tracker",children:Object(u.jsx)(H.a,{fontSize:"inherit",color:"inherit"})}):Object(u.jsx)(x.a,{onClick:function(){s.startTracker(o,Date.now())},className:f.iconButton,"aria-label":"Start tracker",children:Object(u.jsx)(G.a,{fontSize:"inherit",color:"inherit"})}),Object(u.jsx)(x.a,{onClick:function(){return s.removeTracker(o)},className:f.iconButton,"aria-label":"Delete tracker",children:Object(u.jsx)(V.a,{fontSize:"inherit",className:f.removeButton})})]})]})]})})},ee=l.a.section(B||(B=Object(s.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n  max-height: 80vh;\n  overflow-y: auto;\n"]))),te=Object(g.b)((function(e){return{trackers:e.trackers}}),{removeTracker:A,startTracker:function(e,t){return{type:N,index:e,newStartPoint:t}},stopTracker:function(e,t){return{type:T,index:e,value:t}}})((function(e){var t=e.trackers,n=Object(F.a)(e,["trackers"]);return Object(u.jsx)(ee,{children:void 0!==t&&t.length>0&&t.map((function(e,t){return Object(u.jsx)($,Object(v.a)({tracker:e,index:t,removeTracker:A},n),e.startPoint.toString())}))})})),ne=l.a.div(P||(P=Object(s.a)(["\n    height: 100vh;\n    text-align: center;\n    display: flex;\n    gap: 40px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),re=l.a.main(E||(E=Object(s.a)(["\n  width: 90%;\n  @media  (min-width: 560px) {\n    width: 560px;\n  }\n"])));var ae=function(){return Object(u.jsxs)(ne,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(re,{children:[Object(u.jsx)(_,{}),Object(u.jsx)(te,{})]})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g.a,{store:z,children:Object(u.jsx)(ae,{})})}),document.getElementById("root")),ce()}},[[81,1,2]]]);
//# sourceMappingURL=main.fa45ce67.chunk.js.map