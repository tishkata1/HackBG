var count = Math.floor(Math.random() * 8) + 2; //Number of bottles
var bottles = [];
var distance = 0;

for(i=0; i<count; i++){
    bottles.push({"x" : Math.floor(Math.random() * 9) + 1, "y" : Math.floor(Math.random() * 9) + 1});
}

bottles.sort(function(a, b) {
    return a.x - b.x;
});

for(ind in bottles){
    if(bottles[Number(ind) + 1] != undefined){
        distance += Math.abs(Number(bottles[ind].x) - Number(bottles[Number(ind) + 1].x)) + Math.abs(Number(bottles[ind].y)- Number(bottles[Number(ind) + 1].y));
    }
}

console.log(count);
console.log(bottles);
console.log(distance);
