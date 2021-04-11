import { SignupFormData } from '../../pages/volunteer/SignupFormData';

export const submitEventSignup = (signupURL: string, form: SignupFormData) => {
  const { firstName, lastName, email, phone } = form;

  const data = {
    person: {
      given_name: firstName,
      family_name: lastName,
      email_addresses: [{ address: email }],
      phone_numbers: [{ number: phone }],
    },
    triggers: {
      autoresponse: {
        enabled: true,
      },
    },
  };

  return fetch(signupURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
