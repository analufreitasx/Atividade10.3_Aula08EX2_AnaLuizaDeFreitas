function Calculadora (n1, n2, operação){
    if(operação === "+"){
        return (n1 + n2);
    }
    else if(operação === "-"){
            return (n1 - n2);
    }
    else if(operação === "*"){
        return (n1 * n2);
    }
    else if(operação === "/"){
        return (n1 / n2);
    }
}
const num1 = parseInt (prompt (' Insira um número inteiro: '))
const num2 = parseInt (prompt(' Digite outro número inteiro: '))
const operacao = prompt (' Operação a ser efetuada (+,-,* ou /):')
document.write( ' O resultado da operação é ' + Calculadora(num1, num2, operacao) + '.')