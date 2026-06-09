//Print Reverse
let n = 5;
for (let i = 5; i >= 1; i--) {
    let row1 = " ";
    for (let j = 1; j <= i; j++) {
        row1 += "*";
    }
    console.log(row1.trim());

}

//Print Pyramid
let row = 3;

for (let i = 1; i <= row; i++) {//This loop is to print number of rows
    let str = ' ';
    for (let j = 0; j <= row - 1 - i; j++) {//This loop is to print blank spaces at start
        str += ' ';
    }
    for (let k = 0; k < i; k++) {//This loop is to print *
        str += "* ";
    }
    console.log(str);

}


