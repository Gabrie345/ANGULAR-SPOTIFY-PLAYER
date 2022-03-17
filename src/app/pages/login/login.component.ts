import { SpotifyServiceService } from './../../service/spotify-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private SpotifyServiceService:SpotifyServiceService) { }

  ngOnInit(): void {
    this.validacaoTokenUrlCallBack()
  }
  validacaoTokenUrlCallBack(){
    const token = this.SpotifyServiceService.tokenUrlCallBack()
    
    if(!!token){ this.SpotifyServiceService.definirToken(token)}
  }
  login(){
    window.location.href = (this.SpotifyServiceService.UrlLogin())

  }

}
