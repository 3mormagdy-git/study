import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import react, { useState } from 'react'


   const initialValues = {
        email: "",
        password: ""
    };
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required";
        }
        else if (!regex.test(values.email)) {
            errors.email = "invalid Email";
        }
        if (!values.password) {
            errors.password = "password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password too short";
        }
        return errors;


    };
    const submitForm = (values) => {
        console.log(values);
    };




export default function Signin() {
    const [email, setEmail] = useState('');
    const navegate = useNavigate();
  
    const auth = (e) => {
        e.preventDefault();
        if (email.trim() !== '') { 
            localStorage.setItem('userToken', email);
            localStorage.setItem('isSign in', 'true');
            navegate('/');
        }
        else{ alert(' please enter your email  ')}
}





    return (
        <Formik initialValues={initialValues}
            validate={validate}
            onSubmit={submitForm}
            
        >
            {(formik) => {
                const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty
                } = formik;
                return (

                    <div onSubmit={auth} className="  bg-[#122740] w-full  h-screen bg-cover flex justify-center items-center flex-col   text-[#DCEAF7]   ">
                        <h1 className=" font-black text-3xl text-center " > Sign un to continue </h1>
                        <form onChange={(e) => setEmail(e.target.value)} onSubmit={handleSubmit} className=" flexbox  justify-center flex-col text-[#DCEAF7] items-center border-4 border-opacity-15 border-solid border-[#4A74A7] w-96 h-72 bg-[#ffffff51]  rounded-xl  px-7 pt-14 "  >
                            <div className="form-row flex flex-col font-bold rounded-2xl  " >
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" values={values.email} value={email}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setEmail(e.target.value);
                                    }} onBlur={handleBlur}
                                    className={errors.email && touched.email ? "input-error  bg-[#9ebad5] text-[#414243]" : null}
                                />
                                {errors.email && touched.email &&
                                    (
                                        <span className="error" >
                                            {errors.email}</span>
                                    
                                    )}
                            </div>
                            <div className="form-row  flex flex-col font-bold rounded-2xl   "  >
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password ?
                                        "input-error bg-[#9ebad5] text-[#414243]  " : null}
                                    
                                />
                                {errors.password && touched.password && (
                                    <span className="error">
                                        {
                                            errors.password
                                        }
                                    </span>
                                )}
                            </div>
                            <div className=" flex text-center border-2 border-solid border-[#9ebad5] w-24 justify-center mx-auto mt-4 bg-[#1062ae] ">
                                <button type="submit"
                                    className={dirty && isValid ? ""
                                        : "disabled-btn"}
                                    disabled={!(dirty && isValid)} onClick={ auth} > Sign in
                                </button>
                            </div>
                            <div>
                                <p>If you don't have Account go to <Link to="/Signup" className=" underline decoration-[#9ebad5] text-[#8ac7ff]  " >Sign up</Link> </p>
                            </div>
                        </form>
                    </div>

                );

            }}
        </Formik>


       
    
    );



};