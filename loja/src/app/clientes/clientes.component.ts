import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { ClienteModel } from './clientes.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel();
  clientes: Array<any> = new Array();

  constructor(private ClientesService: ClientesService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.ClientesService.listarClientes().subscribe(clientes => {
      this.clientes = clientes;
    }, err => { console.log('Erro ao listar Clientes', err) });
  }

  cadastrar() {
    console.log(this.cliente);
    this.ClientesService.cadastrarClientes(this.cliente).subscribe(cliente => {
      this.cliente = new ClienteModel();
      this.listarClientes();
    }, err => { console.log('Erro ao cadastrar Cliente.', err) });
  }

  atualizar(id: number) {
    this.ClientesService.atualizarClientes(id, this.cliente).subscribe(cliente => {
      this.cliente = new ClienteModel();
      this.listarClientes();
    }, err => { console.log('Erro ao atualizar Cliente.', err) });
  }

  remover(id: number) {
    this.ClientesService.removerClientes(id).subscribe(cliente => {
      this.cliente = new ClienteModel();
      this.listarClientes();
    }, err => { console.log('Erro ao remover Cliente.', err) });
  }

}
