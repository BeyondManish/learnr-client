import AdminLayout from '../../../components/layout/AdminLayout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { loadAllMedias } from '../../../functions/load';

export default function MediaPage() {

  const [medias, setMedias] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadAllMedias().then((res) => {
      console.log(res.medias);
      setMedias(res.medias);
    });
  }, []);

  return (
    <AdminLayout>
      <Head>
        <title>Media | Learnr</title>
      </Head>
      <h1 className='admin-topic-heading'>All Medias</h1>
      <div>
        {
          medias.map((media) => (
            <div key={media._id}>
              <img src={media.url} alt={media.name} />
            </div>
          ))
        }
      </div>
    </AdminLayout>
  );
}