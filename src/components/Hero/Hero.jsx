import { Container, Row, Col, Image } from 'react-bootstrap';
import { ButtonType } from '../Button';

export const Hero = () => {
  return (
    <Container className='container-hero'>
    <Row className='mt-5'>
      <Col>
        <Image 
          src="/public/assets/images/fondogris178x180.svg" 
          width={600}
          height={600}
          alt="171x180" 
          rounded />
      </Col>
      <Col>
        <Container>
          <Row>
            <Col>
              <h1 className='text-left mt-5 pt-5'>RollingVet</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='text-left mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non perferendis officia odit fugit aperiam architecto necessitatibus iure nulla maxime commodi?</p>
            </Col>
          </Row>
          <Row>
            <Col className='ms-2'>
              <ButtonType 
                types='button' 
                className='me-3'
              >
                ACCION1
              </ButtonType>
              <ButtonType 
                types='button' 
                className='bg-secondary me-3'
              >
                ACCION2
              </ButtonType>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
  )
}