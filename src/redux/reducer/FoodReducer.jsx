import { Buy_Barbecue_Burger, BUY_FOOD, Buy_Green_Bowl, Buy_Schnitzel, Buy_SuShi } from "../../common/Common"
import { data } from "../../common/data/Data";


const initialState = {
    data : data,
    updatedData : [],
    payload : 0
}

const FoodReducer = (state = initialState, action) => {
  // console.log(state.data[0])
    switch (action.type) {
      case BUY_FOOD:
        return {
          ...state,
          payload: state.payload + 1 ,
        };

      case Buy_SuShi:
        return {
          ...state,
          updatedData: [...state.updatedData , state.data[0]],
          payload: state.payload + 1 ,
        };
      case Buy_Schnitzel :
        return {
          ...state,
          updatedData: [...state.updatedData , state.data[1]],
          payload: state.payload + 1 ,
        }
      case Buy_Barbecue_Burger :
        return {
          ...state,
          updatedData: [...state.updatedData , state.data[2]],
          payload: state.payload + 1 ,
        }
      case Buy_Green_Bowl :
        return {
          ...state,
          updatedData: [...state.updatedData , state.data[3]],
          payload: state.payload + 1 ,
        }
      default:
        return state;
    }
  };

export default FoodReducer;