import { Card, Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../../redux/actions/actionProduct';
import "./ProductDetails.css"

const ProductDetails = () => {

    //reducer state
    const { products } = useSelector(state => state.productReducer);
    // console.log(product)

    // product
    // const [product, setProduct] = useState("")

    const dispatch = useDispatch();
    const { _id } = useParams();

    useEffect(() => {
        // try {
        //     const getOneProd = async () => {
        //         const res1 = await axios.get(`/product/getOneProduct/${_id}`) ;
        //         return setProduct(res1.data);
        //       };
        //       getOneProd();

        // } catch (error) {
        //     alert("get one error")
        // }
        dispatch(getOneProduct(_id));
    }, [_id])

    return (
        <div className='detail'>
            <Card >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: '20rem' }}
                    image={products.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {products.nameProd}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {products.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/"><Button size="small">Back</Button></Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductDetails