import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RestaurantLIst() {

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
  },[])

  console.log(restaurantList);
  return (

    // Restaurant Card
    <Row>
      {
       restaurantList.map(restaurant=>(
       <Col md={6} lg={4} xl={3}>
       {/* child */}
       <RestCard item={restaurant}/>
       </Col>
       ) )
      }
    </Row>
  )
}

export default RestaurantLIst