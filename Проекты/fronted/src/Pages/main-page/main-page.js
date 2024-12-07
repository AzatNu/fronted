import MainPageStyles from "./main-page.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Header, ErrorSpan ,validationAppealSchema } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { requestPostAppeals } from "./request-post-appeals/request-post-appeals";
import { selectGetAuthEmail } from "../../selectors";

export const MainPage = () => {
  const userEmail = useSelector(selectGetAuthEmail);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      number: "",
      description: "",
    },
    resolver: yupResolver(validationAppealSchema),
  });
  const onSubmit = (data) => {
    dispatch(requestPostAppeals(data));
    reset();
  };

console.log(userEmail?.authUserEmail)
  return (
    <div className={MainPageStyles.container}>
          <Header 
        title="Создать заявку" 
        buttonName="Вход" 
        link="login"  
        userMail={userEmail}
      />
      {(<form onSubmit={handleSubmit(onSubmit)}>
        <h3>ФИО</h3>
        <input type="text" placeholder="Фамилия Имя Отчество" {...register("fullName")} />
        {errors.fullName && <ErrorSpan>{errors.fullName?.message}</ErrorSpan>}
        <h3>Номер телефона</h3>
        <input
          type="text"
          placeholder="Номер телефона"
          {...register("number")}
        />
        {errors.number && <ErrorSpan>{errors.number?.message}</ErrorSpan>}
        <h3>Описание проблемы</h3>
        <textarea
          type="text"
          placeholder="Описание проблемы"
          {...register("description")}
        />
        {errors.description && <ErrorSpan>{errors.description?.message}</ErrorSpan>}
        <Button type="submit" disabled={!isValid}>
          Отправить
        </Button>
      </form>)}
    </div>
  );
};
