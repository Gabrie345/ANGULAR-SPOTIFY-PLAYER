import { PlayerRotas } from './player.routes';
import { PlayerComponent } from './player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BotaoComponent } from '../components/botao/botao.component';
import { MusicPlayComponent } from '../components/music-play/music-play.component';
import { AreaDoClienteLogadoComponent } from '../components/area-do-cliente-logado/area-do-cliente-logado.component';
import { HomeComponent } from '../components/home/home.component';



@NgModule({
  declarations: [
    PlayerComponent,
    NavComponent,
    BotaoComponent,
    HomeComponent,
    MusicPlayComponent,
    AreaDoClienteLogadoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas),
    
  ]
})
export class PlayerModule { }
