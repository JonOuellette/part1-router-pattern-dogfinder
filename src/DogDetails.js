import React from 'react';
import { useParams } from 'react-router-dom';

function DogDetails({ dogs }) {
  const params = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === params.name.toLowerCase());

  return dog ? (
    <div>
      <img src={dog.src} alt={dog.name} />
      <h1>{dog.name}</h1>
      <h2>Age: {dog.age}</h2>
      <ul>
        {dog.facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
    </div>
  ) : null;
}

export default DogDetails;