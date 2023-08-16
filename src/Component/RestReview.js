import { React, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({ data }) {
    console.log(data);
    const [open, setOpen] = useState(false);
    return (
        <>
            <h5>Reviews</h5>

            {

                data.map(item => (
                    <Card className='m-2' style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>Name:{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><p>{item.date}</p></Card.Subtitle>

                            <Card.Text>
                                Rating:{item.rating}
                            </Card.Text>
                            <Card.Text>
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>
                                    Comments
                                </Button>
                                <Collapse in={open} dimension="width">
                                    <div id="example-collapse-text">
                                        <Card body style={{ width: '400px' }}>
                                            {item.comments}
                                        </Card>
                                    </div>
                                </Collapse>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                ))

            }
        </>
    )
}

export default RestReview