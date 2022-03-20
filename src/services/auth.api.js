import axios from "axios";

export async function login(email, password){
    const response = await axios.post(
        'http://localhost:8080/api/login',
        {email: email, password:password}
    );

    return response.data;
}