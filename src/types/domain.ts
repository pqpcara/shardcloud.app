export interface DomainResponse {
  id: string;
  hostname: string;
  status: string;
  ownership_verification: object;
  ownership_verification_http: object;
  ssl: object;
  custom_metadata: object;
}

export interface UpdateDomain {
  message: string;
  custom_hostname: object;
  cname: string;
}
