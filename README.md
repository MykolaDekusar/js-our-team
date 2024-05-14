Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

- MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
- MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
- MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
- BONUS 1:
Trasformare la stringa foto in una immagine effettiva
- BONUS 2:
Organizzare i singoli membri in card/schede

*****************RISOLVO**********************

- MILESTONE 0:
--- Creo un array che contiene tanti oggetti quanti i membri del team

- MILESTONE 1:
--- Creo un ciclo for della lunghezza del mio array
----All'interno del ciclo creo un console.log con la posizione dell'oggetto nel mio array e  la proprietà .nome , .role, .image

- MILESTONE 2:
---Dentro il ciclo for creo un elemento div al quale assegno la classe card
----Poi creo un elemento h2 al quale assegno il valore di .nome
-----Creo un elemento p al quale assegno il valore di .role 
------Infine creo un elemento p al quale assegno il valore di .image

- BONUS 1:
---Scrivo una stringa interpolata img con il nostro array[i].image e la inserisco dento l'html di card

- BONUS 2:
---Creo un elemento div al quale assegno una classe "card" che ho stilizzato nel css
----Appendo l'elemento div al row che è presente nel DOM
-----Successivamente ci inietto l'img con il src presente nel nostro array object
------Creo un elemento h2 al quale assegno il valore di stringa dell'array ourTeam[i].name e lo appendo alla card
-------Infine creo un elemento p al quale assegno il valore di ourTeam[i].role e lo appendo alla card