export default function Media() {
  return (
    <div className="flex items-center justify-center w-full">
      <input
        type="file"
        id="uploadFile" hidden
      />
      <label className="flex items-center justify-center w-full h-40 px-4 py-2 text-base font-medium border-4 border-dashed rounded-md focus:outline-none"
        for="uploadFile">Upload image file</label>
    </div>);
};;