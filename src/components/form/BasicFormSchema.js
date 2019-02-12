import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  email: Yup.string()
    //Проверяем, корректный ли адрес.
    //Если нет, то выводится сообщение в скобках
    .email("Invalid email address")
    //не сабмитим, если поле не заполнено
    .required("Required"),
  username: Yup.string()
    //минимальная длина - 2 символа
    .min(2, "Must be longer than 2 characters")
    //максимальная длина - 20 символов
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be longer than 8 characters")
    .required("Required")
});
export default BasicFormSchema;