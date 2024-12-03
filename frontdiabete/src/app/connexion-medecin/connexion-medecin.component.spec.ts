import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionMedecinComponent } from './connexion-medecin.component';

describe('ConnexionMedecinComponent', () => {
  let component: ConnexionMedecinComponent;
  let fixture: ComponentFixture<ConnexionMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionMedecinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
