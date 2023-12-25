import React, { useEffect, useState } from "react";
import { CardImage, Title } from "../../../components";
import getData from "../../../helpers/getData";

const SectionServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getData("/services", setServices);
  }, []);

  return (
    <section>
      <div className="container-title">
        <Title
          title='Servicios'
          description='Brindamos los mejores servicios para el cuidado de tus mascotas'
        />
      </div>
      <section className='container-card svg'>
        {services.length > 0 && services.map((servicio) => (
          <CardImage
            key={servicio._id} // Utilizando el ID del servicio como clave única
            title={servicio.nombre}
            urlImage={servicio.imagen}
            typeImg="jpg" // Cambia esto según la lógica de tu aplicación
          >
            {servicio.descripcion}
          </CardImage>
        ))}
      </section>
    </section>
  );
};

export default SectionServices;
