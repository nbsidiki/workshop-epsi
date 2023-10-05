import { login } from '../../services/login';
import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = login(email, password);
        console.log(result);
    };

    return (
        <div className="flex items-center justify-end vsm:ml-10 sm:ml-10 ">
            <div className=" bg-gray-300 p-8 rounded-2xl shadow-md w-full h-96">
                <div className='w-full justify-center flex'>
                    <h2 className="text-2xl font-semibold  mb-4">Connexion</h2>
                </div>
                <form onSubmit={handleSubmit}>
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
                    <div className=' flex w-full justify-center'>
                        <button
                            type="submit"
                            className="w-52 hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2"
                        >
                            connexion
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
