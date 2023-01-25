import { Observable } from 'rxjs';

import { Rxios } from './base';

import { App, CreateAppDto } from './data-contracts';

export default class Api extends Rxios {
  constructor() {
    super({ baseURL: process.env.NX_URI_SERVICE_API });
  }

  AppControllerGetData = (): Observable<App[]> => this.get<App[]>(`/api/app`);

  AppControllerCreateData = (data: CreateAppDto): Observable<App> =>
    this.post<App>(`/api/app`, data as unknown as Record<string, unknown>);

  AppControllerGetDataById = (id: any): Observable<App> => this.get<App>(`/api/app/${id}`);
}
