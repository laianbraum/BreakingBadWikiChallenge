"use server";

import { CharacterCard } from "@/components";

import characters from "@/mocks/characters.json";

// async function getCharacters(): Promise<Character[]> {
//   const res = await fetch(`${process.env.URL}/api/character`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function Home() {
  // const characters = await getCharacters();

  return (
    <div className="w-full max-w-[2000px] min-h-[90vh] my-0 mx-auto flex flex-wrap items-center bg-white">
      {characters.map((character) => {
        return <CharacterCard key={character.name} character={character} />;
      })}
    </div>
  );
}
