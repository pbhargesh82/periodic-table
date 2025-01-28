import { Component, inject, signal, effect, WritableSignal } from '@angular/core';
import { ElementComponent } from '@components/element/element.component';
import { ModelViewerComponent } from '@components/model-viewer/model-viewer.component';
import { DataService } from '@data/data.service';
import { Element } from '@models/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModelViewerComponent, ElementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private dataService = inject(DataService);

  elements = signal<Element[]>([]);
  selectedElement: WritableSignal<Element | null> = signal(null);
  isLoading: WritableSignal<boolean> = signal(false);
  private hoverTimer: any;
  showElementDetails: WritableSignal<boolean> = signal(false);
  cursorPosition: WritableSignal<{ x: number; y: number }> = signal({ x: 0, y: 0 });

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

  getElementClass(element: Element): string {
    const category = element.category.toLowerCase();

    if (category.includes('alkali metal')) return 'bg-indigo-200'; // Indigo for Alkali Metals
    if (category.includes('alkaline earth metal')) return 'bg-green-200'; // Green for Alkaline Earth Metals
    if (category.includes('post-transition metal')) return 'bg-sky-200'; // Sky for Post-Transition Metals
    if (category.includes('transition metal')) return 'bg-pink-200'; // Pink for Transition Metals
    if (category.includes('lanthanide')) return 'bg-teal-200'; // Teal for Lanthanides
    if (category.includes('actinide')) return 'bg-lime-200'; // Lime for Actinides
    if (category.includes('metalloid')) return 'bg-yellow-200'; // Yellow for Metalloids
    if (category.includes('nonmetal')) return 'bg-orange-200'; // Orange for Nonmetals
    if (category.includes('halogen')) return 'bg-purple-200'; // Purple for Halogens
    if (category.includes('noble gas')) return 'bg-red-200'; // Red for Noble Gases

    return 'bg-gray-200'; // Fallback color for unclassified elements
  }

  onMouseEnter(element: Element, event: MouseEvent) {
    this.isLoading.set(true);
    (event.target as HTMLElement).style.cursor = 'progress'; // Set loading cursor

    this.hoverTimer = setTimeout(() => {
      this.cursorPosition.set({ x: event.clientX, y: event.clientY });
      this.selectedElement.set(element);
      this.isLoading.set(false);
      this.showElementDetails.set(true);
      (event.target as HTMLElement).style.cursor = 'default'; // Reset cursor
    }, 3000);
  }

  onMouseLeave(event: MouseEvent) {
    clearTimeout(this.hoverTimer);
    this.isLoading.set(false);
    this.selectedElement.set(null);
    this.showElementDetails.set(false);
    (event.target as HTMLElement).style.cursor = 'default'; // Reset cursor
  }

  onMouseMove(event: MouseEvent) {
    if (this.showElementDetails()) {
      this.cursorPosition.set({ x: event.clientX, y: event.clientY });
    }
  }

}
