import { useState } from "react"

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [studentNumber, setStudentNumber] = useState("")

    const handleSubmit = () => {
      console.log(email, password, studentNumber)

    }

    return (
        <div>      
            <h1>Welcome to Parent. Wire up you account!</h1>
            <input type="email" 
              placeholder="Enter your email address "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            
            />
            <input
              type="text"
              placeholder="Enter student number"
              value={studentNumber}
               onChange={(e) => setStudentNumber(e.target.value)}
               />
             
            <button onClick={handleSubmit}>SignUp</button>
        </div>
    )
}

export default SignUp