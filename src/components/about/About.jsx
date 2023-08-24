import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>Quiénes somos</h1>
        <article>
          <h4>Hamburguesería</h4>
          <p>
		  	Esto es la Hamburguesería. El lugar con las hamburguesas más
			sabrosas del planeta.
          </p>
          <p>
		  	Explora nuestra oferta de comida y hamburguesas. Haz clic a
			continuación para ver el menú
          </p>
          <Link to="/">
            <RiFindReplaceLine></RiFindReplaceLine>
          </Link>
        </article>
        <div>
          <h2>Fundador</h2>
          <article>
            <div>
              <img src={me} alt="Fundador" />
              <h3>Nelson</h3>
            </div>
            <p>
				Soy Nelson, el fundador de la Hamburguesería y afiliado a Good Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;