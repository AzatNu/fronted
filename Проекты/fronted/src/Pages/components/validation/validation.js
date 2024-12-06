import * as yup from "yup";

export const validationAuthSchema = yup.object().shape({
  email: yup.string().required(`*Почта обязательна для заполнения`),
  password: yup
    .string()
    .required(`*Пароль обязателен для заполнения`)
    .matches(/^[a-zA-Z0-9#$%]+$/, "*Пароль содержит запрещенные символы")
    .min(5, "*Пароль должен содержать минимум 5 символов")
    .max(20, "*Пароль должен содержать максимум 20 символов"),
});

export const validationAppealSchema = yup.object().shape({
  fullName: yup.string().required("*Это поле обязательно для заполнения"),
  number: yup
    .string()
    .required(`*Это поле обязателено для заполнения`)
    .min(11, "*Минимум 11 символов"),
  description: yup
    .string()
    .required("*Это поле обязательно для заполнения")
    .min(30, "*Минимум 20 символов"),
});
