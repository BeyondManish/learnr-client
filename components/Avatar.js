import Image from 'next/image';
export default function Avatar({ image }) {
  return (
    <div className="w-10 h-10 overflow-hidden border border-gray-300 rounded-full">
      <Image
        className="object-cover w-full h-full"
        src={image}
        alt=""
        width={400}
        height={400}
      />
    </div>
  );
}