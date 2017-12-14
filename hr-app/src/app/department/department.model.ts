// define how a single department look like
export class Department{
    // poperty name : type you want to assign
    public departmentName : string;
    public departmentDesc: string;
     
    // public department: 
    // public role_id : int;

    constructor(name: string, desc: string ) {
        this.departmentName = name;
        this.departmentDesc = desc;
        
    }


}