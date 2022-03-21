import { SpotifyServiceService } from './../../../service/spotify-service.service';
import { IUsuario } from './../../../interface/IUsuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-do-cliente-logado',
  templateUrl: './area-do-cliente-logado.component.html',
  styleUrls: ['./area-do-cliente-logado.component.scss']
})
export class AreaDoClienteLogadoComponent implements OnInit {
  usuario : String;

  constructor(
    private SpotifyService: SpotifyServiceService
  ) { }

  ngOnInit(): void {
    this.getClientName()
  }
  sair(){
    localStorage.removeItem('nomeClienteLogado');
    localStorage.removeItem('token');
    console.log('asddasasd');
    window.location.href = ("http://localhost:4200/login")
  }
  getClientName(){
    this.SpotifyService.inicializarServico();
    this.usuario = localStorage.getItem('nomeClienteLogado');
    console.log(this.usuario)
  }

}
