import { useState, useEffect } from 'react';
import api from '../services/api';
import Episode from '../types/Episode';

export default function useGetOneCharacter(
  characterName: string | undefined, nickname: string | undefined)
{
  const [ episodes, setEpisodes ] = useState<Episode[]>();

  useEffect(() => {
    
    characterName && nickname && api.get(`/episodes?series=Breaking+Bad`).then((response) => {
      setEpisodes(response.data.filter(
        (episode : Episode) =>
          episode.characters.includes(nickname) || episode.characters.includes(characterName)
        ))
    });
  }, [characterName, nickname]);


  return episodes;
}
