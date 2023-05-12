export interface Login {
    user: string;
    password: string;
}


export interface LoginResp {
    access_token: string;
    user:         User;
}

export interface User {
    id:       string;
    user:     string;
    fullName: string;
    isActive: boolean;
    role:     string;
    createAt: string;
    updateAt: string;
}
