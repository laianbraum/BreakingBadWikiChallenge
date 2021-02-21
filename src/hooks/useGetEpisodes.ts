import { useState, useEffect } from 'react';
import api from '../services/api';
import Episode from '../types/Episode';

export default function useGetOneCharacter(character : string | undefined)
{
  const [ episodes, setEpisodes ] = useState<Episode[]>();

  useEffect(() => {
    api.get(`/episodes/`).then((response) => {
      let episodesAux: Episode[] = [];
      response.data.forEach((episode : Episode) => {
        if (character && episode.characters.includes(character)){
          episodesAux = [...episodesAux, episode]
        }
      })
      setEpisodes(episodesAux);
    });
  }, [character]);


  return episodes;
}
