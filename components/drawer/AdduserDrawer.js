import React, { useState } from 'react';
import InputWithLabel from '@/components/core/InputWithLabel';
import SelectWithLabel from '@/components/core/SelectWithLabel';
import { optionsHandler } from '@/hooks/helper/selectOptionsHandlers';
import useAuthHooks from '@/hooks/useAuthHooks';

const AddUserDrawer = ({ closeDrawer }) => {
    const { addUserBody, addUserChangeHandler, addUserSubmitHandler } = useAuthHooks()
    const roles = [
        { label: 'Admin', value: 'ROLE_ADMIN' },
        { label: 'User', value: 'ROLE_USER' },
    ];

    return (
        <form onSubmit={addUserSubmitHandler}>
            <InputWithLabel
                label='Email'
                name='email'
                state={addUserBody}
                isRequired={true}
                onChangeHandler={addUserChangeHandler}
            />
            <InputWithLabel
                label='Password'
                name='password'
                type='password'
                state={addUserBody}
                isRequired={true}
                onChangeHandler={addUserChangeHandler}
            />
            <InputWithLabel
                label='Employee Code'
                name='empCode'
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
        </form>
    );
};
export default AddUserDrawer