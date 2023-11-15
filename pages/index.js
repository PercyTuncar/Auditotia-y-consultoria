import Link from "next/link";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
import { partnerSliderOne, projectsSliderOne } from "../src/sliderProps";

const OnePageIndex = () => {
  const singleMenus = [
    { name: "Inicio", href: "inicio" }, 
    { name: "Servicios", href: "servicios" },
    { name: "Nosotros", href: "nosotros" },
    { name: "Contacto", href: "contacto" },
    
  ];

  return (
    <Layout singleMenus={singleMenus}>
      {/*====== Start Hero Section ======*/}
      <section
        id="inicio"
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg-1.jpg)" }}
      >
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-one_shape-1.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/circel.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              {/*=== Hero Content ===*/}
              <div className="hero-content text-white">
                <span className="tag-line wow fadeInDown" data-wow-delay=".5s">
                Consultoría 
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".7s">
                Somos Expertos en Auditoría y Consultoría Empresarial
                </h1>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                <Link legacyBehavior href="#contacto">
                <a className="main-btn btn-red">Contactar Ahora</a>
                  </Link>

                  
               
                  <Link legacyBehavior href="#servicios">
                    <a className="main-btn filled-btn filled-white">
                    Nuestros servicios
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section-one pt-125 pb-70" id="onepage-about">
        <div className="shape shape-one">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="293px"
              height="849px"
            >
              <path
                fillRule="evenodd"
                fill="rgb(250, 250, 250)"
                d="M292.858,848.283 L45.529,527.037 L183.238,230.105 L0.311,0.959 L292.858,0.959 L292.858,848.283 Z"
              />
            </svg>
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap wow fadeInLeft mb-50">
                <div className="section-title section-title-left">
                  <span className="sub-title">Acerca de la compañía
</span>
                  <h2>Tu Socio Estratégico en Auditoria y Consultoría Empresarial  </h2>
                </div>
                <p>
                Somos tus aliados en Auditoria y Consultoría Empresarial. Ofrecemos servicios expertos en contabilidad, finanzas, impuestos, recursos humanos y asesoría para la constitución de empresas. Tu éxito es nuestro compromiso.





                </p>
             
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Quote Box One ===*/}
              <div className="quote-box-one ml-lg-70 mb-50">
                <h2>Tu éxito es nuestro compromiso, confía en nosotros.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section p-r z-1 pb-85">
        <div className="shape shape-one">
          <span />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              {/*=== FEatures Image Box ===*/}
              <div className="features-one_img-box mb-50">
                <img
                  src="assets/images/features/img-1.jpg"
                  className="features-img-one wow fadeInDown"
                  alt="Features Image"
                />
                <img
                  src="assets/images/features/img-2.jpg"
                  className="features-img-two wow fadeInUp"
                  alt="Features Image"
                />
                <div className="quote-box-two wow fadeInLeft">
                  <h3>Potencia Tu Crecimiento Financiero</h3>
                </div>
                <div className="big-logo wow fadeInRight">
                  <Link legacyBehavior href="/">
                    <a>
                      <img width="150"
                        src="assets/images/logo/big-logo-1.jpg"
                        alt="Site logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Content Box ===*/}
              <div className="features-one_content-box pl-lg-70 mb-10">
                <div className="section-title section-title-left mb-35 wow fadeInDown">
                  <span className="sub-title">¿Qué Hacemos?</span>
                  <h2>Transformamos Tu Negocio con Expertos en Auditoría y Consultoría</h2>
                </div>
               

             <div className="row">
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-briefcase" />
      </div>
      <div className="text">
        <h4 className="title">Constitución de Empresas</h4>
        <p>Guía en la creación de tu empresa, desde la idea hasta la realidad.</p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-stats" />
      </div>
      <div className="text">
        <h4 className="title">Servicios Contables</h4>
        <p>Gestión financiera y fiscal experta para el éxito de tu negocio.</p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-balance-scale" />
      </div>
      <div className="text">
        <h4 className="title">Consultoría y Asesoría Tributaria</h4>
        <p>Asegura el cumplimiento fiscal y minimiza impuestos.</p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-dollar" />
      </div>
      <div className="text">
        <h4 className="title">Consultoría y Asesoría Financiera</h4>
        <p>Análisis financiero estratégico para aumentar tus ganancias.</p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-people" />
      </div>
      <div className="text">
        <h4 className="title">Consultoría y Asesoría Laboral</h4>
        <p>Optimización de recursos humanos y gestión laboral.</p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-document" />
      </div>
      <div className="text">
        <h4 className="title">Outsourcing Contable</h4>
        <p>Tercerización de los servicios contables  y brindar información confiable, oportuna y relevante a la gerencia de la empresa.
