document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnCadastrar").addEventListener("click", cadastrar);

    function limparValidacao() {
        document.getElementById("atv_nome").style["border-color"] = "#ced4da";
        document.getElementById("atv_desc").style["border-color"] = "#ced4da";
        document.getElementById("atv_data").style["border-color"] = "#ced4da";
        document.getElementById("vol_id").style["border-color"] = "#ced4da";
        document.getElementById("emp_id").style["border-color"] = "#ced4da";
        document.getElementById("pro_id").style["border-color"] = "#ced4da";
    }

    function cadastrar() {
        limparValidacao();

        let nome = document.querySelector("#atv_nome").value;
        let desc = document.querySelector("#atv_desc").value;
        let data = document.querySelector("#atv_data").value.split("/").reverse().join("-");
        let vol_id = document.querySelector("#vol_id").value;
        let emp_id = document.querySelector("#emp_id").value;
        let pro_id = document.querySelector("#pro_id").value;

        let listaErros = [];

        if (nome === "") {
            listaErros.push("atv_nome");
        }
        if (desc === "") {
            listaErros.push("atv_desc");
        }
        if (data === "") {
            listaErros.push("atv_data");
        }
        if(pro_id === ""){
            listaErros.push("pro_id");
        }
        console.log(listaErros)

        if (listaErros.length == 0) {

            let obj = {
                nome: nome,
                desc: desc,
                data: data,
                vol_id: vol_id,
                emp_id: emp_id,
                pro_id: pro_id
            };

            fetch("/atividades/cadastrar", {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(r => {
                return r.json();
            })
            .then(r => {
                if (r.ok) {
                    window.location.href = "/";
                }
                else {
                    alert(r.msg);
                }
            })

        }
        else {

            for (let i = 0; i < listaErros.length; i++) {
                let campos = document.getElementById(listaErros[i]);
                campos.style["border-color"] = "red";
            }
            alert("Preencha corretamente os campos indicados!");

        }
    }

})
