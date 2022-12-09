class Pessoa {   
    constructor(id, nameReceived, emailReceived, phoneReceived, cpfReceived, passwordReceived) {
        this.id = id;
        this.name = nameReceived;
        this.email = emailReceived;
        this.phone = phoneReceived;
        this.cpf = cpfReceived;
        this.password = passwordReceived;
    }
    
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getPhone() {
        return this.phone;
    }

    getCpf() {
        return this.cpf;
    }

    getPassword() {
        return this.password;
    }

    toString() {
        return "Nome: " + this.name +
            "<br>Email: " + this.email +
            "<br>Phone: " + this.phone +
            "<br>CPF: " + this.cpf +
            "<br>Senha: " + 
        ((this.password != null && this.password != "")
        ? "xxxxxxx" : "Não cadastrada") +
            
            "<br><div class='botoes'><button onclick='deleteObject("+this.id+")' class='delete btn btn-danger mt-2'>Excluir</button>" +
            
            "<button onclick='editObject("+this.id+")' class='edit btn btn-warning mt-2 ms-1'>Editar</button></div>";
    }
}
