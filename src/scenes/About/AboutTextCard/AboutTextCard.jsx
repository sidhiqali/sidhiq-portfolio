import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p className={s.text} >
        Hi Everyone, I am{' '}
        <span className={s.purple}> SIDHIQ ALI </span>
        from <span className={s.purple}> kerala, India.</span>I am a
        highly skilled and passionate MERN stack developer, with a
        strong focus on creating exceptional web applications. With
        extensive experience in front-end and back-end development,{' '}
        <br /> I excel in leveraging technologies like React, Node.js,
        Express.js, and MongoDB to deliver outstanding results. My
        commitment to staying updated with the latest industry trends
        ensures that I bring innovative solutions to every project.{' '}
    <br />
        Noteworthy accomplishments include the development of GigZone,
        an advanced multi-vendor freelancing platform, and ImaginAI,
        an AI-powered image generator. With meticulous attention to
        detail and a dedication to excellence, I consistently deliver
        flawless user experiences and scalable applications.
      </p>
    </div>
  );
};

export default AboutTextCard;
