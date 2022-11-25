
const prompt = require("prompt");
var schema = {
    properties: {
        name: {
            description: "What is your name ?",
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Name must be only letters, spaces or dashes',
            required: true
        },
        adress: {
            description: "Now type your adress",
            required: true
        },
        mail: {
            description: "Inform your Email for further contact.",
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Enter a valid Email',
            required: true

        },
        cpf: {
            description: "Please, type your CPF number",
            patern: /\d{3}\.\d{3}\.\d{3}\-\d{2}/g,
            message : 'Enter a valid CPF',
            required : true
        }
    }
};

prompt.start();

prompt.get(schema, function (err, result){
    console.log("Nome:"+result.name);
    console.log("Adress:"+result.adress);
    console.log("Email:"+result.mail);
    console.log("CPF:"+result.cpf);
});


