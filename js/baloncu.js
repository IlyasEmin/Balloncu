class Baloncu {
    constructor (ebat, renk){
        this.rastgeleRenk = renk;
        this.rastgeleEbat = ebat;
    }

    getRastgeleRenk (){
        return this.rastgeleRenk
    }

    getRastgeleEbat(){
        return this.rastgeleEbat
    }

    balonSisir(number){
        let balon = new Balon();
        balon.renk = this.rastgeleRenk;
        balon.ebat = this.rastgeleEbat;
        return balon;
    }
}