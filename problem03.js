s = "pr$pprtppp{%r%%#(;%rn$;~*s%r%r%;(#(x$p([~(~(r}%=([$[#[~[;~+rr~[r#(n([r%(n%b~;p#rp($;$[,l?(n~p#%$prn~%$r#(~$";
br=9;
counts = {};
sym = [];

for(i in s) {
    counts[s[i]] = (counts[s[i]] || 0)+1;
}
for(i in counts){
    sym.push({"count": counts[i], "letter": i});
}

sym.sort(function(a, b) {
    return b.count - a.count;
});

for(i in sym){
    sym[i].count = br;
    if(br<0)break;
    for(ind in s){
        if(s[ind] == sym[i].letter){
            s = s.substr(0, ind) + Number(sym[i].count) + s.substr(Number(ind)+1);
        }
    }
    br--;
}

var reg = /[^1-9]*[^0-9]+/g;
result = s.replace(reg, " + ");
console.log(result);
console.log(eval(result));



