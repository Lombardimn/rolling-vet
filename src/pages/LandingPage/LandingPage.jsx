import { ButtonType, CallToAction, CardImage, CardProduct, Hero, NavbarBrand, Title } from "../../components"
import { CardTestimonial } from "./components"

export const LandingPage = () => {

  return (
    <>
      <NavbarBrand />
      <Hero />
      <section className="container-box">
        <div className="container-title">
          <Title  
            title='Lorem ipsum' 
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis officia odit fugit aperiam architecto necessitatibus iure nulla maxime commodi?' 
          />
        </div>
        <section className='container-card'>
          <CardImage
            title='Lorem ipsum'
            urlImage='/assets/images/fondogris178x180.svg'
            urlHref='/'
            titleHref='Lorem ipsum'
          >
            Esto es una prueba de contenido children. Donde se pone un lorem para tener mas espacio ocupado Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi?  
          </CardImage>

          <CardImage
            title='Lorem ipsum'
            urlImage='/assets/images/fondogris178x180.svg'
            urlHref='/'
            titleHref='Lorem ipsum'
          >
            Esto es una prueba de contenido children. Donde se pone un lorem para tener mas espacio ocupado Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi?  
          </CardImage>

          <CardImage
            title='Lorem ipsum'
            urlImage='/assets/images/fondogris178x180.svg'
            urlHref='/'
            titleHref='Lorem ipsum'
          >
            Esto es una prueba de contenido children. Donde se pone un lorem para tener mas espacio ocupado Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi?  
          </CardImage>
        </section>
          <ButtonType types='button' className=''>
              Ver más
          </ButtonType>
      </section>

      <section>
        <div className="container-title">
          <Title  
            title='Lorem ipsum' 
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis officia odit fugit aperiam architecto necessitatibus iure nulla maxime commodi?' 
          />
        </div>
        <section className='container-card svg'>
          <CardImage
            title='Lorem ipsum'
            urlImage='/assets/icons/download.svg'
            typeImg='svg'
          >
            2.7K
          </CardImage>
          <CardImage
            title='Lorem ipsum'
            urlImage='/assets/icons/download.svg'
            typeImg='svg'
          >
            2.7K
          </CardImage>
          <CardImage
            title='Lorem ipsum'
            urlImage='/assets/icons/download.svg'
            typeImg='svg'
          >
            2.7K
          </CardImage>
          <CardImage
            title='Lorem ipsum'
            urlImage='/assets/icons/download.svg'
            typeImg='svg'
          >
            2.7K
          </CardImage>
        </section>
      </section>

      <section className="container-box">
        <Title
          title='Lorem ipsum'
        />
        <div className="d-flex flex-row justify-content-between gap-5">
          <CardTestimonial
            subject= 'Jhon Doe'
            rol='Ceo Company'
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quam unde ipsum, alias nam nostrum possimus iste ab asperiores architecto reprehenderit saepe exercitationem consequuntur animi voluptate quidem soluta facere harum tempore
          </CardTestimonial>
          <CardTestimonial
            subject= 'Peter Griffin'
            rol='Cofunder Jhonson'
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quam unde ipsum, alias nam nostrum possimus iste ab asperiores architecto reprehenderit saepe exercitationem consequuntur animi voluptate quidem soluta facere harum tempore
          </CardTestimonial>
        </div>
      </section>
      <CallToAction />

      <section className="container text-center mt-5">
        <Title
          title='Lorem ipsum'
        />
        <div className="col gap-4 mt-5">
          <div className="row gap-4">
            <CardProduct
              product='Cuchas de mano'
              image='/assets/images/fondogris178x180.svg'
              descripcion='This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'
              price='9.99'
            />
            <CardProduct
              product='Cuchas de mano'
              image='/assets/images/fondogris178x180.svg'
              descripcion='This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'
              price='9.99'
            />
            <CardProduct
              product='Cuchas de mano'
              image='/assets/images/fondogris178x180.svg'
              descripcion='This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'
              price='9.99'
            />

            <CardProduct
              product='Cuchas de mano'
              image='/assets/images/fondogris178x180.svg'
              descripcion='This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'
              price='9.99'
            />
            <CardProduct
              product='Cuchas de mano'
              image='/assets/images/fondogris178x180.svg'
              descripcion='This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'
              price='9.99'
            />
            <CardProduct
              product='Cuchas de mano'
              image='/assets/images/fondogris178x180.svg'
              descripcion='This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'
              price='9.99'
            />
          </div>
        </div>
      </section>
    </>
  )
}