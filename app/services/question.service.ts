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
                [
                    new AnswerModel("good", true, false),
                    new AnswerModel("bad", false, true)
                ]));

        this.questions.push(
            new QuestionModel(
                "Are you sure",
                false,
                [
                    new AnswerModel("yes", true, false),
                    new AnswerModel("no", false, true)
                ]));

        this.questions.push(
            new QuestionModel(
                "Bla bla",
                false,
                [
                    new AnswerModel("of course", true, false),
                    new AnswerModel("duvaj", false, true)
                ]));

        return this.questions;
    }
}