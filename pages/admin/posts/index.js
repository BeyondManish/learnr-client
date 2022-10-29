import Head from "next/head";
import AdminLayout from "../../../components/layout/AdminLayout";

export default function PostPage() {
  return (
    <>
      <Head>
        <title>
          All Posts | Learnr
        </title>
      </Head>
      <AdminLayout>
        <div>
          This is posts page
        </div>
      </AdminLayout>
    </>
  );
}