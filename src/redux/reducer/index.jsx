import { combineReducers } from 'redux';
import FoodReducer from './FoodReducer';
import ShowPopUpReducer from './PopUpReducer';

const rootReducer = combineReducers({
    FoodReducer,
    ShowPopUpReducer
})

export default rootReducer