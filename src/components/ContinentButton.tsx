import Link from "next/link";
import { ContinentContent } from "../lib/continents";

type Props = {
  continent: ContinentContent;
};
export default function ContinentButton({ continent }: Props) {
  return (
    <>
      <Link href={"/posts/continents/[[...slug]]"} as={`/posts/continents/${continent.slug}`}>
        <a>{continent.name}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 3px;
          background-color: rgba(21, 132, 125, 0.2);
          color: #15847d;
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
        }
        a:active,
        a:hover {
          background-color: rgba(21, 132, 125, 0.4);
        }
      `}</style>
    </>
  );
}
