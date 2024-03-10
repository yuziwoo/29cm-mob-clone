import axios, { AxiosInstance } from 'axios';

/**
 * 데이터 통신용 클래스
 * axios의 중복 호출을 방지 역할로 만들었으며, 모든 API 통신은 Http를 이용합니다.
 */

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

  static async postWithoutClient<T>({ url, data }: { url: string; data: FormData }) {
    // https://axios-http.com/docs/post_example
    return axios<T>({
      method: 'post',
      url,
      data,
    });
  }
}
