import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';
import { ProdutoModel } from './produtos/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<any> {

    return this.http.get(environment.apiUrl2);
  }

  cadastrarProdutos(produto: ProdutoModel): Observable<any> {
    return this.http.post(environment.apiUrl2, produto);
  }

  atualizarProdutos(id: any, produto: ProdutoModel): Observable<any> {
    return this.http.put(environment.apiUrl2.concat(id), produto);
  }

  removerProdutos(id: any) {
    return this.http.delete(environment.apiUrl2.concat(id));
  }
}
