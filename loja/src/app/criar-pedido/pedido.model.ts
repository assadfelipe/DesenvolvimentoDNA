import { ClienteModel } from "../clientes/clientes.model";
import { ProdutoModel } from "../produtos/produto.model";
import { UsuarioModel } from "../usuarios/usuario.model";

export class PedidoModel {
  cliente: string = "";
  produto: string = "";
  qtdade: number = 0;
  preco: number = 0;
  total: number = 0;
  usuario: string = "";

}
