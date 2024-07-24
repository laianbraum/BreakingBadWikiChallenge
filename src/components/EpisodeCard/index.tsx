import type { Episode } from "@/types";

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div className="w-[200px] h-[200px] rounded-lg p-3 mr-4 mb-4 flex flex-col justify-between items-start bg-emerald-300">
      <div className="w-full flex">
        <span className="text-xl m-0 text-grey-950">
          <strong>{episode.title}</strong>
        </span>
      </div>
      <div className="w-full flex">
        <span className="text-lg m-0 mt-2 text-grey-950">
          <strong>
            S{episode.season}E{episode.episode}
          </strong>
        </span>
      </div>
      <div className="w-full flex">
        <span className="text-lg m-0 text-grey-950">
          <strong>Released in {episode.air_date}</strong>
        </span>
      </div>
    </div>
  );
}
