const args = process.argv.slice(2);
const { registerAppointment, readAppointments } = require("./operaciones.js");

if (args[0] != null) {
    switch (args[0]) {
        case args[0] = 'register':
            registerAppointment(args.slice(1));
            break;
        case args[0] = 'read':
            readAppointments("citas.json");
    }
} else {
    console.log('Please Enter an Action!');
}
