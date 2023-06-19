import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ali from '../../assets/ali2.png';
const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
        <LazyLoadImage className={s.text} alt="avatar" effect="blur" src={ali} />
      </Link>
    </div>
  );
};

export default Logo;
