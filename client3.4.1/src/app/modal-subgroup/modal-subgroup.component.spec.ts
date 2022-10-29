import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubgroupComponent } from './modal-subgroup.component';

describe('ModalSubgroupComponent', () => {
  let component: ModalSubgroupComponent;
  let fixture: ComponentFixture<ModalSubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSubgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
