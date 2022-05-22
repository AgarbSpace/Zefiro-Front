import axios from "axios"

const baseAPI = axios.create({baseURL: "http://localhost:5000"});

interface UserSignUpData {
    name: string
    cpf: string
    email: string
    password: string
}

interface UserSignInData {
    email: string
    password: string
}

interface CreditCardData {
    cardNumber: string
    cardHolderName: string
    expiration: string
    cvv: string
}

function getConfig(token: string){
    return {
        headers:{
            Authorization: `Bearer ${token}`
        }
    };
}

async function signUp(signUpData: UserSignUpData){
    await baseAPI.post("/signUp", signUpData);
}

async function signIn(signInData: UserSignInData){
    return baseAPI.post<{token: string}>("/", signInData);
}

async function getAllClinics(token: string){
    const config = getConfig(token);
    return baseAPI.get("/app/main", config);
}

async function getClinic(token: string, id: number){
    const config = getConfig(token);
    return baseAPI.get(`/app/${id}`, config);
}

async function payment(token: string, creditCard: CreditCardData){
    const config = getConfig(token);
    await baseAPI.post("/app/payment", creditCard, config);
}

async function sendEmail(token: string, email: string){
    const config = getConfig(token);

}

const api = {
    signUp,
    signIn,
    getAllClinics,
    getClinic,
    payment,
    sendEmail
}

export default api;