import React, { ChangeEventHandler } from 'react';


interface ICategoryFilter {
  categories: string[]
  handler: ChangeEventHandler<HTMLSelectElement>
}

const CategoryFilter: React.FC<ICategoryFilter> = ({ categories, handler }) => {
  return (
    <div className="form-group">
      <select className="form-control" name="categories" onChange={e => handler(e)}>
        {categories.map(category =>
          <option key={category} value={category}>{category}</option>
        )}
      </select>
    </div>
  )
}

export default CategoryFilter;
