import React from 'react';
import { Link } from 'react-router-dom';

import useGetAllCharacters from '../../hooks/useGetAllCharacters';

import { CardsContainer } from '../../styles/CharacterCard';
import CharacterCard from '../../components/CharacterCard';

export default function HomePage(){

  const characters = useGetAllCharacters(); 

  if(!characters){
    return <h1>Loading...</h1>
  }

  return (
    <CardsContainer>
      {
        characters.map((character) => {
          return (
            <Link
              key={character.char_id}
              to={`/character/${character.char_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <CharacterCard
                key={character.name}
                character={character}
              />
            </Link>
          )
        })
      }
    </CardsContainer>
  )
}