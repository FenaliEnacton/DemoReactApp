import React, { useState } from 'react'

const Search = () => {
    const [Img, setImg] = useState('')
    const inputHandler = (val) => {

        const data = val.target.value
        console.log(data)
        setImg(data)

    }
    const Image = `https://source.unsplash.com/200x200/?${Img}`
    return (
        <div className="searchbar">
            <h1>Search Here</h1>
            <input type="text" placeholder="Search Anything" value={Img} onChange={inputHandler} className="searchbar_input" />
            <br /><br />
            {Img === "" ? null : <img src={Image} alt="Searching" />}
        </div>
    )
}
export default Search;