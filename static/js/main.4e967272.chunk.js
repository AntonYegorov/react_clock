(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),o=c(2),i=c(3),s=c(5),r=c(4),l=c(1),d=c(0),m=function(e){Object(s.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date},e.timerId=0,e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=new Date;console.log(t.toLocaleTimeString()),e.setState({date:t})}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.log("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"clock",children:[Object(d.jsx)("p",{className:"clock__name",children:this.props.name}),Object(d.jsx)("p",{className:"clock__time",children:this.state.date.toLocaleTimeString()})]})}}]),c}(l.Component),u=function(e){Object(s.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock \u21161"},e.setRandomName=setInterval((function(){var t=Math.random().toString().slice(2,6);e.setState({clockName:"Clock \u2116".concat(t)})}),3e3),e.visibleClock=function(){e.setState({hasClock:!0})},e.hiddenClock=function(){e.setState({hasClock:!1})},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.visibleClock),document.addEventListener("contextmenu",this.hiddenClock)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,c=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsx)("div",{className:"App__clock",children:Object(d.jsx)("div",{children:t&&Object(d.jsx)(m,{name:c})})})]})}}]),c}(l.Component),h=u;a.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4e967272.chunk.js.map