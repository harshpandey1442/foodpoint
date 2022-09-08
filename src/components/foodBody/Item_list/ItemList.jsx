import React from "react";
import Item from "../Item/Item";
import {connect} from "react-redux"
import "./itemList.css"

const ItemList = (props) => {
  return (
    <div className="itemList_container">
      <div className="itemList__content">
        {
          props.numOfFoods.map(item => {
            return <Item key={item.name} item = {item} payload= {props.payload}/>
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfFoods: state.FoodReducer.data,
    payload : state.FoodReducer.payload
  };
};

export default connect(mapStateToProps)(ItemList);
