import { Component } from '@angular/core';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataBindingDemoComponent],   
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
