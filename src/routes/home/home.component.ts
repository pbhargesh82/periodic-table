import { Component, inject, signal, effect, WritableSignal, ViewChild } from '@angular/core';
import { ElementComponent } from '@components/element/element.component';
import { DataService } from '@data/data.service';
import { Element } from '@models/models';
import { DecimalPipe } from '@pipes/decimal.pipe';
import { ElementCategoryClassPipe } from '@pipes/element-category-class.pipe';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ElementComponent, DrawerModule, DecimalPipe, ElementCategoryClassPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private dataService = inject(DataService);

  elements = signal<Element[]>([]);
  selectedElement: WritableSignal<Element | null> = signal(null);
  showElementDetails: WritableSignal<boolean> = signal(false);

  constructor() {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.elements.set(response?.elements || []);
        console.log(this.elements());
      },
      error: (error) => {
        console.error(error);
      },
    });

    effect(() => {
      console.log('Selected Element:', this.selectedElement());
    });
  }

}
