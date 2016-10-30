import { Injectable } from '@angular/core';
import { QuestionModel } from '../models/question';
import { AnswerModel } from '../models/answer';

@Injectable()
export class QuestionService {
    private questions: QuestionModel[];
    getQuestions(): QuestionModel[] {
        this.questions = [];

        this.questions.push(
            new QuestionModel(
                "How are you",
                false,
                []));

        this.questions.push(
            new QuestionModel(
                "Are you sure",
                false,
                []));


        return this.questions;
    }
}