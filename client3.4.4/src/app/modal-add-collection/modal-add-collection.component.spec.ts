import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCollectionComponent } from './modal-add-collection.component';

describe('ModalAddCollectionComponent', () => {
  let component: ModalAddCollectionComponent;
  let fixture: ComponentFixture<ModalAddCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
