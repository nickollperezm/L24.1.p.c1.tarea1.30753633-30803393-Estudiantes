export default class Cl_estudiante {
    constructor(ced, sexo, nota1, nota2, nota3) {
        this.ced = ced;
        this.sexo = sexo;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    set ced(ced) {
        this._ced = +ced;
    }
    get ced() { 
        return this._ced; 
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() { 
        return this._sexo; 
    }
    set nota1(nota1) {
        this._nota1 = +nota1;
    }
    get nota1() { 
        return this._nota1; 
    }
    set nota2(nota2) {
        this._nota2 = +nota2;
    }
    get nota2() { 
        return this._nota2; 
    }
    set nota3(nota3) {
        this._nota3 = +nota3;
    }
    get nota3() { 
        return this._nota3; 
    }
    notaTotal() { 
        return this.nota1 + this.nota2 + this.nota3;
    }
}