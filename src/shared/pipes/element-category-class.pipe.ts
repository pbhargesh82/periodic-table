import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elementCategoryClass'
})
export class ElementCategoryClassPipe implements PipeTransform {
  transform(category: string): string {
    const cat = category.toLowerCase();

    if (cat.includes('alkali metal')) return 'bg-indigo-200';
    if (cat.includes('alkaline earth metal')) return 'bg-green-200';
    if (cat.includes('post-transition metal')) return 'bg-sky-200';
    if (cat.includes('transition metal')) return 'bg-pink-200';
    if (cat.includes('lanthanide')) return 'bg-teal-200';
    if (cat.includes('actinide')) return 'bg-lime-200';
    if (cat.includes('metalloid')) return 'bg-yellow-200';
    if (cat.includes('nonmetal')) return 'bg-orange-200';
    if (cat.includes('halogen')) return 'bg-purple-200';
    if (cat.includes('noble gas')) return 'bg-red-200';

    return 'bg-gray-200';
  }
}
