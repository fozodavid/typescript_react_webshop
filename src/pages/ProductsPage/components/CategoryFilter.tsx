import React, { ChangeEventHandler } from 'react';
import { CATEGORIES } from 'consts';


interface ICategoryFilter {
  handler: ChangeEventHandler<HTMLSelectElement>
}

const CategoryFilter: React.FC<ICategoryFilter> = ({ handler }) => {
  return (
    <div className="form-group">
      <select data-testid="category-filter" className="form-control" name="categories" onChange={e => handler(e)}>
        {CATEGORIES.map(category =>
          <option key={category} value={category}>{category}</option>
        )}
      </select>
    </div>
  )
}

export default CategoryFilter;
