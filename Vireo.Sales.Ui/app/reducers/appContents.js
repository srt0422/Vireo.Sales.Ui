import { handleActions } from 'redux-actions';

const appContents = handleActions({
    //todos/get
    ['appContents/set'](state) {
        return { ...state, isLoading: true };
    },
    ['appContents/set/success'](state, action) {
        return { ...state, isLoading: false };
    },
    ['appContents/set/failed'](state, action) {
        return { ...state, isLoading: false, err: action.err };
    },

    ['appContents/get'](state, action) {
        return { ...state, isLoading: true };
    },
    ['appContents/get/success'](state, action) {
        return { ...state, isLoading: false, content: action.payload.content };
    },
    ['appContents/get/failed'](state, action) {
        return { ...state, isLoading: false, err: action.err };
    },

    //['todos/get'](state) {
    //    return { ...state, isLoading: true };
    //},
    //['todos/get/success'](state, action) {
    //  return {...state, isLoading: false, list: action.response};
    //},
    //['todos/get/failed'](state, action) {
    //  return {...state, isLoading: false, err: action.err};
    //},

    ////todos/add
    //['todos/add'](state, action) {
    //  return {...state, isLoading: true, list: [...state.list, action.todo]};
    //},
    //['todos/add/success'](state) {
    //  return {...state, isLoading: false};
    //},
    //['todos/add/failed'](state, action) {
    //  return {...state, isLoading: false, err: action.err};
    //},

    ////todos/delete
    //['todos/delete'](state, action) {
    //  return {...state, isLoading: true, list: state.list.filter((todo) => todo.id !== action.todo.id)};
    //},
    //['todos/delete/success'](state) {
    //  return {...state, isLoading: false};
    //},
    //['todos/delete/failed'](state, action) {
    //  return {...state, isLoading: false, err: action.err};
    //},
}, {
        content: {},
        isLoading: false
    });

export default appContents;
