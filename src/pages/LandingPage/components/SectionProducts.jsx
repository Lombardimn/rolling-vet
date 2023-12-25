import { useEffect, useState } from "react";
import getData from "../../../helpers/getData";
import { CardProduct, Title } from "../../../components";

const SectionProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData("/products", setProducts); // Cambia "/products" por la ruta correcta para obtener los productos.
  }, []);

  return (
    <section className="container text-center mt-5">
      <Title title="Nuestros productos" />
      <div className="col gap-4 mt-5">
        <div className="row gap-4">
          {products.map((product) => (
            <CardProduct
              key={product._id.$oid} // Utiliza _id.$oid como clave única
              product={product.nombre}
              image={product.imagen}
              descripcion={product.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;
