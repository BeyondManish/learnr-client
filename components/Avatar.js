export default function Avatar({ image }) {
  return (
    <div className="w-10 h-10">
      <img
        className="inline-block w-10 h-10 rounded-full"
        src={image}
        alt=""
      />
    </div>
  );
}