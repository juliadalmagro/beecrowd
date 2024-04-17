let p1 = Number(lines.shift());
let p2 = Number(lines.shift());
let p3 = Number(lines.shift());

t1 = (p2 * 2) + (p3 * 4);
t2 = (p1 * 2) + (p3 * 2);
t3 = (p1 * 4) + (p2 * 2);
    
if(t1 < t2 && t1 < t3){
    console.log(t1);
}else if(t2 < t1 && t2 < t3){
    console.log(t2);
}else if(t3 < t1 && t3 < t2){
    console.log(t3);
}else if(t1 == t2 && t3 < t1){
    console.log(t3);
}else if(t1 == t3 && t2 < t1){
    console.log(t2);
}else{
    console.log(t2);
}

