import { Card, Image } from 'react-bootstrap'

export const CardImage = ({ children, title, urlHref, titleHref, urlImage, typeImg }) => {

  return (
    <Card
      className={` ${typeImg === 'svg' ? 'card-svg' : 'border-none'}`}
    >
      {
        urlImage && (
          typeImg === 'svg' 
            ? <Image
                variant="top" 
                src={urlImage} 
                alt={title} 
                width={`${typeImg === 'svg' ? 60 : 120}`} 
                height={`${typeImg === 'svg' ? 60 : 120}`}
                className={`${typeImg === 'svg' ? 'card-svg-img' : ' '}`} 
              />
            : <Image 
              variant="top" 
              src={urlImage} 
              roundedCircle 
              alt={title} 
              width={120} 
              height={120} 
              />
        )
      }
      <Card.Body className='text-center d-flex flex-column align-items-center justify-content-center'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={`${typeImg === 'svg' ? 'card-svg-text' : ''}`}>
          { children }
        </Card.Text>
        {
          urlHref && (
            <Card.Link href={urlHref}>{titleHref} ➡</Card.Link>
          )
        }
      </Card.Body>
    </Card>
  )
}

''