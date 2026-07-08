class computer {
    brand: string;
    cpu: string;
    ram: number;
    price: number;

    constructor(b:string, c:string,  r:number, p:number){
        this.brand=b;
        this.cpu=c;
        this.ram=r;
        this.price=p;
    }
    show():void{
        console.log("computer brand" ,this.brand," cpu:",this.cpu,"ram:",this.ram,"price:",this.price," บาท");
    }
}
const computer1 =new computer("dell","intel",64,24500);
computer1.show();
const computer2 =new computer("hp","amd",32,18000);
computer2.show();