</p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-search" />
      </div>
      <div className="text">
        <h4 className="title">Auditoría Financiera</h4>
        <p>Auditorías certificadas para confianza financiera.</p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-key" />
      </div>
      <div className="text">
        <h4 className="title">Auditoría Interna</h4>
        <p>Controlar a la empresa, identificando puntos de mejora y riesgos a las operaciones de la organización.</p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    {/*=== Features Item ===*/}
    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
      <div className="icon">
        <i className="flaticon-shield" />
      </div>
      <div className="text">
        <h4 className="title">Control Interno</h4>
        <p>Evaluación el Control Interno de tu empresa que  salvaguarde sus recursos, verificar la exactitud y veracidad de la información financiera y administrativa.</p>
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Service Section ======*/}
      <section
        id="servicios"
        className="service-section bg_cover pt-125 p-r z-1 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/service-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center text-white mb-60 wow fadeInDown">
                <span className="sub-title">Nuestros Servicios</span>
                <h2>Maximiza tus ganancias, ¡contáctanos hoy!</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider ===*/}
          <LatestServices />
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section p-r z-1 pt-130" id="nosotros">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/*=== Fact image box ===*/}
              <div className="fact-img_one-box text-right pr-lg-70 mb-50">
                <div className="quote-box-three text-left wow fadeInLeft z-1">
                  <h3>Nuestra Experiencia, Tu Ventaja
  
                  </h3>
                  <div className="author-thumb-title d-flex align-items-center">
                    
                    <div className="author-title">
                      
                      <p className="position">Sólida Trayectoria en Auditoria y Consultoría Empresarial </p>
                    </div>
                  </div>
                </div>
                <img
                  src="assets/images/gallery/img-1.jpg"
                  className="wow fadeInDown"
                  alt="Fact image"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              {/*=== Fact content Box ===*/}
              <div className="fact-one_content-box mb-10">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Quiénes Somos</span>
                  <h2>Comprometidos con la Transformación Empresarial</h2>
                </div>
                <p className="wow fadeInUp">
                Estamos dedicados a impulsar cambios significativos en el mundo empresarial. Nuestra misión es brindar servicios de Auditoria y Consultoría Empresarial de calidad que permitan a las empresas alcanzar su máximo potencial
                </p>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2 className="number">
                    Misión
                    </h2>
                    <h5>Potenciar el éxito empresarial a través de Auditoria y Consultoría Empresarial experta.</h5>
                  </div>
                </div>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between">
                    <h2 className="number">
                    Visión
                    </h2>
                    <h5>Liderar la transformación empresarial con precisión y confiabilidad.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start Project Section ======*/}
     
      {/*====== End Project Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-section bg_cover p-r z-1 pt-70 pb-50"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/*=== Common Heading ===*/}
              <div className="section-title text-white mb-30 wow fadeInLeft">
                <h2>Transformamos Desafíos en Oportunidades para Tu Negocio</h2>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== CTA Button ===*/}
              <div className="cta-button float-lg-right mb-30 wow fadeInRight">
               
                  <a className="main-btn btn-white">Contactar Ahora</a>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Team Section ======*/}
    
      {/*====== End Team Section ======*/}
      {/*====== Start Feedback Section ======*/}
    
      {/*====== End Feedback Section ======*/}
      {/*====== Start FAQ Section ======*/}
      <br/>
      <br/>
      <section className="faq-section mb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Faq Content Box ===*/}
              <div className="faq-one_content-box mb-50 wow fadeInLeft">
  <div className="section-title section-title-left">
    <span className="sub-title">Preguntas Frecuentes</span>
    <h2>¿Tienes Preguntas? Tenemos Respuestas.</h2>
  </div>
  <blockquote>
    Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios de Auditoria y Consultoría Empresarial .
  </blockquote>
 
  <div className="faq-button">
    {/* Puedes agregar un botón de "Ver más preguntas" aquí si lo deseas */}
  </div>
