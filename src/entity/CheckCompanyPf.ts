export default class CheckCompanyPf {
    id?: string;

    private constructor(
        id: string | undefined,
        readonly confirmed_email: string,
        readonly confirmed_password: string,
        readonly confirmed_personal_email: string,
        readonly create_only_profile: boolean,
        readonly document: string,
        readonly email: string,
        readonly personal_email: string,
        readonly name: string,
        readonly passport: string,
        readonly password: string,
        readonly user_id: string,
        readonly lead_origin: string,
        readonly phone: string,
        readonly domain: string,
    ) {
        this.id = id;
    }

    static async createCheckCompanyPf(
        confirmed_email: string,
        confirmed_password: string,
        confirmed_personal_email: string,
        create_only_profile: boolean,
        document: string,
        email: string,
        personal_email: string,
        name: string,
        passport: string,
        password: string,
        user_id: string,
        lead_origin: string,
        phone: string,
        domain: string,
        id?: string
    ): Promise<CheckCompanyPf> {
        
        return new CheckCompanyPf(
            id,
            confirmed_email,
            confirmed_password,
            confirmed_personal_email,
            create_only_profile,
            document,
            email,
            personal_email,
            name,
            passport,
            password,
            user_id,
            lead_origin,
            phone,
            domain
        );
    }
}
