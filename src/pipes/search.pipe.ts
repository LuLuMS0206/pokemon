import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], searchTerm: string): any[] {
        if (!items) return [];
        if (!searchTerm) return items;

        searchTerm = searchTerm.toLowerCase();

        return items.filter(item => {
            // Realiza la lógica de filtrado aquí
            // En este ejemplo, vamos a filtrar por el nombre del Pokémon
            return item.nombre.toLowerCase().includes(searchTerm);
        });
    }
}
