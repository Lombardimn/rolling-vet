import { Card } from 'react-bootstrap'

export const CardProduct = ({producto, descripcion, price, image}) => {
  return (
    <Card 
      className="bg-dark text-white" 
      style={{ width: '380px', height: '380px', borderRadius: '16px'}}>
      <Card.Img 
        src={image} 
        alt={producto}
        width={380} 
        height={380}
        style={{borderRadius: '16px'}}
      />
      <Card.ImgOverlay className='d-flex flex-column justify-content-end'>
        <Card.Title>{producto}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text className='fw-bold fs-5'>$ {price}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}