</div>

              
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion-one mb-50 wow fadeInRight"
                id="accordionOne"
              >
                <SimpleFaq />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End FAQ Section ======*/}
      {/*====== Start Partners Section ======*/}
    
      {/*====== End Partners Section ======*/}
      {/*====== Start Blog Section ======*/}
   
      {/*====== End Blog Section ======*/}
      {/*====== Start Newsletter Section ======*/}

<div id="contacto"></div>
      <section className="contact-information-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Information Image Box ===*/}
              <div className="information-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/contact/img-1.jpg"
                  alt="Contact Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Information Content Box ===*/}
              <div className="information-one_content-box ml-lg-40">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">Ponerse en contacto</span>
                  <h2>¡Listos para trabajar juntos! </h2>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Ubicación</h3>
                    <p> Av. Micaela Bastidas No. 400
Urb. San agustin-Comas-Lima</p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Correo</h3>
                    <p>
                      <a href="mailto:rrojas@rgauditoriayconsultoria.com.pe">
                      rrojas@rgauditoriayconsultoria.com.pe
                      </a>
                    </p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Teléfono</h3>
                    <p>
                     
                      <a href="tel:+51992165668"> 992 165 668</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Information Section ======*/}
      {/*====== Start Contact Map Section ======*/}
      <section className="contact-page-map wow fadeInUp">
        {/*=== Map Box ===*/}
        <div className="map-box">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6293881404445!2d-77.05416518800718!3d-11.930859888248172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d035e8ba53f1%3A0x996647224588c650!2sAv.%20Micaela%20Bastidas%20400%2C%20Comas%2015312!5e0!3m2!1ses!2spe!4v1698873469743!5m2!1ses!2spe" />
        </div>
      </section>
 
      {/*====== End Contact Map Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== Contact Content Box ===*/}
              <div className="contact-one_content-box mb-50 wow fadeInLeft">
                <div className="section-title section-title-left                                                                                                    ">
                  <span className="sub-title">Contáctenos</span>
                  <h2>¡Tiene alguna pregunta en mente! </h2>
                </div>
                <p>
                Contáctanos para obtener asesoramiento experto y soluciones personalizadas que impulsarán tu negocio. 
                </p>
                
              </div>
            </div>
            <div className="col-lg-7">
  {/*=== Cuadro de Formulario de Contacto ===*/}
  <div className="contact-one_form-box ml-lg-40 mb-50 wow fadeInRight">
    <form
      onSubmit={(e) => e.preventDefault()}
      className="contact-form"
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="form_group">
            <input
              type="text"
              className="form_control"
              placeholder="Nombre Completo"
              name="name"
              required=""
            />
            <i className="far fa-user" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form_group">
            <input
              type="email"
              className="form_control"
              placeholder="Dirección de Correo Electrónico"
              name="email"
              required=""
            />
            <i className="far fa-envelope" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form_group">
            <input
              type="text"
              className="form_control"
              placeholder="Teléfono"
              name="phone"
              required=""
            />
            <i className="far fa-phone" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form_group">
            <select className="wide">
              <option data-display="Asunto">Asunto</option>
              <option value={1}>Soporte al Cliente</option>
              <option value={2}>Soporte al Cliente</option>
            </select>
            <i className="far fa-question" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form_group">
            <textarea
              className="form_control"
              name="message"
              placeholder="Escribe tu Mensaje"
              defaultValue={""}
            />
            <i className="far fa-pencil" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form_checkbox">
            <input type="checkbox" name="checkbox" id="check1" />
            <label htmlFor="check1">
              <span>
                Estoy de acuerdo en que se recopilen y almacenen mis datos.
              </span>
            </label>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form_group">
            <button className="main-btn btn-red">
              Enviar Mensaje
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

          </div>
        </div>
      </section>
 
    </Layout>
  );
};
export default OnePageIndex;
