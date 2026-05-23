import { Component } from '@angular/core';
import './training'
import { Color } from '../enums/Color';
import { Collection, nameCollection, numberCollection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

companyName: string = 'румтибет';
companyCategory: string = 'туризм';

constructor() {
  this.saveLastVisit();
  this.updateVisitsCount();
}

isPrimaryColor(color: Color): boolean {
  return (
    color === Color.RED ||
    color === Color.GREEN ||
    color === Color.BLUE
  );

}

saveLastVisit(): void {
  const now: string = new Date().toString();
  localStorage.setItem('lastVisitDate', now);
}

updateVisitsCount(): void {
  const storedValue: number = Number(localStorage.getItem('visitsCount') || 0);
  localStorage.setItem('visitsCount', String(storedValue + 1));
}

}

nameCollection.getAll();
numberCollection.replace(1, 77);
