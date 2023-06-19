import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by ALI</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
