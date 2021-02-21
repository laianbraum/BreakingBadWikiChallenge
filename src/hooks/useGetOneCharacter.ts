import { useState, useEffect } from 'react';
import api from '../services/api';
import Character from '../types/Character';

export default function useGetOneCharacter(id :string)
{
  const [ character, setCharacter ] = useState<Character>();

  useEffect(() => {
    api.get(`/characters/${id}`).then((response) => {
      setCharacter(response.data[0])
    });
  }, [id]);


  return character;
}
