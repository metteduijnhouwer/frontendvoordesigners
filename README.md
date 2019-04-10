Mijn Makeup website

Ik heb voor opdracht 3 een website gemaakt waarbij je maybeline make up ziet en dit ook kan filteren. Hiervoor heb ik een json file gebruikt die ik online heb gevonden.

-- Hoe werkt mijn javascript? --
Als eerst zorg ik ervoor dat het json bestand geopend kan worden in mijn website. Daarna maak ik een functie aan die 'makeuplatenzien' heet om hierin alle stukken van de json file aan te spreken en op de goede plaats te zetten. Ik maak als eerst een for loop waarmee ik voor ieder product een img, article, h2, p en span aanmaak. Ik zet met artikel.setAttribute een class in ieder artikel met als classnaam het product type die in de json staat. Dit zijn dus de soorten producten zoals bronzer of blush. Hieronder maak ik allemaal elementen aan voor in ieder artikel. Daaronder stop ik in ieder element dat ik daarboven heb aangemaakt een deel van dingen die in de json file staan zoals de naam van ieder artikel. Als ieder element die is aangemaakt is gevuld is met data uit de json zet ik alle elementen met appendchild in het eerder aangemaakte article, daarna worden de artikelen in de section gezet.

Om de filter functie te laten werken pak ik eerst met queryselector de knoppen die op de html pagina staan en maak hier vars van met allemaal een eigen naam.
Hierna maak ik een function aan die 'filteropsoort' heet en die geef ik een event mee als parameter. Eerst wordt er gekeken welke value het gene heeft van wat getriggerd was (waar de event plaatsvindt). Ik heb in mijn html iedere knop een bepaalde value gegeven. De value is het gene wat er op de knop staat. Dus als er bijvoorbeeld blush op de knop staat is de value die ik heb gegeven ook blush. Daarna worden alle artikelen aangesproken en een for loop gemaakt waarbij ieder artikel apart wordt aangesproken. Er wordt hierna 'iets' aangemaakt die de value van ieder artikel pakt. De value is zoals eerder gegeven het product type.
Hierna wordt er gezegd: Als value (de value dat hetgene heeft dat getriggerd was) niet gelijk staat aan iets (de value van het artikel dus het product type) komt er een class bij die invisible heet. In mijn css spreek ik dan de class invisible aan en doe daarbij display:none zodat deze niet worden weergegeven.

Onder dit staan allemaal regels die ervoor zorgen dat als je op een knop drukt, de hierboven gemaakte functie gaat lopen.

Ook is mijn filter menu in en uitklapbaar. Dit doe ik door een class toe te voegen aan de body die 'uitklap' heet als iemand drukt op .knopje img.


-- Mijn interactie verbeteringen --
Ik heb 4 verbeteringen gemaakt na het testen:

1. Eerst had ik het filter menu standaard ingeklapt zodat de gebruiker het zelf kon uitklappen als hij of zij het nodig had. Maar ik kwam er na het testen achter dat het handiger is als het menu wel al uitgeklapt is, omdat het menu met alle categorieën een belangrijk menu is en het is een beetje moeilijk te vinden voor zo iets belangrijks.

2. Ook kwam ik er na het testen achter dat het moeilijk te zien was dat de producten echt gefiltert werden. Ik had eerst geen vervagende animatie waardoor de gebruiker moeilijk kon zien dat er iets gebeurde na het drukken. Daarom heb ik ervoor gekozen om de producten die niet bij de gekozen categorie horen langzaam te laten vervagen zodat de gebruiker ziet dat het drukken iets heeft gedaan.

3. Gelijk na het verbeteren van punt 2 heb ik ook de bovenkant van de pagina de kleuren balk weggehaald, omdat als het menu uitgeklapt was en je koos een categorie, je het vervagen net niet kon zien. Daarom heb ik de balk aan de bovenkant weggehaald zodat je nog net als het menu is uitgeklapt de bovenkant van de producten kan zien en ook kan zien dat de producten die niet bij de categorie horen na het klikken langzaam verdwijnen.

4. Eerst had ik alle informatie van ieder product onder het product. Maar ik kwam erachter dat dit alleen maar onnodig was omdat dit heel veel ruimte innnam. Ik heb het veranderd door de informatie van ieder product pas te laten zien als de gebruiker over de foto van het product heen beweegt met de muis.


-- UI events --
Ik heb alleen gebruik gemaakt de pijltjes als andere optie om de website te bedienen. Als je op het pijlje omhoog drukt klapt het menu in en als je omlaag drukt klapt het menu uit. Ik heb bij opdracht 2 ook nog gebruik gemaakt van andere UI events maar bij de website voor opdracht 3 vond ik het een beetje onnodig.


-- Verschillende UI stacks --
Ik heb een loading state als de gebruiker heeft gefiltert. Zodra de gebruiker in het filter menu op een bepaalde categorie heeft gedrukt vervagen de andere producten die niet bij deze categorie horen langzaam. De pagina is dus aan het laden voor de goede resultaten.





---
- [Markup cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Getting started with GitHub Pages](https://guides.github.com/features/pages/)
