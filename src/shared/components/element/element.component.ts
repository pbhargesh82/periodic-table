import { Component, input } from '@angular/core';
import { Element } from '@models/models';

@Component({
  selector: 'app-element',
  imports: [],
  templateUrl: './element.component.html',
  styleUrl: './element.component.css'
})
export class ElementComponent {

  selectedElement = input<Element | null>(null);

}
