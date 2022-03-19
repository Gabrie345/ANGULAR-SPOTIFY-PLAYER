import { SpotifyServiceService } from './../../../service/spotify-service.service';
import { IPlaylist } from './../../../interface/IPlaylist';
import { Component, OnInit } from '@angular/core';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  opcaoSelecionado = "Home";
  playlist: IPlaylist[] = [];

  constructor(
    private spotifyService: SpotifyServiceService
  ) { }

  ngOnInit(): void {
    this.buscarPlaylist()
    
  }
  onClick(botao:string){
    this.opcaoSelecionado = botao;

  }
  async buscarPlaylist(){
    this.playlist = await this.spotifyService.bucarPlaylist();
    console.log(this.playlist)
  }

}
