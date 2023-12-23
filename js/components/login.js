import { model } from "../data.js";
import { changeComponent } from "../utils.js";
import { operaciones } from "./operaciones.js";

export const login = {
    load: () => {
        changeComponent("login", [
            {
                element: "iniciar-sesion",
                event: "click",
                function: (event) => {
                    event.preventDefault();
                    login.login()
                }
            }
        ]);
    },
    login: () => {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Nombre de usuario o contraseña vacios");
            return;
        }

        if (!model.verifyUser(username, password)) {
            alert("Usuario o contraseña incorrectos");
            return;
        }

        operaciones.load();
    }
}