const users = [{
        id: 1,
        name: "Beatriz"
    },
    {
        id: 2,
        name: 'Matheus'
    },
    {
        id: 3,
        name: 'Maria'
    }
];

console.log(users);

//usar o map para adicionar uma nova propriedade em cada objeto (o active)

const newUsers = users.map((item) => {
    return {
        ...item,
        active: true
    }
});

console.log(newUsers);