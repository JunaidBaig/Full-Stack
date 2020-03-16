import React, { useState, useEffect } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import ProductList from '../components/ProductList';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(()=> {
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    }, []);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    return(
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}