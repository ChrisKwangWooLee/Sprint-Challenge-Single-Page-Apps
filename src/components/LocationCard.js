import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function LocationCard({ name, type, dimension, residents }) {

  const [residentsData, setResidentsData] = useState([]);

  console.log(residents);

  let residentIds = [];
  for (let i = 0; i < residents.length; i++) {
    let resident = residents[i].split("/");
    residentIds.push(resident[5]);
  }

  console.log(residentIds);

  
  return (
    <div className="location-card">
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>Type:: {type}</CardSubtitle>
          <CardText>Dimension: {dimension}</CardText>
          <CardText>Residents: {residents}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
