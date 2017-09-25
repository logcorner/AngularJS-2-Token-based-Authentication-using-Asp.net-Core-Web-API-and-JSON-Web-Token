export interface IProfile {
    token: string;
    expiration: string;
    claims: IClaim[];
    currentUser: IUser;
}

interface IClaim {
    type: string;
    value: string;
}

interface IUser {
    id: string;
    userName: string;
    email: string;
}