import { useContext, useState } from "react";
import { uploadImage } from "../../functions/upload";
import { MediaContext } from "../../context/Media";

export default function Media() {
  // context
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex items-center justify-center w-full">
      <input
        type="file"
        onChange={(e) => {
          setLoading(!loading);
          uploadImage(e.target.files[0]).then((res) => {
            console.log(res);
            setMedia({
              images: [res],
              selected: res,
              showMediaModal: false,
            });
            localStorage.setItem("postFeaturedImage", JSON.stringify(res));
            setLoading(!loading);
          });
        }}
        id="uploadFile" hidden
      />
      {
        loading ? (<div>
          Uploading...
        </div>) :
          <label className="flex items-center justify-center w-full h-40 px-4 py-2 text-base font-medium border-4 border-dashed rounded-md focus:outline-none"
            htmlFor="uploadFile">Upload image file</label>
      }
    </div>);
};;