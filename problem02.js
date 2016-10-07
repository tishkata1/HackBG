var str = "dddhhhuuhhuuuhdddduu";
var br = 0; //result
var m = 0; //height

for(i in str){
    if(str[i] == "d"){
        if(m>=0)
            br += 1/2 + m;
        m++;
    }
    if(str[i] == "h"){
        if(m>=0)
            br += m;
    }
    if(str[i] == "u"){
        m--;
        if(m>=0)
            br += 1/2 + m;
    }
}

console.log(br);
