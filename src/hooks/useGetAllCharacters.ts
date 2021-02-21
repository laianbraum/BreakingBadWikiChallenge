import { useState, useEffect } from 'react';
import Character from '../types/Character';
import api from '../services/api';

export default function useGetAllCharacters(){
  
  const [ characters, setCharacters ] = useState<Character[]>();

  useEffect(() => {
    api.get('/characters').then((response) => {
      setCharacters(response.data);
    })
  }, []);


  return characters;
}
