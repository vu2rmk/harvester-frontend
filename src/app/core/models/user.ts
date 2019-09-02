export class User {
    id: number;
    email: string;
    username: string;
    password: string;
}

export class UserLogin {
    username: string;
    password: string;
}


export interface LoginRsp {
    succcess: boolean;
    token: string;
}
