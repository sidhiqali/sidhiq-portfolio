import s from './IntroSection.module.scss';
import avatar1 from '../../../assets/avatar1.png';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <h1 className={s.title}>
        LET ME <span className={s.purple}> INTRODUCE </span> MYSELF
      </h1>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <div className={s.description}>
            <p style={{ textAlign: 'justify' }}>
              I'm a MERN Stack Developer with more than one year
              experience <br />
              building innovative web applications using MongoDB,
              Express.js, React.js, and Node.js.
            </p>

            <p style={{ textAlign: 'justify' }}>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  TypeScript, React, Next, Node
                </b>
              </i>
              and other relevant technologies within MERN stack. I
              have experience in integrating various third-party
              libraries, API integration, push notifications and
              analytics.
            </p>

            <p style={{ textAlign: 'justify' }}>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
          <div className={s.image}>
            <Tilt trackOnWindow={true} >
              <LazyLoadImage
                alt="avatar"
                effect="blur"
                src={avatar1}
              />
            </Tilt>
          </div>
        </div>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/sidhiqali"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/sidhiqali.sidhiq.9"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://twitter.com/sidhiqali"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTwitter />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/sidhiq-ali-5388049a/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
