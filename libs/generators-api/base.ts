import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { Observable } from 'rxjs';
const avoidStatusCode = [401];

interface RequestArgs {
  method: HttpMethod;
  url: string;
  queryParams?: object;
  payload?: object;
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class Rxios {
  private _httpClient: AxiosInstance;

  constructor(options?: { baseURL: string | undefined }) {
    this._httpClient = axios.create(options);
    this._httpClient.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        if (avoidStatusCode.includes(error.response.status)) {
          localStorage.removeItem('token');
        }

        return Promise.reject(error.response);
      }
    );
  }

  private _doReq<T>(args: RequestArgs) {
    const { method, url, queryParams, payload } = args;
    let request: AxiosPromise<T>;
    switch (method) {
      case HttpMethod.GET:
        request = this._httpClient.get<T>(url, { params: queryParams });
        break;
      case HttpMethod.POST:
        request = this._httpClient.post<T>(url, payload);
        break;
      case HttpMethod.PUT:
        request = this._httpClient.put<T>(url, payload);
        break;
      case HttpMethod.PATCH:
        request = this._httpClient.patch<T>(url, payload);
        break;
      case HttpMethod.DELETE:
        request = this._httpClient.delete<T>(url);
        break;
    }
    return new Observable<T>((subscriber) => {
      request
        .then((response) => {
          subscriber.next(response.data);
        })
        .catch((err: Error) => {
          subscriber.error(err);
        })
        .finally(() => {
          subscriber.complete();
        });
    });
  }

  public get<T>(url: string, queryParams?: object) {
    return this._doReq<T>({ method: HttpMethod.GET, url, queryParams });
  }

  public post<T>(url: string, payload: object) {
    return this._doReq<T>({
      method: HttpMethod.POST,
      url,
      payload,
    });
  }

  public put<T>(url: string, payload: object) {
    return this._doReq<T>({
      method: HttpMethod.PUT,
      url,
      payload,
    });
  }

  public patch<T>(url: string, payload: object) {
    return this._doReq<T>({
      method: HttpMethod.PATCH,
      url,
      payload,
    });
  }

  public delete<T>(url: string) {
    return this._doReq<T>({
      method: HttpMethod.DELETE,
      url,
    });
  }
}

export const rxios = new Rxios();
