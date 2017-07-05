var charge=25;
charge+=Math.max(0,process.argv[2]-2)*charge+Math.max(0,min-15);
if (process.argv[2]<0||process.argv[3]<0) {
    console.log("kya kuch bhi daalega?");
    return;
};
console.log(chargeTotal);
