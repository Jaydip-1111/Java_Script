display();
document.getElementById('btn1').addEventListener("click", () => {
    let name = document.userform.name.value;
    console.log(name);
    let age = document.userform.age.value;
    let salary = document.userform.sal.value;
    let gen = document.userform.g1.value;

    let jp = {};
    let xyz = {
        name: name,
        age: age,
        salary: salary,
        gender: gen
    };
    
    let sData = JSON.parse(localStorage.getItem("empDetail"));
    if (sData == null && sData.length >0) {
        sData = [];
        sData.push(xyz);
        localStorage.setItem("empDetail", JSON.stringify(sData));
    } else {
        jp = [xyz];
        localStorage.setItem("empDetail", JSON.stringify(sData));
    }
    document.userform.reset();
    display();
});
function display() {
  let dt = "<tr>";
    dt += "<th><center>Name</center></th>";
    dt += "<th><center>Age</center></th>";
    dt += "<th><center>Salary</center></th>";
    dt += "<th><center>Gender</center></th>";
    dt += "<th><center>Action</center></th>";
    dt += "</tr>";
    let local = localStorage.getItem("empDetail");
   
    if (local != null) {
       let abc = JSON.parse(local);    
        for (let i = 0; i < abc.length; i++) {
            dt += "<tr>";
            dt += "<td><center>" + abc[i].name + "</center></td>";
            dt += "<td><center>" + abc[i].age + "</center></td>";
            dt += "<td><center>" + abc[i].salary + "</center></td>";
            dt += "<td><center>" + abc[i].gender + "</center></td>";
            dt += "<td><center><input type='button' name='btndel' id='btndel' value='Delete' onclick = 'delData("+i+")'</center></td>";
            dt += "</tr>";
        }
    }
    document.getElementById("userData").innerHTML = dt;
}


