import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [CommonModule, DefaultLoginLayoutComponent],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtn: string = "";
  @Input() secondaryBtn: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Input() showImage: boolean = false;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navegator") onNavegator = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navegator(){
    this.onNavegator.emit();
  }
}
