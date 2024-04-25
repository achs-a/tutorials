const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err,result) => { 
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./content/subfolder/second.txt', 'utf8', (err,result) => { 
        if(err){
            console.log(err)
            return
        }
        // console.log(result)
        const second = result
    writeFile('./content/result-async', `here is the result${first} and ${second}`,
    { flag: 'a'} , (err,result=>{
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')
    })
)
})
})
console.log('start next task')
