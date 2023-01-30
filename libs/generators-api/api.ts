import { Observable } from 'rxjs';

import { Rxios } from './base';

import { CreateAppDto, Project, SuccessResponse } from './data-contracts';

export default class Api extends Rxios {
  constructor(headers?: object) {
    super({ baseURL: process.env.NX_URI_SERVICE_API || 'http://localhost:8000', headers });
  }

  WhitelistControllerFindAll = (): Observable<void> => this.get<void>(`/api/whitelist`);

  ProjectControllerGetData = (): Observable<Project[]> => this.get<Project[]>(`/api/project`);

  ProjectControllerCreateData = (data: CreateAppDto): Observable<Project> =>
    this.post<Project>(`/api/project`, data as unknown as Record<string, unknown>);

  ProjectControllerRemoveData = (): Observable<SuccessResponse> => this.delete<SuccessResponse>(`/api/project`);

  ProjectControllerGetDataById = (id: any): Observable<Project> => this.get<Project>(`/api/project/${id}`);
}
