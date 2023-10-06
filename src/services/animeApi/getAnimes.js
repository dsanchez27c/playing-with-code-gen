import { api } from '../axios/Axios';
// import { status } from '../base/Base';

export const getAnimes = () => {
  return api.get();
  // try {
  //   const response = await api.get();

  //   /// success
  //   if (response.status === status.success) {
  //     console.log('Response: ', response);
  //   } else {
  //     console.log('Error en la petición...');
  //   }

  //   return response;
  // } catch (error) {
  //   console.log('Error: ', error);
  // }
};
