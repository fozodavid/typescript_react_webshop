import React, { ChangeEventHandler, EventHandler } from 'react';
import CategoryFilter from './CategoryFilter';
import { AttributeFilter } from 'components/AttributeFilter';
import { COLORS, BRANDS } from 'consts';

interface IFilterSidebar {
  categoryHandler: ChangeEventHandler<HTMLSelectElement>
  checkboxHandler: ChangeEventHandler<HTMLInputElement>
  updateDisplay: () => void
}

const FilterSidebar: React.FC<IFilterSidebar> = (props) => {
  return (
    <aside className='col col-md-3'>
      <form>
        <CategoryFilter handler={props.categoryHandler} />
        <AttributeFilter name='brands' options={BRANDS} handler={props.checkboxHandler} />
        <AttributeFilter name='colors' options={COLORS} handler={props.checkboxHandler} />
        <button type='button' className='btn' onClick={props.updateDisplay}>
          Filter
        </button>
      </form>
    </aside>
  )
}

export default FilterSidebar;
