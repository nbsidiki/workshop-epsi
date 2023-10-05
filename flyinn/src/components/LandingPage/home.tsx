import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <div className="flex items-center justify-end vsm:ml-10 sm:ml-10 ">
            <div className="flex flex-col bg-gray-300 p-8 rounded-2xl shadow-md w-full h-96">
                <div className=' flex rounded-3xl border-2 h-full  bg-white'>
                    <p className='flex h-full text-lg'>
                        Tu vis hors de la France et cherches un logement temporaire pour tes études ?, les habitants de la MEL vous acceuille.
                    </p>
                </div>
                <div className=' flex w-full mt-4'>
                    <Link to={'/signin'} className='w-full'>
                        <button
                            type="button"
                            className="w-full hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2"
                        >
                            Inscription
                        </button>
                    </Link>
                </div>
                <div className=' flex w-full mt-4'>
                    <Link to={'/login'} className='w-full'>
                        <button
                            type="button"
                            className="w-full hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2"
                        >
                            connexion
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
