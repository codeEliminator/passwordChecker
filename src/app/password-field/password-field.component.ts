import { Component } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css']
})
export class PasswordFieldComponent {
  password: string = '';
  colors: string[] = ['gray', 'gray', 'gray']; 
  showPassword: boolean = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor() {}

  onPasswordChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.password = element.value;
    this.updateStrength();
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  private updateStrength() {
    if (!this.password) {
      this.colors = ['gray', 'gray', 'gray'];
      return;
    }

    if (this.password.length < 8) {
      this.colors = ['red', 'red', 'red'];
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (hasLetters && hasDigits && hasSymbols) {
      this.colors = ['green', 'green', 'green']; 
    } else if (hasLetters && (hasDigits || hasSymbols) || (hasDigits && hasSymbols)) {
      this.colors = ['yellow', 'yellow', 'gray']; 
    } else {
      this.colors = ['red', 'gray', 'gray']; 
    }
  }
}
