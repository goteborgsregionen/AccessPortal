import React, { useState } from 'react';
import Tag from './common/tag';

export default function Filter({ subjects, ages, categories }) {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterCategories = [
    {
      title: 'Ämne',
      color: 'bg-blue-300',
      options: subjects,
      selectedOptions: selectedSubjects,
      onSelect: setSelectedSubjects,
    },
    {
      title: 'Ålder',
      color: 'bg-yellow-300',
      options: ages,
      selectedOptions: selectedAges,
      onSelect: setSelectedAges,
    },
    {
      title: 'Kategori',
      color: 'bg-red-300',
      options: categories,
      selectedOptions: selectedCategories,
      onSelect: setSelectedCategories,
    },
  ];

  return (
    <div className="rounded bg-gray-200 mb-8 p-4">
      <h2 className="text-xl font-semibold mb-6">Jag är intresserad av</h2>
      <div className="flex justify-between">
        <div className="w-1/2">
          {filterCategories.map((category) => (
            <ul className="flex mb-2 flex-wrap">
              {category.selectedOptions.map((option) => (
                <Tag
                  color={category.color}
                  title={option}
                  onRemove={() =>
                    category.onSelect(category.selectedOptions.filter((o) => o != option))
                  }
                />
              ))}
            </ul>
          ))}
        </div>
        <div className="flex w-1/2 justify-between">
          {filterCategories.map(({ title, options, selectedOptions, onSelect }) => (
            <FilterCategory
              name={title}
              options={options}
              onSelect={(option) => onSelect(Array.from(new Set([...selectedOptions, option])))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterCategory({ name, options, onSelect }) {
  return (
    <div className="w-1/3 border-l border-black pl-4">
      <h3 className="uppercase mb-3 font-semibold">{name}</h3>
      <ul>
        {options.map((option) => (
          <li
            role="button"
            className="mb-2 cursor-pointer font-semibold select-none"
            onClick={() => onSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
