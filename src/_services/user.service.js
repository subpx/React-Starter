import qs from "qs";
import apiConstants from "../_constants/api.constants";

function login(username, password) {
  const config = apiConstants;

  const data = {
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,

    grant_type: "password",
    username,
    password
  };

  const requestOptions = {
    credentials: "include",
    method: "post",
    mode: "cors",
    headers: {
      "X-api-version": "7"
    },
    body: qs.stringify(data)
  };

  return fetch(config.API_URL, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(user => {
      if (user && user.access_token) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

export default {
  login,
  logout
};
