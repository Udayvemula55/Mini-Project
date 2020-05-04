import { Component, OnInit, EventEmitter, Input, SimpleChanges, OnChanges, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { tap, startWith } from 'rxjs/operators';

import { IInputValidator } from './models/i-input-validator';
import { IInputForm } from './models/i-input-form';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnChanges, OnInit {
  public get defaultValue(): string {
    return this._defaultValue;
  }

  @Input()
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public get errorMessage(): string {
    return this._errorMessage;
  }

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
  public inputFormControlEmitter: EventEmitter<IInputForm>;

  @Output()
  public inputEmitter: EventEmitter<string>;


  private _inputFormControl: FormControl;
  public get inputFormControl(): FormControl {
    return this._inputFormControl;
  }

  private _defaultValue: string = null;

  private _errorMessage: string = null;

  constructor() {
    this._inputFormControl = new FormControl();
    this.inputFormControlEmitter = new EventEmitter<IInputForm>();
    this.inputEmitter = new EventEmitter<string>();
  }

  public ngOnChanges(changes: SimpleChanges): void {

    if ('defaultValue' in changes) {
      const { defaultValue } = changes;
      this._inputFormControl.setValue(defaultValue.currentValue);
    }

    if ('isDisabled' in changes) {
      const { isDisabled } = changes;
      if (isDisabled.currentValue) {
        this._inputFormControl.disable();
      }
    }

    if ('validators' in changes) {
      const { validators } = changes;
      if (validators.firstChange && validators.currentValue !== validators.previousValue) {
        const validatorsList = Object.values(this.validators).map((validator) => validator.validationFunc);
        this._inputFormControl.setValidators(validatorsList);
      }
    }
  }

  public ngOnInit(): void {
    this.inputFormControlEmitter.emit({ name: this.id, control: this._inputFormControl });

    this._inputFormControl.valueChanges
      .pipe(
        startWith(this.defaultValue),
        tap((data: string) => {
          if (this.isValidationStyleRequired) {
            this.inputClass = this._inputFormControl.invalid ? 'is-invalid' : 'is-valid';
          }
          this._errorMessage = this._inputFormControl.invalid ? this.getErrorMessage() : '';
          this.inputEmitter.emit(data);
        }),
      ).subscribe();

    if (this.clearEmitter) {
      this.clearEmitter
        .pipe()
        .subscribe(() => { this.resetInputField(); });
    }
  }

  // tslint:disable-next-line: no-empty
  public ngOnDestroyMixin(): void { }

  public getErrorMessage(): string {
    const errorName = Object.keys(this.inputFormControl.errors)[0];
    return this.validators[errorName].errorMessage;
  }

  private resetInputField(): void {
    this._inputFormControl.setValue(null);
    this._inputFormControl.markAsUntouched();
  }

}
