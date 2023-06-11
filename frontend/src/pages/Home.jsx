import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css'
import { Link } from 'react-router-dom'

import '../styles/home.css'
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'
import products from '../assets/data/products.js'
import ProductCard from '../components/UI/product-card/ProductCard.jsx'
import whyImg from '../assets/images/location.png'
import networkImg from '../assets/images/network.png'
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx'

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc:
      'MEDI-CINE is one of them. With its customer-driven approach, it is the only affordable package delivery company in the country!.',
  },
  {
    title: 'Check-up',
    imgUrl: featureImg02,
    desc:
      'Determining your medical history, your family medical history, the doctor should be able to identify risk areas specific to you?',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc:
      "Don't waste time sitting in traffic or running errands across town. MEDI-CINE can deliver just about anything, so there's no need to pick it up yourself.!",
  },
]
const Home = () => {
  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)
  const [Adults, setAdults] = useState([])

  useEffect(() => {
    const filteredAdults = products.filter((item) => item.category === 'Adults')
    const Adults = filteredAdults
    setAdults(Adults)
  }, [])
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products)
    }
    if (category === 'Children(newborn-5)') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Children(newborn-5)',
      )
      setAllProducts(filteredProducts)
    }
    if (category === 'Adults') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Adults',
      )
      setAllProducts(filteredProducts)
    }
    if (category === 'Others') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Others',
      )
      setAllProducts(filteredProducts)
    }
  }, [category])
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">
                  Fast and easy medicine delivery service
                </h5>
                <h1 className="mb-4 hero__title">
                  <span>Sick?</span> just wait <br /> Medicine at
                  <span> your door!</span>
                </h1>

                <p>
                  With medication delivery, you write the prescription, fill the
                  prescription in your office if you are using in-office
                  dispensing, and then give the filled order to your office
                  delivery person
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/meds">Order now </Link> 
                  </button>

                  <button className="all__meds-btn">
                    <Link to="/meds">See all Medicine</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    Free Delivery
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title"> Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Ordering of Medicine from the comfort of their homes
                <br />
                No need to leave the house
                <br />
                Wide Products of Medicine
              </p>
              <p className="mb-1 mt-4 feature__text">
                Access to details on Medicine
                <br />
                Discounts and special offers
                <br />
                Ability to track orders
              </p>
            </Col>

            {featureData.map((item, index) => {
              return (
                <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                  <div className="feature__item text-center px-5 py-3">
                    <img
                      className="w-25 mb-3"
                      src={item.imgUrl}
                      alt="feature-img"
                    />
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular medicine</h2>
            </Col>
            <Col lg="12">
              <div className="med__category d-flex align-items-center justify-content-center gap-5">
                <button
                  onClick={() => setCategory('ALL')}
                  className={`all__btn Rs.{
                    category === 'ALL' ? 'medBtnActive' : ''
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory('Children(newborn-5)')}
                  className={`d-flex align-items-center gap-2 Rs.{
                    category === 'Children(newborn-5)' ? 'medBtnActive' : ''
                  }`}
                >
                  
                  Children(newborn-5)
                </button>
                <button
                  onClick={() => setCategory('Adults')}
                  className={`d-flex align-items-center gap-2 Rs.{
                    category === 'Adults' ? 'medBtnActive' : ''
                  }`}
                >
                  
                  Adults
                </button>
                <button
                  onClick={() => setCategory('Others')}
                  className={`d-flex align-items-center gap-2 Rs.{
                    category === 'Others' ? 'medBtnActive' : ''
                  }`}
                >
                  
                Others
                </button>
              </div>
            </Col>

            {allProducts.map((item) => {
              return (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-Medicine" className="w-100"></img>
            </Col>
            <Col lg="6" md="6">
              <div className="why__Medicine">
                <h2 className="Medicine-title mb-4">
                  Why <span>Medicine?</span>
                </h2>
                <p className="Medicine-desc">
                   I am on a mission to make quality healthcare effortless, reliable and affordable. We are digital healthcare innovators, dedicated towards improving your access to healthcare by blending technology and innovation to solve problems associated with modern day pharmacies. We guarantee 100% authenticity of medicines, an efficient customer support system for your convenience. We want to enable you to live your best life. Live a healthy life, every day.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Medicines
                    </p>
                    <p className="choose__us-desc">
                     In that era,diseases is increasing day by day,to overcome or kill diseases medicine is neccessary and daily need.  
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Quality support
                    </p>
                    <p className="choose__us-desc">
                      Medicine quality is 100% real.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Order from any
                      location
                    </p>
                    <p className="choose__us-desc">
                      Medicine is easily order by anywhere from Pakistan, and medicine is delivered to your location and in time.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Trending Product</h2>
            </Col>

            {Adults.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-40">
                  What our <span>customers </span>are saying?
                </h2>
                <p className="testimonial__desc">
                  
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
