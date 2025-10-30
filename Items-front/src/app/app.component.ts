import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListaComponent } from "./components/item-lista/item-lista.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'items-ui';
}
