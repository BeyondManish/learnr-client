import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex text-2xl font-semibold lg:text-3xl">
        <h1>Learnr</h1><span className="text-green-600">.</span>
      </a>
    </Link>
  );
}