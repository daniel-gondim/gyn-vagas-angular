import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ActivatedRoute, RouterModule} from "@angular/router";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
          }
        }
      ],
    }).compileComponents();
  })
    ;

    it('deve criar a aplicação Gyn Vagas', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`deve ter o título 'Gyn Vagas'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Gyn Vagas');
    });

    it('deve renderizar o título Gyn Vagas na navbar', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.navbar-brand')?.textContent).toContain('Gyn Vagas');
    });
  });
