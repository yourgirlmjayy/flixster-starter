import {useState} from 'react';
import './SearchForm.css'

const SearchForm = (props) =>{
    //useState to change user text
    // const [searchInput, setSearchInput] = useState('')

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     setSearchText(searchInput)
    //     handleSearch(searchInput)
    //     console.log(`searching for ${searchInput}`)
    // }

    const handleInputChange = (event) =>{
        props.setSearchInput(event.target.value);
    }

    return(
        <div className='AppSearchBox'>
            <form>
                <input type="search" value={props.searchInput} onChange={handleInputChange} placeholder='Search a movie...'></input>
                <button type ="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;