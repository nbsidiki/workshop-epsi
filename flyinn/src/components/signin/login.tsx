import React, { useState } from 'react';
import Select from "../Fields/Select";

const Signin: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');
    const [confimPassword, setConfimPassword] = useState('');

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


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Vous pouvez ajouter ici la logique pour vérifier les informations de connexion
        // par exemple, en envoyant une requête au serveur
        console.log('Email:', email);
        console.log('Mot de passe:', password);
    };

    return (
        <div className="flex items-center justify-end vsm:ml-10 sm:ml-10 ">
            <div className=" bg-gray-300 p-8 rounded-2xl shadow-md w-full h-96">
                <div className='w-full justify-center flex'>
                    <h2 className="text-2xl font-semibold  mb-4">Inscription</h2>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-wrap'>
                    <div className='flex-1'>
                        <div className="mb-4">
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

                        <div className="mb-4">
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
                        <div className="mb-4">
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
                        <div className='mb-4'>
                            <Select options={[{
                                label: "proprio",
                                value: 1
                            }, {
                                label: "etudiant",
                                value: 2
                            }
                            ]} name='userType' label='Vous êtes ?' required className="mb-10 borderedRow form-row" />
                        </div>

                    </div>
                    <div className='flex-1'>
                        <div className="mb-4">
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
                        <div className="mb-4">
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
                        <div className="mb-4">
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

                        <div className=' flex w-full justify-center'>
                            <button
                                type="submit"
                                className="w-52 hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2"
                            >
                                connexion
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
