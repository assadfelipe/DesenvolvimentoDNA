import { Component, OnInit } from '@angular/core';
import { CriarPedidoService } from '../criar-pedido.service';
import { PedidoModel } from './pedido.model';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {

  pedido:  PedidoModel = new PedidoModel();
  pedidos: Array<any> = new Array();

  constructor(private ClientesService: CriarPedidoService) { }

  ngOnInit(): void {
    this.listarPedidos();
  }

  listarPedidos() {
    this.ClientesService.listarPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    }, err => { console.log('Erro ao listar Clientes', err) });
  }

  cadastrar() {
    console.log(this.pedido);
    this.ClientesService.cadastrarPedidos(this.pedido).subscribe(pedido => {
      this.pedido = new PedidoModel();
      this.listarPedidos();
    }, err => { console.log('Erro ao cadastrar Cliente.', err) });
  }

  atualizar(id: number) {
    this.ClientesService.atualizarPedidos(id, this.pedido).subscribe(pedido => {
      this.pedido = new PedidoModel();
      this.listarPedidos();
    }, err => { console.log('Erro ao atualizar Cliente.', err) });
  }

  remover(id: number) {
    this.ClientesService.removerPedidos(id).subscribe(pedido => {
      this.pedido = new PedidoModel();
      this.listarPedidos();
    }, err => { console.log('Erro ao remover Cliente.', err) });
  }

}
