
$(document).ready(function() {

    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
    


    $('#cadastroForm').submit(function(event) {
    
        if (!$(this)[0].checkValidity()) {
            
            return;
        }

        event.preventDefault();

        console.log('Dados do formulário enviados:', $(this).serialize());
        
        setTimeout(function() {
            alert('Formulário enviado com sucesso!');
            $('#cadastroForm')[0].reset(); 
        }, 1000);
    });
});
