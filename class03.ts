class house{
    constructor(public name:string, public room:number, public bath:number, public area:number, public price:number){
    }
    show():void{
        console.log(`แบบบ้าน ${this.name} ${this.room} ห้องนอน ${this.bath} ห้องน้ำ ${this.area} ตารางเมตร ${this.price} บาท`);
    }
    adjusprice(newprice:number){
        this.price=newprice;
    }
}
let house1=new house("บ้านเดี่ยว",4,3,150,1500000);
house1.show();
house1.adjusprice(1800000);
house1.show();