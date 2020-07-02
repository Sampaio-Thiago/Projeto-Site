// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar  objetos que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto banco de dados para operações
// db.serialize(() => {

//     // com comandos sql, irei:

//     // 1 - criar tabelas
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             address2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
// //         );
// // `)

// //     // 2 - inserir dados na taberla
// //     const query = `
// //         INSERT INTO places (
// //             image,
// //             name,
// //             address,
// //             address2,
// //             state,
// //             city,
// //             items
// //         ) VALUES (?,?,?,?,?,?,?);
// //     `
// //     const values = [
// //         "https://www.injecaodeplasticos.com.br/wp-content/uploads/2019/03/lixo-eletronico-e-a-reciclagem-do-plastico.jpg",
// //         "Tec-Coleta",
// //         "Avenida Paulista, Jardim Paulista",
// //         "Nº 1100",
// //         "São paulo",
// //         "São Paulo",
// //         "Resíduos Eletrônicos, Lâmpadas"
// //     ]

// //     function afterInsertData(err) {
// //         if(err) {
// //             return console.log(err)
// //         }

// //         console.log("Cadastro realizado com suceso")
// //         console.log(this)
// //     }

// //      db.run(query, values, afterInsertData)

// //     // 3 - consultar dados na tabela
// //     db.all(`SELECT * FROM places`, function(err, rows) {
// //       if(err) {
// //             return console.log(err)
// //        }

// //         console.log("Aqui estão os seus registros: ")
// //         console.log(rows)
// //     })

//     4 - deletar dados da tabela
    // db.run(`DELETE FROM places WHERE id = ? `, [], function(err) {
    //     if(err) {
    //         return console.log(err)
    //    }

    //    console.log("Registro deletado com sucesso") 
    //   })