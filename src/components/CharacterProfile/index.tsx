import Image from "next/image";

import type { Character } from "@/types";

interface CharacterProfileProps {
  character: Character;
}

export function CharacterProfile({ character }: CharacterProfileProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-10 mx-auto md:h-[500px] md:mt-10 md:flex-row md:items-start">
      <div className="w-full h-[500px] md:w-[40%]">
        <Image
          className="w-full h-full object-cover md:rounded-xl"
          style={{
            objectPosition: "0 40%",
          }}
          src={character.img}
          alt={`${character.name}'s picture`}
          width={200}
          height={200}
        />
      </div>

      <div className="w-[90%] h-full mt-8 ml-0 flex flex-col justify-start items-start md:w-[40%] md:mt-0 md:ml-10">
        <div className="w-full flex">
          <span className="text-4xl text-gray-950">
            <strong>{character.name}</strong>
          </span>
        </div>
        <div className="w-full flex mt-3">
          <span className="text-xl text-gray-950">
            <strong>Born on {character.birthday}</strong>
          </span>
        </div>
        <div className="w-full flex mt-3">
          <span className="text-xl text-gray-950">
            <strong>Status: </strong>
            {character.status}
          </span>
        </div>
        <div className="w-full flex mt-3">
          <span className="text-xl text-gray-950">
            <strong>Occupations:</strong>
            {character.occupation.map((occupation) => {
              return (
                <span key={occupation}>
                  <br />- {occupation}
                </span>
              );
            })}
          </span>
        </div>
        <div className="w-full flex grow items-end mt-4">
          <span className="text-xl text-gray-950">
            Portrayed by <strong>{character.portrayed}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
