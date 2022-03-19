import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.scss']
})
export class MusicPlayComponent implements OnInit {

  @Input()
  descricao = '';
  @Input()
  selecionado = false;

  @Output()
  click = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
    
  }
  onClick(){
    this.click.emit();
  }


}
