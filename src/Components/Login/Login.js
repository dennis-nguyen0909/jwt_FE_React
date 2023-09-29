import './login.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const handleCreateAccount = () => {
        navigate('/register');
    }
    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row px-3 px-sm-0'>
                    <div className='content-left col-12 col-sm-7 d-sm-block d-none '>
                        <div className='brand'>
                            Facebook
                        </div>
                        <div className='detail'>
                            Learning everything..............
                        </div>
                    </div>
                    <div className='content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3 '>
                        <div className='brand d-sm-none'>Facebook</div>
                        <input type='text' className='form-control' placeholder='Email and phone number....'></input>
                        <input type='password' className='form-control' placeholder='Password....'></input>
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'>
                            <a className='forgot-password'>Forgot your password?</a>
                        </span>
                        <hr></hr>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={(e) => handleCreateAccount()}>Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;