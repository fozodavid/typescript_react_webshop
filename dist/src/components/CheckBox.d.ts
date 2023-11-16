import React, { ChangeEventHandler } from "react";
import './CheckBox.css';
interface ICheckBox {
    name: string;
    options: string[];
    handler: ChangeEventHandler<HTMLInputElement>;
}
declare const CheckBox: React.FC<ICheckBox>;
export default CheckBox;
