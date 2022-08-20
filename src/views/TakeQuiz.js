import SubjectCards from 'components/SubjectCards/SubjectCards'
import React from 'react'
import { Col, Container, Row, Card, CardTitle, CardText } from 'reactstrap'

const TakeQuiz = () => {
    return (
        <article>
            <Container>
                <Row lg={12}>
                    <Card
                        body
                        className="my-2">
                        <CardTitle tag="h5">
                            Special Title Treatment
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                        </CardText>
                    </Card>
                </Row>
                <Row>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                    <Col lg={4} sm={6} md={6}><SubjectCards /></Col>
                </Row>
            </Container>
        </article>
    )
}

export default TakeQuiz