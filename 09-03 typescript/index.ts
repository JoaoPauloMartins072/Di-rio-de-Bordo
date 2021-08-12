export class Aluno {

    private _nome: string = '';
    private _idade: number = 0;

    get idade(): any {
        return this._idade
    }

    set idade(idade: number) {
        if(idade < 0){
            throw new Error('Idade não pode ser negativa')
        }
        this._idade = idade
    }

    get nome(): any {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }


}

const aluno = new Aluno()
aluno.idade = 15
aluno.nome = 'Jonathan 20'

const aluno_2 = new Aluno()