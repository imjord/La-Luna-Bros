import React from "react";


const Form = () => {
    return (
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username"></input>
            <label for="title">title</label>
            <input type="text" id="title" name="title"></input>
            <label for="message">message</label>
            <input type="text" id="message" name="message"></input>

        </form>
    )
}
export default Form;