import {Readable} from 'node:stream'

class onetohundredstream extends  Readable {
    index = 1

    _read(){
        const i = this.index++

       setTimeout(() =>{
        if (i > 5){
            this.push(null)
        } else {
            const buf = Buffer.from(String(`${i}\n`)) // `$ = Dá espaço entre os número {i} \n = pula uma linha`
            this.push(buf)
        }
       },1000) // 1000 serve para os números irem aparecendo mais devagar, apagando o 1000 e a vírgula tudo vai aparecer muito rápido.
    }
}
fetch('http://localhost:3334', {
    method: 'POST',
    body: new onetohundredstream(),
    duplex: 'half', // Necessário para streaming de dados no corpo(body)
})