(this.webpackJsonpxpensoft=this.webpackJsonpxpensoft||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(23),c=n.n(a),s=(n(29),n(10)),i=n(12),o=n(3),l=(n(30),n(15)),u=n(5),d=n(0);function j(e){var t=e.email,n=e.setEmail,r=e.password,a=e.setPassword,c=e.newEmail,s=e.setNewEmail,i=e.newPassword1,o=e.setNewPassword1,l=e.newPassword2,u=e.setNewPassword2,j=e.forgotPasswordEmail,h=e.setForgotPasswordEmail,b=e.login,m=e.register,O=e.getPassword,x=e.lang;return Object(d.jsxs)("div",{className:"User",children:[Object(d.jsxs)("form",{children:[Object(d.jsx)("h2",{children:"en"===x?"Login":"Inloggen"}),Object(d.jsx)("label",{htmlFor:"email",children:"E-mail: "}),Object(d.jsx)("input",{type:"email",id:"email",onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"password",children:"en"===x?"Password: ":"Wachtwoord: "}),Object(d.jsx)("input",{type:"password",id:"password",onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),b(t,r)},children:"en"===x?"Login":"Inloggen"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{children:[Object(d.jsx)("h2",{children:"en"===x?"Register":"Registreer"}),Object(d.jsx)("label",{htmlFor:"newemail",children:"E-mail: "}),Object(d.jsx)("input",{type:"email",id:"newemail",onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"newpassword1",children:"en"===x?"Password: ":"Wachtwoord: "}),Object(d.jsx)("input",{type:"password",id:"newpassword1",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"newpassword2",children:"en"===x?"Repeat password: ":"Herhaal wachtwoord: "}),Object(d.jsx)("input",{type:"password",id:"newpassword2",onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),c.trim().length<5||c.trim().length>50?alert("en"===x?"E-mail needs to be between 5 and 50 characters":"E-mail moet tussen de 5 en 50 karakters bevatten"):i!==l?alert("en"===x?"Passwords do not match":"Wachtwoorden komen niet overeen"):i.trim().length<8||i.trim().length>50?alert("en"===x?"Password needs to be between 8 and 50 characters":"Wachtwoord moet tussen de 8 en 50 karakters bevatten"):m(c.trim(),i.trim())},children:"en"===x?"Register":"Registreer"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{children:[Object(d.jsx)("h2",{children:"en"===x?"Forgot password":"Wachtwoord vergeten"}),Object(d.jsx)("label",{htmlFor:"forgotpasswordemail",children:"E-mail: "}),Object(d.jsx)("input",{type:"email",id:"forgotpasswordemail",onChange:function(e){return h(e.target.value)}}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),O(j)},children:"en"===x?"Request password":"Wachtwoord opvragen"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{})]})}var h=n(4),b=n.n(h),m=n(9);function O(e){var t=e.lang,n=e.inputField,r=e.importTransactions;return Object(d.jsxs)("div",{className:"Import",children:[Object(d.jsx)("h2",{children:"en"===t?"Import":"Importeer"}),Object(d.jsx)("input",{type:"file",id:"import",ref:n}),Object(d.jsx)("button",{id:"import",onClick:r,children:"en"===t?"Import":"Importeer"})]})}function x(e){var t=e.lang,n=e.headers,r=e.showCorrectHeader,a=e.filterFromDate,c=e.setFilterFromDate,s=e.filterToDate,i=e.setFilterToDate,o=e.filterDescription,l=e.setFilterDescription,u=e.setFilterHeaders,j=e.filterFromAmount,h=e.setFilterFromAmount,b=e.filterToAmount,m=e.setFilterToAmount,O=e.resetFilter;return Object(d.jsxs)("div",{className:"Filter",children:[Object(d.jsx)("h2",{children:"Filter"}),Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"fromdate",children:"en"===t?"From:  ":"Van: "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"date",value:a,id:"fromdate",onChange:function(e){return c(e.target.value)}})}),Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"todate",children:"en"===t?"To: ":"Tot: "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"date",value:s,id:"todate",onChange:function(e){return i(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"description",children:"en"===t?"Description: ":"Omschrijving: "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",id:"description",value:o,onChange:function(e){return l(e.target.value)}})}),Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"headers",children:"en"===t?"Headers: ":"Rubrieken: "})}),Object(d.jsx)("td",{children:Object(d.jsx)("select",{id:"headers",name:"headers",multiple:!0,onChange:function(e){return u(Array.from(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value})))},children:n.sort((function(e,t){return r(Number(e.id))<r(Number(t.id))?-1:1})).map((function(e,t){return Object(d.jsx)("option",{value:e.id,children:r(e.id)},t)}))})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"fromamount",children:"en"===t?"From amount: ":"Vanaf bedrag: "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"number",id:"fromamount",value:j,onChange:function(e){return h(e.target.value)}})}),Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"toamount",children:"en"===t?"To amount: ":"Tot bedrag: "})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"number",id:"toamount",value:b,onChange:function(e){return m(e.target.value)}})})]})]})}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:O,children:"Reset filter"})]})}function f(e){var t=e.headers,n=e.showCorrectHeader,r=e.id,a=e.date,c=e.description,s=e.headerId,i=e.amount,o=e.isIncome,l=e.removeTransaction,u=e.changeTransaction;e.lang;return Object(d.jsxs)("tr",{className:"Transaction",children:[Object(d.jsx)("td",{className:"column-date",children:a.substring(8,10)+"-"+a.substring(5,7)+"-"+a.substring(0,4)}),Object(d.jsx)("td",{className:"column-description",children:Object(d.jsx)("input",{type:"text",value:c,onChange:function(e){u(r,e.target.value,s)}})}),Object(d.jsx)("td",{className:"column-header",children:Object(d.jsxs)("select",{value:Number(s),onChange:function(e){u(r,c,e.target.value)},children:[Object(d.jsx)("option",{value:""},"-1"),t.sort((function(e,t){return n(Number(e.id))<n(Number(t.id))?-1:1})).map((function(e,t){return Object(d.jsx)("option",{value:e.id,children:n(e.id)},t)}))]})}),Object(d.jsxs)("td",{className:o?"column-amount in":"column-amount out",children:["\u20ac ",Number(i).toFixed(2)]}),Object(d.jsx)("td",{className:"column-remove",children:Object(d.jsx)("button",{onClick:function(){l(r)},children:"\xd7"})})]})}function p(e){var t=e.transactions,n=e.headers,r=e.showCorrectHeader,a=e.date,c=e.setDate,s=e.description,i=e.setDescription,o=e.headerId,l=e.setHeaderId,u=e.amount,j=e.setAmount,h=e.addTransaction,b=e.removeTransaction,m=e.changeTransaction,O=e.lang,x=e.maxItemsOnPage,p=e.setMaxItemsOnPage,g=0;return Object(d.jsxs)("div",{className:"List",children:[Object(d.jsx)("h2",{children:"en"===O?"List":"Lijst"}),Object(d.jsx)("p",{children:"en"===O?"Showing ".concat(Math.min(x,t.length)," of ").concat(t.length," transactions"):"".concat(Math.min(x,t.length)," van ").concat(t.length," transacties tonend")}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"column-date",children:"en"===O?"Date":"Datum"}),Object(d.jsx)("th",{className:"column-description",children:"en"===O?"Description":"Omschrijving"}),Object(d.jsx)("th",{className:"column-header",children:"en"===O?"Header":"Rubriek"}),Object(d.jsx)("th",{className:"column-amount",children:"en"===O?"Amount":"Bedrag"}),Object(d.jsx)("th",{className:"column-remove"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"column-date",children:Object(d.jsx)("input",{type:"date",onChange:function(e){return c(e.target.value)}})}),Object(d.jsx)("td",{className:"column-description",children:Object(d.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})}),Object(d.jsx)("td",{className:"column-header",children:Object(d.jsxs)("select",{value:o,onChange:function(e){return l(Number(e.target.value))},children:[Object(d.jsx)("option",{value:""},"-1"),n.map((function(e,t){return Object(d.jsx)("option",{value:e.id,children:r(e.id)},t)}))]})}),Object(d.jsx)("td",{className:"column-amount",children:Object(d.jsx)("input",{type:"number",value:Number(u),onChange:function(e){return j(Number(e.target.value))}})}),Object(d.jsx)("td",{className:"column-remove",children:Object(d.jsx)("button",{onClick:function(){h(a,s,o,u)},children:"+"})})]}),t.map((function(e,t){return++g<=x&&Object(d.jsx)(f,{headers:n,showCorrectHeader:r,id:e.id,date:e.date,description:e.description,headerId:e.header_id,amount:e.amount,isIncome:e.is_income,removeTransaction:b,changeTransaction:m,lang:O},t)}))]})]}),Object(d.jsx)("button",{className:x<t.length?"show-more-button show":"show-more-button hide",onClick:function(){p((function(e){return e+50}))},children:"en"===O?"Show more":"Toon meer"})]})}function g(e){var t=e.userId,n=e.transactions,a=e.headers,c=e.showCorrectHeader,s=e.date,i=e.setDate,l=e.description,u=e.setDescription,j=e.headerId,h=e.setHeaderId,f=e.amount,g=e.setAmount,v=e.addTransaction,w=e.removeTransaction,N=e.changeTransaction,y=e.lang,k=e.maxItemsOnPage,T=e.setMaxItemsOnPage,C=Object(r.useRef)(null),F=Object(r.useRef)();F.current=n;var H=Object(r.useState)(),I=Object(o.a)(H,2),S=I[0],E=I[1],D=Object(r.useState)(""),P=Object(o.a)(D,2),M=P[0],A=P[1],z=Object(r.useState)(""),U=Object(o.a)(z,2),R=U[0],B=U[1],_=Object(r.useState)([]),W=Object(o.a)(_,2),L=W[0],G=W[1],J=Object(r.useState)(0),V=Object(o.a)(J,2),Y=V[0],q=V[1],Z=Object(r.useState)(0),K=Object(o.a)(Z,2),Q=K[0],X=K[1];function $(){return($=Object(m.a)(b.a.mark((function e(t){var n,r,a,c,s,i,o,l,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=C.current.files[0],C.current.value=null,e.next=5,n.text();case 5:for(r=e.sent,a=r.split("\n"),c=1;c<a.length-1;c++)s=a[c].split(";"),i="".concat(s[0].substring(1,5),"-").concat(s[0].substring(5,7),"-").concat(s[0].substring(7,9)),o=s[1].substring(1,s[1].length-1),l='"Bij"'===s[5]?1:2,u=Number(s[6].substring(1,s[6].length-1).replace(",",".")),v(i,o,l,u);e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("An error occured while trying to read this file");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return F.current=n,S&&(F.current=F.current.filter((function(e){return e.date>=S}))),M&&(F.current=F.current.filter((function(e){return e.date<=M}))),R&&(F.current=F.current.filter((function(e){return RegExp(R,"gi").test(e.description)}))),L.length&&(F.current=F.current.filter((function(e){return L.includes(String(e.header_id))}))),Y&&(F.current=F.current.filter((function(e){return Number(e.amount)>=Y}))),Q&&(F.current=F.current.filter((function(e){return Number(e.amount)<=Q}))),t?Object(d.jsxs)("div",{className:"Transactions",children:[Object(d.jsx)(O,{lang:y,inputField:C,importTransactions:function(e){return $.apply(this,arguments)}}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)(x,{lang:y,headers:a,showCorrectHeader:c,filterFromDate:S,setFilterFromDate:E,filterToDate:M,setFilterToDate:A,filterDescription:R,setFilterDescription:B,setFilterHeaders:G,filterFromAmount:Y,setFilterFromAmount:q,filterToAmount:Q,setFilterToAmount:X,resetFilter:function(){E(""),A(""),B(""),G([]),q(0),X(0)}}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)(p,{transactions:F.current,headers:a,showCorrectHeader:c,date:s,setDate:i,description:l,setDescription:u,headerId:j,setHeaderId:h,amount:f,setAmount:g,addTransaction:v,removeTransaction:w,changeTransaction:N,lang:y,maxItemsOnPage:k,setMaxItemsOnPage:T}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{})]}):Object(d.jsx)("div",{className:"Transactions",children:Object(d.jsx)("p",{children:"en"===y?"Nobody is logged in":"Er is niemand ingelogd"})})}function v(e){var t=e.inout,n=e.calculate,r=e.showCorrectHeader,a=e.addHeader,c=e.newHeaderIn,s=e.setNewHeaderIn,i=e.newHeaderOut,l=e.setNewHeaderOut,u=e.removeHeader,j=e.showEmpty,h=e.lang,b=n(),m=Object(o.a)(b,2),O=m[0],x=m[1];function f(e){u(Number(e.target.value))}return Object(d.jsx)("div",{className:"Headertable",children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"column-header",children:"en"===h?"Header":"Rubriek"}),Object(d.jsx)("th",{className:"column-amount",children:"en"===h?"Amount":"Bedrag"}),Object(d.jsx)("th",{className:"column-percentage",children:"%"}),Object(d.jsx)("th",{className:"column-remove"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"column-header",children:Object(d.jsx)("input",{type:"text",value:"in"===t?c:i,onChange:function(e){return"in"===t?s(e.target.value):l(e.target.value)}})}),Object(d.jsx)("td",{className:"column-amount"}),Object(d.jsx)("td",{className:"column-percentage"}),Object(d.jsx)("td",{className:"column-remove",children:Object(d.jsx)("button",{onClick:function(){a("in"===t?c:i,"in"===t),"in"===t?s(""):l("")},children:"+"})})]}),Object.entries(O).sort((function(e,t){return r(Number(e[0]))<r(Number(t[0]))?-1:1})).map((function(e,n){return(e[1]>0||j)&&Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"column-header",children:r(Number(e[0]))}),Object(d.jsxs)("td",{className:"column-amount "+t,children:["\u20ac ",Number(e[1]).toFixed(2)]}),Object(d.jsx)("td",{className:"column-percentage",children:x>0?(Number(e[1])/x*100).toFixed(0):0}),Object(d.jsx)("td",{className:"column-remove",children:Object(d.jsx)("button",{value:Number(e[0]),onClick:f,children:"\xd7"})})]},n)})),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"column-header",children:Object(d.jsx)("b",{children:"en"===h?"Total":"Totaal"})}),Object(d.jsx)("td",{className:"column-amount "+t,children:Object(d.jsxs)("b",{children:["\u20ac ",x.toFixed(2)]})}),Object(d.jsx)("td",{className:"column-percentage",children:x>0?100:0}),Object(d.jsx)("th",{className:"column-remove"})]})]})]})})}function w(e){var t=e.lang,n=e.calculate,r=e.showCorrectHeader,a=e.showEmpty,c=n(),i=Object(o.a)(c,2),l=i[0],u=i[1];if(!a)for(var j in l)0===l[j]&&delete l[j];var h=Object.keys(l).length,b=Math.max.apply(Math,Object(s.a)(Object.values(l)));l=Object.entries(l).sort();for(var m=[],O=[],x=0;x<h;x++){var f=x*(100/h),p=100-l[x][1]/b*100,g=100/h,v=l[x][1]/b*100,w="hsl(".concat(360*x/h,", 100%, 50%)"),N=l[x][1]/u*100;m.push([f,p,g,v,r(Number(l[x][0])),w,N])}for(var y=0;y<=20;y++){var k=25*y,T=(b-y*(b/20)).toFixed(0);O.push([k,T])}return 0===u?Object(d.jsx)("p",{children:"en"===t?"No data for this period":"Geen gegevens voor deze periode"}):Object(d.jsxs)("div",{className:"Barchart",children:[Object(d.jsx)("svg",{className:"ticks",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 500",width:"50",height:"500",children:O.map((function(e,t){return 0!==t&&t!==O.length-1&&Object(d.jsxs)("g",{children:[Object(d.jsx)("text",{x:"5",y:e[0]+4,fontSize:"12",children:e[1]}),Object(d.jsx)("line",{x1:"30",y1:e[0],x2:"45",y2:e[0],stroke:"black"})]},t)}))}),Object(d.jsx)("svg",{className:"bars",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"500",height:"500",children:m.map((function(e,t){return Object(d.jsx)("rect",{x:e[0],y:e[1],width:e[2],height:e[3],stroke:"black",strokeWidth:"0.25",fill:e[5]},t)}))}),Object(d.jsx)("svg",{className:"legend",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"500",height:"500",children:m.map((function(e,t){return Object(d.jsxs)("g",{children:[Object(d.jsx)("rect",{x:"4",y:5*t+2,width:"4",height:"4",stroke:"black",strokeWidth:"0.5",fill:e[5]}),Object(d.jsx)("text",{x:"9",y:5*t+5,fontSize:"4",children:e[4]+" ("+e[6].toFixed()+"%)"})]},t)}))})]})}function N(e){var t=e.lang,n=e.calculate,r=e.showCorrectHeader,a=e.showEmpty,c=n(),s=Object(o.a)(c,2),i=s[0],l=s[1];if(!a)for(var u in i)0===i[u]&&delete i[u];i=Object.entries(i).sort();for(var j=0,h=[],b=0;b<i.length;b++){var m=100*Math.cos(2*Math.PI*(j/l)),O=100*Math.sin(2*Math.PI*(j/l)),x=i[b][1]<l/2?0:1;j+=i[b][1];var f=100*Math.cos(2*Math.PI*(j/l)),p=100*Math.sin(2*Math.PI*(j/l)),g="hsl(".concat(360*b/i.length,", 100%, 50%)"),v=i[b][1]/l*100;h.push([m,O,x,f,p,g,r(Number(i[b][0])),v])}return 0===l?Object(d.jsx)("p",{children:"en"===t?"No data for this period":"Geen gegevens voor deze periode"}):Object(d.jsxs)("div",{className:"Piechart",children:[Object(d.jsx)("svg",{className:"pie",xmlns:"http://www.w3.org/2000/svg",viewBox:"-100 -100 200 200",width:"500",height:"500",transform:"rotate(-90)",children:h.map((function(e,t){return Object(d.jsx)("path",{d:"M 0 0 L "+e[0]+" "+e[1]+" A 100 100 0 "+e[2]+" 1 "+e[3]+" "+e[4]+" Z",stroke:"black",strokeWidth:"0.25",fill:e[5]},t)}))}),Object(d.jsx)("svg",{className:"legend",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"500",height:"500",children:h.map((function(e,t){return Object(d.jsxs)("g",{children:[Object(d.jsx)("rect",{x:"4",y:5*t+2,width:"4",height:"4",stroke:"black",strokeWidth:"0.5",fill:e[5]}),Object(d.jsx)("text",{x:"9",y:5*t+5,fontSize:"4",children:e[6]+" ("+e[7].toFixed()+"%)"})]},t)}))})]})}function y(e){var t=e.userId,n=e.transactions,r=e.headers,a=e.showCorrectHeader,c=e.fromDate,s=e.setFromDate,o=e.toDate,l=e.setToDate,u=e.addHeader,j=e.newHeaderIn,h=e.setNewHeaderIn,b=e.newHeaderOut,m=e.setNewHeaderOut,O=e.removeHeader,x=e.showEmpty,f=e.setShowEmpty,p=e.view,g=e.setView,y=e.lang;function k(){return n.filter((function(e){return e.date>=c&&e.date<=o})).filter((function(e){return e.is_income})).reduce((function(e,t){return e+Number(t.amount)}),0)}function T(){return n.filter((function(e){return e.date>=c&&e.date<=o})).filter((function(e){return!e.is_income})).reduce((function(e,t){return e+Number(t.amount)}),0)}function C(){var e,t={},a=Object(i.a)(r);try{for(a.s();!(e=a.n()).done;){var s=e.value;s.is_income&&(t[s.id]=0)}}catch(h){a.e(h)}finally{a.f()}var l=n.filter((function(e){return e.date>=c&&e.date<=o}));if(!l.length)return[t,0];var u,d=Object(i.a)(l);try{for(d.s();!(u=d.n()).done;){var j=u.value;j.header_id in t&&(t[j.header_id]+=Number(j.amount))}}catch(h){d.e(h)}finally{d.f()}return[t,k()]}function F(){var e,t={},a=Object(i.a)(r);try{for(a.s();!(e=a.n()).done;){var s=e.value;s.is_income||(t[s.id]=0)}}catch(h){a.e(h)}finally{a.f()}var l=n.filter((function(e){return e.date>=c&&e.date<=o}));if(!l.length)return[t,0];var u,d=Object(i.a)(l);try{for(d.s();!(u=d.n()).done;){var j=u.value;j.header_id in t&&(t[j.header_id]+=Number(j.amount))}}catch(h){d.e(h)}finally{d.f()}return[t,T()]}return t?Object(d.jsxs)("div",{className:"Overview",children:[Object(d.jsx)("h2",{children:"en"===y?"View":"Weergave"}),Object(d.jsxs)("label",{htmlFor:"from",children:["en"===y?"From":"Van",":"]}),Object(d.jsx)("input",{type:"date",id:"from",value:c,onChange:function(e){return s(e.target.value)}}),Object(d.jsxs)("label",{htmlFor:"to",children:["en"===y?"To":"Tot",":"]}),Object(d.jsx)("input",{type:"date",id:"to",value:o,onChange:function(e){return l(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"en"===y?"Chart:":"Diagram: "}),Object(d.jsx)("input",{type:"radio",name:"view",id:"table",value:"table",checked:"table"===p,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"table",children:"en"===y?"Table":"Tabel"}),Object(d.jsx)("input",{type:"radio",name:"view",id:"bars",value:"bars",checked:"bars"===p,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"bar",children:"en"===y?"Bar":"Staaf"}),Object(d.jsx)("input",{type:"radio",name:"view",id:"pie",value:"pie",checked:"pie"===p,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"pie",children:"en"===y?"Pie":"Taart"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["en"===y?"Headers: ":"Rubrieken: "," "]}),Object(d.jsx)("input",{type:"checkbox",id:"empty",value:x,checked:x,onChange:function(e){f("true"!==e.target.value)}}),Object(d.jsx)("label",{htmlFor:"empty",children:"en"===y?"Show empty headers":"Toon lege rubrieken"}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"en"===y?"Net result":"Netto resultaat"}),Object(d.jsxs)("h3",{className:k()-T()<0?"neg":"pos",children:["\u20ac ",(k()-T()).toFixed(2)]}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"en"===y?"Income":"Inkomsten"}),"table"===p&&Object(d.jsx)(v,{inout:"in",calculate:C,showCorrectHeader:a,addHeader:u,newHeaderIn:j,setNewHeaderIn:h,removeHeader:O,showEmpty:x,lang:y}),"bars"===p&&Object(d.jsx)(w,{lang:y,calculate:C,showCorrectHeader:a,showEmpty:x}),"pie"===p&&Object(d.jsx)(N,{lang:y,calculate:C,showCorrectHeader:a,showEmpty:x}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"en"===y?"Expenses":"Uitgaven"}),"table"===p&&Object(d.jsx)(v,{inout:"out",calculate:F,showCorrectHeader:a,addHeader:u,newHeaderOut:b,setNewHeaderOut:m,removeHeader:O,showEmpty:x,lang:y}),"bars"===p&&Object(d.jsx)(w,{lang:y,calculate:F,showCorrectHeader:a,showEmpty:x}),"pie"===p&&Object(d.jsx)(N,{lang:y,calculate:F,showCorrectHeader:a,showEmpty:x}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{})]}):Object(d.jsx)("div",{className:"Overview",children:Object(d.jsx)("p",{children:"en"===y?"Nobody is logged in":"Er is niemand ingelogd"})})}var k={host:"https://xpensoft.herokuapp.com",login:function(e,t){var n=this;return Object(m.a)(b.a.mark((function r(){var a,c;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(n.host,"/login"),{method:"GET",headers:{"Content-Type":"application/json",email:e,password:t}});case 2:if(401!==(a=r.sent).status){r.next=5;break}throw new Error;case 5:return r.next=7,a.json();case 7:return c=r.sent,r.abrupt("return",c);case 9:case"end":return r.stop()}}),r)})))()},register:function(e,t){var n=this;return Object(m.a)(b.a.mark((function r(){var a,c;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(n.host,"/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({newEmail:e,newPassword:t})});case 2:if(401!==(a=r.sent).status){r.next=5;break}throw new Error;case 5:return r.next=7,a.json();case 7:return c=r.sent,r.abrupt("return",c);case 9:case"end":return r.stop()}}),r)})))()},getPassword:function(e){var t=this;return Object(m.a)(b.a.mark((function n(){var r,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t.host,"/getpassword/").concat(e));case 2:if(404!==(r=n.sent).status){n.next=5;break}throw new Error;case 5:return n.next=7,r.json();case 7:return a=n.sent,n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))()},getHeaders:function(e,t,n){var r=this;return Object(m.a)(b.a.mark((function a(){var c,s;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(r.host,"/headers/").concat(e),{method:"GET",headers:{"Content-Type":"application/json",userId:e,email:t,password:n}});case 2:return c=a.sent,a.next=5,c.json();case 5:return s=a.sent,a.abrupt("return",s);case 7:case"end":return a.stop()}}),a)})))()},addHeader:function(e,t,n,r,a){var c=this;return Object(m.a)(b.a.mark((function s(){var i,o;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(c.host,"/headers"),{method:"POST",headers:{"Content-Type":"application/json",userId:n,email:r,password:a},body:JSON.stringify({name:e,isIncome:t,userId:n})});case 2:return i=s.sent,s.next=5,i.json();case 5:return o=s.sent,s.abrupt("return",o);case 7:case"end":return s.stop()}}),s)})))()},deleteHeader:function(e,t,n,r){var a=this;return Object(m.a)(b.a.mark((function c(){var s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("".concat(a.host,"/headers/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",userId:t,email:n,password:r}});case 2:return s=c.sent,c.abrupt("return",s);case 4:case"end":return c.stop()}}),c)})))()},getTransactions:function(e,t,n){var r=this;return Object(m.a)(b.a.mark((function a(){var c,s;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(r.host,"/transactions/").concat(e),{method:"GET",headers:{"Content-Type":"application/json",userId:e,email:t,password:n}});case 2:return c=a.sent,a.next=5,c.json();case 5:return s=a.sent,a.abrupt("return",s);case 7:case"end":return a.stop()}}),a)})))()},addTransaction:function(e,t,n,r,a,c,s){var i=this;return Object(m.a)(b.a.mark((function o(){var l,u;return b.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,fetch("".concat(i.host,"/transactions"),{method:"POST",headers:{"Content-Type":"application/json",userId:a,email:c,password:s},body:JSON.stringify({date:e,description:t,headerId:n,amount:r,userId:a})});case 2:return l=o.sent,o.next=5,l.json();case 5:return u=o.sent,o.abrupt("return",u);case 7:case"end":return o.stop()}}),o)})))()},changeTransaction:function(e,t,n,r,a,c){var s=this;return Object(m.a)(b.a.mark((function i(){var o,l;return b.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,fetch("".concat(s.host,"/transactions/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json",userId:r,email:a,password:c},body:JSON.stringify({description:t,headerId:n})});case 2:return o=i.sent,i.next=5,o.json();case 5:return l=i.sent,i.abrupt("return",l);case 7:case"end":return i.stop()}}),i)})))()},deleteTransaction:function(e,t,n,r){var a=this;return Object(m.a)(b.a.mark((function c(){var s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("".concat(a.host,"/transactions/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",userId:t,email:n,password:r}});case 2:return s=c.sent,c.abrupt("return",s);case 4:case"end":return c.stop()}}),c)})))()}};var T=function(){var e,t=Object(r.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1],h=Object(r.useState)(""),b=Object(o.a)(h,2),m=b[0],O=b[1],x=Object(r.useState)(""),f=Object(o.a)(x,2),p=f[0],v=f[1],w=Object(r.useState)(""),N=Object(o.a)(w,2),T=N[0],C=N[1],F=Object(r.useState)(""),H=Object(o.a)(F,2),I=H[0],S=H[1],E=Object(r.useState)(""),D=Object(o.a)(E,2),P=D[0],M=D[1],A=Object(r.useState)(0),z=Object(o.a)(A,2),U=z[0],R=z[1],B=Object(r.useState)([]),_=Object(o.a)(B,2),W=_[0],L=_[1],G=Object(r.useState)([]),J=Object(o.a)(G,2),V=J[0],Y=J[1],q=Object(r.useState)(null),Z=Object(o.a)(q,2),K=Z[0],Q=Z[1],X=Object(r.useState)(""),$=Object(o.a)(X,2),ee=$[0],te=$[1],ne=Object(r.useState)(""),re=Object(o.a)(ne,2),ae=re[0],ce=re[1],se=Object(r.useState)(""),ie=Object(o.a)(se,2),oe=ie[0],le=ie[1],ue=Object(r.useState)(""),de=Object(o.a)(ue,2),je=de[0],he=de[1],be=Object(r.useState)(""),me=Object(o.a)(be,2),Oe=me[0],xe=me[1],fe=Object(r.useState)(50),pe=Object(o.a)(fe,2),ge=pe[0],ve=pe[1],we=[31,(e=(new Date).getFullYear(),e%400===0||e%4===0&&e%100!==0?29:28),31,30,31,30,31,31,30,31,30,31],Ne=Object(r.useState)("".concat((new Date).getFullYear(),"-").concat(String((new Date).getMonth()+1).padStart(2,"0"),"-01")),ye=Object(o.a)(Ne,2),ke=ye[0],Te=ye[1],Ce=Object(r.useState)("".concat((new Date).getFullYear(),"-").concat(String((new Date).getMonth()+1).padStart(2,"0"),"-").concat(we[(new Date).getMonth()])),Fe=Object(o.a)(Ce,2),He=Fe[0],Ie=Fe[1],Se=Object(r.useState)("table"),Ee=Object(o.a)(Se,2),De=Ee[0],Pe=Ee[1],Me=Object(r.useState)("en"),Ae=Object(o.a)(Me,2),ze=Ae[0],Ue=Ae[1],Re=Object(r.useState)(!0),Be=Object(o.a)(Re,2),_e=Be[0],We=Be[1];function Le(e){Ue(e.target.value)}function Ge(e){var t=V.find((function(t){return t.id===e})).name;return"nl"===ze&&"Unallocated income"===t?"Ongerubriceerde inkomsten":"nl"===ze&&"Unallocated expenses"===t?"Ongerubriceerde uitgaven":t}function Je(e){return e.sort((function(e,t){return e.date>t.date?-1:e.date<t.date?1:e.id>t.id?-1:1}))}return Object(r.useEffect)((function(){if(U){var e=[k.getHeaders(U,a,m),k.getTransactions(U,a,m)];try{Promise.all(e).then((function(e){Y((function(t){return Object(s.a)(e[0])})),L((function(t){return Object(s.a)(Je(e[1]))}))}))}catch(t){alert("en"===ze?"Unauthorized":"Niet geautoriseerd")}}}),[U,a,m,ze]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(l.b,{to:"/user",activeClassName:"active",children:"en"===ze?"User":"Gebruiker"}),Object(d.jsx)(l.b,{to:"/transactions",activeClassName:"active",children:"en"===ze?"Transactions":"Transacties"}),Object(d.jsx)(l.b,{to:"/overview",activeClassName:"active",children:"en"===ze?"Overview":"Overzicht"}),Object(d.jsxs)("div",{className:"langbar",children:[Object(d.jsx)("input",{type:"radio",id:"en",name:"lang",value:"en",checked:"en"===ze,onChange:Le}),Object(d.jsx)("label",{htmlFor:"en",children:"English"}),Object(d.jsx)("input",{type:"radio",id:"nl",name:"lang",value:"nl",checked:"en"!==ze,onChange:Le}),Object(d.jsx)("label",{htmlFor:"nl",children:"Nederlands"}),Object(d.jsx)("button",{onClick:function(){R((function(e){return 0})),c((function(e){return""})),O((function(e){return""})),L((function(e){return[]})),Y((function(e){return[]})),alert("en"===ze?"Succesfully logged out":"Succesvol uitgelogd")},children:"en"===ze?"Logout":"Uitloggen"})]})]}),Object(d.jsx)("main",{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsx)(u.a,{to:"/user"})}),Object(d.jsx)(u.b,{path:"/user",children:Object(d.jsx)(j,{email:a,setEmail:c,password:m,setPassword:O,newEmail:p,setNewEmail:v,newPassword1:T,setNewPassword1:C,newPassword2:I,setNewPassword2:S,forgotPasswordEmail:P,setForgotPasswordEmail:M,getPassword:function(e){k.getPassword(e).then((function(t){alert("en"===ze?"The password has been sent to ".concat(e):"Het wachtwoord is verzonden naar ".concat(e))})).catch((function(e){alert("en"===ze?"That address is not registered":"Dat adres is niet geregistreerd")}))},login:function(e,t){k.login(e,t).then((function(t){R(t),alert("en"===ze?"Succesfully logged in as ".concat(e):"Succesvol ingelogd als ".concat(e))})).catch((function(e){alert("en"===ze?"Invalid combination of email and password":"Ongeldige combinatie van email en wachtwoord")}))},register:function(e,t){k.register(e,t).then((function(t){alert("en"===ze?"Succesfully registered ".concat(e," as new user"):"".concat(e," succesvol geregistreerd als nieuwe gebruiker"))})).catch((function(e){alert("en"===ze?"That address is already registered":"Dat adres is al geregistreerd")}))},lang:ze})}),Object(d.jsx)(u.b,{path:"/transactions",children:Object(d.jsx)(g,{userId:U,transactions:W,headers:V,showCorrectHeader:Ge,date:K,setDate:Q,description:ee,setDescription:te,headerId:ae,setHeaderId:ce,amount:oe,setAmount:le,addTransaction:function(e,t,n,r){if(e)if(t.trim().length<1||t.trim().length>100)alert("en"===ze?"Description must be between 1 and 100 characters":"Omschrijving moet tussen 1 en 100 karakters zijn");else if(n)if(r<.01||r>999999.99)alert("en"===ze?"Amount must be between 0.01 and 999999.99":"Bedrag moet tussen 0.01 en 999999.99 zijn");else try{k.addTransaction(e,t.trim(),n,r,U,a,m).then((function(e){L((function(t){return Je([].concat(Object(s.a)(e),Object(s.a)(t)))})),te(""),ce(""),le("")}))}catch(c){alert("en"===ze?"Unauthorized":"Niet geautoriseerd")}else alert("en"===ze?"Please select a header":"Selecteer een rubriek");else alert("en"===ze?"Please select a date":"Selecteer een datum")},removeTransaction:function(e){try{k.deleteTransaction(e,U,a,m).then((function(t){return 204===t.status&&L((function(t){return t.filter((function(t){return t.id!==e}))}))}))}catch(t){alert("en"===ze?"Unauthorized":"Niet geautoriseerd")}},changeTransaction:function(e,t,n){if(t.trim().length<1||t.trim().length>100)alert("en"===ze?"Description must be between 1 and 100 characters":"Omschrijving moet tussen 1 en 100 karakters zijn");else if(n)try{k.changeTransaction(e,t.trim(),n,U,a,m).then((function(t){var n=W.findIndex((function(t){return t.id===e}));L((function(e){return[].concat(Object(s.a)(e.slice(0,n)),Object(s.a)(t),Object(s.a)(e.slice(n+1,e.length)))}))}))}catch(r){alert("en"===ze?"Unauthorized":"Niet geautoriseerd")}else alert("en"===ze?"Please select a header":"Selecteer een rubriek")},lang:ze,maxItemsOnPage:ge,setMaxItemsOnPage:ve})}),Object(d.jsx)(u.b,{path:"/overview",children:Object(d.jsx)(y,{userId:U,transactions:W,headers:V,showCorrectHeader:Ge,fromDate:ke,setFromDate:Te,toDate:He,setToDate:Ie,addHeader:function(e,t){if(e.trim().length<1||e.trim().length>50)alert("en"===ze?"Name must be between 1 and 50 characters":"Naam moet tussen 1 en 50 karakters bevatten");else{e=e.trim().substring(0,1).toUpperCase()+e.substring(1).toLowerCase();var n,r=Object(i.a)(V);try{for(r.s();!(n=r.n()).done;){if(n.value.name===e)return void alert("en"===ze?"Header already exists":"Rubriek bestaat al")}}catch(c){r.e(c)}finally{r.f()}try{k.addHeader(e,t,U,a,m).then((function(e){return Y((function(t){return[].concat(Object(s.a)(e),Object(s.a)(t))}))}))}catch(c){alert("en"===ze?"Unauthorized":"Niet geautoriseerd")}}},newHeaderIn:je,setNewHeaderIn:he,newHeaderOut:Oe,setNewHeaderOut:xe,removeHeader:function(e){var t=V.find((function(t){return t.id===e})).name;if("Unallocated income"!==t&&"Unallocated expenses"!==t){var n,r=Object(i.a)(W);try{for(r.s();!(n=r.n()).done;){if(n.value.header_id===e)return void alert("en"===ze?"There are still transactions with that header":"Er zijn nog transacties in die rubriek")}}catch(c){r.e(c)}finally{r.f()}try{k.deleteHeader(e,U,a,m).then((function(t){return 204===t.status&&Y((function(t){return t.filter((function(t){return t.id!==e}))}))}))}catch(c){alert("en"===ze?"Unauthorized":"Niet geautoriseerd")}}else alert("en"===ze?"You cannot delete default headers":"Standaardrubrieken kunnen niet verwijderd worden")},showEmpty:_e,setShowEmpty:We,view:De,setView:Pe,lang:ze})})]})})]})};c.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(T,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.bc37e1b3.chunk.js.map