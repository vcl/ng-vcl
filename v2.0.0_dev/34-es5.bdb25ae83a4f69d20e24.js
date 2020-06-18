function _slicedToArray(s,t){return _arrayWithHoles(s)||_iterableToArrayLimit(s,t)||_unsupportedIterableToArray(s,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(s,t){if(s){if("string"==typeof s)return _arrayLikeToArray(s,t);var n=Object.prototype.toString.call(s).slice(8,-1);return"Object"===n&&s.constructor&&(n=s.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(s,t):void 0}}function _arrayLikeToArray(s,t){(null==t||t>s.length)&&(t=s.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=s[n];return e}function _iterableToArrayLimit(s,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(s)){var n=[],e=!0,a=!1,r=void 0;try{for(var l,o=s[Symbol.iterator]();!(e=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);e=!0);}catch(i){a=!0,r=i}finally{try{e||null==o.return||o.return()}finally{if(a)throw r}}return n}}function _arrayWithHoles(s){if(Array.isArray(s))return s}function _inherits(s,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(t&&t.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),t&&_setPrototypeOf(s,t)}function _setPrototypeOf(s,t){return(_setPrototypeOf=Object.setPrototypeOf||function(s,t){return s.__proto__=t,s})(s,t)}function _createSuper(s){return function(){var t,n=_getPrototypeOf(s);if(_isNativeReflectConstruct()){var e=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(s,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(s):t}function _assertThisInitialized(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(s){return!1}}function _getPrototypeOf(s){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(s)}function _classCallCheck(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function _createClass(s,t,n){return t&&_defineProperties(s.prototype,t),n&&_defineProperties(s,n),s}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"8XpO":function(s,t){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"15"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"30"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">secondaryValue</span>]=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">speed</span>]=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"110"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value$ | async"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"1000"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n'},HoVZ:function(s,t){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { zip, range, interval, animationFrameScheduler } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { map } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ProgressBarDemoComponent {\n  value$ = zip(range(<span class="hljs-number">0</span>, <span class="hljs-number">1000</span>), interval(<span class="hljs-number">50</span>, animationFrameScheduler)).pipe(map(<span class="hljs-function">(<span class="hljs-params">[x]</span>) =&gt;</span> x));\n}\n'},skhp:function(s,t,n){"use strict";n.r(t),n.d(t,"demo",(function(){return A})),n.d(t,"ProgressBarDemoModule",(function(){return N}));var e=n("ofXK"),a=n("tyNb"),r=n("19H1"),l=n("2FIb"),o=n("yCtX"),i=n("DH7j"),c=n("7o/Q"),p=n("l7GE"),u=n("ZUHj"),h=n("Lhse"),d=function(){function s(t){_classCallCheck(this,s),this.resultSelector=t}return _createClass(s,[{key:"call",value:function(s,t){return t.subscribe(new f(s,this.resultSelector))}}]),s}(),f=function(s){_inherits(n,s);var t=_createSuper(n);function n(s,e){var a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.create(null);return _classCallCheck(this,n),(a=t.call(this,s)).iterators=[],a.active=0,a.resultSelector="function"==typeof e?e:null,a.values=r,a}return _createClass(n,[{key:"_next",value:function(s){var t=this.iterators;Object(i.a)(s)?t.push(new g(s)):t.push("function"==typeof s[h.a]?new b(s[h.a]()):new v(this.destination,this,s))}},{key:"_complete",value:function(){var s=this.iterators,t=s.length;if(this.unsubscribe(),0!==t){this.active=t;for(var n=0;n<t;n++){var e=s[n];e.stillUnsubscribed?this.destination.add(e.subscribe(e,n)):this.active--}}else this.destination.complete()}},{key:"notifyInactive",value:function(){this.active--,0===this.active&&this.destination.complete()}},{key:"checkIterators",value:function(){for(var s=this.iterators,t=s.length,n=this.destination,e=0;e<t;e++){var a=s[e];if("function"==typeof a.hasValue&&!a.hasValue())return}for(var r=!1,l=[],o=0;o<t;o++){var i=s[o],c=i.next();if(i.hasCompleted()&&(r=!0),c.done)return void n.complete();l.push(c.value)}this.resultSelector?this._tryresultSelector(l):n.next(l),r&&n.complete()}},{key:"_tryresultSelector",value:function(s){var t;try{t=this.resultSelector.apply(this,s)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}]),n}(c.a),b=function(){function s(t){_classCallCheck(this,s),this.iterator=t,this.nextResult=t.next()}return _createClass(s,[{key:"hasValue",value:function(){return!0}},{key:"next",value:function(){var s=this.nextResult;return this.nextResult=this.iterator.next(),s}},{key:"hasCompleted",value:function(){var s=this.nextResult;return s&&s.done}}]),s}(),g=function(){function s(t){_classCallCheck(this,s),this.array=t,this.index=0,this.length=0,this.length=t.length}return _createClass(s,[{key:h.a,value:function(){return this}},{key:"next",value:function(s){var t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}},{key:"hasValue",value:function(){return this.array.length>this.index}},{key:"hasCompleted",value:function(){return this.array.length===this.index}}]),s}(),v=function(s){_inherits(n,s);var t=_createSuper(n);function n(s,e,a){var r;return _classCallCheck(this,n),(r=t.call(this,s)).parent=e,r.observable=a,r.stillUnsubscribed=!0,r.buffer=[],r.isComplete=!1,r}return _createClass(n,[{key:h.a,value:function(){return this}},{key:"next",value:function(){var s=this.buffer;return 0===s.length&&this.isComplete?{value:null,done:!0}:{value:s.shift(),done:!1}}},{key:"hasValue",value:function(){return this.buffer.length>0}},{key:"hasCompleted",value:function(){return 0===this.buffer.length&&this.isComplete}},{key:"notifyComplete",value:function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}},{key:"notifyNext",value:function(s,t,n,e,a){this.buffer.push(t),this.parent.checkIterators()}},{key:"subscribe",value:function(s,t){return Object(u.a)(this,this.observable,this,t)}}]),n}(p.a),m=n("HDdC");function j(s){var t=s.start,n=s.index,e=s.count,a=s.subscriber;n>=e?a.complete():(a.next(t),a.closed||(s.index=n+1,s.start=t+1,this.schedule(s)))}var y,_=n("l5mm"),k=n("eNwd"),x=n("lJxs"),w=n("fXoL"),C=n("pt6R"),O=((y=function s(){_classCallCheck(this,s),this.value$=function(){for(var s=arguments.length,t=new Array(s),n=0;n<s;n++)t[n]=arguments[n];var e=t[t.length-1];return"function"==typeof e&&t.pop(),Object(o.a)(t,void 0).lift(new d(e))}(function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return new m.a((function(e){void 0===t&&(t=s,s=0);var a=0,r=s;if(n)return n.schedule(j,0,{index:a,count:t,start:s,subscriber:e});for(;;){if(a++>=t){e.complete();break}if(e.next(r++),e.closed)break}}))}(0,1e3),Object(_.a)(50,k.a)).pipe(Object(x.a)((function(s){return _slicedToArray(s,1)[0]})))}).\u0275fac=function(s){return new(s||y)},y.\u0275cmp=w.Gb({type:y,selectors:[["ng-component"]],decls:18,vars:20,consts:[[3,"value"],[3,"minValue","maxValue","value"],[3,"value","secondaryValue"],[3,"indeterminate"],[3,"indeterminate","speed"],[3,"value","indeterminate"],[3,"value","maxValue"]],template:function(s,t){1&s&&(w.Nb(0,"vcl-progress-bar",0),w.Nb(1,"br"),w.Nb(2,"vcl-progress-bar",1),w.Nb(3,"br"),w.Nb(4,"vcl-progress-bar",1),w.Nb(5,"br"),w.Nb(6,"vcl-progress-bar",2),w.Nb(7,"br"),w.Nb(8,"vcl-progress-bar",3),w.Nb(9,"br"),w.Nb(10,"vcl-progress-bar",4),w.Nb(11,"br"),w.Nb(12,"vcl-progress-bar",5),w.Nb(13,"br"),w.Nb(14,"vcl-progress-bar",5),w.Nb(15,"br"),w.Nb(16,"vcl-progress-bar",6),w.ec(17,"async")),2&s&&(w.ic("value",80),w.Ab(2),w.ic("minValue",10)("maxValue",20)("value",15),w.Ab(2),w.ic("minValue",10)("maxValue",20)("value",30),w.Ab(2),w.ic("value",40)("secondaryValue",60),w.Ab(2),w.ic("indeterminate",!0),w.Ab(2),w.ic("indeterminate",!0)("speed",5),w.Ab(2),w.ic("value",40)("indeterminate",!0),w.Ab(2),w.ic("value",110)("indeterminate",!0),w.Ab(2),w.ic("value",w.fc(17,18,t.value$))("maxValue",1e3))},directives:[C.a],pipes:[e.b],encapsulation:2}),y);function A(){return{label:"Progress-Bar",tabs:{Demo:O,"README.md":{type:"md",content:'<h1 id="vcl-progress-bar">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-progress-bar [value]=&quot;0&quot;&gt;&lt;/vcl-progress-bar&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value</td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid</td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("8XpO")},"demo.component.ts":{type:"pre",content:n("HoVZ")}}}}var V,N=((V=function s(){_classCallCheck(this,s)}).\u0275mod=w.Kb({type:V}),V.\u0275inj=w.Jb({factory:function(s){return new(s||V)},imports:[[e.c,l.b,r.Z,a.g.forChild([{path:"",component:l.a,data:{demo:A}}])]]}),V)}}]);