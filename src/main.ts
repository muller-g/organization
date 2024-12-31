import inquirer from 'inquirer';
import Organization from './module/organization/organization';

function displayMenu() {
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'option',
            message: 'O que deseja fazer?',
            choices: [
                'Opção 1: Comprar cursos',
                'Opção 2: Voltar',
            ],
        },
    ]);
}

inquirer.prompt([
    {
        type: 'rawlist',
        name: 'option',
        message: 'o que deseja fazer?:',
        choices: [
            'Opção 1: Cadastrar cliente PJ',
            'Opção 2: Cadastrar cliente PF',
            'Opção 3: Utilizar token existente',
            'Opção 4: Sair',
        ],
    },
]).then((answers) => {
    switch (answers.option) {
        case 'Opção 1: Cadastrar cliente PJ':

            const createdPJ = Organization.registerCompanyPJ();

            if(createdPJ){
                displayMenu().then((answers) => {});
            }

            break;

        case 'Opção 2: Cadastrar cliente PF':    

            const createdPF = Organization.registerCompanyPF();

            if(createdPF){
                displayMenu().then((answers) => {});
            }

            break;

        case 'Opção 3: Utilizar token existente':

            console.log('Opção 3');
            break;

        case 'Opção 4: Sair':

            console.log('Opção 4');
            break;

        default:

            console.log('Opção inválida');
            
            break
    }
}).catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});