import React from 'react'
import { Dropdown } from 'primereact/dropdown';


const defaultClassNameArray = ["row mt-3", "col-md-3 col-12", "col-md-8 col-12"]


const SelectWithLabel = (props) => {

    const {
        classNameArray = defaultClassNameArray,
        state = {}, label = "", name = "", onChangeHandler = () => { }, options = [],
        isRequired = false, isReadOnly = false
    } = props

    return (
        <div className={classNameArray[0]}>
            {label && <div className={classNameArray[1]}>
                <label>{label} {isRequired && <span />}</label>
            </div>}
            <div className={classNameArray[2]}>

                <Dropdown
                    value={state[name]}
                    onChange={onChangeHandler}
                    options={options}
                    name={name}
                    optionLabel="name"
                    className="form-control custom-select-style"
                    disabled={isReadOnly}
                    filter
                    required={isRequired}
                />
            </div>
        </div>
    )
}

export default SelectWithLabel