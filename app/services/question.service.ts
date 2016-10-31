import { Injectable } from '@angular/core';
import { QuestionModel } from '../models/question';
import { AnswerModel } from '../models/answer';

import { SQLite } from 'ionic-native'

@Injectable()
export class QuestionService {
    private questions: QuestionModel[];

    private db = new SQLite({ name: 'question.db', location: 'default' });
    ngOnInit(): void {
        this.setupDatabase();
    }

    setupDatabase(): void {
        this.db.executeSql('create table question(id integer primary key, title nvarchar(max), firstAnswer integer, secondAnswer integer )', {})
            .then(() => console.log("Created table question"))
            .catch(() => console.log("Error creating table question"));

        this.db.executeSql('create table answer(id integer primary key, title nvarchar(max), isCorrectlyWrong boolean)', {})
            .then(() => console.log("Created table answer"))
            .catch(() => console.log("Error creating table answer"));
    }

    getQuestions(): QuestionModel[] {
        this.questions = [];

        for (var i = 0; i < 10; i++) {
            this.questions.push(
                new QuestionModel(
                    Math.random().toString(36).substring(10),
                    false,
                    [
                        new AnswerModel(Math.random().toString(36).substring(10), true),
                        new AnswerModel(Math.random().toString(36).substring(10), false)
                    ]
                )
            )
        }

        return this.questions;
    }


}