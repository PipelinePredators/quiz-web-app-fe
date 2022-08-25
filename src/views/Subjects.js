import SubjectCards from 'components/SubjectCards/SubjectCards'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSubjectsState } from 'Redux/SubjectSlice'
import { Col, Container, Row, Card, CardTitle, CardText } from 'reactstrap'
import { getSubjects } from '../services/QuizService'

const Subject = () => {


    /* A state variable. */
    const subjects = useSelector((state) => state.subject.value);

   /* A hook that is used to dispatch an action to the store. */
    const dispatch = useDispatch();

    /* A hook that is called when the component is mounted. */
    useEffect(() => {
        getSubjects().then((value) => {
            dispatch(setSubjectsState(value.data));
        })
    }, [subjects.id, subjects.description, subjects.name, dispatch])

    return (
        <article>
            <Container>
                <Row lg={12}>
                    <Card
                        body
                        className="my-2">
                        <CardTitle tag="q">
                            Knowledge becomes power only when we put it into use.
                        </CardTitle>
                        <CardText>
                            Listed below is a list of various subjects taught in your academic curriculum. Select anyone of your choice and challenge yourself.
                        </CardText>
                    </Card>
                </Row>
                <Row>
                    {
                        subjects.map((subject) => {
                            return (
                                <Col lg={4} sm={6} md={6} key={subject.id}>
                                    <SubjectCards key={subject.id}
                                        title={subject.name}
                                        description={subject.description}
                                        url={"/quiz/" + subject.name.toLocaleLowerCase()} />
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