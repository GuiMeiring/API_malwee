import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddGroupComponent } from './modal-add-group.component';

describe('ModalAddGroupComponent', () => {
  let component: ModalAddGroupComponent;
  let fixture: ComponentFixture<ModalAddGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
