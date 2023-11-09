import React, { useState } from 'react'
import Header from './Header'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'

function Register() {
    const [toggle, setToggle] = useState(false)
    const [users, setUsers] = useState([])


    function createData(e) {
        axios.post('http://localhost:3000/create', e)
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                alert('error')
                console.log(error)
            })
    }

    return (
        <div>
            <Header params="Create account" />
            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='w-90vw h-80vh border-1'>
                    <Formik initialValues={{ username: '', fullname: '', password: '', confirmPassword: '', birthdate: '', gender: "0", numberoffamily: 0, }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            createData(values)
                            alert(JSON.stringify(values, null, 2));
                        }}>
                        <Form className='flex flex-col h-70% border-1 justify-center'>
                            <div className='flex'>
                                <div className='flex flex-col gap-10 w-50% justify-center items-center'>
                                    <div>
                                        <label htmlFor="userName">Username</label>
                                        <Field className='p-2 b-1 ml-4' id="userName" name="userName"></Field>
                                    </div>
                                    <div>
                                        <label htmlFor="fullName">Full Name</label>
                                        <Field className='p-2 b-1 ml-4' id="fullName" name="fullName"></Field>
                                    </div>
                                    <div>
                                        <label htmlFor="birthDate">Birth Date</label>
                                        <Field className='p-2 b-1 ml-4' id="birthDate" name="birthDate" type="date"></Field>
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <Field className='p-2 b-1 ml-4' id="password" type="Password" name="password"></Field>
                                    </div>
                                </div>
                                <div className='flex gap-10 flex-col w-50% justify-center items-center'>
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <label className='mr-5'>
                                            <Field className="mr-5" type="radio" name="gender" value="0" />
                                            Male
                                        </label>
                                        <label className='mr-5'>
                                            <Field className='mr-5' type="radio" name="gender" value="1" />
                                            Female
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="numberOfFamily">Number of Family Members:</label>
                                        <Field className='p-2 b-1 ml-4' id="numberOfFamily" name="numberOfFamily" type="number"></Field>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-around p-4'>
                                <div>
                                    <input name='agreement' type="checkbox" onClick={() => setToggle(!toggle)} />
                                    <label htmlFor='agreement' className='ml-4'>I agree to the Terms and Conditions</label>
                                </div>
                                <a href="/TOS" className='fw-400 underline-solid text-blue'>View Terms and Conditions</a>
                            </div>
                            <div className='self-end'>
                                <button className='text-center b-1 mr-10 p-5 disabled:bg-gray' type='submit' disabled={!toggle}>Submit</button>
                                <a href="/" className='b-1 p-5 mr-4'>Return to Login</a>
                            </div>
                        </Form>

                    </Formik>

                </div>

            </div>
        </div>
    )
}

export default Register