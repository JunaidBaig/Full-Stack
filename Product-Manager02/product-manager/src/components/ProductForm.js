import React, {useState} from 'react'
import axios from 'axios';
export default () => {
    const [title, setTitleName] = useState('');
    const [price, setPriceValue] = useState('');
    const [description, setDescriptionName] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e)=> setTitleName(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" onChange={(e)=> setPriceValue(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e)=> setDescriptionName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )

}