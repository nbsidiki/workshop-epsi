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
        // Vous pouvez ajouter ici la logique pour vérifier les informations de connexion
        // par exemple, en envoyant une requête au serveur
        console.log('Email:', email);
        console.log('Mot de passe:', password);
    };

    return (
        <div className="flex items-center justify-center ">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Connexion</h2>
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
                            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
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
                            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
