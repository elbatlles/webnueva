import Router from 'next/router';

import axios from 'axios';

const API_URL = `https://backendtienda.herokuapp.com`;
// const API_URL = 'http://localhost:1337';
console.log(API_URL);
export const login = (identifier: any, password: any) =>
  // prevent function from being ran on the server

  new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/`, { identifier, password })
      .then((res) => {
        // set token response from Strapi for server validation
        // Cookie.set('token', res.data.jwt);
        console.log(res.data.jwt);
        localStorage.setItem(`token`, res.data.jwt);
        // resolve the promise to set loading to false in SignUp form
        resolve(res);
        // redirect back to home page for restaurance selection
        Router.push(`/`);
      })
      .catch((error) => {
        // reject the promise and pass the error object back to the form
        reject(error);
      });
  });
