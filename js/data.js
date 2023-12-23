
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
        {
            name: 'Elsa pato',
            username: 'elsa',
            password: '123',
            saldo: 0
        },
        {
            name: 'Fernanda',
            username: 'fernanda',
            password: '123',
            saldo: 0
        },
        {
            name: 'Juan',
            username: 'juan',
            password: '123',
            saldo: 0
        },
        {
            name: 'Pablo',
            username: 'pablo',
            password: '123',
            saldo: 0
        },
        {
            name: 'Monica',
            username: 'monica',
            password: '123',
            saldo: 0
        },
    ]));
}


export const model = {
    
    //Metodos para control de usuario
    verifyUser: (username, password) => {
        if (username == "" || password == "") {
            return false;
        }

        let users = JSON.parse(localStorage.getItem('users'));
        const result = users.some(user => {
            return user.username == username && user.password == password; 
        });
        
        if(result) model.setSession(username);
        
        return result;
    },
    
    setSession: (username) => {
        localStorage.setItem('user', username);
    },

    getSession: () => {
        return localStorage.getItem('user');
    },
    
    destroySession: () => {
        localStorage.removeItem('user');
    },

    getName: (username) => {
        let users = JSON.parse(localStorage.getItem('users'));
        let user = users.find(user => user.username == username);
        return user.name;
    },

    //Metodos para operaciones
    makeDeposit: (username, deposit) => {
        let users = JSON.parse(localStorage.getItem('users'));
        let user = users.find(user => user.username == username);
        user.saldo = user.saldo + parseFloat(deposit);
        localStorage.setItem('users', JSON.stringify(users));
    },

    getSaldo: (username) => {
        let users = JSON.parse(localStorage.getItem('users'));
        let user = users.find(user => user.username == username);
        return parseFloat(user.saldo);
    },

    makeRetirement: (username, retirement) => {
        let users = JSON.parse(localStorage.getItem('users'));
        let user = users.find(user => user.username == username);
        user.saldo = user.saldo - parseFloat(retirement);
        localStorage.setItem('users', JSON.stringify(users));
    },
}