import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { SimpleChange, EventEmitter } from '@angular/core';

import { InputComponent } from './input.component';



describe('InputComponent =>', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        InputComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.isValidationStyleRequired = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should defind form control', () => {
    expect(component.inputFormControl).toBeDefined();
  });

  it('By default place holder value should be empty string', () => {
    expect(component.inputPlaceholder).toEqual('');
  });

  describe('ngOnChanges() defaultValue=>', () => {
    const defaultData = 'Hello';
    it('should define inputFormControl with defaultdata', () => {
      component.defaultValue = defaultData;
      component.ngOnChanges({ defaultValue: new SimpleChange(null, defaultData, false) });

      fixture.detectChanges();

      expect(component.inputFormControl.value).toEqual(defaultData);
    });
  });

  it('should call inputFormControlEmitter with formcontrol ', () => {
    const changeDataEmitterEmitSpy = spyOn(component.inputFormControlEmitter, 'emit');
    const id = 'test';
    component.id = id;

    component.ngOnInit();
    fixture.detectChanges();

    const emmitingdata = { name: id, control: component.inputFormControl };

    expect(changeDataEmitterEmitSpy).toHaveBeenCalledWith(emmitingdata);
  });

  describe('ngOnChanges() validators=>', () => {
    const validators = {
      required: {
        validationFunc: Validators.required,
        errorMessage: 'required.',
      }
    };

    it('should define inputFormControl with defaultdata', () => {
      component.validators = validators;
      component.ngOnChanges({ validators: new SimpleChange(null, validators, true) });

      component.inputFormControl.setValue(null);
      fixture.detectChanges();
      expect(component.inputFormControl.valid).toEqual(false);
    });
  });

  describe('ngOnChanges() isDisabled=>', () => {

    it('should disabled inputFormControl', () => {
      component.ngOnChanges({ isDisabled: new SimpleChange(null, true, true) });

      fixture.detectChanges();
      expect(component.inputFormControl.disabled).toBeTruthy();
    });
  });

  describe('clearEmitter()', () => {

    it('should fire resetSelectedData', () => {
      const emitter = new EventEmitter<void>();

      component.clearEmitter = emitter;
      // tslint:disable-next-line: no-any
      const resetSelectedDataSpy = spyOn<any>(component, 'resetInputField');
      component.ngOnInit();

      emitter.emit();

      expect(resetSelectedDataSpy).toHaveBeenCalled();
    });

  });

  describe('resetInputField()', () => {
    const defaultData = 'Hello';
    it('should reset textAreaFormControl to null', () => {
      component.defaultValue = defaultData;
      component.ngOnChanges({ defaultValue: new SimpleChange(null, defaultData, false) });

      fixture.detectChanges();

      component['resetInputField']();

      expect(component.inputFormControl.value).toBeNull();
    });
  });

});
