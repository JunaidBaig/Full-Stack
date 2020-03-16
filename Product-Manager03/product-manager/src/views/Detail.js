import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+ props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return(
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={'/product/' + product._id + '/edit'}>
                Edit
            </Link>
            <Link to='/product/' onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </Link>
        </div>
    )
}