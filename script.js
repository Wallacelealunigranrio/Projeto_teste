   

          function calcular(){
            //Declaração das variaveis sessão Bolos
            var quantmorango = window.document.form2.qmorango.value;
            quantmorango=parseFloat(quantmorango);
            var quantchocolate = window.document.form2.qchocolate.value;
            quantchocolate=parseFloat(quantchocolate);
            var quantbaunilha = window.document.form2.qbaunilha.value;
            quantbaunilha=parseFloat(quantbaunilha);
            var quantnapolitano = window.document.form2.qnapolitano.value;
            quantnapolitano=parseFloat(quantnapolitano);
            var quantmaracuja = window.document.form2.qmaracuja.value;
            quantmaracuja=parseFloat(quantmaracuja);
            
            //Declaração de variaveis sessão Kits Festa
            var quantpequeno = window.document.form2.qpequeno.value;
            quantpequeno=parseFloat(quantpequeno);
            var quantmedio = window.document.form2.qmedio.value;
            quantmedio=parseFloat(quantmedio);
            var quantgrande = window.document.form2.qgrande.value;
            quantgrande=parseFloat(quantgrande);

            //Declaração de variaveis sessão Salgados
            var quantcoxinha = window.document.form2.qcoxinha.value;
            quantcoxinha=parseFloat(quantcoxinha);
            var quantrisole = window.document.form2.qrisole.value;
            quantrisole=parseFloat(quantrisole);
            var quantfrango = window.document.form2.qfrango.value;
            quantfrango=parseFloat(quantfrango);
            var quantcamarao = window.document.form2.qcamarao.value;
            quantcamarao=parseFloat(quantcamarao);
            


            //Calcula valor de acordo com quantidade escolhida sessão Bolos
            var valormorango = quantmorango*63;
            valormorango=parseFloat(valormorango), valormorango=valormorango.toFixed(2);
            window.document.form2.precomorango.value=valormorango
        
            var valorchocolate = quantchocolate*59;
            valorchocolate=parseFloat(valorchocolate), valorchocolate=valorchocolate.toFixed(2);
            window.document.form2.precochocolate.value=valorchocolate;
        
            var valorbaunilha= quantbaunilha*50;
            valorbaunilha=parseFloat(valorbaunilha), valorbaunilha=valorbaunilha.toFixed(2);
            window.document.form2.precobaunilha.value=valorbaunilha;
        
            var valornapolitano= quantnapolitano*35;
            valornapolitano=parseFloat(valornapolitano), valornapolitano=valornapolitano.toFixed(2);
            window.document.form2.preconapolitano.value=valornapolitano;
        
            var valormaracuja= quantmaracuja*45;
            valormaracuja=parseFloat(valormaracuja), valormaracuja=valormaracuja.toFixed(2);
            window.document.form2.precomaracuja.value=valormaracuja;

            //Calcula valor de acordo com quantidade escolhida sessão Kits Festas
            var valorpequeno= quantpequeno*220;
            valorpequeno=parseFloat(valorpequeno), 
            valorpequeno=valorpequeno.toFixed(2);
            window.document.form2.precopequeno.value=valorpequeno;

            var valormedio= quantmedio*300;
            valormedio=parseFloat(valormedio), 
            valormedio=valormedio.toFixed(2);
            window.document.form2.precomedio.value=valormedio;

            var valorgrande= quantgrande*410;
            valorgrande=parseFloat(valorgrande),
             valorgrande=valorgrande.toFixed(2);
            window.document.form2.precogrande.value=valorgrande;



            //Calcula valor de acordo com quantidade escolhida sessão Salgados
            var valorcoxinha= quantcoxinha*0.40;
            valorcoxinha=parseFloat(valorcoxinha), 
            valorcoxinha=valorcoxinha.toFixed(2);
            window.document.form2.precocoxinha.value=valorcoxinha;

            var valorrisole= quantrisole*0.40;
            valorrisole=parseFloat(valorrisole), 
            valorrisole=valorrisole.toFixed(2);
            window.document.form2.precorisole.value=valorrisole;

            var valorfrango= quantfrango*0.80;
            valorfrango=parseFloat(valorfrango),
            valorfrango=valorfrango.toFixed(2);
            window.document.form2.precofrango.value=valorfrango;

            var valorcamarao= quantcamarao*0.80;
            valorcamarao=parseFloat(valorcamarao),
            valorcamarao=valorcamarao.toFixed(2);
            window.document.form2.precocamarao.value=valorcamarao;
        

            //Soma o valor total dos pedidos
            var vtotal = parseFloat(valormorango)+parseFloat(valorchocolate)+parseFloat(valorbaunilha)+parseFloat(valornapolitano)+parseFloat(valormaracuja)+parseFloat(valorpequeno)+parseFloat(valormedio)+parseFloat(valorgrande)+parseFloat(valorcoxinha)+parseFloat(valorrisole)+parseFloat(valorcamarao)+parseFloat(valorfrango);
            vtotal=vtotal.toFixed(2);
            vtotal=parseFloat(vtotal);

         
            // Passa o valor Total para o Fomulario
            window.document.form2.total.value= vtotal;
            
            // Verifica quantidade de salgados, que não pode ser menor que 100 
            if (quantcoxinha < 100 & quantcoxinha > 0 )
            {
                window.alert("A Quantidade minima de Salgados é de 100 unidades!");
                window.document.form2.qcoxinha.value=0;
                window.document.form2.precocoxinha.value=0;
                window.document.form2.total.value=0;
            }

            if (quantrisole < 100 & quantrisole > 0 )
            {
                window.alert("A Quantidade minima de Salgados é de 100 unidades!");
                window.document.form2.qrisole.value=0;
                window.document.form2.precorisole.value=0;
                window.document.form2.total.value=0;
            }
            if (quantfrango < 100 & quantfrango > 0 )
            {
                window.alert("A Quantidade minima de Salgados é de 100 unidades!");
                window.document.form2.qfrango.value=0;
                window.document.form2.precofrango.value=0;
                window.document.form2.total.value=0;
            }
            if (quantcamarao < 100 & quantcamarao > 0 )
            {
                window.alert("A Quantidade minima de Salgados é de 100 unidades!");
                window.document.form2.qcamarao.value=0;
                window.document.form2.precocamarao.value=0;
                window.document.form2.total.value=0;
            }

            
            var vnome = window.document.form2.nome.value;
            var vtelefone = window.document.form2.telefone.value;
            var vcidade = window.document.form2.cidade.value;
            var vbairro = window.document.form2.bairro.value;
            var vrua = window.document.form2.rua.value;
           
            if(vnome == "" | vtelefone == "" | vcidade == "" | vrua == "")
             {
               
                window.alert("Preencha o Campo Obrigatorio!");
                
            }
            if(vtotal==0){

                window.alert("Selecione os produtos!");
            }

            
        }

            
        


       
            
        