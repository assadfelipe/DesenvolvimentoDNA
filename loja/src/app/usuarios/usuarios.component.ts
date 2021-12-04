import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { UsuarioModel } from './usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  usuarios: Array<any> = new Array();

  constructor(private UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.UsuariosService.listarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => { console.log('Erro ao listar usuarios', err) });
  }

  cadastrar() {
    console.log(this.usuario);
    this.UsuariosService.cadastrarUsuario(this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => { console.log('Erro ao cadastrar Usuario.', err) });
  }

  atualizar(id: number) {
    this.UsuariosService.atualizarUsuario(id, this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => { console.log('Erro ao atualizar Usuario.', err) });}

  remover(id: number) {
    this.UsuariosService.removerUsuario(id).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => { console.log('Erro ao atualizar Usuario.', err) }); }

}
