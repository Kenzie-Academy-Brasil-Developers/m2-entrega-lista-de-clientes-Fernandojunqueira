import { Api } from "./api.js";

class Method{

static async registerCustomer(){

    const inputName     = document.querySelector('#nome')
    const inputEmail    = document.querySelector('#email')
    const inputidade    = document.querySelector('#idade')
    const inputCpf      = document.querySelector('#cpf')
    const inputSexo     = document.querySelector('#sexo')
    const inputCep      = document.querySelector('#cep')
    const inputRua      = document.querySelector('#rua')
    const inputNumero   = document.querySelector('#numero')
    const inputBairro   = document.querySelector('#bairro')
    const inputCidade   = document.querySelector('#cidade')
    const inputEstado   = document.querySelector('#estado')
    const btn           = document.querySelector('button')
    // inputBairro.value = 'oi'
    
    btn.addEventListener('click', (event) => {
    
        event.preventDefault()
    
        const obj = {
            nome: inputName.value,
            email: inputEmail.value,
            sexo: inputSexo.value,
            idade: parseInt(inputidade.value),
            cpf: parseInt(inputCpf.value),
            endereco: {
                estado: inputEstado.value,
                cidade: inputCidade.value,
                bairro:inputBairro.value ,
                numero:parseInt(inputNumero.value) ,
                rua: inputRua.value,
                cep: parseInt(inputCep.value)
            }
        }
        
        console.log(obj)
         Api.cadastrarCliente(obj)
        
    })
}   

static async listIdCustomerEditClient(){

    
    const inputSelect = document.getElementById('inputSelect')
   

    const clientList = await fetch('https://atividade-api-clientes.herokuapp.com/clientes')
          .then(res => res.json())
          .then(res => {

            res.forEach(element => {
                
                const option = document.createElement('option')
                option.value = element.id
                option.innerText = element.id

                inputSelect.appendChild(option)

              
          })      

       
    }) 
    return clientList
}

static async listIdCustomerDeleteClient(){

    
    const inputSelect = document.querySelector('select')
   

    const clientList = await fetch('https://atividade-api-clientes.herokuapp.com/clientes')
          .then(res => res.json())
          .then(res => {

            res.forEach(element => {
                
                const option = document.createElement('option')
                option.value = element.id
                option.innerText = element.id

                inputSelect.appendChild(option)

              
          })      

       
    }) 
    return clientList
}

static async deleteCustomer(){

    const inputSelect = document.querySelector('#listDelete')
    const deletar = document.querySelector('#deletar')

    deletar.addEventListener('click',(event) => {

        event.preventDefault()

        Api.deletarCliente(inputSelect.value)
        
    }
    
    )

    Api.deletarCliente(inputSelect.value)
}

static async searchCustomer(){

    const searchCustomer = document.getElementById('searchCustomer')
    const select = document.getElementById('inputSelect')

    searchCustomer.addEventListener('click', (event) => {
        event.preventDefault() 
        Method.showCustomer(select.value)
    })
}

static async showCustomer(id){

    const inputName     = document.querySelector('#nome__edit')
    const inputEmail    = document.querySelector('#email__edit')
    const inputidade    = document.querySelector('#idade__edit')
    const inputCpf      = document.querySelector('#cpf__edit')
    const inputSexo     = document.querySelector('#sexo__edit')
    const inputCep      = document.querySelector('#cep__edit')
    const inputRua      = document.querySelector('#rua__edit')
    const inputNumero   = document.querySelector('#numero__edit')
    const inputBairro   = document.querySelector('#bairro__edit')
    const inputCidade   = document.querySelector('#cidade__edit')
    const inputEstado   = document.querySelector('#estado__edit')
    

    const client = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`)
          .then(res => res.json())
          .then(res => { 

            
                inputName.value = res.nome
                inputEmail.value = res.email
                inputidade.value = res.idade
                inputCpf.value = res.cpf
                inputSexo.value = res.sexo
                inputCep.value = res.endereco.cep
                inputRua.value = res.endereco.rua
                inputNumero.value = res.endereco.numero
                inputBairro.value = res.endereco.bairro
                inputCidade.value = res.endereco.cidade
                inputEstado.value = res.endereco.estado
               
            
            
          })

          return client
}

static async editCustomer(){

    const atualizar = document.querySelector('.atualizar')
    const select = document.getElementById("inputSelect")

    const inputName     = document.querySelector('#nome__edit')
    const inputEmail    = document.querySelector('#email__edit')
    const inputidade    = document.querySelector('#idade__edit')
    const inputCpf      = document.querySelector('#cpf__edit')
    const inputSexo     = document.querySelector('#sexo__edit')
    const inputCep      = document.querySelector('#cep__edit')
    const inputRua      = document.querySelector('#rua__edit')
    const inputNumero   = document.querySelector('#numero__edit')
    const inputBairro   = document.querySelector('#bairro__edit')
    const inputCidade   = document.querySelector('#cidade__edit')
    const inputEstado   = document.querySelector('#estado__edit')
    
    atualizar.addEventListener('click', (event) => {

        event.preventDefault()

      const obj =  {
           "id": select.value,
           "nome": inputName.value ,
           "cpf": inputCpf.value,
           "idade": inputidade.value,
           "sexo": inputSexo.value,
           "email": inputEmail.value,
           "endereco": {
               "estado": inputEstado.value,
               "cidade": inputCidade.value,
               "bairro": inputBairro.value,
               "numero": inputNumero.value,
               "rua":  inputRua.value ,
               "cep": inputCep.value
           }

       }  

       const id = select.value

       Api.editarCliente(id,obj)




   })
    

            
               
            
            
          

          return client


}


}

Method.registerCustomer()
Method.listIdCustomerEditClient()
Method.searchCustomer()
Method.editCustomer()
Method.listIdCustomerDeleteClient()
Method.deleteCustomer()