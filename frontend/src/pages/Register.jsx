import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';

const Register = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState('');

  const registerNameRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const userRegister = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPass,
    
     
    };

  
    console.log(userRegister);
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
                    onChange={(e) => setEnteredName(e.target.value)}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    ref={registerNameRef}
                    onChange={(e) => setEnteredName(e.target.value)}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    ref={registerEmailRef}
                    onChange={(e) => setEnteredEmail(e.target.value)}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                    ref={registerPasswordRef}
                    onChange={(e) => setEnteredPass(e.target.value)}
                  ></input>
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
