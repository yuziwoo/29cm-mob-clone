import axios, { AxiosInstance } from 'axios';

export class Http<T> {
  private httpClient: AxiosInstance;

  constructor({ baseURL, params }: { baseURL: string; params?: T }) {
    this.httpClient = axios.create({
      baseURL,
      params: params ? params : {},
    });
  }

  async get<T, P>({ api, params }: { api: string; params: P }) {
    return this.httpClient.get<T>(api, {
      params,
    });
  }

  static async getWithoutClient<T>(url: string) {
    return axios.get<T>(url);
  }
}
