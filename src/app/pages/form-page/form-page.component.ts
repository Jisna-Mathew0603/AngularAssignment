import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-page.component.html',
})
export class FormPageComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form inside the constructor, after fb is available
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      alert('Submitted:\n' + JSON.stringify(this.feedbackForm.value));
      this.feedbackForm.reset();
    }
  }
}
