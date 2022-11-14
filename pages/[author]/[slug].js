import Content from "../../components/posts/Content";
import MainLayout from "../../components/layout/MainLayout";
import CommentForm from "../../components/forms/CommentForm";
import { useRouter } from "next/router";
import axios from "axios";

export default function BlogPost() {

  const router = useRouter();
  const { author, slug } = router.query;
  console.log(author, slug);
  let post;
  axios.get(`/${author}/${slug}`).then(({ data }) => post = data.data.post).catch((err) => { console.log(err); });
  console.log(post);
  return (
    <MainLayout>
      <div className="flex flex-col max-w-3xl mx-auto">
        <div className="">
          {/* <Content post={post} /> */}
        </div>

        <div className="px-8 mb-4 bg-white border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700">
          <h2 className="my-4 text-xl font-medium">Leave a comment</h2>
          <CommentForm postId="asb" />
        </div>
      </div>
    </MainLayout>
  );
}