const express = require("express")
const server = express()

// pegar o banco de dados 
const db = require("./database/db.js")

// configurar pasta pública
server.use(express.static("public"))

// habilitar uso do req.body
    server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/view", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
// página inicial
server.get("/", (req, res)=> {
    return res.render("index.html")
})

server.get("/create-point", (req, res)=> {
//    console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

//   console.log(req.body)

    // inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro do ponto")
        }

        console.log("Cadastro realizado com suceso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

     db.run(query, values, afterInsertData)

    
})

server.get("/search", (req, res)=> {

    const search = req.query.search

    if(search =="")
    return res.render("search-results.html", {total: 0})

    // coletar os dados do banco
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
      if(err) {
            return console.log(err)
       }

       const total = rows.length

        console.log("Aqui estão os seus registros: ")
        console.log(rows)
        return res.render("search-results.html", {places: rows, total: total})
    })
    
    
})

//ligar o servidor
server.listen(3000)
