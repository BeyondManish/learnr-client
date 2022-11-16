import AdminLayout from '../../../components/layout/AdminLayout';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import { loadAllMedias } from '../../../functions/load';
import { Button } from '../../../components/Buttons';
import { TrashIcon } from '@heroicons/react/24/outline';
import { MediaContext } from '../../../context/Media';
import axios from 'axios';

export default function MediaPage() {

  const [media, setMedia] = useContext(MediaContext);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAllMedias().then((res) => {
      setMedia(prev => ({ ...prev, images: res.medias }));
    }).catch(err => {
      setError(err.response.data?.message || err.response.data?.errors[0] || "Error fetching medias");
    });
  }, []);

  console.log(media);
  // TODO: add a delete button
  const deleteMedia = (id) => {
    axios.delete(`/files/${id}`).then(res => {
      console.log(res);
      setMedia(prev => ({ ...prev, images: prev.images.filter(image => image._id !== id) }));
    });
    console.log(media);
  };

  console.log(media);

  return (
    <AdminLayout>
      <Head>
        <title>Media | Learnr</title>
      </Head>
      <h1 className='mb-2 admin-topic-heading'>All Medias</h1>
      <div className='flex flex-wrap'>
        {
          media.images.map((image) => (
            <div key={image._id} className='relative max-w-sm m-2 overflow-hidden border border-gray-300 rounded-lg h-52 dark:border-gray-700'>
              <Button className={`absolute z-10 top-1 right-1`} icon={<TrashIcon />} onClick={() => deleteMedia(image._id)} />
              <Image className="object-cover w-full" width={720} height={400} src={image.url} alt={image.name} />
            </div>
          ))
        }
      </div>
    </AdminLayout >
  );
}