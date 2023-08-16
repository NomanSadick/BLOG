import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateUpdateForm = () => {
    let { id } = useParams();

    let [FormValue, SetFormValue] = useState();


    let navigate = useNavigate();

    // let [isProduct, setIsProduct] = useState(false);
    
    useEffect(()=>{

        (async ()=>{
            let res = await axios.post(`http://localhost:5000/api/v1/ReadProductById/${id}`);
           SetFormValue(res?.data?.data);
            // setIsProduct(true);
            console.log(res?.data?.data);
        })()

    },[id])
    


    const InputOnChange = (property, value) => {
        SetFormValue({ ...FormValue, [property]:value });
    }

    const onSubmit = async () => {
        let URL = "http://localhost:5000/api/v1/CreateProduct"
        if (id) {
            URL = `http://localhost:5000/api/v1/UpdateProduct/${id}`;
        }
        let res = await axios.post(URL, FormValue);
        if (res.status === 200) {
            alert("Save Changes");
            navigate('/');
        }
    }

    console.log("FormValue:", FormValue);
    // console.log(FormValue?.ProductName);

    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-md-12 p-2">
                        <label>Title</label>
                        <input className="form-control" value={FormValue?.title || ''} onChange={(e) => { InputOnChange('title', e.target.value) }} type="text" placeholder="" />
                    </div>
                    <div className="col-md-12">
                        <label>Author</label>
                        <input className="form-control" value={FormValue?.author || ''} onChange={(e) => { InputOnChange('author', e.target.value) }} type="text" placeholder="" />
                    </div>

                    <div className="col-md-12">
                        <label>Content</label>
                        <textarea className="form-control" value={FormValue?.content || ''} onChange={(e) => { InputOnChange('content', e.target.value) }} rows="5"></textarea>
                    </div>

                </div>
                <div className="row">
                    <div className="col-3">
                        <button onClick={onSubmit} className="btn my-2  w-100 btn-danger">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUpdateForm;