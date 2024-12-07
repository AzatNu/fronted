import loginPageStyles from "./login-page.module.css";
import { Button, Header, ErrorSpan, validationAuthSchema, SuccsesSpan } from "../components";
import { useForm } from "react-hook-form";
import { requestAuthUser } from "./request-auth-user/rquest-auth-user";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectAuthFailed, selectGetAuthEmail, selectAuthSuccses } from "../../selectors";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const serverError = useSelector(selectAuthFailed);
  const userEmail = useSelector(selectGetAuthEmail);
  const authSuccses = useSelector(selectAuthSuccses);
  

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationAuthSchema),
    
  });


const onSubmit = (data) => {
  dispatch(requestAuthUser(data));

};
console.log(userEmail?.getAuthUserEmail );
  return (
    <div className={loginPageStyles.container}>
          <Header 
        title="Создать заявку" 
        buttonName="Вход" 
        link="login"  
        userMail={userEmail}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Введите ваш email</h3>
        <input type="text" placeholder="fake@mail.com" {...register("email")} />
        {errors.email && <ErrorSpan>{errors.email?.message}</ErrorSpan>}
        <h3>Введите ваш пароль</h3>
        <input
          type="password"
          placeholder="123456"
          {...register("password")}
        />
        {errors.password && <ErrorSpan>{errors.password?.message}</ErrorSpan>}
        {serverError && <ErrorSpan>{serverError.authUserFailed?.message   }</ErrorSpan>}
        {authSuccses && <SuccsesSpan>{authSuccses.authUserSuccses?.message } {userEmail?.getAuthUserEmail}</SuccsesSpan>}
        <Button type="submit" disabled={!isValid || serverError || userEmail} >
          Войти
        </Button>
      </form>
    </div>
  );
};

