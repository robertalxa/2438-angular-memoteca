// ng g s componentes/pensamentos/pensamento esse é o comando para gerar um service

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Isso daqui diz que o provedor desse serviço é o root, logo o serviço está disponível para toda a aplicação
})
export class PensamentoService {
  constructor() {}
}
