import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import Header from "./Header"
import axios from 'axios';



function Login() {
    const [toggle, setToggle] = useState(false)
    const [users, setUsers] = useState([])


    useEffect(() => {
        if (localStorage.getItem('username')) {
            window.location.href = "/manage"
        }
    }, [])

    function getData(e) {
        console.log(e)
        axios.get(`http://localhost:3000/api/users?username=${e.username}&password=${e.password}`)
            .then((response) => {
                setUsers(response.data)
                console.log(users)
            })
            .catch((error) => {
                console.log(error)
            })


        if (users.Password === e.password) {
            console.log('success')
            console.log(e.KeepSignedIn)
            if (e.KeepSignedIn) {
                localStorage.setItem('username', e.username)
            }
            window.location.href = "/manage"
        }
    }

    return (
        <>
            <div className="w-screen h-screen">
                <Header params="Welcome" />
                <div className="flex flex-col justify-around items-center gap-10">
                    <h1 className="text-2xl b-2 p-6 w-30vw text-center mt-5 rounded-md">Logo</h1>
                    <div className="flex w-60vw b-2 h-60vh justify-center items-center">
                        <div className="relative">
                            <Formik
                                initialValues={{
                                    Employee: '',
                                    username: '',
                                    password: '',
                                    KeepSignedIn: false,
                                }}
                                onSubmit={async (values) => {
                                    await new Promise((r) => setTimeout(r, 500));
                                    getData(values)
                                    alert(JSON.stringify(values, null, 2));
                                }}
                            >
                                <Form className="flex flex-col gap-4">
                                    <label htmlFor="Employee">Employee:</label>
                                    <Field className='p-2 border-1' id="Employee" name="Employee" />

                                    <label htmlFor="username">Username</label>
                                    <Field className='p-2 border-1' id="username" name="username" />

                                    <label htmlFor="email">Password</label>
                                    <Field
                                        className='p-2 border-1'
                                        id="password"
                                        name="password"
                                        placeholder=""
                                        type="Password"
                                    />
                                    <label htmlFor="KeepSignedIn">Keep me signed in</label>
                                    <Field type="checkbox" name="KeepSignedIn" />
                                    <button className="p-2 b-2" type="submit">Login</button>
                                    <button onClick={() => window.location.href = "/"} type="button" className="p-2 b-2">Exit</button>

                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 w-screen justify-center'>
                    <p>Don't Have an account?</p>
                    <a href="/register" className='text-blue-600'>Create One</a>
                </div>
            </div>
        </>
    )
}

export default Login