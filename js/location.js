class Location{
    constructor(pX,pY){
        this.x = pX;
        this.y = pY;

    }

    toString(){return this.x + " , " + this.y;}
    getLeft(){return this.x;}
    getTop(){return this.y;}

}