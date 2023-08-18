import { useState } from "react";
const Checkbox = ({ label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <div className="checkbox-wrapper">
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                        // setIsChecked((prev) => !prev);
                        props.onSelect()
                    }}
                    className={checked ? "checked" : ""}
                    {...props}
                />
                <span>{label}</span>
            </label>
            {/*<p>{isChecked ? "Selected" : "Unchecked"}</p>*/}
        </div>
    );
};
export default Checkbox;
