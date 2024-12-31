export default class CompanyPJ {
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
        readonly simple_national: string,
        readonly email_nf: string,
        readonly is_owner: number,
        readonly personal_email: string,
        readonly name: string,
        readonly passport: string,
        readonly password: string,
        readonly lead_origin: string,
        readonly phone: string,
        readonly acceptTerm: boolean,
    ) {
        this.id = id;
    }

    static async createCompanyPJ(
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
        simple_national: string,
        email_nf: string,
        is_owner: number,
        personal_email: string,
        name: string,
        passport: string,
        password: string,
        lead_origin: string,
        phone: string,
        acceptTerm: boolean,
        id?: string
    ): Promise<CompanyPJ> {
        
        return new CompanyPJ(
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
            simple_national,
            email_nf,
            is_owner,
            personal_email,
            name,
            passport,
            password,
            lead_origin,
            phone,
            acceptTerm
        );
    }
}
