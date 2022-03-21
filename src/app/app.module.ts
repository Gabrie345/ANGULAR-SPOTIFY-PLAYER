import { AppRotas } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerComponent } from './pages/player/player.component';
import { NavComponent } from './pages/components/nav/nav.component';
import { BotaoComponent } from './pages/components/botao/botao.component';
import { HomeComponent } from './pages/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    //PlayerComponent,
    //NavComponent,
    //BotaoComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
