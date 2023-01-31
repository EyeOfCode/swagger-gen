import { Observable } from 'rxjs';

import { Rxios } from './base';

import { CreateAppDto, Project, SuccessResponse } from './data-contracts';

export default class Api extends Rxios {
  constructor(headers?: object) {
    super({ baseURL: process.env.NX_URI_SERVICE_API || 'http://localhost:8000', headers });
  }

  getWhitelistControllerFindAll = (): Observable<void> => this.get<void>(`/api/whitelist`);

  postWhitelistControllerUpload = (data: { files?: File[] }): Observable<void> =>
    this.post<void>(`/api/whitelist/upload`, data as unknown as Record<string, unknown>);

  getProjectControllerGetData = (): Observable<Project[]> => this.get<Project[]>(`/api/project`);

  postProjectControllerCreateData = (data: CreateAppDto): Observable<Project> =>
    this.post<Project>(`/api/project`, data as unknown as Record<string, unknown>);

  deleteProjectControllerRemoveData = (): Observable<SuccessResponse> => this.delete<SuccessResponse>(`/api/project`);

  getProjectControllerGetDataById = (id: any): Observable<Project> => this.get<Project>(`/api/project/${id}`);
}
