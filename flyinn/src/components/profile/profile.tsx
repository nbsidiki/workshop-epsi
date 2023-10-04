import Button from '../../components/Buttons/Button';
import { constants } from 'crypto';
import React, { useState } from 'react';

interface IProfileProps {
    userId?: number;
}
const Profile: React.FC<IProfileProps> = ({ userId }) => {
    const [data, setData] = useState([])


    return (
        <>
            <div className='flex-1 bg-gray-500 rounded-2xl h-full flex flex-col'>
                <h2>Information</h2>
                <p className='flex-1'>Email: paulina.marquez@gmail.com</p>
                <p className='flex-1'>Adresse: 9 rue des jonquilles</p>
                <p className='flex-1'>pays: Espagne</p>
                <p className='flex-1'>ville: Madrid</p>
                <p className='flex-1'></p>
            </div>
            <div className='w-80 justify-center flex-1 flex flex-col  h-full'>
                <div className='w-full'>
                    <img className='w-full h-64' src="./profile.jpeg" alt="" />
                    <p className='w-full text-center text-2xl h-12 hover:bg-orange-400 bg-orange-500 text-white'>Demandeur</p>
                </div>
                <div className='w-full'>
                    <Button className="w-full lg:h-12 lg:mt-2 hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2">Modifier mon profil</Button>
                </div>
            </div>
            <div className='flex-1 justify-center w-full bg-gray-500 rounded-2xl h-full flex flex-col'>
                <h2>A propos de moi:</h2>
                <p className='text-center'>blablablablablablablablablablabalblablablab</p>

            </div>

        </>
    )
}
export default Profile