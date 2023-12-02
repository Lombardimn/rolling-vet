import { ButtonType, CardImage, Hero, NavbarBrand, Title } from "../../components"

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

      <section>
        
      </section>
    </>
  )
}