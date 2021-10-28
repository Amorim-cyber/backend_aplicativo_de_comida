function exportar(){

    var txt = "NOME\tIMGSRC\tRATING\tTIPO\tDIST\tPRAZO\tFRETE\tDESCONTO\tURL\n";

    var card = document.getElementsByClassName('merchant-list-v2__item-wrapper');

    for(i = 0; i<card.length; i++){
        var nome = card[i].getElementsByClassName('merchant-v2__name')[0].innerText;
        var imgSrc = card[i].getElementsByTagName('img')[0].src;
        var rating = card[i].getElementsByClassName('null cardstack-rating')[0].innerText;
        var tipo = card[i].getElementsByClassName('merchant-v2__info')[0].innerText.split("\n•\n")[1];
        var dist = card[i].getElementsByClassName('merchant-v2__info')[0].innerText.split("\n•\n")[2];
        var prazo = card[i].getElementsByClassName('merchant-v2__footer')[0].innerText.split("\n•\n")[0];
        var frete = card[i].getElementsByClassName('merchant-v2__footer')[0].innerText.split("\n•\n")[1];

        var desc;
        
        if(card[i].getElementsByClassName('merchant-v2__context')[0]!=undefined){
            desc = card[i].getElementsByClassName('merchant-v2__context')[0].innerText;
        }else{
            desc = "Sem desconto";
        }
        
        var url = card[i].getElementsByTagName('a')[0].href;

        txt+=nome+"\t"+imgSrc+"\t"+rating+"\t"+tipo+"\t"+dist+"\t"+prazo+"\t"+frete+"\t"+desc+"\t"+url+"\n";

    }

    var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt));
		element.setAttribute('download', "food.txt");

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);

}