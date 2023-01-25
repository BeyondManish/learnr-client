import { NextSeo } from 'next-seo';
import MainLayout from '../../components/layout/MainLayout';

export default function QuestionPage() {
  return (
    <>
      <NextSeo title="Question Page" titleTemplate="%s | Learnr App" />
      <MainLayout searchBar={false}>
        <div>
          <h1>Question Page</h1>
        </div>
      </MainLayout>
    </>
  );
}