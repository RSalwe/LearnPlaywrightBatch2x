// console.log(score);//not allowed
// let score = 10;

{
    //----TDZ for "score" starts here-----
    //console.log(score);//ReferenceError
    //score = 50;        //ReferenceError   
    //typeof score;      //ReferenceError
    //----TDZ for "score" ends here-----
    //let score = 10;//Declaration Reached, TDZ ends
    score = 50;//valid

    console.log(score);//Valid
    console.log(typeof score);
}