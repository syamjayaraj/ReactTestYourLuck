(this["webpackJsonpvoting-app"]=this["webpackJsonpvoting-app"]||[]).push([[0],{51:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n(0),i=n.n(r),s=n(16),a=n.n(s),o=n(41),d=n(40),l=n(22),j=n(75),u=n(76),b=n(73),O=n(77),m=n(78);var p=function(e){var t=e.question,n=e.checkOption;return Object(c.jsx)(O.a,{children:Object(c.jsxs)(O.a.Body,{children:[Object(c.jsx)(O.a.Title,{children:t.name}),Object(c.jsx)(m.a,{children:t.options.map((function(e){return console.log(e._id,t.selectedOption),Object(c.jsxs)(m.a.Item,{disabled:!!t.selectedOption||null,onClick:function(){return n(t._id,e._id)},style:t.selectedOption===t.trueOption&&e._id===t.selectedOption?{border:"2px solid #38bb38",borderRadius:".3rem"}:t.selectedOption!==t.trueOption&&e._id===t.selectedOption?{border:"2px solid #e24646",borderRadius:".3rem"}:null,children:[Object(c.jsx)("div",{className:"number",children:e._id}),Object(c.jsx)("div",{children:e.name})]})}))})]})})},h=(n(51),n(52),n(39)),x=n(74),f=n(72),v=n(45);var g=function(e){var t=e.correct,n=e.incorrect,r=e.testAgain,i=t/10*100,s=100-i;return Object(c.jsxs)(x.a,{show:!0,onHide:r,animation:!1,children:[Object(c.jsx)(x.a.Header,{children:Object(c.jsxs)(x.a.Title,{children:["Your luck: ",i,"%"]})}),Object(c.jsxs)(x.a.Body,{children:[Object(c.jsx)(v.PieChart,{data:[{title:"Correct",value:i,color:"#38bb38"},{title:"Incorrect",value:s,color:"#e24646"}]}),Object(c.jsx)("div",{className:"numbers-container",children:Object(c.jsxs)("div",{className:"numbers",children:[Object(c.jsx)("div",{className:"number correct",children:t}),Object(c.jsx)("div",{className:"number incorrect",children:n})]})})]}),Object(c.jsx)(x.a.Footer,{children:Object(c.jsx)(f.a,{variant:"primary",onClick:r,children:"Test again"})})]})},S=n(67);var k=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)(10),a=Object(l.a)(s,1)[0],O=Object(r.useState)(4),m=Object(l.a)(O,1)[0],x=Object(r.useState)(0),f=Object(l.a)(x,2),v=f[0],k=f[1],w=Object(r.useState)(0),y=Object(l.a)(w,2),N=y[0],_=y[1];return Object(r.useEffect)((function(){!function(){var e=new h.LoremIpsum({wordsPerSentence:{max:16,min:4}}),t=new h.LoremIpsum({wordsPerSentence:{max:3,min:1}}),n=Object(d.a)(Array(a)).map((function(n,c){var r={_id:c,name:e.generateSentences(1).slice(0,-1)+"?",trueOption:S({min:1,max:4,integer:!0}),selectedOption:""},i=Object(d.a)(Array(m)).map((function(e,n){return{_id:n+1,name:t.generateSentences(1)}}));return Object(o.a)(Object(o.a)({},r),{},{options:i})}));i(n)}()}),[]),Object(c.jsxs)("div",{className:"app",children:[v===a?Object(c.jsx)(g,{correct:N,incorrect:a-N,testAgain:function(){window.location.reload()}}):null,Object(c.jsxs)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"light",fixed:"top",children:[Object(c.jsx)(j.a.Brand,{href:"#home",children:"Test your luck"}),Object(c.jsx)(u.a,{className:"mr-auto"}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(u.a.Link,{href:"#deets",className:"number",children:[v,"/",a]})})]}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)("p",{className:"rule",children:"Here are some meaningless questions and options. In each question, one option is correct. So, answer the 10 questions and find your luck percentage."}),n.map((function(e){return Object(c.jsx)(p,{question:e,checkOption:function(e,t){return function(e,t){var c=n.map((function(n){return n._id===e&&(n.selectedOption=t,k(v+1),n.selectedOption===n.trueOption&&_(N+1)),n}));i(c)}(e,t)}})}))]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),w()}},[[70,1,2]]]);
//# sourceMappingURL=main.7b6ebe9b.chunk.js.map