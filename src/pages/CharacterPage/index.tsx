import React from 'react';
import { useParams } from 'react-router-dom';

import ParamTypes from '../../types/ParamTypes';

import useGetEpisodes from '../../hooks/useGetEpisodes';
import useGetOneCharacter from '../../hooks/useGetOneCharacter';

import {
  CharacterPageContainer,
} from '../../styles/CharacterProfile';

import CharacterProfile from '../../components/CharacterProfile';
import StarredEpisodes from '../../components/StarredEpisodes';


export default function CharacterPage(){
  
  const { id } = useParams<ParamTypes>();
  const character = useGetOneCharacter(id);
  const starredEpisodes = useGetEpisodes(character?.name)

  if(!character || !starredEpisodes){
    return <h1>Loading...</h1>
  }
  return (
    <CharacterPageContainer>
      <CharacterProfile character={character} />
      <StarredEpisodes starredEpisodes={starredEpisodes} />
    </CharacterPageContainer>
  )
}