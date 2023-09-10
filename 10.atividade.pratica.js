class Funcionario{

    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.trabalhando = false;
    }

    seApresetar(){
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos. Sou " + this.cargo + " nesta empresa.")
    }

    trabalhar(){
        if(this.trabalhando){
            console.log(`${this.nome} já está trabalhando.`);
            return;
        }
        this.trabalhando = true;
    }
}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;
        this.gerenciando = false;
    }

    gerenciar(){
        if(this.gerenciando){
            console.log(`O Gerente ${this.nome} já está gerenciando seu time de ${this.departamento}.`)
            return;
        }
        this.gerenciando = true;
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;
        this.programando = false;
    }

    programar(){
        if(this.programando){
            console.log(`O Desenvolvedor ${this.nome} já está trabalhando em seu projeto ${this.linguagem}.`)
            return;
        }
        this.programando = true;
    }
}

var pessoa1 = new Gerente("Itallo",26,"Gerente","Front-End");
var pessoa2 = new Desenvolvedor("Matheus",24,"Desenvolvedor","JavaScript");
pessoa1.seApresetar();
pessoa2.seApresetar();
pessoa1.trabalhar();
pessoa1.trabalhar();
pessoa2.trabalhar();
pessoa2.trabalhar();
pessoa1.gerenciar();
pessoa1.gerenciar();
pessoa2.programar();
pessoa2.programar();