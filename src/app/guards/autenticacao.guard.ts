import { SpotifyServiceService } from './../service/spotify-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad {

  constructor(
    private router:Router,
    private spotifyService:SpotifyServiceService)
    {}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('token')
    
    if (!token){
      return this.faltaToken()
      
    }
    return new Promise((res) =>{
      const usurario = this.spotifyService.inicializarServico();
      if(usurario) res(true);
      else res(this.faltaToken())
    })
  }

  faltaToken(){
    localStorage.clear
    this.router.navigate(['/login'])
    return false
  }
}
