webpackHotUpdate(0,{

/***/ 3349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _defineProperty2 = __webpack_require__(182);\n\nvar _defineProperty3 = _interopRequireDefault(_defineProperty2);\n\nvar _extends2 = __webpack_require__(114);\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _handleActions;\n\nvar _reduxActions = __webpack_require__(2725);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar payments = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, 'payments/add', function paymentsAdd(state) {\n    return (0, _extends3.default)({}, state, { isLoading: true });\n}), (0, _defineProperty3.default)(_handleActions, 'payments/add/success', function paymentsAddSuccess(state, action) {\n    return (0, _extends3.default)({}, state, { isLoading: false, success: action.payload.success });\n}), (0, _defineProperty3.default)(_handleActions, 'payments/add/failed', function paymentsAddFailed(state, action) {\n    return (0, _extends3.default)({}, state, { isLoading: false, err: action.err });\n}), _handleActions), {\n    isLoading: false\n});\n\nexports.default = payments;\n\n//['todos/get'](state) {\n//    return { ...state, isLoading: true };\n//},\n//['todos/get/success'](state, action) {\n//  return {...state, isLoading: false, list: action.response};\n//},\n//['todos/get/failed'](state, action) {\n//  return {...state, isLoading: false, err: action.err};\n//},\n\n////todos/add\n//['todos/add'](state, action) {\n//  return {...state, isLoading: true, list: [...state.list, action.todo]};\n//},\n//['todos/add/success'](state) {\n//  return {...state, isLoading: false};\n//},\n//['todos/add/failed'](state, action) {\n//  return {...state, isLoading: false, err: action.err};\n//},\n\n////todos/delete\n//['todos/delete'](state, action) {\n//  return {...state, isLoading: true, list: state.list.filter((todo) => todo.id !== action.todo.id)};\n//},\n//['todos/delete/success'](state) {\n//  return {...state, isLoading: false};\n//},\n//['todos/delete/failed'](state, action) {\n//  return {...state, isLoading: false, err: action.err};\n//},//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM0OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9yZWR1Y2Vycy9wYXltZW50cy5qcz81NGZkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2hhbmRsZUFjdGlvbnM7XG5cbnZhciBfcmVkdXhBY3Rpb25zID0gcmVxdWlyZSgncmVkdXgtYWN0aW9ucycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcGF5bWVudHMgPSAoMCwgX3JlZHV4QWN0aW9ucy5oYW5kbGVBY3Rpb25zKSgoX2hhbmRsZUFjdGlvbnMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2hhbmRsZUFjdGlvbnMsICdwYXltZW50cy9hZGQnLCBmdW5jdGlvbiBwYXltZW50c0FkZChzdGF0ZSkge1xuICAgIHJldHVybiAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBzdGF0ZSwgeyBpc0xvYWRpbmc6IHRydWUgfSk7XG59KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2hhbmRsZUFjdGlvbnMsICdwYXltZW50cy9hZGQvc3VjY2VzcycsIGZ1bmN0aW9uIHBheW1lbnRzQWRkU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHN0YXRlLCB7IGlzTG9hZGluZzogZmFsc2UsIHN1Y2Nlc3M6IGFjdGlvbi5wYXlsb2FkLnN1Y2Nlc3MgfSk7XG59KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2hhbmRsZUFjdGlvbnMsICdwYXltZW50cy9hZGQvZmFpbGVkJywgZnVuY3Rpb24gcGF5bWVudHNBZGRGYWlsZWQoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBzdGF0ZSwgeyBpc0xvYWRpbmc6IGZhbHNlLCBlcnI6IGFjdGlvbi5lcnIgfSk7XG59KSwgX2hhbmRsZUFjdGlvbnMpLCB7XG4gICAgaXNMb2FkaW5nOiBmYWxzZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBheW1lbnRzO1xuXG4vL1sndG9kb3MvZ2V0J10oc3RhdGUpIHtcbi8vICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUgfTtcbi8vfSxcbi8vWyd0b2Rvcy9nZXQvc3VjY2VzcyddKHN0YXRlLCBhY3Rpb24pIHtcbi8vICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBsaXN0OiBhY3Rpb24ucmVzcG9uc2V9O1xuLy99LFxuLy9bJ3RvZG9zL2dldC9mYWlsZWQnXShzdGF0ZSwgYWN0aW9uKSB7XG4vLyAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgZXJyOiBhY3Rpb24uZXJyfTtcbi8vfSxcblxuLy8vL3RvZG9zL2FkZFxuLy9bJ3RvZG9zL2FkZCddKHN0YXRlLCBhY3Rpb24pIHtcbi8vICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIGxpc3Q6IFsuLi5zdGF0ZS5saXN0LCBhY3Rpb24udG9kb119O1xuLy99LFxuLy9bJ3RvZG9zL2FkZC9zdWNjZXNzJ10oc3RhdGUpIHtcbi8vICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlfTtcbi8vfSxcbi8vWyd0b2Rvcy9hZGQvZmFpbGVkJ10oc3RhdGUsIGFjdGlvbikge1xuLy8gIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UsIGVycjogYWN0aW9uLmVycn07XG4vL30sXG5cbi8vLy90b2Rvcy9kZWxldGVcbi8vWyd0b2Rvcy9kZWxldGUnXShzdGF0ZSwgYWN0aW9uKSB7XG4vLyAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlLCBsaXN0OiBzdGF0ZS5saXN0LmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gYWN0aW9uLnRvZG8uaWQpfTtcbi8vfSxcbi8vWyd0b2Rvcy9kZWxldGUvc3VjY2VzcyddKHN0YXRlKSB7XG4vLyAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZX07XG4vL30sXG4vL1sndG9kb3MvZGVsZXRlL2ZhaWxlZCddKHN0YXRlLCBhY3Rpb24pIHtcbi8vICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBlcnI6IGFjdGlvbi5lcnJ9O1xuLy99LFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3JlZHVjZXJzL3BheW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3349\n");

/***/ })

})