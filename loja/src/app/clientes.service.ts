import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ClienteModel } from './clientes/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<any> {

    return this.http.get(environment.apiUrl3);
  }

  cadastrarClientes(produto: ClienteModel): Observable<any> {
    return this.http.post(environment.apiUrl3, produto);
  }

  atualizarClientes(id: any, produto: ClienteModel): Observable<any> {
    return this.http.put(environment.apiUrl3.concat(id), produto);
  }

  removerClientes(id: any) {
    return this.http.delete(environment.apiUrl3.concat(id));
  }
}
