import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
interface Answer{
  body: string;
  author: string;
  date: Date;
  formGroup?: FormGroup;
}
interface Question {
  showAnswers: boolean;
  title: string;
  body: string;
  author: string;
  date: Date;
  tags: string[];
  answers: Answer[];
  formGroup?: FormGroup;
}


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit{
  questions: Question[] = [
    {
      showAnswers: false,
      title: 'How to create a new Angular project?',
      body: 'I am new to Angular and I want to create a new project. What are the steps to do this?',
      author: 'John Doe',
      date: new Date(),
      tags: ['angular', 'new-project'],
      answers: [
        {
          body: 'To create a new Angular project, you can use the Angular CLI tool. First, make sure you have Node.js and npm installed on your system. Then, open your terminal or command prompt and run the following command:',
          author: 'Jane Smith',
          date: new Date(),
          formGroup: new FormGroup({
            answerBody: new FormControl()
          })
        },
        {
          body: 'After running the above command, you will be prompted to answer a few questions about your new project, such as its name and whether you want to use routing or SCSS. Once you have answered these questions, the CLI will create a new Angular project for you in a new folder with the specified name.',
          author: 'John Doe',
          date: new Date(),
          formGroup: new FormGroup({
            answerBody: new FormControl()
          })
        }
      ]},
    {
      showAnswers: false,
      title: 'How to use ngFor in Angular?',
      body: 'I want to use ngFor to loop over an array and display its elements. How can I do this in Angular?',
      author: 'Jane Smith',
      date: new Date(),
      tags: ['angular', 'ngFor'],
      answers: []
    }
  ];
  constructor(private sharedService: SharedService) { }
  reactiveForm: FormGroup;
  formGroup: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
      author: new FormControl(),
      tags: new FormControl(),
    });

  }
  onSubmit() {
    // Access form controls and their values
    console.log(this.reactiveForm.controls['title'].value);
    console.log(this.reactiveForm.controls['body'].value);
    console.log(this.reactiveForm.controls['author'].value);
    console.log(this.reactiveForm.controls['tags'].value);

    // Create new question object with form values
    const newQuestion: Question = {
      showAnswers: false,
      title: this.reactiveForm.controls['title'].value,
      body: this.reactiveForm.controls['body'].value,
      author: this.reactiveForm.controls['author'].value,
      date: new Date(),
      tags: this.reactiveForm.controls['tags'].value.split(',').map(tag => tag.trim()),
      answers: (null)
    };

    // Add new question to questions array
    this.questions.push(newQuestion);

    // Reset form
    this.reactiveForm.reset();
  }
  showAskQuestionForm: boolean = false; // added showAskQuestionForm property
  searchTerm: string = ''; // added searchTerm property
  showAnswers(question: Question) {
    question.showAnswers = true;
  }



  filterQuestions() {
    return this.questions.filter(question => {
      return question.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        question.body.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        question.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        question.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });
  }
}
