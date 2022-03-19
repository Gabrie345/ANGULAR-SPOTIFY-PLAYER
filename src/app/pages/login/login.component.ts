import { SpotifyServiceService } from './../../service/spotify-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private SpotifyServiceService:SpotifyServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.validacaoTokenUrlCallBack()
  }
  validacaoTokenUrlCallBack(){
    const token = this.SpotifyServiceService.tokenUrlCallBack()
    if(!!token){ 
      this.SpotifyServiceService.definirToken(token)
      this.router.navigate(['/player'])
    }
  }

  login(){
    window.location.href = (this.SpotifyServiceService.UrlLogin())

  }

}
