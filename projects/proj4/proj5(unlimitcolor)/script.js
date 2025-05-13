// generating a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        console.log(color += hex[Math.floor(Math.random)*16])
    }


}