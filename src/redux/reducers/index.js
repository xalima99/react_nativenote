import noteReducer from './noteReducer';
import { combineReducers } from 'redux';


export default combineReducers({
    notes: noteReducer
})