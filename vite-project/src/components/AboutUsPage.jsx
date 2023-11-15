import React from 'react';
import panaderiaDetodito from '../images/panaderiaDetodito.jpg';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <section className="about-us-container">
      <h2 className="about-us-header">Sobre Nosotros</h2>
      <img className="about-us-image" src={panaderiaDetodito} alt="Imagen representativa de la panadería" />
      <article className="about-us-content">
        <p className='lema-container'>¡Bienvenido a nuestra panadería colombiana!<br/><br/>
          "Sabores auténticos, tradición en cada bocado. En nuestra panadería colombiana,
          cada producto es un viaje directo a la calidez de los hogares de Colombia.
          Con ingredientes frescos y pasión por la autenticidad, horneamos momentos memorables para tu paladar. 
          ¡Bienvenido a nuestro rincón de Colombia en cada deliciosa creación!"
        </p>
      </article>
    </section>
  );
};

export default AboutUsPage;
