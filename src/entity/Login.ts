export default class Login {
    id?: string;

    private constructor(
        id: string | undefined,
        readonly client_id: string,
        readonly client_secret: string,
        readonly domain: string,
        readonly grant_type: string,
        readonly password: string,
        readonly scope: string,
        readonly username: string,
    ) {
        this.id = id;
    }

    static async createLogin(
        client_id: string,
        client_secret: string,
        domain: string,
        grant_type: string,
        password: string,
        scope: string,
        username: string,
        id?: string
    ): Promise<Login> {
        
        return new Login(
            id,
            client_id,
            client_secret,
            domain,
            grant_type,
            password,
            scope,
            username,
        );
    }
}
