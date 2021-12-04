import { ClienteModel } from "../clientes/clientes.model";
import { ProdutoModel } from "../produtos/produto.model";
import { UsuarioModel } from "../usuarios/usuario.model";

export class PedidoModel {
  cliente: ClienteModel | undefined;
  produto: ProdutoModel | undefined;
  qtdade: number | undefined;
  total: number | undefined;
  usuario: UsuarioModel | undefined;
}
