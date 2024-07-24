import Link from "next/link";
import Image from "next/image";

import type { Character } from "@/types";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link
      className="w-full h-[250px] m-[20px] no-underline desktop:w-[500px]"
      key={character.char_id}
      href={`/character/${character.char_id}`}
      rel="noreferrer"
    >
      <div className="w-full h-full p-8 rounded-lg flex items-center justify-between bg-royal-purple text-left transition ease-in-out delay-300">
        <div className="w-[200px] h-[200px] overflow-hidden">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={character.img}
            alt={`${character.name}'s picture`}
            width={200}
            height={200}
          />
        </div>

        <div className="w-full h-full my-0 mx-auto pt-0 pl-6 flex flex-col justify-evenly items-start">
          <h2 className="text-3xl text-white m-0">{character.name}</h2>
          <div className="w-full flex">
            <span className="text-md text-white m-0 mt-2">
              <strong>Born on: </strong>
              {character.birthday}
            </span>
          </div>
          <div className="w-full flex">
            <span className="text-md text-white m-0 mt-2">
              <strong>Status: </strong>
              {character.status}
            </span>
          </div>
          <div className="w-full flex">
            <span className="text-md text-white m-0">
              <strong>Portrayed by: </strong>
              {character.portrayed}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
