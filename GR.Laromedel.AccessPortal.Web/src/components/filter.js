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
    <div className="filter">
      <h2>Jag är intresserad av</h2>
      <div className="filter-categories">
        <div className="filter-selected">
          {filterCategories.map((category) => (
            <ul className="tags">
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
        <div className="filter-options">
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
    <div className="filter-category">
      <h3>{name}</h3>
      <ul>
        {options.map((option) => (
          <li
            role="button"
            className="filter-option"
            onClick={() => onSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
