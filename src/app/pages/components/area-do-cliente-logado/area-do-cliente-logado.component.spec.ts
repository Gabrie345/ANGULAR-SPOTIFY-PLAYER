import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDoClienteLogadoComponent } from './area-do-cliente-logado.component';

describe('AreaDoClienteLogadoComponent', () => {
  let component: AreaDoClienteLogadoComponent;
  let fixture: ComponentFixture<AreaDoClienteLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDoClienteLogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDoClienteLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
