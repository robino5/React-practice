import React, {useState} from "react";

export default function From() {
//    const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

    const [user, setUser] = useState({name: '', email: '', password: ''});
    const {name, email, password} = user;
  
    const handleName = (e) => {
        setUser ({name: e.target.value, email,password});
    }
    const handleEmail = (e) => {
        setUser ({name, email: e.target.value,password});
    }
    const handlePassword = (e) => {
        setUser ({name, email,password: e.target.value});
    }

    const handleInput = (e) => {
        setUser ( {...user, [e.target.name]: e.target.value});
}
    const handleSubmit = (e) => {
       console.log("Form submitted");
       e.preventDefault();
       console.log(user);
    }
    return (<div>
        <h4>Ragistration</h4>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleInput} required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleInput} required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleInput} required />
                <button type='submit'>Ragistration</button>
            </div>
        </form>
    </div>
    );
}