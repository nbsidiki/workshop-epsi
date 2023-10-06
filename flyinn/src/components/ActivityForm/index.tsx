import React, { useState } from 'react';
import Select from "../Fields/Select";
import { Field } from 'formik';
import fetch from '../../utils/fetch';
import format from 'date-fns/format';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const ActivityForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');
    const [confimPassword, setConfimPassword] = useState('');
    const [userType, setUserType] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePrenomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrenom(event.target.value);
    };

    const navigate = useNavigate()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {

            await fetch('', 'POST', {
                name: name,
                prenom: prenom,
                email: email,
            })
            toast.success("vous avez été inscrit avec succès")
            navigate("/activity")
        } catch (error) {
            toast.error("vous n'avez pas pu être inscrit à ce evènement")
        }
    };

    return (
        <div className="flex items-center justify-end vsm:ml-10 sm:ml-10 ">
            <div className=" bg-gray-300 vsm:p-5  p-8 rounded-2xl shadow-md w-full">
                <div className='w-full justify-center flex'>
                    <h2 className="text-2xl font-semibold mb-2 ">Inscription</h2>
                </div>
                <form onSubmit={handleSubmit} className='h-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 vsm:grid-cols-1  gap-2'>

                    <div className="">
                        <label htmlFor="name" className="block text-gray-600">Name:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nom"
                            value={name}
                            onChange={handleNameChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="prenom" className="block text-gray-600">prenom:</label>
                        <input
                            type="text"
                            id="prenom"
                            placeholder="prenom"
                            value={prenom}
                            onChange={handlePrenomChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block text-gray-600">Adresse e-mail:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Adresse e-mail"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className=' flex w-full justify-center'>

                        <button
                            type="submit"
                            className="w-full lg:h-12 lg:mt-2 hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2"
                        >
                            Apply
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ActivityForm;
