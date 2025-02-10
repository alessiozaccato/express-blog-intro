/*
Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman

*/

const express = require('express')
const app = express()
const port = 3000

//how to read the public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {

    const posts = [
        {
            title: "ciambellone",
            content: "il ciambellone è un dolce tipico della cucina italiana ideale per ogni tipo di occasione",
            image: "imgs/ciambellone.jpeg",
            tags: ["dolce", "dolce-fritto"]
        },
        {
            title: "Cracker alla barbabietola",
            content: "cracker",
            image: "imgs/cracker_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        },
        {
            title: "pane fritto dolce",
            content: "un dolce molto buono",
            image: "imgs/pane_fritto_dolce.jpeg",
            tags: ["dolce", "dolce fritto", "Ricette fritte"],
        },
        {
            title: "pasta barbabietola",
            content: "una tipologia di pasta molto gustosa",
            image: "imgs/pasta_barbabietola.jpeg",
            tags: ["pasta", "Ricette vegetariane", "Ricette al forno"],
        },
        {
            title: "torta paesana",
            content: "torta molto gustosa dai sapori tipici della terra",
            image: "imgs/torta_paesana.jpeg",
            tags: ["dolci", "Ricette vegetariane", "Ricette al forno"],
        }


    ]

    res.json(posts);

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})