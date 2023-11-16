import React, { ChangeEventHandler } from 'react';
interface IFilters {
    categoryHandler: ChangeEventHandler<HTMLSelectElement>;
    checkboxHandler: ChangeEventHandler<HTMLInputElement>;
    updateDisplay: () => void;
}
declare const Filters: React.FC<IFilters>;
export default Filters;
