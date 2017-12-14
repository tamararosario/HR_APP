// define how a single department look like
export class Recuiter{
    // poperty name : type you want to assign
    public name : string;
    public lastname: string;
    public email: string;
    public phone: string;
    public department: string;
    
     
    // public department: 
    // public role_id : int;

    constructor(name: string, last: string, email: string, phone:string, depart:string ) {
        this.name = name;
        this.lastname = last;
        this.email = email;
        this.phone = phone;
        this.department = depart
        
    }


}