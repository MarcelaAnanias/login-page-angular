import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [DefaultLoginLayoutComponent],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = ""
  @Input() primaryBtn: string = ""
  @Input() secondaryBtn: string = ""
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navegator") onNavegator = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navegator(){
    this.onNavegator.emit();
  }
}
