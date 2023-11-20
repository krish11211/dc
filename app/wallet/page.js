'use client'
import './wallet.css'

import { useState } from 'react';
export default function Wallet() {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((preData) => ({
            ...preData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({
            name: '',
            password: '',
        });

    };


    return (
        <div className="wallet-container" >
            <form className="wallet" onSubmit={handleSubmit}>

                <label className='l1'>
                    Name:
                    <input
                        className='name'
                        type="text"
                        name="name" value={formData.name} onChange={handleChange} ></input>
                </label>
                <label className='l2'>
                    Password:
                    <input className='email' type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
                <button type="submit" className='' >Submit</button>


            </form>
        </div>

    )
}