import { toNumber } from 'lodash'
import React, {useRef} from 'react'
import {useMutation, gql} from "@apollo/client";

const ADD_AUTHOR = gql`
mutation addAuthor($name: String!, $age: Int!){
    addAuthor(name: $name, age:$age){
        name
        age
    }
}
`

export default function Authors() {
  const [addAuthor, {data, loading, error}]  =  useMutation(ADD_AUTHOR, {
  variables: {
    name: "",
    age: null,
  },
})
    const name = useRef()
     const age = useRef()
     console.log(data)
     console.log(loading)
     console.log(error)

    const submit = (e)=>{
        e.preventDefault()
        const data = {
            name: name.current.value,
            age: toNumber( age.current.value)
        }
        console.log(data)
        addAuthor({variables: data}
            
        )
    }
    return (
     <>
        <div>
        <input type="text" name="name" ref={name} placeholder="authors name"/>
        <input type="text" name="age" ref={age} placeholder="authors age"/>
        <button onClick={submit}>submit</button>  
        </div>
     </>
    )
}
