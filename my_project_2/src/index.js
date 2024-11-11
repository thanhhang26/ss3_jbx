import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const form =
<div className='container align-items-center text-center mt-5'>
    <div className='form-sign-in'>
        <img className="mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
        <h3 className="mt-2">Please sign in</h3>  
        <div className="form-floating">
            <input type="email" id="floating-email" className="form-control-lg border border-danger border-bottom-0 border-1 rounded-0 w-25 mt-3 fs-6" placeholder="Email address"></input> {/* w-25: width có độ dài 25*/}
        </div>
        <div className="form-floating">
            <input type="password" id="floating-email" className="form-control-lg border border-danger  border-1 rounded-0 w-25 fs-6" placeholder="Password"></input>
        </div>
        <div className="check-box mt-3">
            <input type="checkbox" className="form-check-input me-2" />{/* me-2: căn lề về bên phải */}
            <label className="fw-normal">Remember me</label>
        </div>
        <button className="btn btn-primary mt-3 w-25 rounded-1">Sign in</button>
    </div>
    <p className="mt-4 text-muted">© 2017–2021</p>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(form);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
