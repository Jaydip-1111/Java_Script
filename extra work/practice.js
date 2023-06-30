display();
document.getElementById("btn1").addEventListener("click", () => {
    let name = document.empform.ename.value;
    let age = document.empform.age.value;
    let no = document.empform.num.value;
    let sal = document.empform.sal.value;
    let gen = document.empform.g1.value;
    let empid = document.empform.eid.value;

    let e1 = {};
    let empinfo = {
        name: name,
        age: age,
        number: no,
        salary: sal,
        gender: gen
    };
    let empData = JSON.parse(localStorage.getItem("empDetail"));
    if (empData != null) {
        if(empid != null){
            for(let i=0; i<empData.length;i++){
                if(empid == i){
                    empData[i].name = name;
                    empData[i].age = age;
                    empData[i].number= no;
                    empData[i].salary = sal;
                    empData[i].gender = gen;
                }
            }

        }else{
            empData.push(empinfo);
        }
        
        localStorage.setItem("empDetail", JSON.stringify(empData));
    } else {
        e1 = [empinfo];
        localStorage.setItem("empDetail", JSON.stringify(e1));
    }
    document.empform.reset();
    display();
});

function display() {
    let dt = "<tr>";
    dt += "<th>Name</th>";
    dt += "<th>Age</th>";
    dt += "<th>Number</th>";
    dt += "<th>Salary</th>";
    dt += "<th>gender</th>";
    dt += "<th>Action</th>";
    dt += "</tr>";
    let emp = localStorage.getItem("empDetail");

    if (emp != null) {
        let edetail = JSON.parse(emp);
        for (let i = 0; i < edetail.length; i++) {
            dt += "<tr>";
            dt += "<td>" + edetail[i].name + "</td>";
            dt += "<td>" + edetail[i].age + "</td>";
            dt += "<td>" + edetail[i].number + "</td>";
            dt += "<td>" + edetail[i].salary + "</td>";
            dt += "<td>" + edetail[i].gender + "</td>";
            dt += "<td><input type='button' name='deldata' id='deldata' value='Delete' onclick='deldata(" + i + ")'>";
            dt += "  <input type='button' name='editdata' id='editdata' value='Edit' onclick='editdata(" + i + ")'</td>";
            dt += "</tr>";
        }
    }
    document.getElementById("eform").innerHTML = dt;
}
function deldata(id) {
    let abc = JSON.parse(localStorage.getItem("empDetail"));
    abc.splice(id, 1);
    localStorage.setItem("empDetail", JSON.stringify(abc));
    display();
}

function editdata(id) {
    let empData = JSON.parse(localStorage.getItem("empDetail"));
    if (empData != null) {
        for (let i = 0; i < empData.length; i++) {
            if (id == i) {
                document.empform.eid.value = id;
                document.empform.ename.value = empData[i].name;
                document.empform.age.value = empData[i].age;
                document.empform.num.value = empData[i].number;
                document.empform.sal.value = empData[i].salary;
                document.empform.g1.value = empData[i].gender;
            }
        }
    }
}