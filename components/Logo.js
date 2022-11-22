import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex text-2xl font-semibold lg:text-3xl">
        <h1>CMS</h1><span className="text-indigo-600">.</span>
      </a>
    </Link>
  );
}
