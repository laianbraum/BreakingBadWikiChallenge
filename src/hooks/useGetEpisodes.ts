import { useState, useEffect } from 'react';
import api from '../services/api';
import Episode from '../types/Episode';

export default function useGetOneCharacter(character : string | undefined)
{
  const [ episodes, setEpisodes ] = useState<Episode[]>();

  useEffect(() => {
    api.get(`/episodes?characters=${character}`).then((response) => {
      setEpisodes(response.data);
    });
  }, [character]);


  return episodes;
}
