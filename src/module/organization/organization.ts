import CheckCompanyPf from "../../entity/CheckCompanyPf";
import CheckCompanyPJ from "../../entity/CheckCompanyPJ";
import CompanyPf from "../../entity/CompanyPf";
import CompanyPJ from "../../entity/CompanyPJ";
import Login from "../../entity/Login";
import { generateCNPJ, generateCPF, generateEmail, generateFullName, generatePhoneNumber } from "../../helpers/randomData";
import { request } from "../../helpers/request";
import dotenv from 'dotenv';

dotenv.config();

export default class Organization {
    public static async registerCompanyPF(){
        const userData = {
            email: generateEmail(),
            password: '123123',
            cpf: generateCPF(),
            name: generateFullName(),
            phone: generatePhoneNumber(),
        };

        const checkRegisterCompanyPfData = await CheckCompanyPf.createCheckCompanyPf(
            userData.email,
            '123123',
            '',
            true,
            userData.cpf,
            userData.email,
            '',
            userData.name,
            null,
            '123123',
            null,
            'Google',
            userData.phone,
            'localhost:8080',
        );

        const registerCompanyPfData = await CompanyPf.createCompanyPf(
            userData.email,
            '123123',
            '',
            true,
            userData.cpf,
            userData.email,
            '',
            userData.name,
            null,
            '123123',
            null,
            'Google',
            userData.phone,
            'localhost:8080',
            1,
            true,
        );

        const loginData = await Login.createLogin(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.DOMAIN,
            'password',
            userData.password,
            '',
            userData.cpf,
        );

        
        const checkRegisterCompanyPf = await request.post('check-user-register', checkRegisterCompanyPfData);
        
        if(checkRegisterCompanyPf.data.user){
            return null;
        }

        await request.post('register-user', registerCompanyPfData);
        const login = await request.post('login', loginData);
        
        return login.data;
    }

    public static async registerCompanyPJ(){
        const userData = {
            email: generateEmail(),
            password: '123123',
            cpf: generateCPF(),
            cnpj: generateCNPJ(),
            name: generateFullName(),
            phone: generatePhoneNumber(),
        };

        const checkRegisterCompanyPJData = await CheckCompanyPJ.createCheckCompanyPj(
            userData.email,
            userData.password,
            userData.email,
            userData.cpf,
            userData.email,
            userData.cnpj,
            userData.name,
            false,
            false,
            userData.name,
            '',
            '0',
            userData.email,
            1,
            '',
            userData.name,
            null,
            userData.password,
            'Google',
            userData.phone,
        );

        const registerCompanyPJData = await CompanyPJ.createCompanyPJ(
            userData.email,
            userData.password,
            userData.email,
            userData.cpf,
            userData.email,
            userData.cnpj,
            userData.name,
            false,
            false,
            userData.name,
            '',
            '0',
            userData.email,
            1,
            '',
            userData.name,
            null,
            userData.password,
            'Google',
            userData.phone,
            true,
        );

        const loginData = await Login.createLogin(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.DOMAIN,
            'password',
            userData.password,
            '',
            userData.cpf,
        );

        
        const checkRegisterCompanyPj = await request.get('check-company-by-cnpj-public?cnpj=' + checkRegisterCompanyPJData.cnpj);
        
        if(checkRegisterCompanyPj.data.status !== 1){
            return null;
        }

        let verifyRegister = await request.post('verify-register', {cnpj: checkRegisterCompanyPJData.cnpj});

        if(verifyRegister.data.owner !== 1){
            return null;
        }

        let checkUser = await request.post('check-user-register', checkRegisterCompanyPJData);
        if(checkUser.data.user !== null){
            return null;
        }

        await request.post('register', registerCompanyPJData);
        const login = await request.post('login', loginData);

        return login.data;
    }
}