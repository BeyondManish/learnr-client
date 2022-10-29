import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { BadgeWithCrossButton } from '../Badges';
import classNames from "../../utils/classNames";
import localData from '../../utils/localData';

export default function MultiSelect({ label, values }) {
  const [selectedValues, setSelectedValues] = useState(localData(label) || []);
  const [query, setQuery] = useState("");

  const filteredValue =
    query === ''
      ? values
      : values.filter((value) => {
        return value.name.toLowerCase().includes(query.toLowerCase());
      });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (filteredValue.length > 0) {
        setSelectedValues([...selectedValues, filteredValue[0]]);
        setQuery("");
        e.target.value = "";
      }
    }
  };

  useEffect(() => {
    console.log(selectedValues);
    localStorage.setItem(`${label}`, JSON.stringify(selectedValues));
  }, [selectedValues]);

  return (
    <Combobox as="div" value={selectedValues} onChange={setSelectedValues} multiple={true}>
      {({ open }) => (
        <>
          <Combobox.Label className="block text-sm font-medium text-gray-700">{label}</Combobox.Label>
          {/* list all the selected values */}
          <div className="flex flex-wrap gap-1 mt-1">
            {
              selectedValues.length > 0 &&
              selectedValues.map((value) => <BadgeWithCrossButton key={value._id} name={value.name} onClick={(e) => { e.stopPropagation(); setSelectedValues(selectedValues.filter(item => item != value)); }} />)
            }
          </div>

          <div className="relative mt-1">
            <Combobox.Input
              autoComplete='off'
              placeholder={`Select ${label}`}
              className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredValue.map((value) => (
                  <Combobox.Option
                    key={value._id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={value}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {value.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </div>
        </>
      )
      }
    </Combobox >
  );
}
