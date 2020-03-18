import React from 'react'

import ListComponent from './ListComponent'
import CreateComponent from './CreateComponent';
const HomeComponent = () =>{
    return(
        <div>
            <CreateComponent />
            <table className="table">
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                    <ListComponent />
                </tbody>
            </table>
        </div>
    )
}
export default HomeComponent;