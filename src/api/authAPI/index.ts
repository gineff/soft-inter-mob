import { HTTP } from '@/api/http';
import { FormUserData } from '@/components/sign-up-form/validation';

export const fetchSignUp = async (data: FormUserData): Promise<string> =>
  HTTP.post('', {
    url: 'http://143.198.166.95/api/contact_form/order',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export const authAPI = {
  fetchSignUp,
};
