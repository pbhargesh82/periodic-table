import { Component, input } from '@angular/core';
import { ModelViewerComponent } from '@components/model-viewer/model-viewer.component';
import { Element } from '@models/models';
import { CapitalizePipe } from '@pipes/capitalize.pipe';

@Component({
  selector: 'app-element',
  imports: [ModelViewerComponent, CapitalizePipe],
  templateUrl: './element.component.html',
  styleUrl: './element.component.css'
})
export class ElementComponent {

  selectedElement = input<Element | null>(null);

  ngOnInit(): void {
    console.log(this.selectedElement());
  }

}
