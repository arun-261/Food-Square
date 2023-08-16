import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestOpHours from './RestOpHours' ;
import RestReview from './RestReview';


function RestDetail() {

    const urlParams = useParams()
    console.log(urlParams.id);

    const [restaurantList, setRestaurantList] = useState([])

    const fetchData = async () => {
        await fetch('/restaurants[1].json')
            .then((data) => {
                data.json()
                    .then((res) => {
                        setRestaurantList(res.restaurants)
                    })
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(restaurantList);


    // find restaurant whose id is given in urlparams
    const restaurant = restaurantList.find(item => (
        item.id == urlParams.id
    )
    )
    console.log(restaurant);

    return (

        <div>
            {
                restaurant ? (
                    <Row className='my-3 ' >
                        <Col className='ms-5' md={2} >
                            <Image className='border' src={restaurant.photograph} fluid></Image>
                        </Col>
                        <Col  md={7} >
                            <ListGroup>
                                <ListGroup.Item>
                                    <h1>{restaurant.name}</h1>
                                    <p>{restaurant.neighborhood}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>Cuisine Type: {restaurant.cuisine_type}</ListGroup.Item>
                                <ListGroup.Item>Address:<p>{restaurant.address}</p> </ListGroup.Item>
                                <ListGroup.Item>
                                    <RestOpHours op={restaurant.operating_hours}/>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <RestReview data={restaurant.reviews}/>
                                    </Row>
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>
                    </Row>
                ) : 'No data to display'

            }
        </div>
    )
}

export default RestDetail