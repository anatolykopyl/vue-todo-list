(function(t){function e(e){for(var n,d,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)d=i[l],r[d]&&f.push(r[d][0]),r[d]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=d(d.s=o[0]))}return t}var n={},r={app:0},a=[];function d(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=t,d.c=n,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(o,n,function(e){return t[e]}.bind(null,n));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},1400:function(t,e,o){},"39d3":function(t,e,o){},"42a7":function(t,e,o){},"4e03":function(t,e,o){"use strict";var n=o("1400"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},a=[],d=o("11c1"),i=o.n(d),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("Мои Дела 📝")])])}],c={name:"Header"},l=c,f=o("2877"),p=Object(f["a"])(l,u,s,!1,null,"9d7f9c82",null),m=p.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("draggable",{staticClass:"todos",on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}},t._l(t.todos,function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)}),0)},h=[],b=o("310e"),_=o.n(b),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed},on:{click:t.markComplete}},[o("p",[t._v("\n    "+t._s(t.todo.name)+"\n    "),o("button",{staticClass:"delete",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("❌")])])])},y=[],T={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},x=T,O=(o("4e03"),Object(f["a"])(x,g,y,!1,null,"fa526f3c",null)),j=O.exports,w={name:"Todos",components:{draggable:_.a,TodoItem:j},props:["todos"],methods:{moveItem:function(t,e){this.todos.splice(e,0,this.todos[t]),this.todos[t]=null}}},$=w,k=(o("900c"),Object(f["a"])($,v,h,!1,null,"7f14599a",null)),C=k.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{staticClass:"addTodo",attrs:{autocomplete:"off"},on:{submit:function(e){e.preventDefault(),t.$emit("add-todo",t.inputName),t.inputName=""}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],staticClass:"txtField",attrs:{type:"text",name:"title",placeholder:"Название дела..."},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Добавить"}})])])},P=[],E={name:"AddTodo",data:function(){return{inputName:""}}},S=E,I=(o("9da6"),Object(f["a"])(S,N,P,!1,null,"2a0e5e01",null)),M=I.exports,A={name:"app",components:{Header:m,Todos:C,AddTodo:M},data:function(){return{todos:[{id:i.a.v4(),name:"Что-то, что я собираюсь сделать",completed:!1},{id:i.a.v4(),name:"Что-то, что я уже сделал",completed:!0}]}},methods:{deleteTodo:function(t){this.todos=this.todos.filter(function(e){return e.id!==t})},addTodo:function(t){""!==t&" "!==t&&this.todos.push({id:i.a.v4(),name:t,completed:!1})}}},H=A,J=(o("034f"),Object(f["a"])(H,r,a,!1,null,null,null)),D=J.exports,F=o("2f62");n["a"].use(F["a"]);var q=new F["a"].Store({modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:q,render:function(t){return t(D)}}).$mount("#app")},"64a9":function(t,e,o){},"900c":function(t,e,o){"use strict";var n=o("42a7"),r=o.n(n);r.a},"9da6":function(t,e,o){"use strict";var n=o("39d3"),r=o.n(n);r.a}});
//# sourceMappingURL=app.170f7cb7.js.map