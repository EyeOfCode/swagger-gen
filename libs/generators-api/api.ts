import { Observable } from 'rxjs';

import { Rxios } from './base';

import { App, CreateAppDto, SuccessResponse } from './data-contracts';

export default class Api extends Rxios {
  constructor(token?: string) {
    super({ baseURL: process.env.NX_URI_SERVICE_API, token });
  }

  AppControllerGetData = (): Observable<App[]> => this.get<App[]>(`/api/app`);

  AppControllerCreateData = (data: CreateAppDto): Observable<App> =>
    this.post<App>(`/api/app`, data as unknown as Record<string, unknown>);

  AppControllerRemoveData = (): Observable<SuccessResponse> => this.delete<SuccessResponse>(`/api/app`);

  AppControllerGetDataById = (id: any): Observable<App> => this.get<App>(`/api/app/${id}`);
}
