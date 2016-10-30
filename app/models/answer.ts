export class AnswerModel {
    title: string;
    isTrulyCorrect: boolean;
    isCorrectlyWrong: boolean;
    constructor(
        title: string,
        isTrulyCorrect: boolean,
        isCorrectlyWrong: boolean
    ) {
        this.title = title;
        this.isTrulyCorrect = isTrulyCorrect;
        this.isCorrectlyWrong = isCorrectlyWrong;
    }
}