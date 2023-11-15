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
      description: "Tercerización de los servicios contables  y brindar información confiable, oportuna y relevante a la gerencia de la empresa.",
    },
    {
      title: "Auditoría Financiera",
      image: "assets/images/service/img-2.jpg",
      description: "Garantizar  la fiabilidad de la información financiera de una empresa para brindar confianza a los usuarios de la información.",
    },
    {
      title: "Auditoría Interna",
      image: "assets/images/gallery/img-3.jpg",
      description: "Controlar a la empresa, identificando puntos de mejora y riesgos a las operaciones de la organización.      ",
    },
    {
      title: "Control Interno",
      image: "assets/images/gallery/img-4.jpg",
      description: "Evaluación el Control Interno de tu empresa que  salvaguarde sus recursos, verificar la exactitud y veracidad de la información financiera y administrativa.",
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
