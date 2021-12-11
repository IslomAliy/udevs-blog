import Container from "../Container";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <div className="footer-content">
          <div className="logo-content">
            <img src="../images/logo.svg" alt="logo" className="footer-logo"/>
            <p className="logo-content-desc">
              Помощник в публикации статей, журналов. Список популярных
              международных конференций. Всё для студентов и преподавателей.
            </p>
            <p className="logo-content-copyright">
              Copyright © 2020. LogoIpsum. All rights reserved.
            </p>
          </div>
          <ul className="resources">
            <li className="resources-item-header">Ресурсы</li>
            <li className="resources-item"><a className="resources-link" href="/">Статьи</a></li>
            <li className="resources-item"><a className="resources-link" href="/">Журналы</a></li>
            <li className="resources-item"><a className="resources-link" href="/">Газеты</a></li>
            <li className="resources-item"><a className="resources-link" href="/">Диплом</a></li>
          </ul>
          <ul className="resources">
            <li className="resources-item-header">О нас</li>
            <li className="resources-item"><a className="resources-link" href="/">Контакты</a></li>
            <li className="resources-item"><a className="resources-link" href="/">Помощь</a></li>
            <li className="resources-item"><a className="resources-link" href="/">Заявки</a></li>
            <li className="resources-item"><a className="resources-link" href="/">Политика</a></li>
          </ul>
          <ul className="resources">
            <li className="resources-item-header">Помощь</li>
            <li className="resources-item"><a className="resources-link" href="/">Часто задаваемые вопросы</a></li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
