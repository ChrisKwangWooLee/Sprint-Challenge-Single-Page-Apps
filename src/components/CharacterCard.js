import React, {useEffect, useState} from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Axios from "axios";
import {useParams} from 'react-router-dom';

function CharacterCard(props) {

  let {id} = useParams();

  const [characterData, setCharacterData] = useState({})

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      setCharacterData(response.data);
    })
  },[characterData])



  return (
    <div>
      <Card>
        <CardImg top width="100%" src={characterData.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{characterData.name}</CardTitle>
          <CardSubtitle>Species: {characterData.species}</CardSubtitle>
          <CardText>Gender: {characterData.gender}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default CharacterCard;