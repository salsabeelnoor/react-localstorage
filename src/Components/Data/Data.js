import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div>
            <h2>Welcome to data store</h2>
            {
                data.map(data => <SingleData
                key={data._id}
                data={data}
                ></SingleData>)
            }
        </div>
    );
};

export default Data;