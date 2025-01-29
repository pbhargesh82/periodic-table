import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { Element } from '@models/models';

@Component({
  selector: 'app-model-viewer',
  imports: [],
  templateUrl: './model-viewer.component.html',
  styleUrl: './model-viewer.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModelViewerComponent {

  selectedElement = input<Element | null>(null);

  ngOnInit(): void {
    console.log(this.selectedElement());
  }

}
