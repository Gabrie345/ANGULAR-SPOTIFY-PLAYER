import { Routes } from "@angular/router";
import { AutenticacaoGuard } from "./guards/autenticacao.guard";

export const AppRotas: Routes = [
    {
        path:'',
        redirectTo:'player',
        pathMatch:'full'
    },
    {
        path:'player',
        loadChildren:() => import('./pages/player/player.module').then (x => x.PlayerModule),
        canLoad:[AutenticacaoGuard]
    },
    {
        path:'login',
        loadChildren:() => import('./pages/login/login.module').then (x => x.LoginModule)
    }
]