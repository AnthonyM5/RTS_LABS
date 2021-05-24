import React, {useState} from 'react'


const Input = () => {
    const [text, setText] = useState('')
    const [searchData, setSearchData] = useState()

    const searchQuery = (query) => {
        return fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
        .then(res => res.json())
        .then(data => {
            setSearchData(data['hits'])
        })
    }

    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        searchQuery(text)
    }
    
    return (
    <div>
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
     <div>
     {searchData ? searchData.map((results, i) => <p>{i + 1}: {results.title}</p>) : null}
     </div>
    </div>
    
    )
}

export default Input