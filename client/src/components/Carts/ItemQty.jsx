import React from 'react';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty } from '../../redux/actions/actionCart';


const ItemQty = ({ el }) => {

  

  const dispatch = useDispatch();

  return (
    <div className="ItemQty">
      {
        el.qty > 1 ? <div><IconButton onClick={ () => dispatch(decrementQty(el))} ><i className="fa fa-minus-circle"></i></IconButton> <span >{el.qty}</span> <IconButton onClick={ () => dispatch(incrementQty(el))}><i className="fa fa-plus-circle"></i></IconButton></div> :
          <div> <IconButton  ><i className="fa fa-minus-circle"></i></IconButton> <span >{el.qty}</span> <IconButton onClick={ () => dispatch(incrementQty(el))}><i className="fa fa-plus-circle"></i></IconButton></div>
      }
    </div>
  );
};

export default ItemQty;