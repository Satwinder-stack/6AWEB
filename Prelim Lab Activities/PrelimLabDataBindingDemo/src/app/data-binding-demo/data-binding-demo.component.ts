import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {

  message: string = "Hello from Angular!";

  imgUrl: string = "https://via.placeholder.com/150";

  titleColor: string = "blue";
  titleSize: string = "22px";

  isActive: boolean = true;

  yourName: string = "";

  count: number = 0;
  increment() {
    this.count++;
  }
}
