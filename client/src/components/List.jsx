import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
    const [data, setData] = useState([]);
    const [id, setID] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/v1/ReadProduct");
                if (res.data && res.data.data) {
                    console.log(res.data.data);
                    setData(res.data.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, [id]);


    const onDelete = async (id) => {
        let URL = "http://localhost:5000/api/v1/DeleteProduct/" + id;
        await axios.delete(URL);
        setID(id);
    };

    console.log("Data", data);
    return (
        <div className="container">
            <div className="row">
                {data.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item['title']}</h5>
                                <p className="card-text">{item['content']}</p>
                                <p className="card-text">Author: {item['author']}</p>
                                <Link to={"/update/" + item['_id']} className="btn btn-success btn-sm m-1">Edit</Link>
                                <button onClick={() => onDelete(item['_id'])} className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
                    </div>
                ))}
        </div>
        </div >
    );
};

export default List;
