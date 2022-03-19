import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  
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
