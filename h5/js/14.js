(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"172":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(_interopRequireDefault(n(1)),_interopRequireDefault(n(46))),a=_interopRequireDefault(n(0)),r=n(45),o=_interopRequireDefault(n(64)),c=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(173);var u=function(e){function AtTimeline(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTimeline);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTimeline.__proto__||Object.getPrototypeOf(AtTimeline)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTimeline,c.default),i(AtTimeline,[{"key":"onClick","value":function onClick(){}},{"key":"render","value":function render(){var e=this.props,t=e.pending,n=e.items,i=["at-timeline"],l=t?"at-timeline--pending":"";i.push(l),i=i.filter(function(e){return""!==e});var c=n.map(function(e,t){var n=e.title,i=void 0===n?"":n,l=e.color,c=e.icon,u=e.content,f=void 0===u?[]:u,s=["at-timelineitem"],m=l?"at-timelineitem--"+l:"";s.push(m),s=s.filter(function(e){return""!==e});var p=["at-timelineitem__dot"];return c&&p.push("at-timelineitem__icon"),a.default.createElement(r.View,{"className":s,"key":t},a.default.createElement(r.View,{"className":"at-timelineitem__tail"}),a.default.createElement(r.View,{"className":p},c&&a.default.createElement(o.default,{"value":c,"size":"16"})),a.default.createElement(r.View,{"className":"at-timelineitem__content"},a.default.createElement(r.View,{"className":"at-timelineitem__content-item"},i),f.map(function(e,t){return a.default.createElement(r.View,{"className":"at-timelineitem__content-item at-timelineitem__content--sub","key":t},e)})))});return a.default.createElement(r.View,{"className":i},c)}}]),AtTimeline}();t.default=u,u.defaultProps={"pending":!1,"items":[]},u.propTypes={"pending":l.default.bool,"items":l.default.arrayOf(l.default.object)}},"173":function(e,t,n){},"175":function(e,t,n){},"21":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),a=n(45),r=_interopRequireDefault(n(172)),o=_interopRequireDefault(n(48));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(175);var c=function(e){function TimelinePage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TimelinePage);for(var i=arguments.length,l=Array(i),a=0;a<i;a++)l[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=TimelinePage.__proto__||Object.getPrototypeOf(TimelinePage)).call.apply(e,[this].concat(l))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TimelinePage,l.default.Component),i(TimelinePage,[{"key":"render","value":function render(){return l.default.createElement(a.View,{"className":"page"},l.default.createElement(o.default,{"title":"Timeline 时间轴"}),l.default.createElement(a.View,{"className":"doc-body"},l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"基础用法"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"自定义颜色"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐","color":"green"},{"title":"上班","color":"red"},{"title":"睡觉","color":"yellow"}]})))),l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"自定义图标"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"items":[{"title":"刷牙洗脸","icon":"check-circle"},{"title":"吃早餐","icon":"clock"},{"title":"上班","icon":"clock"},{"title":"睡觉","icon":"clock"}]})))),l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"幽灵节点"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"pending":!0,"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"丰富内容"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"pending":!0,"items":[{"title":"刷牙洗脸","content":["大概8:00"],"icon":"check-circle"},{"title":"吃早餐","content":["牛奶+面包","餐后记得吃药"],"icon":"clock"},{"title":"上班","content":["查看邮件","写PPT","发送PPT给领导"],"icon":"clock"},{"title":"睡觉","content":["不超过23:00"],"icon":"clock"}]}))))))}}]),TimelinePage}();t.default=c}}]);