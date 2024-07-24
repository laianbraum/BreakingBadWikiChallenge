import episodes from "@/mocks/episodes.json";
import characters from "@/mocks/characters.json";

const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "s-maxage=300, stale-while-revalidate",
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url as string);

  const id = searchParams.get("id");

  if (!id) {
    return new Response(
      JSON.stringify(characters.filter((x) => x.series === "Breaking Bad")),
      {
        headers: {
          ...headers,
          "Cache-Control": "s-maxage=7200, stale-while-revalidate",
        },
        status: 200,
      }
    );
  }

  const character = characters.find((c) => c.id + "" === id + "");

  if (!character) {
    return new Response(JSON.stringify({ message: "Character not found" }), {
      headers,
      status: 404,
    });
  }

  const starredEpisodes = episodes.filter(({ characters }) => {
    return characters.includes(character.name as string);
  });

  return new Response(
    JSON.stringify({
      character,
      starredEpisodes,
    }),
    {
      headers,
      status: 200,
      statusText: "OK",
    }
  );
}
