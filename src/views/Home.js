import ArticleAlternateComponent from 'components/Articles/ArticleAlternateComponent'
import ArticleComponent from 'components/Articles/ArticleComponent'
import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import Predator from '../assets/logo/logo.png'
import imageOne from '../assets/img/education_two.png'
import imageTwo from '../assets/img/education_three.png'
import imageThree from '../assets/img/education_one.png'
import { useHistory } from 'react-router-dom'

const Home = (props) => {

  const history = useHistory()

  return (
    <Row className="mx-0">
      <Col className="px-0" lg={12} xs={12}>
        <div className='header-bg d-none d-lg-flex'></div>
        <div className='header-bg-mobile d-lg-none d-sm-flex'></div>
        <section className='header-content d-flex justify-content-center'>
          <div className='w-50 d-none d-lg-flex align-items-center'>
            <div className="header-hexagon mr-5">
              <img src={Predator} alt="company logo" />
            </div>
            <div>
              <h2>Welcome to the E-high testing platform</h2>
              <h5>Test your might against some of the toughtest exams in the country</h5>
              <Button   onClick={()=>history.push('../subject')}>Get Started</Button>
            </div>
          </div>
          <div className='w-50 d-lg-none d-sm-flex flex-column align-items-center'>
            <div className="header-hexagon d-flex justify-content-center w-100">
              <img src={Predator} alt="company logo" />
            </div>
            <div className="d-flex flex-column justify-content-center w-100">
              <h5 className="text-center">Lorem ipsum dolor sit amet.</h5>
              <Button   onClick={()=>history.push('../subject')}>Get Started</Button>
            </div>
          </div>
        </section>
      </Col>
      <Col lg={12} xs={12}>
        <ArticleComponent cardImage={imageOne} title="Take Quiz" url="/subject"/>
        <hr />
      </Col>
      <Col lg={12} xs={12}>
        <ArticleAlternateComponent cardImage={imageTwo} title="Review Past Questions" url="/subject"/>
        <hr />
      </Col>
      <Col lg={12} xs={12}>
        <ArticleComponent cardImage={imageThree} title="Take Challenge" url="/subject"/>
      </Col>
    </Row>
  )
}

export default Home