import type {DefaultConfigOptions} from "@formkit/vue";
import "@formkit/themes/genesis";

const config: DefaultConfigOptions = {
  locale: "LT",
  messages: {
    EN: {
      validation: {
        required: "Field is required.",
        email: "Please enter a valid email address.",
        url: "Please include a valid url (e.g.: https://www.amazon.com/...).",
        number: "Field must be a number.",
      },
    },
    RU: {
      validation: {
        required: "Поле, обязательное для заполнения.",
        email: "Пожалуйста, введите действительный адрес электронной почты.",
        url: "Укажите действующую ссылку (напр.: https://www.amazon.com/...).",
        number: "Поле должно быть числом.",
      },
    },
    LT: {
      validation: {
        required: "Laukas privalomas.",
        email: "Prašome įvesti galiojantį el. pašto adresą.",
        url: "Įtraukite galiojančią nuorodą (pvz.: https://www.amazon.com/...).",
        number: "Lauke turi būti skaičius.",
      },
    },
  },
};

export default config;
