export default class Cl_dcyt {
    constructor() {
        this.notaMayor = 0;
        this.contEstudFemAprob = 0;
        this.acumNotas = 0;
        this.contEstud = 0;
    }
    procesarEstudiante(estudiante) {
        if(estudiante.notaTotal() > this.notaMayor) {
            this.notaMayor = estudiante.notaTotal();
        }
        if(estudiante.sexo == "F" && estudiante.notaTotal() >= 48) {
            this.contEstudFemAprob++;
        }
        this.acumNotas += estudiante.notaTotal();
        this.contEstud++;
    }
    mayorNotaObtenida() {
        return this.notaMayor;
    }
    estudiantesFemAprob() { 
        return this.contEstudFemAprob;
    }
    promedioNotas() {
        return this.acumNotas / this.contEstud;
    }
}