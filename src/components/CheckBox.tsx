import React, { ChangeEventHandler } from "react";
import './CheckBox.css';


interface ICheckBox {
  name: string
  options: string[]
  handler: ChangeEventHandler<HTMLInputElement>
}

const CheckBox: React.FC<ICheckBox> = ({ name, options, handler }) => {
  // todo: is this a form group?
  return (
    <div className="form-group">
      <h2>{name}</h2>
      {options.map(option => {
        return (
          <div key={option} className="checkbox">
            <input onChange={handler} name={name} type="checkbox" id={option} />
            <label htmlFor={option} className="form-label">
              {option}
            </label>
          </div>
        )
      })}
    </div>
  );
}

export default CheckBox;