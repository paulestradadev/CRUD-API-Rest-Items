import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Item {
  private urlBase = 'http://localhost:8080/items';

  constructor(private clienteHttp: HttpClient) {}

  obtenerItemsLista(): Observable<Item[]> {
    return this.clienteHttp.get<Item[]>(this.urlBase); 
    }
}
