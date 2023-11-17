import React, { ChangeEventHandler, EventHandler } from 'react';
import CategoryFilter from './CategoryFilter';
import AttributeFilter from './AttributeFilter';
import { CATEGORIES, COLORS, BRANDS } from '../constants';

interface IFilters {
  categoryHandler: ChangeEventHandler<HTMLSelectElement>
  checkboxHandler: ChangeEventHandler<HTMLInputElement>
  updateDisplay: () => void
}

const Filters: React.FC<IFilters> = (props) => {

  return (
    <aside className='col col-md-3'>
      <form>
        <CategoryFilter categories={CATEGORIES} handler={props.categoryHandler} />
        <AttributeFilter name='brands' options={BRANDS} handler={props.checkboxHandler} />
        <AttributeFilter name='colors' options={COLORS} handler={props.checkboxHandler} />
        <button type='button' className='btn' onClick={props.updateDisplay}>
          Filter
        </button>
      </form>
    </aside>
  )
}

export default Filters;
