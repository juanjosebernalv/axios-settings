import { api } from './config/axiosConfig';
import { defineCancelApiObject } from './config/axiosUtils';

export const TestApi = {
  getPokemons: async function (cancel = false) {
    const response = await api.request({
      url: '/pokemon',
      method: 'GET',
      headers: {},
      signal: cancel ? defineCancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
    });
    return response;
  }
};