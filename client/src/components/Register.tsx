import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataModel } from "../models/UserDataModel";
import { ToastContainer } from 'react-toastify';
import { UserService } from '../services/UserService';
import 'react-toastify/dist/ReactToastify.css';
import { userDataValidation } from "../validation/userDataValidations";

const Register: React.FC = () => {

    const [userData, setUserData] = useState<UserDataModel>({
        first_name: "",
        last_name: "",
        phone_number: 0,
        email: "",
        password: "",
        date_of_birth: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userDataValidation(userData)) {
            return;
        }

        try {
            await UserService.registerUser(userData);
            navigate("/");
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUserData({
            ...userData, [e.currentTarget.name]: e.currentTarget.value
        });
    }
    console.log(userData)
    return (
        <div className="w-full m-4 flex flex-col justify-center items-center">
            <p className='text-5xl text-gray-600 font-semibold'>Register User</p>
            <form className="w-[50%] flex flex-col justify-center items-center shadow-lg mt-2" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-[80%] mt-6 md-2">
                    <input
                        className="p-2 outline-0 border-slate-600 border-b-[1px] w-[90%]"
                        name="first_name"
                        type="text"
                        placeholder="Enter your First Name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="m-2 w-[80%]">
                    <input
                        className="p-2 outline-0 border-slate-600 border-b-[1px] w-[90%]"
                        name="last_name"
                        type="text"
                        placeholder="Enter your Last Name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="m-2 w-[80%]">
                    <input
                        className="p-2 outline-0 border-slate-600 border-b-[1px] w-[90%]"
                        name="phone_number"
                        type="text"
                        placeholder="Enter your Phone Number"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="m-2 w-[80%]">
                    <input
                        className="p-2 outline-0 border-slate-600 border-b-[1px] w-[90%]"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="m-2 w-[80%]">
                    <input
                        className="p-2 outline-0 border-slate-600 border-b-[1px] w-[90%]"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="m-2 w-[80%]">
                    <span className="text-xl">Enter your DOB:</span>
                    <input
                        className="p-2 outline-0 border-slate-600 border-b-[1px] w-[50%]"
                        name="date_of_birth"
                        type="date"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="m-8">
                    <button
                        className="w-[150px] bg-blue-600 border-0 text-white px-2 py-3 text-xl rounded-xl"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <ToastContainer theme="colored" />
        </div>
    );
};

export default Register;