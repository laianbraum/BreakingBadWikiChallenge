import React from 'react';
import Episode from "../../types/Episode";

import { EpisodeCard, EpisodeInfo } from '../../styles/EpisodeCard';
import StyledText from '../../styles/StyledText';

export default function EpisodeCardComponent(
{ episode }: { episode: Episode }){

  return (
    <EpisodeCard>
      <EpisodeInfo>
        <StyledText
          fontSize="20pt"
          margin="0"
          color="#000"
        >
          <strong>{episode.title}</strong>
        </StyledText>
      </EpisodeInfo>
      <EpisodeInfo>
        <StyledText
          fontSize="14pt"
          margin="25px 0 0 0"
          color="#000"
        >
          <strong>Episode {episode.episode}</strong>
        </StyledText>
      </EpisodeInfo>
      <EpisodeInfo>
        <StyledText
          fontSize="14pt"
          margin="0 0 25px 0"
          color="#000"
        >
          <strong>Season {episode.season}</strong>
        </StyledText>
      </EpisodeInfo>
      <EpisodeInfo>
        <StyledText
          fontSize="14pt"
          margin="14px 0 0 0"
          color="#000"
        >
          <strong>Released in {episode.air_date}</strong>
        </StyledText>
      </EpisodeInfo>
    </EpisodeCard>
  )

}