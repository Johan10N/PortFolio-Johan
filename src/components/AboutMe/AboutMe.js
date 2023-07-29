import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
//import logoYoutube from "../../svg/youtube.svg";
import foto from "../../images/projects/foto.jpg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/Johan10N/",
      logo: logoGithub,
    },
    {
      name: "Linkedind",
      link: "https://www.linkedin.com/in/johan-navarro-rodriguez-853b94285/",
      logo: logoLinkeind,
    },
    /*{
       name: "Youtube",
       link: "https://www.youtube.com/channel/UC2Gv4AvSJOPFQ6pjGFk7U2g",
       logo: logoYoutube,
    },*/
  ];

  return (
    <S.ContainerAboutMe id="about-me" style={{ marginTop: 85 }}>
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, i'm</p>
            <p>Johan Navarro</p>
            <p>Installation and maintenance technician</p>
          </S.Title>
          <S.DescriptionText>
            <p>
              ¡Hola! Soy técnico de sistemas apasionado por el mundo de
              las Telecomunicaciones y con más de 8 años de experiencia en el campo del
              mantenimiento e instalaciones de redes de fibra ópticas.
              Soy una persona proactiva y entusiasta, siempre buscando aprender cosas
              nuevas y enfrentar nuevos desafíos en mi carrera profesional.
            </p>
            <p>
              ¡Gracias por visitar mi portfolio! Si deseas conocer más sobre mis
              proyectos y experiencias, no dudes en contactarme.
            </p>
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src={foto} alt="Johan Navarro R." />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};
export default AboutMe;
