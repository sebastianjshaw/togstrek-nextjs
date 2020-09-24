import Link from "next/link";
import { ContinentContent } from "../lib/continents";

type Props = {
  continent: ContinentContent;
};
export default function Continent({ continent }: Props) {
  return (
    <Link href={"/posts/continents/[[...slug]]"} as={`/posts/continents/${continent.slug}`}>
      <a>{continent.name}</a>
    </Link>
  );
}
