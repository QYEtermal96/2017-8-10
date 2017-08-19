function findNum(array){
    array.forEach((e) =>{
        if(array.filter((a) =>{
            return e === a;
        }).length === 1){
            console.log(e.toString());
        }
    })
}
module.exports = findNum;
