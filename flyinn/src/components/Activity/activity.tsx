import React, { useState } from "react";
import { Link } from "react-router-dom";


const Activity: React.FC = () => {
    const [data, setData] = useState([])
    return (
        <>
            {data && (
                data.map((e) => (
                    <div className="w-full">
                        <Link to={'/activity/:activityId'}>
                            <img src="" alt="" />
                        </Link>
                    </div>
                )

                )
            )}
            <div className="w-full">
                <Link to={'/activity/:activityId'}>
                    <img src="./event1.png" alt="" />
                </Link>
            </div>
            <div className="w-full">
                <Link to={'/activity/:activityId'}>
                    <img src="./event2.png" alt="" />
                </Link>
            </div>
            <div className="w-full">
                <Link to={'/activity/:activityId'}>
                    <img src="./event3.png" alt="" />
                </Link>
            </div>
        </>
    )
}

export default Activity