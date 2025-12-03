export interface APIResponse {
  message: string;
}

export interface MetricsResult {
  ram: number[];
  vcpu: number[];
  storage: number;
  network_receive: number[];
  network_send: number[];
}
