import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { UsuariosService } from './usuarios.service';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosService } from './produtos.service';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './clientes.service';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { CriarPedidoService } from './criar-pedido.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ProdutosComponent,
    ClientesComponent,
    ClientesComponent,
    CriarPedidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, UsuariosService, ProdutosService, ClientesService, CriarPedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
