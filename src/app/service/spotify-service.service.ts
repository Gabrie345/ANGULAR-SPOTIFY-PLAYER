import { IUsuario } from './../interface/IUsuario';
import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from './../../environments/environment';
import  Spotify  from 'spotify-web-api-js'
import { SpotifyUser } from '../Common/spotifyHelper';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {
  spotifyAPI: Spotify.SpotifyWebApiJs;
  usuario: IUsuario;

  constructor () {
    this.spotifyAPI = new Spotify();

  }

  async inicializarServico() {
    if(!!this.usuario) return true;
    const token = localStorage.getItem('token');
    if(!token) return false

    try {
      this.definirToken(token)
      await  this.obterUsuarioSpotify();
      return true;
    } catch (ex) {
      return false;
    }

  }
  async obterUsuarioSpotify(){
    const userInfo = await this.spotifyAPI.getMe();
    this.usuario = SpotifyUser(userInfo);
    console.log(userInfo);
    console.log(this.usuario);
     
  }

  UrlLogin(){
    const authEndpoint = `${SpotifyConfiguration.auth_Endpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.client_Id}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirect_Url}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }
  tokenUrlCallBack() {
    console.log(window.location.hash)
    if(!window.location.hash) return '';
    const parametros = window.location.href.substring(1).split('&');
    const token = parametros[0].split('=')[1];

    return token;
  }
  definirToken(token : string){
    this.spotifyAPI.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
