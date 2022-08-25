class Api {
  
    static async listarClientes(){
        const clientList = await fetch('https://atividade-api-clientes.herokuapp.com/clientes')
          .then(res => res.json())
          .then(res => {
             
            res.forEach(element => {
                
                const container             = document.querySelector('.container')

                const card                  = document.createElement('li')
                const name                  = document.createElement('h2')

                card.className              = 'card'
                name.innerText              = element.nome
                //div
                const tagDivPersonalData    = document.createElement('div')
                const headerPersonalData    = document.createElement('h3')
                const email                 = document.createElement('p')
                const idade                 = document.createElement('p')
                const cpf                   = document.createElement('p')
                const sexo                  = document.createElement('p')
    
                 
                headerPersonalData.innerText = 'Dados Pessoais'
                email.innerText              = `email: ${element.email}` 
                idade.innerText              = `idade: ${element.idade}`
                cpf.innerText                = `cpf: ${element.cpf}`
                sexo.innerText               = `sexo: ${element.sexo}`

                tagDivPersonalData.append(headerPersonalData,email,idade,cpf,sexo)

                 //div
                const tagDivAdress           = document.createElement('div')
                const headerAdress           = document.createElement('h3')
                const cep                    = document.createElement('p')
                const estado                 = document.createElement('p')
                const cidade                 = document.createElement('p')
                const bairro                 = document.createElement('p')
                const rua                    = document.createElement('p')
                const numero                 = document.createElement('p')
    
                headerAdress.innerText       = 'Endereco'
                cep.innerText                = `cep: ${element.endereco.cep}` 
                estado.innerText             = `estado: ${element.endereco.estado}`
                cidade.innerText             = `cidade: ${element.endereco.cidade}`
                bairro.innerText             = `bairro: ${element.endereco.bairro}`
                rua.innerText                = `rua: ${element.endereco.rua}`
                numero.innerText             = `numero: ${element.endereco.numero}`

                tagDivAdress.append(headerAdress,cep,estado,cidade,bairro,rua,numero)
                card.append(name,tagDivPersonalData,tagDivAdress)
                container.appendChild(card)

            });

             

      
            
          })
    }
    

    static async cadastrarCliente(data){
        const newUser = await fetch('https://atividade-api-clientes.herokuapp.com/clientes', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(res => console.log(res) )
            

            Api.listarClientes()
            return newUser
           
    }

    static async editarCliente(id, data){
        const newUser = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
          })
    }   

    static async deletarCliente(id){
        const newUser = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "DELETE",
            
          })
    }

}
Api.listarClientes()




export {Api}