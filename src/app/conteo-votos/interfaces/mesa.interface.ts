import { Distrito } from './distrito.interface';

export interface Mesa {
  id?: string;
  nombre?: string;
  numero_mesa?: number;
  status?: boolean;
  status_voto?: boolean;
  createAt?: string;
  updateAt?: string;
  distrito: Distrito;
}
