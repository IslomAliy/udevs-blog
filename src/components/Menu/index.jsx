import Container from '../Container'
import './menu.scss'

const Menu = () => {
  return (
    <Container>
      <ul className="menu-wrapper">
        <li className="menu-list-item"><a href="/" className="active">Все потоки</a></li>
        <li className="menu-list-item"><a href="/">Разработка</a></li>
        <li className="menu-list-item"><a href="/">Администрирование</a></li>
        <li className="menu-list-item"><a href="/">Дизайн</a></li>
        <li className="menu-list-item"><a href="/">Менеджмент</a></li>
        <li className="menu-list-item"><a href="/">Маркетинг</a></li>
        <li className="menu-list-item"><a href="/">Научпоп</a></li>
      </ul>
    </Container>
  );
};

export default Menu;
