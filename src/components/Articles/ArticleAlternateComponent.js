import React from 'react'
import { Button } from 'reactstrap'

const ArticleAlternateComponent = () => {
    return (
        <article>
            <div className="d-none d-lg-flex w-75 align-items-center">
                <div className="d-flex flex-column mx-4">
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quia incidunt ex. A dolore laudantium soluta ipsa voluptatem recusandae quod?</p>
                    <Button className="w-25">Let's Begin</Button>
                </div>
                <img src="https://picsum.photos/300/200" alt="cardimage" />
            </div>
            <div className="d-lg-none d-sm-flex flex-column w-75 align-items-center">
                <img src="https://picsum.photos/300/200" alt="cardimage" />
                <div className="d-flex flex-column my-3">
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis omnis, voluptatem eius nostrum asperiores voluptates veniam quod porro tempora.</p>
                    <Button className="w-75">Let's Begin</Button>
                </div>
            </div>
        </article>
    )
}

export default ArticleAlternateComponent