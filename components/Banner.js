export function ErrorBanner({ message }) {
  return (
    < div className="flex justify-between w-full p-2 mb-4 text-sm font-semibold text-white bg-red-600 rounded-md ring-1 ring-red-600">
      <p>{message}</p>
    </div>
  );
}
