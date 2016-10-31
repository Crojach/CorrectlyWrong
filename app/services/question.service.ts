import { Injectable } from '@angular/core';
import { QuestionModel } from '../models/question';
import { AnswerModel } from '../models/answer';

@Injectable()
export class QuestionService {
    private questions: QuestionModel[];
    getQuestions(): QuestionModel[] {
        this.questions = [];

        for (var i = 0; i < 10; i++) {
            this.questions.push(
                new QuestionModel(
                    Math.random().toString(36).substring(10),
                    false,
                    [
                        new AnswerModel(Math.random().toString(36).substring(10), true, false),
                        new AnswerModel(Math.random().toString(36).substring(10), false, true)
                    ]
                )
            )
        }

        return this.questions;
    }
}