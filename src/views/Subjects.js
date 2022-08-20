import SubjectCards from 'components/SubjectCards/SubjectCards'
import React from 'react'
import { Col, Container, Row, Card, CardTitle, CardText } from 'reactstrap'

const Subject = () => {

    const subjects = [
        {
            id: 0,
            subject: "English",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, asperiores."
        },
        {
            id: 1,
            subject: "Maths",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, asperiores."
        },
        {
            id: 2,
            subject: "Social Studies",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, asperiores."
        },
        {
            id: 3,
            subject: "Integrated Science",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, asperiores."
        },
        {
            id: 4,
            subject: "Elective Maths",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, asperiores."
        },
        {
            id: 5,
            subject: "Physics",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, asperiores."
        },
        {
            id: 6,
            subject: "Chemistry",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, asperiores."
        },
        {
            id: 7,
            subject: "Biology",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, asperiores."
        }
    ]

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
                    {
                        subjects.map((subject) => {
                            return (
                                <Col lg={4} sm={6} md={6} key={subject.id}>
                                    <SubjectCards key={subject.id}
                                        title={subject.subject}
                                        description={subject.description}
                                        url={"/quiz/" + subject.subject.toLocaleLowerCase()} />
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </article>
    )
}

export default Subject