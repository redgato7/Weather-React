(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,a,t){e.exports=t(18)},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),s=(t(16),t(5)),o=t(20),u=t(21),i=t(22),m=t(8),d=t.n(m),h=t(9),p=t.n(h),E="74e0880921fff7222c9ea2f083dd5421",y="http://api.weatherstack.com/";var f=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({}),m=Object(s.a)(l,2),h=m[0],f=m[1];return r.a.createElement(o.a,null,r.a.createElement("main",null,r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(y,"current?access_key=").concat(E,"&query=").concat(t)).then((function(e){return e.json()})).then((function(e){f(e),c(""),console.log(e)}))},type:"text",className:"search-bar",placeholder:"Search..."})))),r.a.createElement(u.a,null,r.a.createElement(i.a,null,"undefined"!=typeof h.location?r.a.createElement("div",{className:"weather-section"},r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},h.location.name,",",r.a.createElement("p",null,h.location.country)),r.a.createElement("hr",null),r.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(a,", ").concat(t," ").concat(n," ").concat(r)}(new Date))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},h.current.temperature,"\xb0C"),r.a.createElement("div",null,r.a.createElement("img",{width:"22px",height:"22px",alt:"pressure",src:p.a})," ",h.current.pressure,"hpa"),r.a.createElement("div",null,r.a.createElement("img",{width:"22px",height:"22px",alt:"wind",src:d.a})," ",h.current.wind_speed,"km/h ",h.current.wind_dir),r.a.createElement("div",{className:"weather"},h.current.weather_descriptions[0]))):r.a.createElement("div",{className:"weather-section"},r.a.createElement("div",{className:"info"},"If you are searching too much API sends false requests. Sorry for that!"))))))};t(17);l.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t.p+"static/media/windy.0950346d.svg"},9:function(e,a,t){e.exports=t.p+"static/media/gauge.a41aa334.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.db49ebfe.chunk.js.map