import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// ---

import styles from "../styles/Home.module.css";
import { WrapperStyled } from "../styles/pages";

// ---

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mazdak</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <WrapperStyled>
          <div className="first">
            <div className="img">
              <Image
                style={{
                  borderRadius: "1rem",
                  marginLeft: "1rem",
                  border: "2px solid #15202B",
                }}
                layout="responsive"
                src="/MK.jpeg"
                alt="Picture of the author"
                width={"380rem"}
                height={"380rem"}
              />
            </div>
            <div className="texi">
              <h1>Mazdak Nazemi </h1>
              <h2>Full Stack Developer</h2>
              <h3>
                Living In Germany[&nbsp;&ldquo;baden
                württemberg&ldquo;&nbsp;].Heidelberg
              </h3>
              <h5>Iranian from 1989</h5>
            </div>
          </div>
          <div className="second">
            <div className="desc">
              <p>
                this is Mazdak like Mazda (that car brand) with k at end easy to
                pronounce , already delivered some nice products to people for
                people my mindset is like Architecture , engineering over
                scripting , no rush for dirty hands , more into to be a techi ,
                I can code with Javascript , Typescrip (typo) , Go and also dear
                Rust upcoming one , with thier related libraries , frameworks
                and stuff to them , and ...
              </p>
            </div>
            <div className="tags">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://devref.ir"
              >
                Mein Boilers
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/penkong"
              >
                Mein Github
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://gitlab.com/mk-nazemi"
              >
                Mein Gitlab
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://stackoverflow.com/users/11584130/mazdak"
              >
                Mein Snackoverlow
              </a>
              <a
                rel="noopener noreferrer"
                href="MazdakNazemi_CV.pdf"
                title="Mazdak Nazemi CV"
                download
              >
                Mein Resume
              </a>
              <p>Email : Nazemi.works@gmail.com</p>
            </div>
          </div>
        </WrapperStyled>
      </div>
    </>
  );
};

export default Home;
