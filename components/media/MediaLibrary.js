import { useContext, useEffect } from 'react';
import { MediaContext } from "../../context/Media";
import { loadAllMedias } from '../../functions/load';
import { Button } from '../Buttons';
import { TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function MediaLibrary() {
  const [media, setMedia] = useContext(MediaContext);

  useEffect(() => {
    loadAllMedias().then((res) => {
      setMedia({ ...media, images: res.medias });
    });
  }, []);


  console.log(media);
  return (
    <div className='flex flex-wrap'>
      {(media.images.length > 0) ?
        (media.images.map((image) => (
          <div key={image._id} onClick={() => setMedia((prev) => ({ ...prev, selected: image, showMediaModal: false }))} className='relative h-40 max-w-xs m-2 overflow-hidden border border-gray-300 rounded-lg cursor-pointer dark:border-gray-700'>
            {/* <Button className={`absolute z-10 top-1 right-1`} icon={<TrashIcon />} onClick={() => deleteMedia(image._id)} /> */}
            <Image className="object-cover w-full" width={720} height={400} src={image.url} alt={image.name} />
          </div>
        ))) : (<p>No media found</p>)}
    </div>);
}
