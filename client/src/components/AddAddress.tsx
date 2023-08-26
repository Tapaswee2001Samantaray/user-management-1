import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddressModel } from '../models/AddressModel';
import { addressDataValidation } from '../validation/addressDataValidations';
import { ToastContainer } from 'react-toastify';
import { UserService } from '../services/UserService';

interface PropType {
    userID: number;
    addressData: AddressModel;
    setAddressData: React.Dispatch<React.SetStateAction<AddressModel>>;
    updateAddress: boolean;
    setUpdateAddress: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAddress: React.FC<PropType> = ({ addressData, setAddressData, updateAddress, setUpdateAddress, userID }) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!addressDataValidation(addressData)) {
            return;
        }

        try {
            await UserService.addAddress(addressData, userID);
            setUpdateAddress(!updateAddress);
            handleClose();
        } catch (error: any) {
            console.log(error);
        }
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setAddressData({
            ...addressData, [e.currentTarget.name]: e.currentTarget.value
        });
    }

    return (
        <>
            <button onClick={handleShow} className="btn btn-primary">Add Address</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-full max-w-sm" onSubmit={(e) => handleSubmit(e)}>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="streetAddress">
                                    Street Adderss
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="streetAddress"
                                    name="streetAddress"
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="city">
                                    City
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="city"
                                    name="city"
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="state">
                                    State
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="state"
                                    name="state"
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="zipCode">
                                    Zip Code
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="zipCode"
                                    name="zipCode"
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                    </form>
                    <ToastContainer theme="colored" />
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        form="editmodel"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddAddress;