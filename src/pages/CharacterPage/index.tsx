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
import Loading from '../../components/Loading';


export default function CharacterPage(){
  
  const { id } = useParams<ParamTypes>();
  const character = useGetOneCharacter(id);
  const starredEpisodes = useGetEpisodes(character?.name.split(' ').join('+'))

  if(!character || !starredEpisodes){
    return <Loading />
  }
  return (
    <CharacterPageContainer>
      <CharacterProfile character={character} />
      <StarredEpisodes starredEpisodes={starredEpisodes} />
    </CharacterPageContainer>
  )
}