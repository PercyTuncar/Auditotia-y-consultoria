import Link from "next/link";
import Slider from "react-slick";
import { serviceSliderOne } from "../../sliderProps";

const LatestServices = () => {
  const services = [
    {
      title: "Constitución de Empresas",
      image: "assets/images/service/img-1.jpg",
      description: "Guía en la creación de tu empresa, desde la idea hasta la realidad.",
    },
    {
      title: "Servicios Contables",
      image: "assets/images/service/img-3.jpg",
      description: "Gestión financiera y fiscal experta para el éxito de tu negocio.",
    },
    {
      title: "Consultoría y Asesoría Tributaria",
      image: "assets/images/service/img-2.jpg",
      description: "Asegura el cumplimiento fiscal y minimiza impuestos.",
    },
    {
      title: "Consultoría y Asesoría Financiera",
      image: "assets/images/gallery/img-1.jpg",
      description: "Análisis financiero estratégico para aumentar tus ganancias.",
    },
    {
      title: "Consultoría y Asesoría Laboral",
      image: "assets/images/gallery/img-2.jpg",
      description: "Optimización de recursos humanos y gestión laboral.",
    },
    {
      title: "Outsourcing Contable",
      image: "assets/images/service/img-2.jpg",
      description: "Externalización de servicios contables para tu empresa.",
    },
    {
      title: "Auditoría Financiera",
      image: "assets/images/service/img-2.jpg",
      description: "Auditorías certificadas para confianza financiera.",
    },
    {
      title: "Auditoría Interna",
      image: "assets/images/gallery/img-3.jpg",
      description: "Evaluaciones exhaustivas para mejorar la eficiencia interna.",
    },
    {
      title: "Control Interno",
      image: "assets/images/gallery/img-4.jpg",
      description: "Gestión de control interno para asegurar eficiencia y cumplimiento.",
    },
  ];

  return (
    <Slider {...serviceSliderOne} className="service-slider-one">
      {services.map((service, index) => (
        <div className="service-item wow fadeInUp" key={index}>
          <div className="img-holder">
            <img src={service.image} alt="service image" />
          </div>
          <div className="service-content">
            <div className="text">
              <div className="title-icon d-flex">
                <i className="flaticon-competitive" />
                <h3 className="title">
                  <Link legacyBehavior href="/service-details">
                    <a>{service.title}</a>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="hover-text text-white">
              <div className="title-icon d-flex">
                <i className="flaticon-competitive" />
                <h3 className="title">
                  <a>{service.title}</a>
                </h3>
              </div>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default LatestServices;
