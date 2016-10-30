import { AnswerModel } from './answer'

export class QuestionModel {
    title: string;
    answers: AnswerModel[];
    answered: boolean;
    constructor(
        title: string,
        answered: boolean,
        answeres: AnswerModel[]
    ) {
        this.title = title;
        this.answered = answered;
        this.answers = answeres;
    }
}