import React,{useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { useRef } from 'react';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState('');
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const userLogin = {
      email: enteredEmail,
      password: enteredPass,
     
    };

  
    console.log(userLogin);
  };
  
  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form 
              
              
              className='form mb-5' onSubmit={submitHandler}>
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
