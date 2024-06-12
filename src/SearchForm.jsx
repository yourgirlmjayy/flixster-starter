import {useState} from 'react';
import './SearchForm.css'

function SearchForm(){
    return(
        <div className='AppSearchBox'>
            <form onSubmit ={handleSubmit}>
                <button type ="submit">Search</button>
            </form>
        </div>
    )
}