$(function(){  
$('ol > li').css('color', 'red');
});
/*$(document).ready(function(){
    $('li').css('color', 'red');
});
} */
/*le $ remplace (document).ready (document).ready est la partie qui permet de dire que document est pret à faire du jQuery dont des fonction d'ou function juste après
faire attention a funtion le mot se termine par une parenthèse ouvrante et fermante (function()
on ouvre les acolade pour lui donner une limite*/
/*Ensuite on insère le $ qui remplace get.Element.ById on precise l'element dans les parenthèse ici c'est un simple donc 'li' et si c'était une ID on aurait preciser avec le symbole # ex ('#text') 
.css il faut au préalable récuperer sa valeur il du coup possible de récupérer la valeur d'une propriété css il est aussi possible d'en définit et d'en modifier.Pour cela il suffit de passer un 2 argument à la méthode qui contiendra la valeur donner à l'attribut et on termine à un ; 
Pour terminer */
// $('ul').children().css('color' , 'blue')
/*children va permettre de selectionner les enfants directs ici on recupere le ul et ensuite je veux que ses enfants prennent la couleur bleu */
