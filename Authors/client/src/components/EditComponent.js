import React, {useEffect, useState} from 'react'
import axios from 'axios'

const EditComponent = ({id}) =>{
    const [formState, setFormState] = useState("");
    const [errState, setErrState] = useState([])
    const [loadState, setLoadState] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
            .then(res => {
                setFormState(res.data.name)
                setLoadState(true)
            })
            .catch(err => console.log(err))
    }, [])
    const handleSubmit = (event)=>{
        event.preventDefault();
        const payload = {
            name:formState
        }
        axios.put("http://localhost:8000/api/authors/"+id, payload )
            .then(res => console.log(res))
            .catch(err => {
                const {errors} = err.response.data;
                const errorArr = []
                for(const key of Object.keys(errors)){
                    errorArr.push(errors[key].message)
                }
                setErrState(errorArr)
            })
    }

    return (!loadState) ? null :
    (
        <div>
            <h1>EDIT</h1>
            <form onSubmit={handleSubmit}>
                {errState.map((err, index) => <p key={index}>{err}</p>) }
                <p>
                    Name:
                    <input value={formState} onChange={(e) => setFormState(e.target.value)} />
                </p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default EditComponent;