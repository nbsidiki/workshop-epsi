import { format } from "date-fns";
import fetch from "../../utils/fetch";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCheckToken from "../../hooks/useCheckToken";


const DemarcheForm: React.FC = () => {

    const [start, setStart] = useState('');

    const [end, setEnd] = useState('');

    const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };
    const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnd(event.target.value);
    };
    const navigate = useNavigate()
    const onTokenExpiration = () => {
        toast.error("reconnectez vous")
        navigate('/')
    };
    //useCheckToken(onTokenExpiration)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch('', 'POST', {
            periode: `${format(new Date(start), 'dd/MM/yyyy')}-${format(new Date(end), 'dd/MM/yyyy')}`
        })
    };
    return (
        <div className="flex items-center justify-end vsm:ml-10 sm:ml-10 ">
            <div className=" bg-gray-300 vsm:p-5  p-8 rounded-2xl shadow-md w-full">
                <div className='w-full justify-center flex'>
                    <h2 className="text-2xl font-semibold mb-2 ">Demande</h2>
                </div>
                <form onSubmit={handleSubmit} className='h-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 vsm:grid-cols-1  gap-2'>
                    <div className="">
                        <label htmlFor="Start" className="block text-gray-600">Start:</label>
                        <input
                            type="date"
                            id="Start"
                            placeholder="Start"
                            value={start}
                            onChange={handleStartChange}
                            required
                            className="w-full border rounded-2xl px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="End" className="block text-gray-600">End:</label>
                        <input
                            type="date"
                            id="End"
                            placeholder="End"
                            value={end}
                            onChange={handleEndChange}
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
    )
}

export default DemarcheForm