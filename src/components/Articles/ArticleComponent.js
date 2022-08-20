import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'


const ArticleComponent = ({cardImage,title,url}) => {

    const history = useHistory();

    return (
        <article>
            <div className="d-none d-lg-flex w-75 align-items-center mb-5">
                <img src={cardImage} alt="cardimage" />
                <div className="d-flex flex-column mx-4">
                    <h3>{title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nulla omnis culpa laudantium dignissimos deserunt, vero sint. Modi, magni laboriosam.</p>
                    <Button className="w-25"  onClick={()=>history.push(url)}>Let's Begin</Button>
                </div>
            </div>
            <div className="d-lg-none d-sm-flex flex-column w-75 align-items-center mb-5">
                <img src={cardImage} alt="cardimage" />
                <div className="d-flex flex-column my-3">
                    <h3>{title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae odit autem, quidem ipsa perferendis esse vitae laboriosam voluptas eos.</p>
                    <Button className="w-75"  onClick={()=>history.push(url)}>Let's Begin</Button>
                </div>
            </div>
        </article>
    )
}

export default ArticleComponent