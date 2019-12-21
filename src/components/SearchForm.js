import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

function SearchForm(props) {
  const {RMdata} = props;

  console.log('this', RMdata);
  const [data, setData] = useState(RMdata)
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(data)
    const characters = data.filter(character => {
      return character.name.toLowerCase().includes(query.toLowerCase());
    })
    setData(characters);
  }, [query])

  const handleChange = event => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className="search-form">
      <form onSubmit={event => handleSubmit(event)}>
        <input 
        type="text" 
        onChange={event => handleChange(event)}
        placeholder="ex. Rick"></input>
      </form>
      {data.map(character => {
       return <h2 key={character.id}><Link to={`/characters/${character.id}`}>{character.name}</Link></h2>
     })}
    </section>
  );
}

export default SearchForm;