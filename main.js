//1
// var n=window.prompt();
// console.log(n);

//2
// var n=Number(window.prompt());
// if(n%3==0 && n%4==0)
//   console.log("yes");
// else
// console.log("no");

//3
// var n=Number(window.prompt());
// var m=Number(window.prompt());
// if(n>m)
//   console.log(n);
// else
// console.log(m);

//4
// var n=Number(window.prompt());
// if(n<0)
//   console.log("negative")
// else
// console.log("positive")

//5
// var x,y,z;
// x=Number(window.prompt());
// y=Number(window.prompt());
// z=Number(window.prompt());
// if(x>y && x>z)
//   console.log("max element = ",x);
// else if(y>x && y>z)
//   console.log("max element = ",y);
// else if(z>x && z>y)
//   console.log("max element = ",z);
// if(x<y && x<z)
//   console.log("min element = ",x);
// else if(y<x && y<z)
//   console.log("min element = ",y);
// else if(z<x && z<y)
//   console.log("min element = ",z);

//6
// var n=Number(window.prompt());
// if(n%2==0)
//   console.log("even");
// else
// console.log("odd");

//7
// var c=window.prompt();
// if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u' || c=='A' || c=='E' || c=='I' || c=='O' || c=='U')
//   console.log("vowel");
// else
// console.log("Consonant");

//8
// var n=Number(window.prompt());
// for(var i=1;i<=n;i++)
// {
// console.log(i);
// }

//9
// var n=Number(window.prompt());
// for(var i=1;i<=12;i++){
//   console.log(i*n);
// }

//10
// var n=Number(window.prompt());
// for(var i=2;i<=n;i+=2)
// {
//   console.log(i);
// }

//11
// var x,y;
// x=Number(window.prompt());
// y=Number(window.prompt());
// var r=1;
// for(var i=0;i<y;i++)
// {
//   r*=x;
// }
// console.log(r);

//12
// var a,b,x,y,z;
// a=Number(window.prompt());
// b=Number(window.prompt());
// x=Number(window.prompt());
// y=Number(window.prompt());
// z=Number(window.prompt());
// console.log("total marks = ",x+y+z+a+b);
// console.log("avg marks = ",(x+y+z+a+b)/5);
// console.log("percentage = ",((x+y+z+a+b)/500)*100);

//13
// var n=Number(window.prompt());
// if(n==2)
//   console.log(28);
// else if(n==4 || n==6 || n==9 || n==11)
//   console.log(30);
// else if(n==1 || n==3 || n==5 || n==7 || n==8 || n==10 || n==12)
//   console.log(31);

//14
// var a,b,x,y,z;
// a=Number(window.prompt());
// b=Number(window.prompt());
// x=Number(window.prompt());
// y=Number(window.prompt());
// z=Number(window.prompt());
// p=(x+y+z+a+b)/5;
// if(p>=90)
// {
// console.log("Grade A");
// }
// else if(p>=80)
// {
//   console.log("Grade B");
// }
// else if(p>=70)
// {
//   console.log("Grade C");
// }
// else if(p>=60)
// {
//   console.log("Grade D");
// }
// else if(p>=40)
// {
//   console.log("Grade E");
// }
// else
// {
//   console.log("Grade F");
// }

//15
// var n=Number(window.prompt());
// switch(n)
// {
//   case 2:
//     console.log(28);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;
// }

//16
// var c=window.prompt();
// switch(c){
//   case 'a':
//   case 'e':
//   case 'i':
//   case 'o':
//   case 'u':
//   case 'A':
//   case 'E':
//   case 'I':
//   case 'O':
//   case 'U':
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }

//17
// var a,b;
// a=Number(window.prompt());
// b=Number(window.prompt());
// switch(true)
// {
//   case a>b:
//     console.log(a);
//     break;
//   default:
//     console.log(b);
// }

//18
// var n=Number(window.prompt());
// switch(true)
// {
//   case n%2==0:
//     console.log("even");
//     break;
//   default:
//     console.log("odd");
// }

//19
// var n=Number(window.prompt());
// switch(true)
// {
//   case n>0:
//     console.log("positive");
//     break;
//   case n<0:
//     console.log("negative");
//     break;
//   default:
//     console.log("zero");
// }

//20
// var a,b,c;
// a=Number(window.prompt("Enter first number"));
// c=window.prompt("enter operator");
// b=Number(window.prompt("Enter second number"));

// switch(c)
// {
//   case '+':
//     console.log(a+b);
//     break;
//   case '-':
//     console.log(a-b);
//     break;
//   case '*':
//     console.log(a*b);
//     break;
//   case '/':
//     switch(true)
//     {
//       case b==0:
//         console.log("Wrong Operation");
//         break;
//       default:
//         console.log(a/b);
//     }
// }
