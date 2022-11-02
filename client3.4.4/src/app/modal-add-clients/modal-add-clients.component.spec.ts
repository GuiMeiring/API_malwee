import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddClientsComponent } from './modal-add-clients.component';

describe('ModalAddClientsComponent', () => {
  let component: ModalAddClientsComponent;
  let fixture: ComponentFixture<ModalAddClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
