import React from "react";
import {Link} from "react-router-dom";
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  const {RMdata} = props;
  
  return (
    <section className="character-list">
      <SearchForm RMdata={RMdata} />
    </section>
  );
}
