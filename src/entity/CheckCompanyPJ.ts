export default class CheckCompanyPJ {
    id?: string;

    private constructor(
        id: string | undefined,
        readonly confirmed_email: string,
        readonly confirmed_password: string,
        readonly confirmed_personal_email: string,
        readonly document: string,
        readonly email: string,
        readonly cnpj: string,
        readonly company: string,
        readonly is_unit: boolean,
        readonly is_employee: boolean,
        readonly trade_name: string,
        readonly unit_alias: string,
        readonly simples_nacional: string,
        readonly email_nf: string,
        readonly is_owner: number,
        readonly personal_email: string,
        readonly name: string,
        readonly passport: string,
        readonly password: string,
        readonly lead_origin: string,
        readonly phone: string,
    ) {
        this.id = id;
    }

    static async createCheckCompanyPj(
        confirmed_email: string,
        confirmed_password: string,
        confirmed_personal_email: string,
        document: string,
        email: string,
        cnpj: string,
        company: string,
        is_unit: boolean,
        is_employee: boolean,
        trade_name: string,
        unit_alias: string,
        simples_nacional: string,
        email_nf: string,
        is_owner: number,
        personal_email: string,
        name: string,
        passport: string,
        password: string,
        lead_origin: string,
        phone: string,
        id?: string
    ): Promise<CheckCompanyPJ> {
        
        return new CheckCompanyPJ(
            id,
            confirmed_email,
            confirmed_password,
            confirmed_personal_email,
            document,
            email,
            cnpj,
            company,
            is_unit,
            is_employee,
            trade_name,
            unit_alias,
            simples_nacional,
            email_nf,
            is_owner,
            personal_email,
            name,
            passport,
            password,
            lead_origin,
            phone,
        );
    }
}
