import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  answers: any[] = [];

  constructor() { }

  addAnswer(answer: any) {
    this.answers.push(answer);
  }

}
