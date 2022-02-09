// Aguarda oDOM estar pronto para executar os scripts JQuery

$document().ready(function(){
// recebe o evento de submit do formulario
$("#loginAluna").submit(function(event){
  // Testam se o usuario e a senha estao corretos
  if($("#inputUsuario").val() =="root" && $("#inputSenha").val() =="1234"){
    //Adicionas classesCSS a div mensagem
    $("#mensagem").addClass("alert alert-success alert-dismissible fade show")
    //Remove a classe "alert warning"
    $("#mensagem").removeClass("alert-warnig")
    //apresenta a mensagem para o usuario por 3segundos
    $("mensagem").text("Usuario Logado").show().fedeOut(300)
  }else{
    //Adicionas classesCSS a div mensagem
    $("#mensagem").addClass("alert alert-success alert-dismissible fade show")
    //Remove a classe "alert warning"
    $("#mensagem").removeClass("alert-success")
    //apresenta a mensagem para o usuario por 3segundos
    $("mensagem").text("Usuario ou senha invalida!").show().fedeOut(300)
    event.preventDefault()//bloqueia o evento do submit
    }
})
})