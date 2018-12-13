
const ebat = {"S": 50, "M":100, "L":200, "XL":400};
const durum = {"DOKUNULMAMIS":0, "SISIRILMIS":1, "PATLAMIS":2}

class Balon{
    constructor(pebat,prenk,pdurum,pLocation){
        this.ebat = pebat;
        this.renk = prenk;
        this.durum = durum.DOKUNULMAMIS;
        this.location = pLocation;
    }

    toString(){
        return this.ebat +""+ this.renk +""+ this.durum +""+ this.location;
    }

    patla(){    
        this.durum = durum.PATLAMIS
    };
    
    sis(){
        this.durum = durum.SISIRILMIS
    };
    
    hareketEt(pLocation){
        this.location = pLocation;
    };
};

