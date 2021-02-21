import React from 'react';

import Character from '../../types/Character';

import {
  CharacterProfileContainer,
  CharacterInfoWrapper,
  CharacterInfo,
} from '../../styles/CharacterProfile';
import Avatar from '../../components/Avatar';
import StyledText from '../../styles/StyledText';


export default function CharacterProfile({ character } : { character: Character }){
  return (
    <CharacterProfileContainer>
        <Avatar source={character.img} />
        <CharacterInfoWrapper>
          <CharacterInfo>
            <StyledText
              fontSize="32pt"
              color="#101010"
              margin="8px 0"
            > 
              <strong>{character.name}</strong>
            </StyledText>
          </CharacterInfo>
          <CharacterInfo>
            <StyledText
              fontSize="15pt"
              color="#101010"
              margin="0"
            > 
              <strong>Born on {character.birthday}</strong>
            </StyledText>
          </CharacterInfo>
          <CharacterInfo>
            <StyledText
              fontSize="15pt"
              color="#101010"
              margin="0"
            > 
              <strong>Status: </strong>{character.status}
            </StyledText>
          </CharacterInfo>
          <CharacterInfo>
            <StyledText
              fontSize="15pt"
              color="#101010"
              margin="0"
            > 
              <strong>Nickname: </strong>{character.nickname}
            </StyledText>
          </CharacterInfo>
          <CharacterInfo>
            <StyledText
              fontSize="15pt"
              color="#000"
              margin="8px 0"
            >
              <strong>Occupations:</strong>
              {
                character.occupation.map((occupation) => {
                  return (
                    <>
                      <br/>
                      - {occupation}
                    </>
                  )
                })
              }
            </StyledText>
          </CharacterInfo>
          <CharacterInfo>
            <StyledText
                fontSize="18pt"
                color="#101010"
                margin="16px 0 0 0"
              > 
                Portrayed by <strong>{character.portrayed}</strong>
              </StyledText>
          </CharacterInfo>
        </CharacterInfoWrapper>
      </CharacterProfileContainer>
  )
}