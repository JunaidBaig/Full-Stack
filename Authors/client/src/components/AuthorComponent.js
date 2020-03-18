import React from 'react'
import HomeComponent from './HomeComponent'

import {Router} from '@reach/router'
import EditComponent from './EditComponent'


const AuthorComponent = () => {
    return(
        <div>
            <h1>Favorite Authors</h1>
            <Router>
                <HomeComponent path="/" />
                <EditComponent path="/authors/:id/edit" />
            </Router>
        </div>
    )
}
export default AuthorComponent;