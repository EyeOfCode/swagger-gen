export interface App {
  name: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface CreateAppDto {
  name: string;
}
