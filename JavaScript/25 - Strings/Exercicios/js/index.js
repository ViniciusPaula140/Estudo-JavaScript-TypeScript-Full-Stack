function nomes(){
    let nomef = document.querySelector
    ("input#nome")
    let nome = (nomef.value)
    
    let res = document.querySelector('div.complemento')
    res.innerHTML = ''
    
    
    res.innerHTML = `Seu nome é ${nome} <br>`
   res.innerHTML += `Seu nome tem ${nome.length} caracters <br>`

   res.innerHTML += `A segunda letra de seu nome é ${nome[1]} <br>`

   res.innerHTML += `O primeiro índice da letra de seu nome é:  ${nome[0]} <br>`

    res.innerHTML += `O primeiro índice da letra i de seu nome é:  ${nome.indexOf('i')} <br>`
    

   res.innerHTML += `O ultímo índice da letra i de seu nome é:  ${nome.lastIndexOf('i')} <br>`

   res.innerHTML += `O último índice da letra de seu nome é:  ${nome.length -1} <br>`

    res.innerHTML += `As últimas  3 letras do seu nome são:  ${nome.slice(-3)} <br>`

   res.innerHTML += `As palavras do seu nome são: ${nome.split('')} <br>` /*Se eu usar .split('') vai sair v,i,n,i,c,i,u,s,p,a,u,l,a
   
   se eu usar .split(' ') irá sair vinicius, paula, ribeiro*/

   res.innerHTML += `Seu nome com letras maiúculas: ${nome.toUpperCase()} <br>`

   res.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br>`
    
}