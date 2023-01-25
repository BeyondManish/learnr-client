import { NextSeo } from 'next-seo';
import { Button } from '../../components/Buttons';
import MainLayout from '../../components/layout/MainLayout';
import { createQuestion } from '../../functions/question';
import Editor from 'rich-markdown-editor';
import { useState } from 'react';

export default function CreateQuestionPage() {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [rightAnswers, setRightAnswers] = useState(new Array(5).fill(false));

  const [values, setValues] = useState({
    title: '',
    description: '',
    tags: '',
    options: new Array(5).fill(''),
    correctOptions: []
  });

  const { title, description, tags, options, correctOptions } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    console.log(values);
  };

  const addOptions = (num, value) => {
    let newOptions = [...options];
    newOptions[num] = value();
    setValues({ ...values, options: newOptions });
    console.log(values);
  };

  const handleRightAnswer = (index) => {
    const newRightAnswers = [...rightAnswers];
    newRightAnswers[index] = !newRightAnswers[index];
    setRightAnswers(newRightAnswers);
    console.log(newRightAnswers);

    // setValues({
    //   ...values, correctOptions: options.filter((option, i) => newRightAnswers[i])
    // });
    console.log(values);
  };

  return (
    <>
      <NextSeo title="Create Question" titleTemplate="%s | Learnr App" />
      <MainLayout searchBar={false}>
        <div>
          <div className='max-w-6xl mx-auto'>
            <h1>Create new question</h1>
            <div>
              {error && (
                <ErrorBanner message={error} />
              )}
              {success && (
                <SuccessBanner message={success} />
              )}
              <form>
                <div className='mt-4'>
                  <label htmlFor="title" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                    Question
                  </label>
                  <div className="mt-1">
                    <input
                      id="title"
                      name="title"
                      onChange={handleChange('title')}
                      type="text"
                      required={true}
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none dark:bg-gray-900 dark:border-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className='mt-4'>
                  <label htmlFor="description" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                    Description
                    <span className='text-sm'> (Optional)</span>
                  </label>
                  <Editor
                    id="description"
                    name="description"
                    onChange={(value) => setValues({ ...values, "description": value() })}
                    placeholder='Write description here...'
                  />
                </div>
                <div className='mt-4'>
                  <label htmlFor="tags" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                    Tags
                    <span className='text-sm'> (Separated by comma max. 3)</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="tags"
                      name="tags"
                      type="text"
                      onChange={handleChange('tags')}
                      required={true}
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none dark:bg-gray-900 dark:border-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className='mt-4'>
                  <label htmlFor="tags" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                    Options
                    <span className='text-sm'> (Optional, Check the box for correct answers) </span>
                  </label>
                  <div className='flex flex-col gap-4'>
                    {
                      options.map((option, index) => {
                        index++;
                        return (
                          <div key={index + 1} className='flex items-center w-full'>
                            <div className='w-full'>
                              <Editor onChange={(value) => addOptions((index - 1), value)} placeholder={`Option ${index}`} id={`option-${index}`} />
                            </div>
                            <div className='flex items-center justify-center w-12'>
                              <input onChange={(index) => handleRightAnswer(index)} id={`option-${index}`} type="checkbox" value={values.options[index]} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className='mt-4'>
                  <Button text="Submit" type='submit' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};