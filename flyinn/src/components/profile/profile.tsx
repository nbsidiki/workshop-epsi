import Button from '../../components/Buttons/Button';
import { constants } from 'crypto';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface IProfileProps {
    userId?: number;
}
const Profile: React.FC<IProfileProps> = ({ userId }) => {
    const [data, setData] = useState([])


    return (
        <>
            <div className='flex-1 p-4 bg-gray-500 rounded-2xl h-full flex flex-col'>
                <div className='flex justify-center mb-3'>
                    <h2>Information</h2>
                </div>
                <div className='mt-2 flex flex-col justify-center'>
                    <p className='flex-1'>Email: paulina.marquez@gmail.com</p>
                    <p className='flex-1'>Adresse: 9 rue des jonquilles</p>
                    <p className='flex-1'>pays: Espagne</p>
                    <p className='flex-1'>ville: Madrid</p>
                    <p className='flex-1'></p>
                </div>
            </div>
            <div className='flex-1 lg:pl-20 lg:pr-20 flex h-full w-full justify-center'>
                <div className='w-80 justify-center flex-1 flex flex-col  h-full'>
                    <div className='w-full vsm:mb-3'>
                        <img className='w-full h-64' src="./profile.jpeg" alt="" />
                        <p className='w-full text-center text-2xl h-12  bg-orange-500 text-white'>Demandeur</p>
                    </div>
                    <div className='w-full'>
                        <Link to={'/'}>
                            <Button className="w-full lg:h-12 lg:mt-2 hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2">Modifier mon profil</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex-1 w-full bg-gray-500 rounded-2xl h-full flex flex-col'>
                <div className='flex justify-center mb-5 vsm:mb-0'>
                    <h2 className='mt-4'>A propos de moi:</h2>
                </div>
                <div className='flex justify-center vsm:p-8 pb-3'>
                    <p className='text-center break-words w-64 h-16'>blablablabqsldjkfghlshfklqsjfhqkhfqslkhfshqlkhfqlhfqshvlqhsqjdlhfqksvhsqhvcqkjlablablablablablablabalblablablab</p>
                </div>

            </div>

        </>
    )
}
export default Profile