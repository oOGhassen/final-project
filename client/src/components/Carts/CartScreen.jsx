import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import {
    Card,
    Table
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ItemQty from "./ItemQty";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart } from "../../redux/actions/actionCart";

const CartScreen = () => {

    const { cartItems } = useSelector((state) => state.cartReducer);
    console.log(cartItems);

    const [total, setTotal] = useState();

    const calculateAmount = (quantity, price) => {
        const quantityNumber = parseFloat(quantity) || 1
        const priceNumber = parseFloat(price) || 0
        let amount = 0

        if (quantityNumber && priceNumber) {
            amount = quantityNumber * priceNumber
        }
        return amount.toFixed(2)
    }

    useEffect(() => {
        let total = 0;

        cartItems.forEach(el => {
            total += parseFloat(calculateAmount(el.qty, el.price));
        });

        setTotal(total)
    }, [total, cartItems]);

    const dispatch = useDispatch();


    return (
        <div className='cartItems'>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cartItems && React.Children.toArray(cartItems.map((el, index) => <tr index={index}>
                            <td><Card.Img variant="top" src={el.image} style={{ width: "5rem", height: "5rem" }} /></td>
                            <td>{el.nameProd}</td>
                            <td>{el.price}</td>
                            <td><ItemQty el={el} /></td>
                            <td><IconButton onClick={() => dispatch(removeFromCart(el.product))}> <DeleteIcon /> </IconButton></td>
                        </tr>))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>Total Price</td>
                        <td>{total}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default CartScreen;