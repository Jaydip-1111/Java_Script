let m1 = prompt("Enter Mark M1:-");
let m2 = prompt("Enter Mark M2:-");
let m3 = prompt("Enter Mark M3:-");

total = parseInt(m1)+parseInt(m2)+parseInt(m3);
document.write("Total is:-"+total+"<br>");

per = total/3;
document.write("Percentage is:-"+per+"<br>");

if(per>=90)
      document.write("Grade A+");
   else if(per>=80 && per<90)
     document.write("Gread A");
   else if(per>=70 && per<80)
     document.write("Gread B");
   else if(per>=60 && per<70)
     document.write("Gread C");
   else if(per>=50 && per<60)
     document.write("Graed D");
else
    document.write("Fail");