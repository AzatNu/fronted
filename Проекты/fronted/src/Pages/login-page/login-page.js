import loginPageStyles from "./login-page.module.css";
import { Button, Header, ErrorSpan, validationAuthSchema, SuccsesSpan } from "../components";
import { useForm } from "react-hook-form";
import { requestAuthUser } from "./request-auth-user/rquest-auth-user";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectAuthFailed, selectGetAuthEmail, selectAuthSuccses } from "../../selectors";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const LoginPage = () => {
  const dispatch = useDispatch();
  const serverError = useSelector(selectAuthFailed);
  const userEmail = useSelector(selectGetAuthEmail);
  const authSuccses = useSelector(selectAuthSuccses);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationAuthSchema),
  });
  console.log(userEmail.getAuthUserEmail.length );
const onSubmit = (data) => {
  dispatch(requestAuthUser(data));
};
  return (
    <div className={loginPageStyles.container}>
      <Header 
        title="Вход" 
        buttonName="Вернутся на главную" 
        link=""  
        logoutButtonName="Выход" 
        userMail={userEmail?.getAuthUserEmail}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Введите ваш email</h3>
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <ErrorSpan>{errors.email?.message}</ErrorSpan>}
        <h3>Введите ваш пароль</h3>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <ErrorSpan>{errors.password?.message}</ErrorSpan>}
        {serverError && <ErrorSpan>{serverError.authUserFailed?.message   }</ErrorSpan>}
        {authSuccses && <SuccsesSpan>{authSuccses.authUserSuccses?.message }{userEmail?.getAuthUserEmail}</SuccsesSpan>}
        <Button type="submit" disabled={!isValid || serverError || userEmail} >
          Войти
        </Button>
      </form>
    </div>
  );
};

