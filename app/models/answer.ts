export class AnswerModel {
    title: string;
    isCorrectlyWrong: boolean;
    constructor(
        title: string,
        isCorrectlyWrong: boolean
    ) {
        this.title = title;
        this.isCorrectlyWrong = isCorrectlyWrong;
    }
}