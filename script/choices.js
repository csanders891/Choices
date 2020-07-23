var choice=prompt("What did Johnny do at school today? \n A: Do his work quietly \n B: Disrupt the class");
switch(choice)
{
case "A":
alert("Johnny did all of his work assigned to him");
alert("He has earned free time");
break;

case "a":
alert("Johnny did all of his work assigned to him");
alert("He has earned free time");
break;

case "B":
alert("Johnny was looking around the room");
alert("He was talking during class and disturbing his classmates");
alert("Johnny has to do his work during free time");
break;

case "b":
alert("Johnny was looking around the room");
alert("He was talking during class and disturbing his classmates while they were working");
alert("Johnny has to do his work during free time");
break;

default:
alert("Invalid choice");
}