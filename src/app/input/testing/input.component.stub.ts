import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IInputValidator } from '../models/i-input-validator';
import { IInputForm } from '../models/i-input-form';


@Component({
  selector: 'app-input',
  template: 'input stub'
})
// tslint:disable-next-line: component-class-suffix
export class InputComponentStub {

  @Input()
  public defaultValue: string;

  @Input()
  public isLabelRequired = false;

  @Input()
  public isDisabled = false;

  @Input()
  public clearEmitter?: EventEmitter<void>;

  @Input()
  public validators?: IInputValidator = {};

  @Input()
  public inputPlaceholder = '';

  @Input()
  public inputFormControl: AbstractControl;

  @Input()
  public label: string;

  @Input()
  public id: string;

  @Input()
  public type = 'text';

  @Input()
  public labelClass = 'text-white';

  @Input()
  public inputClass;

  @Input()
  public isValidationStyleRequired = false;

  @Output()
  public inputFormControlEmitter: EventEmitter<IInputForm> = new EventEmitter<IInputForm>();

}
