export interface CreateWhitelistDto {
  name: string;
}

export type UpdateWhitelistDto = object;

export interface Project {
  name: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface CreateAppDto {
  name: string;
}

export interface SuccessResponse {
  /** @example "Success!!" */
  message: string;
}
