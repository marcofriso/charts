(this.webpackJsonpcharts=this.webpackJsonpcharts||[]).push([[0],{158:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),i=e.n(a),c=e(47),o=e.n(c),s=(e(58),e(10)),u=e(5),l=e(6);function d(){var n=Object(u.a)(["\n  transform: translatey(-50%);\n  text-align: center;\n\n  input {\n    padding: 15px;\n    width: 270px;\n    font-size: 20px;\n  }\n\n  button {\n    padding: 25px;\n    background-color: #f4511e;\n    border: none;\n    color: white;\n    padding: 16px 32px;\n    text-align: center;\n    font-size: 20px;\n    margin: 4px 2px;\n    opacity: 0.6;\n    transition: 0.3s;\n    display: inline-block;\n    text-decoration: none;\n    cursor: pointer;\n  }\n"]);return d=function(){return n},n}var b=l.a.div(d()),h=function(n){var t=Object(a.useState)(""),e=Object(s.a)(t,2),i=e[0],c=e[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],d=u[1];return Object(r.jsx)(b,{children:Object(r.jsxs)("form",{onSubmit:function(t){n.declareFormData({nrCharts:parseInt(i),dataPoints:parseInt(l)}),c(""),d(""),t.preventDefault()},children:[Object(r.jsx)("input",{type:"number",id:"nr-charts",name:"nr-charts",placeholder:"Insert number of charts",min:"1",max:"10",required:!0,onChange:function(n){return c(n.target.value)},value:i}),Object(r.jsx)("input",{type:"number",id:"nr-data-points",placeholder:"Insert number of data points",min:"1",max:"200",required:!0,value:l,onChange:function(n){return d(n.target.value)}}),Object(r.jsx)("button",{type:"submit",children:"Generate Charts"})]})})},j=e(52),p=e(51);function x(){var n=Object(u.a)(["\n  margin-top: -11.5px;\n  padding-bottom: 10px;\n"]);return x=function(){return n},n}function f(){var n=Object(u.a)(["\n  background: white;\n  margin: 20px auto;\n  max-width: 1000px;\n  align: center;\n"]);return f=function(){return n},n}var m=l.a.div(f()),g=l.a.div(x()),O=function(n,t){return{labels:t,datasets:[{label:"chart",data:n,lineTension:0,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]}},v=function(n){return{title:{display:!0,text:n,fontSize:20},scales:{yAxes:[{ticks:{min:0,max:100}}]},legend:{display:!1}}},y=function(n){var t=n.name,e=n.chartData,a=n.labels;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m,{children:Object(r.jsx)(p.Line,{data:O(e,a),options:v(t)})})})},C=function(n){var t=n.chartsData[0].length,e=Object(j.a)(Array(t).keys()).map((function(n){return n+1}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(g,{children:n.chartsData.map((function(n,t){return Object(r.jsx)("div",{children:Object(r.jsx)(y,{name:"Chart - ".concat(t+1),chartData:n,labels:e})},t)}))})})};function w(){var n=Object(u.a)(["\n  width: 100%;\n  height: 50%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-flow: column;\n\n  .bottom {\n    width: 100%;\n    height: 100%;\n    bottom: 0;\n    position: relative;\n    overflow: visible;\n  }\n"]);return w=function(){return n},n}var D=l.a.div(w()),F=function(){var n,t=Object(a.useState)(),e=Object(s.a)(t,2),c=e[0],o=e[1];return c&&(n=function(n){for(var t=[],e=0;e<n.nrCharts;e++){for(var r=[],a=0;a<n.dataPoints;a++)r.push(Math.ceil(100*Math.random()));t.push(r)}return t}(c),console.log("SET_APP_DATA",n)),Object(r.jsx)(i.a.Fragment,{children:Object(r.jsxs)(D,{children:[Object(r.jsx)(h,{declareFormData:o}),Object(r.jsx)("div",{className:"bottom",children:n&&Object(r.jsx)(C,{chartsData:n})})]})})},k=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,159)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;e(n),r(n),a(n),i(n),c(n)}))};o.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Charts Generator"})}),Object(r.jsx)(F,{})]}),document.getElementById("root")),k()},58:function(n,t,e){}},[[158,1,2]]]);
//# sourceMappingURL=main.38a5ec64.chunk.js.map