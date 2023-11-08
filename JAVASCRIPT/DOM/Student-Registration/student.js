const info = ['C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack']

console.log(info.length);
// const inf = [...info]
// console.log(inf);


// const step1 = info.map(item => item.replace("-",","))
// // console.log(step1);
// const studentNumber = step1.map(el=>el.split(",")[0]);
// const firstName = step1.map(el=>el.split(",")[1].trim().split(" ")[0]);
// const lastName = step1.map(el=>el.split(",")[1].trim().split(" ")[1]);
// const city = step1.map(el=>el.split(",")[2]);
// const path = step1.map(el=>el.split(",")[3]);
// // const studentNumber = step1.map(el=>el.split(" ")[0]);

// console.log(studentNumber);
// console.log(firstName);
// console.log(lastName);
// console.log(city);
// console.log(path);

info.forEach(element =>{
    const step1 = [element.replace("-",",").split(",")]
    console.log(step1);
    const studentNumber = step1[0][0];
    console.log(studentNumber);
    const firstName = step1[0][1].trim().split(" ")[0];
    console.log(firstName);
    const lastName = step1[0][1].trim().split(" ")[1];
    console.log(lastName);
    const city = step1[0][2];
    console.log(city);
    const path = step1[0][3];
    console.log(path);
    
    
    const table = document.querySelector("#table-data")
    const tbody = document.querySelector("tbody")
    const tr = document.createElement("tr")
    const td = document.createElement("td")
    const student = document.createElement("td")
    student.textContent = studentNumber
    const fName = document.createElement("td")
    fName.textContent = firstName
    const lName = document.createElement("td")
    lName.textContent = lastName
    const address = document.createElement("td")
    address.textContent = city
    const department = document.createElement("td")
    department.textContent = path
    
    
    tr.appendChild(student)
    tr.appendChild(fName)
    tr.appendChild(lName)
    tr.appendChild(address)
    tr.appendChild(department)
    
    
    tbody.appendChild(tr)
    
})






// const table = document.getElementById('data-table');
// const tbody = table.getElementsByTagName('tbody')[0];

// data.forEach(item => {
//     const parts = item.split(' - ');
//     const id = parts[0];
//     const info = parts[1].split(', ');
//     const name = info[0];
//     const location = info[1];
//     const role = info[2];

//     const row = document.createElement('tr');
//     const idCell = document.createElement('td');
//     idCell.textContent = id;
//     const nameCell = document.createElement('td');
//     nameCell.textContent = name;
//     const locationCell = document.createElement('td');
//     locationCell.textContent = location;
//     const roleCell = document.createElement('td');
//     roleCell.textContent = role;

//     row.appendChild(idCell);
//     row.appendChild(nameCell);
//     row.appendChild(locationCell);
//     row.appendChild(roleCell);

//     tbody.appendChild(row);
// });






















  












