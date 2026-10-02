import { useState } from 'react'
function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [studentNumber, setStudentNumber] = useState('')
    const [role, setRole] = useState('')

    
    const handleSubmit = () => {
        console.log(role, email, password, studentNumber)
    }

    return (
        <div>
          <label>
            <input
              type='radio'
              name='role'
              value="teacher"
              checked ={role === 'teacher'}
              onChange={(e) => setRole(e.target.value)}
            />
            Teacher

          </label>
          <label>
            <input
              type='radio'
              name='role'
              value="parent"
              checked ={role === 'parent'}
              onChange={(e) => setRole(e.target.value)}
            />
            Parent
          </label>

          <label>
            <input
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
             <input type='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
             <input type='password' placeholder='Enter the password here' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </>
          )}

          {(role === 'parent'|| role === 'student') && (
            <>
             <input type='text' placeholder='Student Number' value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)}/>
             <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </>
          )}


            <button onClick={handleSubmit}>Log in</button>

        </div>
    )
}

export default Login