import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCrawlComponent } from './edit-crawl.component';

describe('EditCrawlComponent', () => {
  let component: EditCrawlComponent;
  let fixture: ComponentFixture<EditCrawlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCrawlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
