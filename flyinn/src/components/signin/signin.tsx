import React, { useState } from 'react';
import Select from "../Fields/Select";
import { Field } from 'formik';
import fetch from '../../utils/fetch';
import format from 'date-fns/format';

const Signin: React.FC = () => {
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

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handlePrenomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrenom(event.target.value);
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    };

    const handleconfimPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfimPassword(event.target.value);
    };
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUserType(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch('', 'POST', {
            name: name,
            prenom: prenom,
            email: email,
            password: password,
            confirmPassword: confimPassword,
            age: format(new Date(age), 'dd/MM/yyyy'),
            userType: userType
        })
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
                    <div className="">
                        <label htmlFor="password" className="block text-gray-600">Mot de passe:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>


                    <div className="">
                        <label htmlFor="age" className="block text-gray-600">confirmation mot de passe:</label>
                        <input
                            type="password"
                            id="confimPassword"
                            placeholder="confirmation mot de passe"
                            value={confimPassword}
                            onChange={handleconfimPasswordChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="age" className="block text-gray-600">Age:</label>
                        <input
                            type="date"
                            id="age"
                            placeholder="Age"
                            value={age}
                            onChange={handleAgeChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className="block text-gray-600 text-sm" htmlFor="userType">Vous êtes ?</label>
                        <select value={userType} onChange={handleSelectChange} className="w-full px-4 py-2 border rounded-2xl appearance-none bg-gray-300 text-gray-600 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder='Vous êtes' id="userType" name="userType" required>
                            <option value="1">Propriétaire</option>
                            <option value="2">Étudiant</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 5-5 5 5-5 5z" /></svg>
                        </div>
                    </div>
                    <div className=' flex w-full justify-center'>

                        <button
                            type="submit"
                            className="w-full lg:h-12 lg:mt-2 hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2"
                        >
                            connexion
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Signin;
