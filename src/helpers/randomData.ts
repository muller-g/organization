import { faker } from '@faker-js/faker';

export function generateFullName(): string {
    return faker.person.firstName() + ' ' + faker.person.lastName();
}

export function generateCPF(): string {
    const calculateDigit = (numbers: number[]): number => {
        const sum = numbers.reduce((acc, num, index) => acc + num * (numbers.length + 1 - index), 0);
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    const baseNumbers = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    const firstDigit = calculateDigit(baseNumbers);
    const secondDigit = calculateDigit([...baseNumbers, firstDigit]);

    return [...baseNumbers, firstDigit, secondDigit]
        .map((num, index) => (index === 3 || index === 6 ? '.' + num : index === 9 ? '-' + num : num))
        .join('');
}

export function generateCNPJ() {
    const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    let cnpjBase = '';
    for (let i = 0; i < 8; i++) {
        cnpjBase += generateRandomNumber(0, 9);
    }

    cnpjBase += '0001';

    let digits = calculateCheckDigits(cnpjBase);

    let cnpjFormatted = `${cnpjBase.slice(0, 2)}.${cnpjBase.slice(2, 5)}.${cnpjBase.slice(5, 8)}/${cnpjBase.slice(8, 12)}-${digits}`;

    return cnpjFormatted;
}
  
export function calculateCheckDigits(cnpjBase) {
    const weight1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weight2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
    let sum1 = 0;
    for (let i = 0; i < 12; i++) {
      sum1 += parseInt(cnpjBase.charAt(i)) * weight1[i];
    }

    let remainder1 = sum1 % 11;
    let digit1 = remainder1 < 2 ? 0 : 11 - remainder1;
  
    let sum2 = 0;
    for (let i = 0; i < 12; i++) {
      sum2 += parseInt(cnpjBase.charAt(i)) * weight2[i];
    }
    
    sum2 += digit1 * 2;
    let remainder2 = sum2 % 11;
    let digit2 = remainder2 < 2 ? 0 : 11 - remainder2;
  
    return `${digit1}${digit2}`;
} 

export function generateEmail(): string {
    const username = faker.internet.username().toLowerCase();
    const domain = faker.internet.domainName();
    return `${username}@${domain}`;
}

export function generatePhoneNumber(): string {
    const areaCode = Math.floor(Math.random() * 90 + 10); // Generates an area code between 10 and 99
    const number = Math.floor(Math.random() * 900000000 + 100000000); // Generates a 9-digit number
    return `(${areaCode}) ${number.toString().slice(0, 5)}-${number.toString().slice(5)}`;
}