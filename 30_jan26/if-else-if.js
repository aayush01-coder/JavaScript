// else-if contioin is for check many condiotion in logic...
// STUDENT RESULT CHECKER to check is student pass ot not and which grade

let marks = prompt("Enter Your marks(0-100)");


if (marks>=90 && marks <=100)
    {
    console.log(("You are pass"),("Grade is A+"),marks );
}
else if(marks<=90 && marks>=80 ){
    console.log(("You are pass"),("Grade is A"),marks );
}
else if (marks<80 && marks>=60){
    console.log(("You are pass"),("Grade is B"),marks );
}
else if (marks<60 && marks>=34){
    console.log(("You are pass"),("Grade is C"),marks );
}
else{
    console.log("You are fail!",marks);
}