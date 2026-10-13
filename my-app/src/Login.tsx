import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
    
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light')
    const [password, setPassword] = useState('')
    // Below holds the teacher's typed email
    const [email, setEmail] = useState('')
    // Below is used by the parent and student when logging in
    const [studentNumber, setStudentNumber] = useState('')
    // This is for the radio section : )
    const [role, setRole] = useState('')

    // The code below defines the function that runs when the Log In Button is clicked
    
    const handleSubmit = async () => {
      const endpoint = role === 'teacher' ? '/login':'/login/parent'

      const body = role === 'teacher'
        ? {email: email, password: password}
        // Below indicates if the role selected is !teacher then display: student number and password
        : {student_number: studentNumber, password: password}

      // Send the POST request to my FASTAPI backend.
      //JSON.stringify converts the JS object into a JSON string.

      const response = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      // This code below only happens if the response code is none other then the 200 status codes
      if (!response.ok) {
        console.log('Login has failed..')
        alert('Something went wrong..')
        return
      }

      // Json parsing below
      const data = await response.json()
      // This below is the access code the backend returns..
      console.log(data.access_token)

      // the code below persists data across page navigations..
      localStorage.setItem('access_token', data.access_token)

    // This code below is a simple if / else bloc if role = teacher -> return Dashboard
    // else navigate to the students dashboard
      if (role === 'teacher') {
        navigate('/dashboard')
      } else {
        navigate('/students')
      }
         
    }
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark':'light')
    }

    return (
        <div className='login-page' data-theme={theme}>
          <button className='toggleButton' onClick={toggleTheme}>Theme</button>
          
          <div className='login-card'>
            

            <label>
            <input className='role-radio'
              type='radio'
              name='role'
              value="teacher"
              checked ={role === 'teacher'}
              onChange={(e) => setRole(e.target.value)}
            />
            Teacher

          </label>
          <label>
            <input className='role-radio'
              type='radio'
              name='role'
              value="parent"
              checked ={role === 'parent'}
              onChange={(e) => setRole(e.target.value)}
            />
            Parent
          </label>

          <label>
            <input className='role-radio'
              type='radio'
              name='role'
              value="student"
              checked ={role === 'student'}
              onChange={(e) => setRole(e.target.value)}
            />
            Student
          </label>

          {role === 'teacher' && (
            <>
             <input className='login-input' type='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
             <input className='login-input' type='password' placeholder='Enter the password here' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </>
          )}

          {(role === 'parent'|| role === 'student') && (
            <>
             <input className='login-input' type='text' placeholder='Student Number' value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)}/>
             <input className='login-input' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </>
          )}


            <button onClick={handleSubmit} className='login-button'>Log in</button>


          </div>
          
        </div>
    )
}
// This code below makes this component importable elsewhere inside the project
// e.g. import Login from './Login' in App.tsx
export default Login