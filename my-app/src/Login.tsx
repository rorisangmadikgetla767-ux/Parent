import { useState } from 'react'
function Login() {
    const [studentId, setStudentId] = useState('')

    const handleSubmit = () => {
        console.log(studentId)
    }

    return (
        <div>
            <input
              type="text"
              placeholder="Enter student Id"
              value={studentId}
              onChange={(e) => setStudentId}
            />
            <button onClick={handleSubmit}>Log in</button>

        </div>
    )
}

export default Login