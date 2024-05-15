import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Use createRoot to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

let tbody = document.getElementById("tbody")



// fetch function
fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tbody.append(td_fun(data));
        })
    })


