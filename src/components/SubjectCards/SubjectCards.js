import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, CardText, CardTitle } from 'reactstrap'

const SubjectCards = ({ title,description,url }) => {
    const history = useHistory();
    return (
        <Card
            body
            className="my-5 subject-card">
            <CardTitle tag="h2">
                {title}
            </CardTitle>
            <CardText>
                {description}
            </CardText>
            <Button color="primary my-3" onClick={()=>history.push(url)}>
                Begin
            </Button>
        </Card>
    )
}

export default SubjectCards