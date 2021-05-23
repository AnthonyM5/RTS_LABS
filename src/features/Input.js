import React, {useState} from 'react'
import {searchQuery} from './Search'


const Input = () => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        searchQuery(text)
    }
    
    return (
    <form onSubmit={ (e) => {handleSubmit(e)}}>
    <input
     type='text'
     value={text}
     onChange={(e) => setText(e.target.value)}
     />
     <input
     value='submit'
     type='submit'/>
     </form>
    )
}

export default Input