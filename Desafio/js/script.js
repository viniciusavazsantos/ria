/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("#salario").maskMoney({showSymbol: true, symbol: "R$", decimal: ",", thousands: "."});

    var cont = 0;
    $('#gravar').click(function () {

        var nome = $('#nome').val();
        var telefone = $('#telefone').val();
        var profissao = $('#profissao').val();
        var salario = $('#salario').val();
        if ((nome == "") || (telefone == "") || (profissao == "") || (salario == "")) {
            alert("Preencha Todos os Campos");
            return;
        }
        $('#tabela').show();
        $("#incluir").append(
                "<tr id='inserir" + cont + "'>"
                );
        $("#inserir" + cont).append([
            "<td>" + nome + "</td>",
            "<td>" + telefone + "</td>",
            "<td>" + profissao + "</td>",
            "<td>" + salario + "</td>",
            "<td> <button type='button' id='excluirLinha' onclick='excluir(this)' class='btn btn-danger btn-xs vini'>Excluir</button></td></td>"
        ]
                );
        $("#incluir").append(
                "</tr>"
                );
        cont++;
        //limpar os campos
        $('#nome').val('');
        $('#telefone').val('');
        $('#profissao').val('');
        $('#salario').val('');

    });

    //botão limpar
    $('#limpar').click(function () {
        $('#nome').val('');
        $('#telefone').val('');
        $('#profissao').val('');
        $('#salario').val('');
    });

});

//função para exluir linha inserida
function excluir(btn) {
    var idParent = $(btn).parent().parent().attr('id');
    $("#" + idParent).remove();
}
;

// função mascara telefone
function mascaraTelefone(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i)

    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);
    }
}
;

//função apenas números.
function apenasNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58))
        return true;
    else {
        if (tecla == 8 || tecla == 0 || tecla == 9)
            return true;
        else
            return false;
    }
}
;

/*mascara dinheiro
var mask = {
    money: function () {
        var el = this
                , exec = function (v) {
                    v = v.replace(/\D/g, "");
                    v = new String(Number(v));
                    var len = v.length;
                    if (1 == len)
                        v = v.replace(/(\d)/, "0.0$1");
                    else if (2 == len)
                        v = v.replace(/(\d)/, "0.$1");
                    else if (len > 2) {
                        v = v.replace(/(\d{2})$/, '.$1');
                    }
                    return v;
                };

        setTimeout(function () {
            el.value = exec(el.value);
        }, 1);
    }

};

$(function () {
    $('#salario').bind('keyup', mask.money)

});
*/




            