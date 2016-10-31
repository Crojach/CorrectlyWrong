import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionService } from '../../services/question.service'

import { QuestionModel } from '../../models/question'
import { AnswerModel } from '../../models/answer'

@Component({
  templateUrl: 'build/pages/game/game.html',
  providers: [QuestionService]
})
export class GameComponent {
  private questions: QuestionModel[];
  private currentQuestion: QuestionModel;

  private currentQuestionIndex: number;

  constructor(
    private navController: NavController,
    private questionService: QuestionService
  ) {
    this.currentQuestionIndex = 0;
  }

  ngOnInit(): void {
    console.log("init");
    this.questions = this.questionService.getQuestions();
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  answerClicked(answer: AnswerModel): void {
    if (answer.isCorrectlyWrong) {
      this.questions[this.currentQuestionIndex].answered = true;
      this.currentQuestionIndex++;

      if(this.currentQuestionIndex > this.questions.length - 1){
        this.currentQuestionIndex = 0;
      }
    } else {
      this.currentQuestionIndex = 0;
    }

    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }
}