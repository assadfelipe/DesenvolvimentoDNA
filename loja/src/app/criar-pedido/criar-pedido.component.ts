import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../clientes/clientes.model';
import { CriarPedidoService } from '../criar-pedido.service';
import { ProdutoModel } from '../produtos/produto.model';
import { UsuarioModel } from '../usuarios/usuario.model';
import { PedidoModel } from './pedido.model';


@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {

  pedido: PedidoModel = new PedidoModel();
  pedidos: Array<any> = new Array();

  cliente: ClienteModel = new ClienteModel();
  clientes: Array<any> = new Array();

  produto: ProdutoModel = new ProdutoModel();
  produtos: Array<any> = new Array();

  usuario: UsuarioModel = new UsuarioModel();
  usuarios: Array<any> = new Array();

  constructor(private CriarPedidoService: CriarPedidoService) { }

  ngOnInit(): void {
    this.listarPedidos();
    this.listarClientes();
    this.listarProdutos();
    this.listarUsuarios();
  }

  listarPedidos() {
    this.CriarPedidoService.listarPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    }, err => { console.log('Erro ao listar Pedidos', err) });
  }

  checar(event: any) {
    //this.pedido.cliente = this.cliente.razao;
    //console.log(this.pedido.cliente);
    alert("cliente2: " + this.cliente.razao);
  }

  cadastrar() {
    alert("cliente2: " + this.pedido.cliente + ", " + this.pedido.qtdade);

    this.pedido.total = this.pedido.qtdade * this.pedido.produto.preco;
    this.CriarPedidoService.cadastrarPedidos(this.pedido).subscribe(pedido => {
      this.pedido = new PedidoModel();
      this.listarPedidos();
    }, err => { console.log('Erro ao cadastrar Cliente.', err) });
  }

  atualizar(id: number) {
    this.CriarPedidoService.atualizarPedidos(id, this.pedido).subscribe(pedido => {
      this.pedido = new PedidoModel();
      this.listarPedidos();
    }, err => { console.log('Erro ao atualizar Cliente.', err) });
  }

  remover(id: number) {
    this.CriarPedidoService.removerPedidos(id).subscribe(pedido => {
      this.pedido = new PedidoModel();
      this.listarPedidos();
    }, err => { console.log('Erro ao remover Cliente.', err) });
  }

  listarClientes() {
    this.CriarPedidoService.listarClientes().subscribe(clientes => {
      this.clientes = clientes;
    }, err => { console.log('Erro ao listarrr Cliente.', err) });
  }

  listarProdutos() {
    this.CriarPedidoService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, err => { console.log('Erro ao listarrr Produto.', err) });
  }

  listarUsuarios() {
    this.CriarPedidoService.listarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => { console.log('Erro ao listarrr Cliente.', err) });
  }
}
