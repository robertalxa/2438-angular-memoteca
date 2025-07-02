// ng g s componentes/pensamentos/pensamento esse é o comando para gerar um service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root', // Isso daqui diz que o provedor desse serviço é o root, logo o serviço está disponível para toda a aplicação
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Pensamento[]>(this.API);
  }
}
