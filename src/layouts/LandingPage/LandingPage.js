import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import AppNavBar from 'components/AppNavbar/AppNavbar'
import CarouselSlider from 'components/CarouselSlider/CarouselSlider'
import Footer from 'components/AppFooter/AppFooter'
import { getExams } from '../../services/StudentService/ExaminationService'

function LandingPage(props) {

    getExams().then(value => {
        console.log('Response', value)
        console.log('Response Data', value.data)
    });


    return (
        <dev>
            <AppNavBar/>
            <Container fluid>
                <Col lg={12} xs={12}>
                    <Row>
                        <CarouselSlider className="mt-5" />
                    </Row>
                </Col>
            </Container>
            <Footer/>
        </dev>
    )
}

export default LandingPage