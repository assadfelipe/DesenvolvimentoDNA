import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { PedidoModel } from './criar-pedido/pedido.model';


@Injectable({
  providedIn: 'root'
})
export class CriarPedidoService {

  constructor(private http: HttpClient) { }

  listarPedidos(): Observable<any> {

    return this.http.get(environment.apiUrl4);
  }

  cadastrarPedidos(pedido: PedidoModel): Observable<any> {
    return this.http.post(environment.apiUrl4, pedido);
  }

  atualizarPedidos(id: any, pedido: PedidoModel): Observable<any> {
    return this.http.put(environment.apiUrl4.concat(id), pedido);
  }

  removerPedidos(id: any) {
    return this.http.delete(environment.apiUrl4.concat(id));
  }

  listarClientes(): Observable<any> {

    return this.http.get(environment.apiUrl3);
  }

  listarProdutos(): Observable<any> {

    return this.http.get(environment.apiUrl2);
  }

  listarUsuarios(): Observable<any> {

    return this.http.get(environment.apiUrl1);
  }

}
