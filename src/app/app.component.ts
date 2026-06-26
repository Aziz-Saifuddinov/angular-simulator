import { Component, inject } from '@angular/core';
import './training'
import { Color } from '../enums/Color';
import { Collection, nameCollection, numberCollection } from './collection';
import { IFeature } from '../interfaces/IFeature';
import { ITariff } from '../interfaces/ITariff';
import { IBlog } from '../interfaces/IBlog';
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
import { NgTemplateOutlet } from '@angular/common';
import { MessageType } from '../enums/Message';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
   imports: [FormsModule, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  readonly companyName: string = 'румтибет';
  readonly companyCategory: string = 'туризм';

  public messageService: MessageService = inject(MessageService);  
  private localStorageService: LocalStorageService = inject(LocalStorageService)

  messageType: typeof MessageType = MessageType;
  isLoading: boolean = true;
  tourLocation!: string;
  tourDate!: string;
  tourParticipants: number | null = null;
  currentTime!: string;
  counter: number = 0;
  showTimer: boolean = true;
  liveInputText!: string;

  features: IFeature[] = [
    {
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'people-icon',
    },
    {
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'shield-icon',
    },
    {
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'price-tag-icon',
    }
  ]

  tariff: ITariff[] = [
    {
      id: 1,
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      price: 480,
      image: 'river-boats',
      rating: '4.9',
    },
    {
      id: 2,
      title: 'Ночь в горах',
      subtitle: 'в компании друзей',
      price: 500,
      image: 'mountain-night',
      rating: '4.5',
    },
    {
      id: 3,
      title: 'Растяжка в горах',
      subtitle: 'для тех, кто заботится о себе',
      price: 230,
      image: 'mountain-yoga',
      rating: '5.0',
    },
  ];

  blogCards: IBlog[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      image: 'seaside-village',
      linkText: '#',
    },
    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      image: 'airplane-sunrise',
      linkText: '#',
    },
    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку?',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      image: 'street-traveler',
      linkText: '#',
    },
    {
      id: 4,
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: '01/04/2023',
      image: 'taj-mahal',
      linkText: '#',
    },
  ];

  constructor() {
    this.saveLastVisit();
    this.updateVisitsCount();

    setInterval(() => {
      this.currentTime = new Date().toLocaleString();
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
    }, 2);
  }

  isFormValid(): boolean {
    return !!(this.tourDate && this.tourLocation && this.tourParticipants);
  }

  private isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.RED, Color.GREEN, Color.BLUE];
    return primaryColors.includes(color);
  }

  private saveLastVisit(): void {
    const now: string = new Date().toString();
    this.localStorageService.setValue('lastVisitDate', now);
  }

  private updateVisitsCount(): void {
    const storedValue: number = Number(this.localStorageService.getValue('visitsCount') || 0);
    this.localStorageService.setValue('visitsCount', String(storedValue + 1));
  }

}

nameCollection.getAll();