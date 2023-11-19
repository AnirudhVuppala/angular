import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './my_demo.component.html',
})
export class DemoComponent {
@Input() val = "hi"
}