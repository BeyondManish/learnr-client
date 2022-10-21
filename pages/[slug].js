import Content from "../components/posts/Content";
import MainLayout from "../components/layout/MainLayout";

export default function BlogPost() {
  return (
    <MainLayout>
      <Content title={"Sometimes you’ve gotta run before you can walk"} categories={["Personality", "Motivation"]} featuredImage='https://images.unsplash.com/photo-1635863138275-d9b33299680b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80' />
    </MainLayout>
  );
}