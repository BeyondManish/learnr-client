import Link from 'next/link';
import { Button } from '../Buttons';

export default function TagCard({ name, description, href, isFollowing }) {
  return (
    <div className='flex flex-col w-full p-6 bg-white rounded-lg dark:bg-gray-900'>
      <Link href={href}>
        <a className='block p-2 cursor-pointer'>
          <h2># {name}</h2>
        </a>
      </Link>
      {/* tag descriptions */}
      {description ? <div>
        <p>{description}</p>
      </div> : null}

      <div className='self-center mt-4'><Button text={isFollowing ? "Following" : "Follow"} /></div>
    </div>

  );
}