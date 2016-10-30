import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionService } from '../../services/question.service'

import { QuestionModel } from '../../models/question'

@Component({
  templateUrl: 'build/pages/game/game.html',
  providers: [QuestionService]
})
export class GameComponent {
  private questions: QuestionModel[];

  constructor(
    private navController: NavController,
    private questionService: QuestionService
  ) { }

  ngOnInit():void{
    console.log("init");
    this.questions = this.questionService.getQuestions();

    alert(JSON.stringify(this.questions));
  }
}