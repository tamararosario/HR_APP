// define how a single skill look like
export class Skill{
    // poperty name : type you want to assign
    public name : string;
    public description: string;

    constructor(name: string , desc:string) {
        this.name = name;
        this.description = desc;
    }

} 