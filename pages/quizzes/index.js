import { NextSeo } from 'next-seo';
import MainLayout from '../../components/layout/MainLayout';

export default function QuizPage() {
	return (
		<>
			<NextSeo title='Quiz Page' titleTemplate='%s | Learnr App' />
			<MainLayout searchBar={false}>
				<div>
					<h1>Quiz Page</h1>
				</div>
			</MainLayout>
		</>
	);
}