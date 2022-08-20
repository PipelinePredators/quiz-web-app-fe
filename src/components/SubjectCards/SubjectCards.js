import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, CardText, CardTitle } from 'reactstrap'

const SubjectCards = ({ title,description,url }) => {
    const history = useHistory();
    return (
        <Card
            body
            className="my-5">
            <CardTitle tag="h5">
                {title}
            </CardTitle>
            <CardText>
                {description}
            </CardText>
            <Button color="primary" onClick={()=>history.push(url)}>
                Begin
            </Button>
        </Card>
    )
}

export default SubjectCards