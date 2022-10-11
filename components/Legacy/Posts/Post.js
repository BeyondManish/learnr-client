import Link from "next/link";
import Image from 'next/image';


const post = {
  id: 1,
  title: "Post 1",
  slug: "post-1",
  // featuredImage: "https://picsum.photos/200/300",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  author: "Manish",
  createdAt: "2021-07-01",
  authorImage: "https://picsum.photos/200/300",
};


export default function Post() {
  return (
    <div className="bg-white border border-gray-800">
      {/* featured image (if exists) */}
      {post.featuredImage &&
        <div className="relative w-full h-96">
          <Image src={post.featuredImage} layout="fill" objectFit="cover" />
        </div>
      }
      {/* end of featured image */}
      {/* post title */}
      <div>
        <h1 className="text-xl font-semibold">
          {post.title}
        </h1>
      </div>
      {/* end of post title */}
      {/* meta description - authorname, username and image */}
      <div>

      </div>
      {/* end of meta description */}
    </div>
  );
}