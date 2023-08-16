import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({ item }) {
    return (
      <Link to={`/restaurant/${item.id}`} style={{textDecoration:'none', color:'white'}}>
        <Card  className='my-2'>
            <Card.Img style={{height:'400px'}} className='p-2' variant="top" src={item.photograph} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    <p>{item.cuisine_type}</p>
                </Card.Text>
                <Card.Text>
                    <p>{item.neighborhood}</p>
                </Card.Text>

            </Card.Body>
        </Card>
        </Link>
    )
}

export default RestCard