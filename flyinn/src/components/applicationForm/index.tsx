import React, { useState } from 'react';
import Select from "../Fields/Select";
import { Field } from 'formik';
import fetch from '../../utils/fetch';
import format from 'date-fns/format';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const AdLogementForm: React.FC = () => {
    const [name, setName] = useState('');
    const [adresse, setAdresse] = useState('');

    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };

    const handleAdresseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdresse(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const navigate = useNavigate()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {

            await fetch('', 'POST', {
                name: name,
                description: description,
                adresse: adresse,
                image: image

            })
            toast.success("vous avez été inscrit avec succès")
            navigate("/findHome")
        } catch (error) {
            toast.error("vous n'avez pas pu être inscrit à ce evènement")
        }
    };

    return (
        <div className="flex items-center justify-end vsm:ml-10 sm:ml-10 ">
            <div className=" bg-gray-300 vsm:p-5  p-8 rounded-2xl shadow-md w-full">
                <div className='w-full justify-center flex'>
                    <h2 className="text-2xl font-semibold mb-2 ">Ajouter votre logement</h2>
                </div>
                <form onSubmit={handleSubmit} className='h-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 vsm:grid-cols-1  gap-2'>

                    <div className="">
                        <label htmlFor="name" className="block text-gray-600">Type:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Type"
                            value={name}
                            onChange={handleNameChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="description" className="block text-gray-600">description:</label>
                        <input
                            type="text"
                            id="Description"
                            placeholder="description"
                            value={description}
                            onChange={handleDescriptionChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="adresse" className="block text-gray-600">Adresse :</label>
                        <input
                            type="adresse"
                            id="adresse"
                            placeholder="Adresse e-mail"
                            value={adresse}
                            onChange={handleAdresseChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="imageUpload" className="block text-gray-600">Selectionner une image :</label>
                        <input
                            type="file"
                            id="imageUpload"
                            name="image"
                            accept="image/*"
                            placeholder="Adresse e-mail"
                            value={adresse}
                            onChange={handleImageChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className=' flex w-full justify-center'>

                        <button
                            type="submit"
                            className="w-full lg:h-12 lg:mt-2 hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2"
                        >
                            ajouter
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AdLogementForm;
