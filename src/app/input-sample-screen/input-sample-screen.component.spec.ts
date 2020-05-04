import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSampleScreenComponent } from './input-sample-screen.component';
import { InputComponentStub } from '../input/testing/input.component.stub';



describe('InputSampleScreenComponent', () => {
  let component: InputSampleScreenComponent;
  let fixture: ComponentFixture<InputSampleScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        InputSampleScreenComponent,
        InputComponentStub
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSampleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
