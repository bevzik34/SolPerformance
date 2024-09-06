import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSmallScreenComponent } from './menu-small-screen.component';

describe('MenuSmallScreenComponent', () => {
  let component: MenuSmallScreenComponent;
  let fixture: ComponentFixture<MenuSmallScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuSmallScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSmallScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
