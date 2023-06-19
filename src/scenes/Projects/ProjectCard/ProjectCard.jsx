import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BiLinkExternal } from 'react-icons/bi';
import Button from '../../../components/UIElements/Button/Button';
const ProjectCard = ({ id, image, title, description, links }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link to={`/project/${id}`} state={{ background: location }}>
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={image.placeholderSrc}
          />

          <div className={s.cardBody}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
          </div>
        </Link>
        <div className={s.buttons}>
          {!!links.site && (
            <Button
              style={{ width: '12rem' }}
              className={`primary`}
              href={links.site}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Live
            </Button>
          )}
          {!!links.repo && (
            <Button
              style={{ width: '12rem' }}
              className={`primary`}
              href={links.repo}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Repo
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
