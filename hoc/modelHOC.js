import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import LogoutModel from '@/components/model/LogoutModel'

const initialState = {
    show: false,
    key: null,
    size: 'md',
    centered: true,
    keyboard: false,
}

const ModelMap = {
    LOGOUT: LogoutModel,
}

const ModelHOC = (Component) => {
    return function ModelComponent(props) {
        const [ModelState, setModelState] = useState({ ...initialState })
        
        const closeModel = () => setModelState({ ...initialState })
        const openModel = (e) => setModelState({ show: true, ...e })
        
        const ModalContentComponent = ModelMap[ModelState.key]
        const { key, ...restModelState } = ModelState
        
        return (
            <>
                {ModelState.show && ModalContentComponent && (
                    <Modal
                        show={ModelState.show}
                        onHide={closeModel}
                        backdrop="static"
                        size={ModelState.size}
                        centered={ModelState.centered}
                        keyboard={ModelState.keyboard}
                    >
                        <ModalContentComponent
                            openModel={openModel}
                            closeModel={closeModel}
                            modalKey={key} 
                            {...restModelState}
                        />
                    </Modal>
                )}
                <Component
                    {...props}
                    openModel={openModel}
                    closeModel={closeModel}
                />
            </>
        )
    }
}

export default ModelHOC