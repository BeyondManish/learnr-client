import { useEffect, useState } from 'react';
import { loadStatsData } from '../../functions/load';


export default function Stats({ stats }) {

  return (
    <div>
      <h3 className="text-lg font-medium leading-6">Admin Dashboard</h3>
      <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
        {
          stats &&
          stats.map((item) => (
            <div key={item.name} className="px-4 py-5 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-900 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate dark:text-gray-300">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">{item.number}</dd>
            </div>
          ))
        }
      </dl>
    </div>
  );
}
