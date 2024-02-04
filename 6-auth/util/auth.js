import axios from "axios";

const API_KEY = "AIzaSyA_YFlcYuMZgS9I-OVD_DEbRU_2g1cGt9s";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
