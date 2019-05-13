import React, { Component } from 'react';
import { connect } from 'react-redux';
import addressModal from './address';
import addProductModal from './add_product';

class ModalRoot extends Component {

    render() {
        const modal_components = {
            'ADDRESS_MODAL': addressModal,
            'ADD_PRODUCT': addProductModal
        }

        if (!this.props.modal.modalType) {
            return null
        } else {
            const Modal = modal_components[this.props.modal.modalType]
            return (
                <div className="modal_root">
                    <Modal {...this.props.modal.modalProps} />
                </div>
            )
        }
    }
}

const mapStateToProps = store => ({
    modal: store.modalState
});

export default connect(mapStateToProps, null)(ModalRoot);