import { Observable } from 'rxjs';

import { Rxios } from 'rxios';

import { CreateAppDto } from './data-contracts';

export default class Api extends Rxios {
  AppControllerGetData = (): Observable<void> => this.get<void>(`/api/app`);

  AppControllerCreateData = (data: CreateAppDto): Observable<void> =>
    this.post<void>(`/api/app`, data as unknown as Record<string, unknown>);
}
