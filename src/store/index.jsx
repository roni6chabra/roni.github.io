import {combineReducers ,createStore} from 'redux';


const mainState = {
   works : []
}

const worksReducer = (state = mainState, action) => {
    switch (action.type) {
        case  'INIT_WORKS':
            return Object.assign({}, state, {works:action.data});
        default:
            return state
    }
}

const reducers = combineReducers({
    worksReducer
})
const store = createStore(reducers);

export default store;
