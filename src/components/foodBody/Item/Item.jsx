import React from 'react'
import { connect } from 'react-redux';
import BuyBurger from '../../../redux/action/BarbecueBurgerAction';
import BuyFood from '../../../redux/action/FoodAction';
import BuyBowl from '../../../redux/action/GreenBowl';
import BuySchnitzel from '../../../redux/action/SchnitzelAction';
import BuySushi from '../../../redux/action/SushiAction';
import "./item.css"

const Item = (props) => {

  const buyItem = () =>{
    if(props.item.name === "Sushi"){
      return props.BuySushi;
    }
    else if(props.item.name === "Schnitzel"){
      return props.BuySchnitzel;
    }
    else if(props.item.name === "Barbecue Burger"){
      return props.BuyBurger;
    }
    else if(props.item.name === "Green Bowl"){
      return props.BuyBowl;
    }
  }
  return (
    <div className='item_container'>
        <div className="item_detail">
            <p><strong>{props.item.name}</strong> </p>
            <p className="item-info">{props.item.info}</p>
            <p><strong>${props.item.price}</strong></p>
        </div>
        <div className="item_add">
            <div className='amt_container'>
                <strong className='amt'>Amount</strong>
                <input type="number" defaultValue={props.payload + 1} className="item_amt" />
            </div>
            <button className='itemAdd_btn' onClick={buyItem()}> + Add</button>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    BuyFood: () => dispatch(BuyFood()),
    BuySushi: () => dispatch(BuySushi()),
    BuySchnitzel : () => dispatch(BuySchnitzel()),
    BuyBurger : () => dispatch(BuyBurger()),
    BuyBowl : () => dispatch(BuyBowl()),
  };
};

export default connect(null,mapDispatchToProps) (Item);