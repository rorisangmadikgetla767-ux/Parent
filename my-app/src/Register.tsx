import { useState } from "react";

type RegisterForm = {
    first_name: string;
    last_name: string;
    role: string;
    email: string;
    password: string;
    confirmPassword: string;


}

function Register() {
    const [form, setForm] = useState<RegisterForm>({
        first_name: '',
        last_name: '',
        role: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    return <div>Register</div>

}
export default Register