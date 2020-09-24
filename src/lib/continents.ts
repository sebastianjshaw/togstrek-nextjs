import continents from "../../meta/continents.yml";

export type ContinentContent = {
  readonly slug: string;
  readonly name: string;
};

const continentMap: { [key: string]: ContinentContent } = generateContinentMap();

function generateContinentMap(): { [key: string]: ContinentContent } {
  let result: { [key: string]: ContinentContent } = {};
  for (const continent of continents.continents) {
    result[continent.slug] = continent;
  }
  return result;
}

export function getContinent(slug: string) {
  return continentMap[slug];
}

export function listContinents(): ContinentContent[] {
  return continents.continents;
}
