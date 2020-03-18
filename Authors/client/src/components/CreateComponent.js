import React, {useState} from 'react'
import axios from 'axios'

const CreateComponent = () => {
    const [formState, setFormState] = useState("");
    const [errState, setErrState] = useState([])
    const handSubmit = (event) =>{
        event.preventDefault()
        const payload = {
            name:formState
        }
        axios.post("http://localhost:8000/api/authors", payload)
            .then(res =>{
                console.log(res)
                setFormState('')
            })
            .catch(err => {
                const {errors} = err.response.data;
                const errorArr = []
                for(const key of Object.keys(errors)){
                    errorArr.push(errors[key].message)
                }
                setErrState(errorArr)
            })
    }
    return(
        <form onSubmit={handSubmit}>
            {errState.map((err, index) => <p key={index}>{err}</p>) }
            <p>
                Name:
                <input value={formState.name} onChange={(e) => setFormState(e.target.value)} />
            </p>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default CreateComponent;