import { HomeComponent } from './../components/home/home.component';
import { PlayerComponent } from './player.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const PlayerRotas: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: 'home',
                component : HomeComponent
            }
            

        ]
    }

]