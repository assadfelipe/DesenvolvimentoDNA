import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from './usuarios/usuario.model';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  listarUsuarios() : Observable<any> {

    return this.http.get(environment.apiUrl1);
  }

  cadastrarUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post(environment.apiUrl1, usuario);
  }

  atualizarUsuario(id: any, usuario: UsuarioModel): Observable<any> {
    return this.http.put(environment.apiUrl1.concat(id), usuario);
  }

  removerUsuario(id: any) {
    return this.http.delete(environment.apiUrl1.concat(id));
  }

}
