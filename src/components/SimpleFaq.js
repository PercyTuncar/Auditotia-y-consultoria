import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "./FintexAccordion";

const SimpleFaq = () => {
  const faqsData = [
    { title: "¿En qué consisten los servicios de Consultoría Contable?", answer: "Nuestros servicios de Consultoría Contable se centran en la gestión y análisis de tus registros financieros. Esto incluye la preparación de estados financieros, gestión de impuestos, presupuestos y asesoramiento financiero estratégico. Ayudamos a mantener tus registros en orden y a optimizar tus finanzas para un crecimiento sostenible." },
    { title: "¿Cuál es la diferencia entre Consultoría Financiera y Consultoría Tributaria?", answer: "La Consultoría Financiera se enfoca en la gestión global de tus finanzas, incluyendo la inversión, presupuesto y estrategia financiera. Por otro lado, la Consultoría Tributaria se centra en minimizar impuestos y asegurar el cumplimiento normativo con respecto a las obligaciones fiscales." },
    { title: "¿Qué puedo esperar de una Auditoría Interna?", answer: "Una Auditoría Interna es un proceso de revisión integral de tus operaciones internas para evaluar la eficiencia y la efectividad. Identificamos áreas de mejora y ayudamos a fortalecer los controles internos, garantizando la integridad de tus operaciones." },
    { title: "¿Cómo la Consultoría Laboral puede mejorar la gestión de recursos humanos en mi empresa?", answer: "Nuestra Consultoría Laboral ofrece orientación sobre prácticas de recursos humanos, desde contrataciones hasta políticas de personal. Ayudamos a mejorar la gestión de empleados, la retención de talento y la productividad laboral." },
  ];

  const [active, setActive] = useState(`event-0`);

  return (
    <Accordion defaultActiveKey={active} className="accordion">
      {faqsData.map((faq, i) => (
        <FintexAccordion
          key={i}
          active={active}
          onClick={() => setActive(`event-${i}`)}
          title={faq.title}
          eventName={`event-${i}`}
          answer={faq.answer} // Nueva propiedad para enviar la respuesta
        />
      ))}
    </Accordion>
  );
};

export default SimpleFaq;
