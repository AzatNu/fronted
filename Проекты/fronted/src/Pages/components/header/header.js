import { Button } from "../button/button";
import { Link } from "react-router-dom";
import header from './header.module.css'
import { useDispatch } from "react-redux";
export const Header = ({ title, buttonName, link, userMail }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "GET_AUTH_USER__EMAIL", payload: [] });
  };

  return (
    <div className={header.header}>
      <h2>{title}</h2>
      <h3 title="Вы авторизованы как">{userMail}</h3>
      <Link to="/">
        <button onClick={handleLogout}>Выход</button>
      </Link>
      <Link to="/appeals"> <Button> Страница заявок</Button> </Link>
      <Link to={`/${link}`}>
        <Button>{buttonName}</Button>
      </Link>
    </div>
  );
};
