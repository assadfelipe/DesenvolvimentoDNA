import { ClienteModel } from "../clientes/clientes.model";
import { ProdutoModel } from "../produtos/produto.model";
import { UsuarioModel } from "../usuarios/usuario.model";

export class PedidoModel {
  cliente: ClienteModel = new ClienteModel();
  produto: ProdutoModel = new ProdutoModel();
  qtdade: number = 0;
  total: number = 0;
  usuario: UsuarioModel = new UsuarioModel();
}
