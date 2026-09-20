

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
    fullName: "",
    email: "",
    password: ""
};
const SignUpSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Full name is too short")
      .required("Full name is required"),
  
    email: Yup.string()
      .email("Email is required")
      .required("Email is required"),
  
    password: Yup.string()
      .min(4, "Password is too short should be 4 chars minimum")
      .required("Password is required")
  });
  

export default function   Signup() {
    

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <div className="  bg-[#122740] w-full  h-screen bg-cover flex justify-center items-center flex-col   text-[#DCEAF7]   ">
                        <h1 className=" font-black text-3xl text-center " > Sign un to continue </h1>
                        <Form className=" flexbox  justify-center flex-col text-[#DCEAF7] items-center border-4 border-opacity-15 border-solid border-[#4A74A7] w-96 h-80 bg-[#ffffff51]  rounded-xl  px-7 pt-14" >
                            <div className="form-row form-row flex flex-col font-bold rounded-2xl ">
                                <label htmlFor="fullname">Full name</label>
                                <Field
                                    type="name"
                                    name="fullName"
                                    id="fullName"
                                    className={errors.fullName && touched.fullName ? "input-error bg-[#9ebad5] text-[#414243]" : null}
                                />
                                <ErrorMessage name="fullname" component="span" className="error" />

                            </div>
                      
                      
                            <div className="form-row form-row flex flex-col font-bold rounded-2xl ">
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={errors.email && touched.email ?
                                        "input-error bg-[#9ebad5] text-[#414243]" : null}
                                />
                                <ErrorMessage name="email" component="span" className="error" />
                            </div>
  
                            <div className="form-row form-row flex flex-col font-bold rounded-2xl ">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={errors.password && touched.password ?
                                        "input-error bg-[#9ebad5] text-[#414243]" : null}
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className="error"
                                />
                            </div>
                            <div className=" flex text-center border-2 border-solid border-[#9ebad5] w-24 justify-center mx-auto mt-4 bg-[#1062ae] ">
                            <button
                                type="submit"
                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                disabled={!(dirty && isValid)}
                            >
                                Sign up
                                </button>
                            </div>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
  };