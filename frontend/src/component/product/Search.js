import React, {Fragment, useState} from 'react'
import './Search.css';

const Search = ({history}) => {
    const [keyword, setKeyword] = useState(" ");
    const searchSubmitHandler = (e)=>{
        e.preventDefault();
        //trim is to remove spaces
        if(keyword.trim()){
            history.push(`/product/${keyword}`);
        }
        else{ history.push("/products");
    }
    };

  return (
    <Fragment>
    <form className = "search__box" onSubmit={searchSubmitHandler}>
    <input type= "text" placeholder = "Search your Product here..." onChange ={(e) =>setKeyword(e.target.value)}/>
    <input type="submit" value = "Search" />

    </form>

    </Fragment>
  )
}

export default Search