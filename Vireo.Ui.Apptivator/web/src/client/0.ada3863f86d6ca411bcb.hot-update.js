webpackHotUpdate(0,{

/***/ 3204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regenerator = __webpack_require__(177);\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nexports.addPayment = addPayment;\nexports.default = _callee;\n\nvar _reduxSaga = __webpack_require__(263);\n\nvar _effects = __webpack_require__(265);\n\nvar _payments = __webpack_require__(3205);\n\nvar _payments2 = _interopRequireDefault(_payments);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _marked = [addPayment, watchPaymentAdd, _callee].map(_regenerator2.default.mark);\n\nfunction addPayment(action) {\n    return _regenerator2.default.wrap(function addPayment$(_context) {\n        while (1) {\n            switch (_context.prev = _context.next) {\n                case 0:\n                    _context.prev = 0;\n                    _context.next = 3;\n                    return (0, _effects.call)(_payments2.default.create, action.payload.token, action.payload.email);\n\n                case 3:\n                    _context.next = 5;\n                    return (0, _effects.put)({\n                        type: 'payments/add/success',\n                        success: true\n                    });\n\n                case 5:\n                    _context.next = 11;\n                    break;\n\n                case 7:\n                    _context.prev = 7;\n                    _context.t0 = _context['catch'](0);\n                    _context.next = 11;\n                    return (0, _effects.put)({\n                        type: 'payments/add/failed',\n                        err: _context.t0\n                    });\n\n                case 11:\n                case 'end':\n                    return _context.stop();\n            }\n        }\n    }, _marked[0], this, [[0, 7]]);\n}\n\nfunction watchPaymentAdd() {\n    return _regenerator2.default.wrap(function watchPaymentAdd$(_context2) {\n        while (1) {\n            switch (_context2.prev = _context2.next) {\n                case 0:\n                    _context2.next = 2;\n                    return (0, _reduxSaga.takeLatest)('payments/add', addPayment);\n\n                case 2:\n                case 'end':\n                    return _context2.stop();\n            }\n        }\n    }, _marked[1], this);\n}\n\nfunction _callee() {\n    return _regenerator2.default.wrap(function _callee$(_context3) {\n        while (1) {\n            switch (_context3.prev = _context3.next) {\n                case 0:\n                    _context3.next = 2;\n                    return (0, _effects.fork)(watchPaymentAdd);\n\n                case 2:\n                case 'end':\n                    return _context3.stop();\n            }\n        }\n    }, _marked[2], this);\n}\n\n//export function* getTodos() {\n//    try {\n//        const response = yield call(apiCall, 'todos', 'GET');\n//        yield put({\n//            type: 'todos/get/success',\n//            response\n//        });\n//    } catch (err) {\n//        // eslint-disable-next-line\n//        console.error(err);\n//        yield put({\n//            type: 'todos/get/failed',\n//            err\n//        });\n//    }\n//}\n\n//export function* addTodo(action) {\n//    try {\n//        yield call(apiCall, 'todos', 'POST', {\n//            todo: action.todo\n//        });\n//        yield put({\n//            type: 'todos/add/success'\n//        });\n//        yield put({\n//            type: 'todos/get'\n//        });\n//    } catch (err) {\n//        // eslint-disable-next-line\n//        console.error(err);\n//        yield put({\n//            type: 'todos/add/failed',\n//            err\n//        });\n//    }\n//}\n\n//export function* deleteTodo(action) {\n//    try {\n//        yield call(apiCall, `todos/${action.todo.id}`, 'DELETE');\n//        yield put({\n//            type: 'todos/delete/success'\n//        });\n//        yield put({\n//            type: 'todos/get'\n//        });\n//    } catch (err) {\n//        //console.error(err);\n//        yield put({\n//            type: 'todos/delete/failed',\n//            err\n//        });\n//    }\n////}\n\n//function* watchTodosGet() {\n//    yield takeLatest('todos/get', getTodos);\n//}\n\n//function* watchTodoAdd() {\n//    yield takeLatest('todos/add', addTodo);\n//}\n\n//function* watchTodoDelete() {\n//    yield takeLatest('todos/delete', deleteTodo);\n//}\n\n//export default function* () {\n//yield fork(watchTodosGet);\n//yield fork(watchTodoAdd);\n//yield fork(watchTodoDelete);\n//}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIwNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zYWdhcy9wYXltZW50cy5qcz8xZDYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcicpO1xuXG52YXIgX3JlZ2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2VuZXJhdG9yKTtcblxuZXhwb3J0cy5hZGRQYXltZW50ID0gYWRkUGF5bWVudDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9jYWxsZWU7XG5cbnZhciBfcmVkdXhTYWdhID0gcmVxdWlyZSgncmVkdXgtc2FnYScpO1xuXG52YXIgX2VmZmVjdHMgPSByZXF1aXJlKCdyZWR1eC1zYWdhL2VmZmVjdHMnKTtcblxudmFyIF9wYXltZW50cyA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL3BheW1lbnRzJyk7XG5cbnZhciBfcGF5bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF5bWVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX21hcmtlZCA9IFthZGRQYXltZW50LCB3YXRjaFBheW1lbnRBZGQsIF9jYWxsZWVdLm1hcChfcmVnZW5lcmF0b3IyLmRlZmF1bHQubWFyayk7XG5cbmZ1bmN0aW9uIGFkZFBheW1lbnQoYWN0aW9uKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcjIuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIGFkZFBheW1lbnQkKF9jb250ZXh0KSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2VmZmVjdHMuY2FsbCkoX3BheW1lbnRzMi5kZWZhdWx0LmNyZWF0ZSwgYWN0aW9uLnBheWxvYWQudG9rZW4sIGFjdGlvbi5wYXlsb2FkLmVtYWlsKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2VmZmVjdHMucHV0KSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGF5bWVudHMvYWRkL3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDExO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDc7XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbJ2NhdGNoJ10oMCk7XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfZWZmZWN0cy5wdXQpKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXltZW50cy9hZGQvZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycjogX2NvbnRleHQudDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBfbWFya2VkWzBdLCB0aGlzLCBbWzAsIDddXSk7XG59XG5cbmZ1bmN0aW9uIHdhdGNoUGF5bWVudEFkZCgpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yMi5kZWZhdWx0LndyYXAoZnVuY3Rpb24gd2F0Y2hQYXltZW50QWRkJChfY29udGV4dDIpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9yZWR1eFNhZ2EudGFrZUxhdGVzdCkoJ3BheW1lbnRzL2FkZCcsIGFkZFBheW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgX21hcmtlZFsxXSwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcjIuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0Mykge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2VmZmVjdHMuZm9yaykod2F0Y2hQYXltZW50QWRkKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIF9tYXJrZWRbMl0sIHRoaXMpO1xufVxuXG4vL2V4cG9ydCBmdW5jdGlvbiogZ2V0VG9kb3MoKSB7XG4vLyAgICB0cnkge1xuLy8gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChhcGlDYWxsLCAndG9kb3MnLCAnR0VUJyk7XG4vLyAgICAgICAgeWllbGQgcHV0KHtcbi8vICAgICAgICAgICAgdHlwZTogJ3RvZG9zL2dldC9zdWNjZXNzJyxcbi8vICAgICAgICAgICAgcmVzcG9uc2Vcbi8vICAgICAgICB9KTtcbi8vICAgIH0gY2F0Y2ggKGVycikge1xuLy8gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgICAgICB5aWVsZCBwdXQoe1xuLy8gICAgICAgICAgICB0eXBlOiAndG9kb3MvZ2V0L2ZhaWxlZCcsXG4vLyAgICAgICAgICAgIGVyclxuLy8gICAgICAgIH0pO1xuLy8gICAgfVxuLy99XG5cbi8vZXhwb3J0IGZ1bmN0aW9uKiBhZGRUb2RvKGFjdGlvbikge1xuLy8gICAgdHJ5IHtcbi8vICAgICAgICB5aWVsZCBjYWxsKGFwaUNhbGwsICd0b2RvcycsICdQT1NUJywge1xuLy8gICAgICAgICAgICB0b2RvOiBhY3Rpb24udG9kb1xuLy8gICAgICAgIH0pO1xuLy8gICAgICAgIHlpZWxkIHB1dCh7XG4vLyAgICAgICAgICAgIHR5cGU6ICd0b2Rvcy9hZGQvc3VjY2Vzcydcbi8vICAgICAgICB9KTtcbi8vICAgICAgICB5aWVsZCBwdXQoe1xuLy8gICAgICAgICAgICB0eXBlOiAndG9kb3MvZ2V0J1xuLy8gICAgICAgIH0pO1xuLy8gICAgfSBjYXRjaCAoZXJyKSB7XG4vLyAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLyAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuLy8gICAgICAgIHlpZWxkIHB1dCh7XG4vLyAgICAgICAgICAgIHR5cGU6ICd0b2Rvcy9hZGQvZmFpbGVkJyxcbi8vICAgICAgICAgICAgZXJyXG4vLyAgICAgICAgfSk7XG4vLyAgICB9XG4vL31cblxuLy9leHBvcnQgZnVuY3Rpb24qIGRlbGV0ZVRvZG8oYWN0aW9uKSB7XG4vLyAgICB0cnkge1xuLy8gICAgICAgIHlpZWxkIGNhbGwoYXBpQ2FsbCwgYHRvZG9zLyR7YWN0aW9uLnRvZG8uaWR9YCwgJ0RFTEVURScpO1xuLy8gICAgICAgIHlpZWxkIHB1dCh7XG4vLyAgICAgICAgICAgIHR5cGU6ICd0b2Rvcy9kZWxldGUvc3VjY2Vzcydcbi8vICAgICAgICB9KTtcbi8vICAgICAgICB5aWVsZCBwdXQoe1xuLy8gICAgICAgICAgICB0eXBlOiAndG9kb3MvZ2V0J1xuLy8gICAgICAgIH0pO1xuLy8gICAgfSBjYXRjaCAoZXJyKSB7XG4vLyAgICAgICAgLy9jb25zb2xlLmVycm9yKGVycik7XG4vLyAgICAgICAgeWllbGQgcHV0KHtcbi8vICAgICAgICAgICAgdHlwZTogJ3RvZG9zL2RlbGV0ZS9mYWlsZWQnLFxuLy8gICAgICAgICAgICBlcnJcbi8vICAgICAgICB9KTtcbi8vICAgIH1cbi8vLy99XG5cbi8vZnVuY3Rpb24qIHdhdGNoVG9kb3NHZXQoKSB7XG4vLyAgICB5aWVsZCB0YWtlTGF0ZXN0KCd0b2Rvcy9nZXQnLCBnZXRUb2Rvcyk7XG4vL31cblxuLy9mdW5jdGlvbiogd2F0Y2hUb2RvQWRkKCkge1xuLy8gICAgeWllbGQgdGFrZUxhdGVzdCgndG9kb3MvYWRkJywgYWRkVG9kbyk7XG4vL31cblxuLy9mdW5jdGlvbiogd2F0Y2hUb2RvRGVsZXRlKCkge1xuLy8gICAgeWllbGQgdGFrZUxhdGVzdCgndG9kb3MvZGVsZXRlJywgZGVsZXRlVG9kbyk7XG4vL31cblxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKCkge1xuLy95aWVsZCBmb3JrKHdhdGNoVG9kb3NHZXQpO1xuLy95aWVsZCBmb3JrKHdhdGNoVG9kb0FkZCk7XG4vL3lpZWxkIGZvcmsod2F0Y2hUb2RvRGVsZXRlKTtcbi8vfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3NhZ2FzL3BheW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3204\n");

/***/ })

})