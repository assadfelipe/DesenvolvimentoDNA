import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ProdutoModel } from './produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  produtos: Array<any> = new Array();

  constructor(private ProdutosService: ProdutosService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.ProdutosService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, err => { console.log('Erro ao listar Produtos', err) });
  }

  cadastrar() {
    console.log(this.produto);
    this.ProdutosService.cadastrarProdutos(this.produto).subscribe(produto => {
      this.produto = new ProdutoModel();
      this.listarProdutos();
    }, err => { console.log('Erro ao cadastrar Produto.', err) });
  }

  atualizar(id: number) {
    this.ProdutosService.atualizarProdutos(id, this.produto).subscribe(produto => {
      this.produto = new ProdutoModel();
      this.listarProdutos();
    }, err => { console.log('Erro ao atualizar Produto.', err) });
  }

  remover(id: number) {
    this.ProdutosService.removerProdutos(id).subscribe(produto => {
      this.produto = new ProdutoModel();
      this.listarProdutos();
    }, err => { console.log('Erro ao remover Produto.', err) });
  }

}
