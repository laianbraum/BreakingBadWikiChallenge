import { useState, useEffect } from 'react';
import api from '../services/api';
import Episode from '../types/Episode';

export default function useGetOneCharacter(
  characterName: string | undefined, nickname: string | undefined)
{
  const [ episodes, setEpisodes ] = useState<Episode[]>();

  useEffect(() => {
    
    characterName && nickname && api.get(`/episodes/`).then((response) => {
      let episodesAux: Episode[] = [];
      response.data.forEach((episode : Episode) => {
        if (episode.characters.includes(characterName) || episode.characters.includes(nickname)){
          episodesAux = [...episodesAux, episode]
        }
      })
      setEpisodes(episodesAux);
    });
  }, [characterName, nickname]);


  return episodes;
}
