import appealsPageStyles from "./appeals-page.module.css";
import { Header, Button } from "../components";
import { useEffect , useState} from "react";
import { selectGetAppeals, selectGetAuthEmail } from "../../selectors";
import { requestGetAppeals } from "./request-get-appeals/request-get-appeals";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export const AppealsPage = () => {
  const appeals = useSelector(selectGetAppeals);
  const dispatch = useDispatch();
  const userEmail = useSelector(selectGetAuthEmail);

  useEffect(() => {
    dispatch(requestGetAppeals());
  }, [dispatch]);

console.log(userEmail?.getAuthUserEmail);
  return (
    <> { userEmail?.getAuthUserEmail.length > 1 ? (      
      <div className={appealsPageStyles.container}>
        <Header
          title="Активные заявки"
          buttonName="Вернутся на главную"
          link=""
          logoutButtonName="Выход"
          userMail={userEmail?.getAuthUserEmail}
        />
        <div className={appealsPageStyles.content}> 
          <table className={appealsPageStyles.table}>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Имя</th>
                <th>Описание проблемы</th>
                <th>Телефон</th>
              </tr>
            </thead>
            <tbody>
              {appeals.appeals.map((appeal) => (
                <tr key={appeal._id}>
                  <td>{appeal.date.slice(0, 10)}</td>
                  <td>{appeal.fullName}</td>
                  <td>{appeal.description}</td>
                  <td>{appeal.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <>
        <div className={appealsPageStyles.error}>
          <p>Ошибка авторизации. У вас нет доступа на эту страницу</p>
          <Link to="/">
            <Button>Вернутся на главную</Button>
          </Link>
        </div>
      </>
    )}</>
  );
};

