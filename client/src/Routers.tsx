import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserTable from './components/UserTable';
import Register from './components/Register';
import Navbar from './components/Navbar';

const AllRouters: React.FC = () => {
    return (
        <div>
            <main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<UserTable />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </div>
    );
};

export default AllRouters;