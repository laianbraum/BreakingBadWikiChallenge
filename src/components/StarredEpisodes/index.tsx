import React from 'react';

import Episode from "../../types/Episode";

import {
  StarredEpisodesContainer
} from '../../styles/StarredEpisodes';
import StyledText from '../../styles/StyledText';

import EpisodeCard from '../../components/EpisodeCard';

export default function StarredEpisodes({ starredEpisodes }: { starredEpisodes: Episode[] }){
  return (
    <StarredEpisodesContainer>
        <StyledText
          fontSize="30pt"
          color="#101010"
          margin="30px 0"
        >
          <strong>Starred Episodes</strong>
        </StyledText>
        
        {
          starredEpisodes?.map((episode) => {
            return (
              <EpisodeCard
                key={episode.id}
                episode={episode}
              />
            )
          })
        }
      </StarredEpisodesContainer>
  )
}