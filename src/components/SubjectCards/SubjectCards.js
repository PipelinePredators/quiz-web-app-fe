import React from 'react'
import { Button, Card, CardText, CardTitle } from 'reactstrap'

const SubjectCards = () => {
    return (
        <Card
            body
            className="my-5">
            <CardTitle tag="h5">
                Special Title Treatment
            </CardTitle>
            <CardText>
                With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button color="primary">
                Begin
            </Button>
        </Card>
    )
}

export default SubjectCards