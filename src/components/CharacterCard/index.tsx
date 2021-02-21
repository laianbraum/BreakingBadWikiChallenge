import React from 'react';

import { Card, CardInfoWrapper, CardInfo, CardTitle } from '../../styles/CharacterCard';
import StyledText from '../../styles/StyledText';
import Character from '../../types/Character';
import Avatar from '../Avatar';

export default function CharacterCard(
  { character }: { character: Character }
){

  return (
    <Card>
      <Avatar source={character.img}/>
      <CardInfoWrapper>
        <CardTitle>
          {character.name}
        </CardTitle>
        <CardInfo>
          <StyledText
            fontSize="11"
            color="#fff"
            margin="8px 0 0 0"
          >
            <strong>Born on {character.birthday}</strong>
          </StyledText>
        </CardInfo>
        <CardInfo>
          <StyledText
            fontSize="11"
            color="#fff"
            margin="4px 0 0 0"
          >
            <strong>{'Status: '}</strong>{character.status}
          </StyledText>
        </CardInfo>
        <CardInfo>
          <StyledText
            fontSize="11"
            color="#fff"
            margin="8px 0"
          >
            <strong>Occupations:</strong>
            {
              character.occupation.map((occupation) => {
                return (
                  <span key={occupation}>
                    <br/>
                    - {occupation}
                  </span>
                )
              })
            }
          </StyledText>
        </CardInfo>
        <CardInfo>
          <StyledText
            fontSize="11"
            color="#fff"
            margin="0"
          >
          <strong>{'Nickname: '}</strong>{character.nickname}
          </StyledText>
        </CardInfo>
        <CardInfo>
          <StyledText
            fontSize="11"
            color="#fff"
            margin="0"
          >
            Portrayed by: <strong>{character.portrayed}</strong>
          </StyledText>
        </CardInfo>
      </CardInfoWrapper>
    </Card>
  )
}