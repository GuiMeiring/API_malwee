import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCollectionComponent } from './model-collection.component';

describe('ModelCollectionComponent', () => {
  let component: ModelCollectionComponent;
  let fixture: ComponentFixture<ModelCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
