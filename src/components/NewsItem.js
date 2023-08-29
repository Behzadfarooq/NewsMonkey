import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

const NewsItem = (props)=>{
    let {title,description, imageUrl, url, author, date, source} = props;
    return (
      <div className='my-3'>
    <Card>
      <Card.Img variant="top" src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg":imageUrl}/>
      <Card.Body>
        <Card.Title>{title}  <Badge bg="dark">
        {source}
      </Badge></Card.Title>
        <Card.Text>
     {description}
        </Card.Text>
        <Card.Text>By {author?author:"unknown"} on {new Date(date).toGMTString()}</Card.Text>
        <Button href={url} target = "_blank" variant="primary" className="btn btn-dark">Read more </Button>
      </Card.Body>
    </Card>
      </div>
    )
}
export default NewsItem