import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddProductsComponent } from './modal-add-products.component';

describe('ModalAddProductsComponent', () => {
  let component: ModalAddProductsComponent;
  let fixture: ComponentFixture<ModalAddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
