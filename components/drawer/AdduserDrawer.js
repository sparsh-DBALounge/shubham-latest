import React, { useState } from 'react';
import InputWithLabel from '@/components/core/InputWithLabel';
import SelectWithLabel from '@/components/core/SelectWithLabel';
import { optionsHandler } from '@/hooks/helper/selectOptionsHandlers';
import useAuthHooks from '@/hooks/useAuthHooks';

const AddUserDrawer = ({ closeDrawer }) => {
    const {  addUserBody, addUserChangeHandler, addUserSubmitHandler } = useAuthHooks()
    const roles = [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
    ];

    return (
        <div>
            <InputWithLabel
                label='Email'
                name='email'
                state={addUserBody}
                isRequired={true}
                onChangeHandler={addUserChangeHandler}
            />
             <InputWithLabel
                label='Password'
                name='Password'
                state={addUserBody}
                isRequired={true}
                onChangeHandler={addUserChangeHandler}
            />
            <SelectWithLabel
                label='Role'
                name='role'
                state={addUserBody}
                isRequired={true}
                onChangeHandler={addUserChangeHandler}
                options={optionsHandler(roles)}
            />
            <div className="row mt-3 d-flex justify-content-end">
                <button className="btn" onClick={closeDrawer}>Cancel</button>
                <button className="btn btn-primary" onClick={() => addUserSubmitHandler(closeDrawer)}>Submit</button>
            </div>
        </div>
    );
};
export default AddUserDrawer