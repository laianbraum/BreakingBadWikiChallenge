import { EpisodeCard } from "@/components";
import type { Episode } from "@/types";

interface StarredEpisodesProps {
  episodes: Episode[];
}

export function StarredEpisodes({ episodes }: StarredEpisodesProps) {
  return (
    <div className="w-full mx-auto flex flex-col md:w-[90%]">
      <span className="text-3xl text-grey-950 mx-7 my-0 text-center">
        <strong>Starred Episodes</strong>
      </span>

      <div className="w-full mt-5 flex flex-wrap items-center justify-center gap-5">
        {episodes?.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
