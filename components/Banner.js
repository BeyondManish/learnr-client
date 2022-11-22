import { useEffect, useState } from 'react';

export function ErrorBanner({ message }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  return (
    <div>
      {
        visible && (
          <div className="flex justify-between w-full p-2 mb-4 text-sm font-semibold text-white bg-red-600 rounded-md ring-1 ring-red-600">
            <p>{message}</p>
          </div>
        )
      }
    </div>

  );
}

export function SuccessBanner({ message }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return (
    <div>
      {
        visible && (
          <div className="flex justify-between w-full p-2 mb-4 text-sm font-semibold text-white bg-green-600 rounded-md ring-1 ring-green-600">
            <p>{message}</p>
          </div>
        )
      }
    </div>

  );
}