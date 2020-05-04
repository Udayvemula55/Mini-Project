import { ValidatorFn } from '@angular/forms';


export interface IInputValidator {
  [validatorName: string]: {
    validationFunc: ValidatorFn;
    errorMessage: string;
  };
}
