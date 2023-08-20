import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerTestComponentComponent } from './docker-test-component.component';

describe('DockerTestComponentComponent', () => {
  let component: DockerTestComponentComponent;
  let fixture: ComponentFixture<DockerTestComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DockerTestComponentComponent]
    });
    fixture = TestBed.createComponent(DockerTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
