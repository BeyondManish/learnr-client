import AdminLayout from "../../../components/layout/AdminLayout";
import Editor from "rich-markdown-editor";

export default function DashboardPage() {
  return (
    <>
      <AdminLayout>
        <div>
          <h1>Create Post</h1>
        </div>
        <Editor placeholder="Write something..." />
      </AdminLayout>
    </>
  );
}
