export interface UserTeams{
    [key: string]: string;
}

export class User{
    id: string;
    type: string;
    name: string;

    constructor(id: string, type: string, name: string){
        this.id = id;
        this.type = type;
        this.name = name;
    }
}

export class Team{
    id: string;
    type: string;
    name: string;

    constructor(id: string, type: string, name: string){
        this.id = id;
        this.type = type;
        this.name = name;
    }
}

export class League{
    adminId: string;
    description: string;
    id: string;
    name: string;
    type: string;
    usersTeams: UserTeams[];

    constructor(adminId: string, description: string, id: string, name: string, type: string, usersTeams: UserTeams[]){
        this.adminId = adminId;
        this.description = description;
        this.id = id;
        this.name = name;
        this.type = type;
        this.usersTeams = usersTeams;
    }
}