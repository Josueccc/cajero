import { model } from "./data.js";
import { operaciones } from "./components/operaciones.js";
import { login } from "./components/login.js";


document.addEventListener("DOMContentLoaded", function () {
    if (model.getSession()) {
        operaciones.load();
        return;
    }

    login.load();
})
