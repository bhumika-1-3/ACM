import React from 'react'
import data from './hackathonData'
import Typical from 'react-typical'
import { Container, Button } from 'react-bootstrap'
import '../App.css'
const items = data;
const Card = () => {
  return (
    <div>
      <Container>
        <div className="cardings">
          {

            items.map((item) => (
              <div className='carding' key={item.id}>
                <div className='carding-inner'>
                  <div className='carding-front '>
                    <h1>{item.name}</h1>
                    <Typical
        steps={['Last date', 1000, `${item.date}`, 500]}
        loop={Infinity}
        wrapper='h2'
      />
                  </div>
                  <div className='carding-back'>
                    <h6>{item.data}</h6>
                    <span className="plus">
                      Enroll now &nbsp;
                      <Button className="btn btn-danger " style={{backgroundColor:'#F13463'}}  >+
                      </Button>
                    </span>
                    {/* <h1>{item.mission_name}</h1> */}
                  </div>
                </div>
              </div>
            ))

          })

        </div>
      </Container>
    </div>
  )
}

export default Card
