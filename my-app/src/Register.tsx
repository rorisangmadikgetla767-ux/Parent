import {useState} from 'react';
import logo from './assets/parent-logo.jpeg'

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        // Check 1: no field may be empty
        if (!firstName || !lastName || !role || !email || !password || !confirmPassword) {
            alert('Please fill in every field ');
            return;
        }

        // Check 2: the two passwords must match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Sending what the backend / users route expects
        // It's field name have underscores e.g. first_name, so we map them her
        // confirm password is not sent.

        const response = await fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                role: role,
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            alert('Registration failed')
            return;

        }

        alert('User registered')

        // Clear every box
        setFirstName('');
        setLastName('');
        setRole('')
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        
        <div className='register-card'>

            <img className='login-logo' src={logo} alt='Parent: connecting schools and families'/>
             <input className='login-input' type='text' placeholder='Name' value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />



             <input className='login-input' type='text' placeholder='Surname' value={lastName}
                onChange={(e) => setLastName(e.target.value)} />

            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value=''>Select role</option>
                <option value='teacher'>Teacher</option>
                <option value='parent'>Parent</option>

            </select>

              <input className='login-input' type='email' placeholder='Email address' value={email}
                onChange={(e) => setEmail(e.target.value)}/>

              <input className='login-input' type='password' placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)}/>

              <input login-input type='password' placeholder='Confirm password' value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>


               <button className='register-button' onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default Register
   