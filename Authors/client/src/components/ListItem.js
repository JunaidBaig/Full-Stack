import React from 'react'
import axios from 'axios'

import { Link } from '@reach/router';

const ListItem = (props) =>{
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    return(
        <tr>
            <td>{props.author.name}</td>
            <td>
                <Link to={"/authors/"+props.author._id+"/edit"}>
                    Edit
                </Link>
                <button onClick={(e)=>{deleteAuthor(props.author._id)}}>
                        Delete
                    </button>
            </td>
        </tr>
    )

}
export default ListItem