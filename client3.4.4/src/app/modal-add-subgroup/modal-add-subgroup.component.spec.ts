import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddSubgroupComponent } from './modal-add-subgroup.component';

describe('ModalAddSubgroupComponent', () => {
  let component: ModalAddSubgroupComponent;
  let fixture: ComponentFixture<ModalAddSubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddSubgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
