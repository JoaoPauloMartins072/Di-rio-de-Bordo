"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor() {
        this._nome = '';
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        if (idade < 0) {
            throw new Error('Idade não pode ser negativa');
        }
        this._idade = idade;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
exports.Aluno = Aluno;
const aluno = new Aluno();
aluno.idade = 15;
aluno.nome = 'Jonathan 20';
const aluno_2 = new Aluno();
