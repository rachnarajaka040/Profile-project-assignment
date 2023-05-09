import React from 'react';
import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('myFormData', JSON.stringify(formData));
        navigate('/profile');
    };

    return (
        <div class="main-bg" >
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="card shadow">
                            <div class="card-title text-center border-bottom">
                                <h2 class="p-3">Signup to Your Popx account</h2>
                            </div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-4">
                                        <label for="username" class="form-label">Full name</label>
                                        <input type="text" class="form-control" onChange={handleChange} id="username" name="username" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="username" class="form-label">Phone number</label>
                                        <input type="number" class="form-control" onChange={handleChange} name="number" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="username" class="form-label">Email</label>
                                        <input type="email" class="form-control" onChange={handleChange} name="email" id="email" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" onChange={handleChange} id="password" name="password" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="company" class="form-label">Company name</label>
                                        <input type="text" class="form-control" onChange={handleChange} id="cname" name="cname" />
                                    </div>
                                    <label for="company" class="form-label">Are you an Agency?</label> <br />
                                    <input type="radio" name="botao" class="btn1" value="radio1" />
                                    <input type="radio" name="botao" class="btn1" value="radio2" />

                                    <div class="d-grid gap-2 col- mx-auto" style={{ width: "18rem" }}>
                                        <button class="btn btn-primary" type="submit">create account</button>

                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
