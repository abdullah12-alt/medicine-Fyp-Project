import React, { useRef, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const registerNameRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const userRegister = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };

    fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userRegister),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data
      })
      .catch((error) => {
        console.error('Error:', error); // Handle any errors
      });
  };

  return (
    <Helmet title='Register'>
      <CommonSection title='Register' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input
                    type='text'
                    placeholder='First Name'
                    ref={registerNameRef}
                    onChange={(e) => setEnteredFirstName(e.target.value)}
                  />
                </div>
                <div className='form__group'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    onChange={(e) => setEnteredLastName(e.target.value)}
                  />
                </div>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    ref={registerEmailRef}
                    onChange={(e) => setEnteredEmail(e.target.value)}
                  />
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                    ref={registerPasswordRef}
                    onChange={(e) => setEnteredPassword(e.target.value)}
                  />
                </div>
                <button type='submit' className='addToCart__btn'>
                  Sign up
                </button>
              </form>
              <Link to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
