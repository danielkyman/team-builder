import React from 'react';
import reactDOM from 'react-dom';
import { useState } from 'react';


function Form(props) {

    const [user, setUser] = useState({ name: "", password: "" });

    const changeHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    };


    const handleSubmit = event => {
        event.preventDefault();
        props.addUser({ ...props.users, [event.target.name]: event.target.value });
        setUser({ username: "", password: "" });
    };

    return (
        <div>
            {console.log(user)}
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="nameInput">Username</label>
                <input
                    maxLength="15"
                    placeholder="Name"
                    id="nameInput"
                    name="name"
                    value={user.username}
                    type="text"
                    onChange={event => (changeHandler(event))}
                /><br />

                <label htmlFor="passwordInput">Password</label>
                <input
                    maxLength="15"
                    placeholder="Password"
                    id="passwordInput"
                    name="password"
                    value={user.password}
                    type="text"
                    onChange={event => (changeHandler(event))}
                /><br />

                <label htmlFor="favSelect">Favorite?</label>
                <select id='favSelect' name='fav'>
                    <option value='1'>Movies</option>
                    <option value='2'>Books</option>
                    <option value='3'>Music</option>
                </select><br />

                <label htmlFor="isDevInput">Are you a Web Developer?</label>
                <input type="checkbox" id='isDevInput' name='isDev' value='yes' />
                <br />

                <input type="submit" />

            </form>
        </div>
    );
}


export default Form;