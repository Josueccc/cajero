import { model } from "../data.js";
import { changeComponent } from "../utils.js";
import { login } from "./login.js";



export const operaciones = {
    load: () => {
        changeComponent("operaciones", [
            {
                element: "cerrar-sesion",
                event: "click",
                function: () => operaciones.logout(),
            },
            {
                element: "depositar",
                event: "click",
                function: () => operaciones.depositar(),
            },
            {
                element: "retirar",
                event: "click",
                function: () => operaciones.retirar(),
            },
            {
                element: "consultModal",
                event: 'show.bs.modal',
                function: () => operaciones.consultar(),
            },
            {
                element: "depositModal",
                event: "focus",
                function: () => {
                    document.getElementById("deposito-input").value = "";
                    document.getElementById("deposito-input").focus();
                },
            },
            {
                element: "retirementModal",
                event: "focus",
                function: () => {
                    document.getElementById("retiro-input").value = "";
                    document.getElementById("retiro-input").focus();
                },
            },
        ])
        .then(() => {
            document.getElementById("nombre-usuario").innerHTML = model.getName(model.getSession());
        })

    },


    consultar: () => {
        const user = model.getSession();
        const saldo = model.getSaldo(user);
        document.getElementById("saldo-actual").innerHTML = "$" + saldo;
    },

    depositar: () => {
        const user = model.getSession();
        let deposito = document.getElementById("deposito-input").value;
        deposito = parseFloat(deposito);

        if (isNaN(deposito)) {
            alert("Por favor, ingrese un número válido para el depósito");
            return;
        }

        const saldo = model.getSaldo(user);

        if (deposito <= 0) {
            alert("El monto debe ser mayor a 0");
            return;
        }

        if ((deposito + saldo) > 990) {
            alert("El monto debe ser menor a $990");
            return;
        }

        model.makeDeposit(user, deposito);

        const modal = bootstrap.Modal.getInstance(document.getElementById("depositModal"));
        modal.hide();

        const nuevoSaldo = model.getSaldo(user);
        alert("Su nuevo saldo es de: " + nuevoSaldo);
    },

    retirar: () => {
        const user = model.getSession();
        let retiro = document.getElementById("retiro-input").value;
        retiro = parseFloat(retiro);

        if (isNaN(retiro)) {
            alert("Por favor, ingrese un número válido para el retiro");
            return;
        }

        const saldo = model.getSaldo(user);

        if ((saldo - retiro) < 10) {
            alert("No tiene saldo suficiente");
        } else {
            model.makeRetirement(user, retiro);

            const modal = bootstrap.Modal.getInstance(document.getElementById("retirementModal"));
            modal.hide();

            const nuevoSaldo = model.getSaldo(user);
            alert("Su nuevo saldo es de: " + nuevoSaldo);
        }
    },

    logout: () => {
        model.destroySession();
        login.load();
    }

}
