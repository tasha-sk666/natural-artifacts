import { validateForms } from '../functions/validate-forms';

const rules1 = [
  {
    ruleSelector: '.form-input--name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя слишком короткое'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.form-input--email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      }
    ]
  },
];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

validateForms('.callback-form', rules1);
