
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { CustomvalidationService } from '../shared/utility/customvalidation.service';

@Directive({
  selector: '[appMatchEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchEmailDirective, multi: true }]
})
export class MatchEmailDirective implements Validator {
  @Input('appMatchEmail') MatchEmail: string[] = [];

  constructor(private customValidator: CustomvalidationService) { }

  validate(formGroup: FormGroup): ValidationErrors {
    return this.customValidator.MatchEmail(this.MatchEmail[0], this.MatchEmail[1])(formGroup);
  }
}