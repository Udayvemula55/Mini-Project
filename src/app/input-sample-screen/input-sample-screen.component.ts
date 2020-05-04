import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IInputForm } from '../input/models/i-input-form';


@Component({
  selector: 'input-sample-screen',
  templateUrl: './input-sample-screen.component.html',
  styleUrls: ['./input-sample-screen.component.css']
})

export class InputSampleScreenComponent {
  public readonly SAMPLE_VALIDATORS = {
    required: {
      validationFunc: Validators.required,
      errorMessage: 'This field is required.',
    },
    minlength: {
      validationFunc: Validators.minLength(4),
      errorMessage: 'minimum length 4',
    }
  } as const;

  private _inputSampleForm: FormGroup;
  public get inputSampleForm(): FormGroup {
    return this._inputSampleForm;
  }

  constructor(private _formBuilder: FormBuilder) {

    this._inputSampleForm = this._formBuilder.group({
      ['ival']: [null, Validators.required],
    });

    this._inputSampleForm.removeControl('ival');
  }

  public onSubmit(): void {
    if (this.inputSampleForm.valid) {
      // console.log(this.inputSampleForm);
    }
  }

  public setInputFormControlHandler(data: IInputForm): void {
    this._inputSampleForm.addControl(data.name, data.control);
  }

}
