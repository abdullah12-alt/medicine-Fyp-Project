import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { useRef } from 'react';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Added errorMessage state
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const userLogin = {
      email: enteredEmail,
      password: enteredPass,
    };

    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data
        if (data.message === 'Login successful') {
          navigate('/home');
        } else if (data.message === 'Invalid email or password') {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error); // Handle any errors
      });
  };

  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={submitHandler}>
                {errorMessage && <div className='error-message'>{errorMessage}</div>} {/* Display error message if present */}
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    ref={loginNameRef}
                    onChange={(e) => setEnteredEmail(e.target.value)}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                    ref={loginPasswordRef}
                    onChange={(e) => setEnteredPass(e.target.value)}
                  ></input>
                </div>
                <button type='submit' className='addToCart__btn'>
                  Login
                </button>
              </form>
              <Link to='/register'>First time here? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
