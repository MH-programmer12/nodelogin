function register() {
    const lname = document.getElementById("lname").value;
    const fname = document.getElementById("fname").value;
    const age = document.getElementById("age").value;
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (lname.length < 3) {
        alert("lname.length < 3");
        return;
    }
    if (lname.length > 15) {
        alert("lname.length > 15");
        return;
    }
    if (fname.length < 3) {
        alert("fname.length < 3");
        return;
    }
    if (fname.length > 15) {
        alert("fname.length > 15");
        return;
    }
    if (age.length > 3) {
        alert("age.length > 3");
        return;
    }
    if (user.length < 3) {
        alert("user.length < 3");
        return;
    }
    if (user.length > 15) {
        alert("user.length > 15");
        return;
    }
    if (pass.length < 3) {
        alert("pass.length < 3");
        return;
    }
    if (pass.length > 15) {
        alert("pass.length > 15");
        return;
    }
    const http = new XMLHttpRequest();
    let data = {
        lname: lname,
        fname: fname,
        age: age,
        user: user,
        pass: pass,
    }
    http.open("POST", "http://localhost:3000/user/");
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(data));
    http.onload = () => {
        const data = JSON.parse(http.responseText)
        console.log(data);
        location.href = "ok.html";
    }
    http.onerror = () => { console.log("error") }
}

// function test() {
//     const http = new XMLHttpRequest();
//     const user = document.getElementById("user").value;
//     const pass = document.getElementById("pass").value;
//     let data = {
//         user: user,
//         pass: pass,
//     }
//     http.open("POST", "http://localhost:3000/test/");
//     http.setRequestHeader("Content-Type", "application/json");
//     http.send(JSON.stringify(data));
//     http.onload = () => {
//         const data = JSON.parse(http.responseText)
//         console.log(data);
//     }
//     http.onerror = () => {
//         console.log("error");
//     }
// }

// function get() {
//     const http = new XMLHttpRequest();

//     http.open("GET", "http://localhost:3000/api1/")
//     http.send();
//     http.onload = () => {
//         const data = JSON.parse(http.responseText)
//         console.log(data);
//     }
//     http.onerror = () => {
//         console.log("error");
//     }
// }


// function put() {
//     const http = new XMLHttpRequest();
//     const user = document.getElementById("user").value;
//     const pass = document.getElementById("pass").value;
//     let data = {
//         user: user,
//         pass: pass,
//     }
//     http.open("PUT", "http://localhost:3000/api1/1");
//     http.setRequestHeader("Content-Type", "application/json");
//     http.send(JSON.stringify(data));
//     http.onload = () => {
//         const data = JSON.parse(http.responseText)
//         console.log(data);
//     }
//     http.onerror = () => {
//         console.log("error");
//     }
// }

// function delet() {
//     const http = new XMLHttpRequest();

//     http.open("DELETE", "http://localhost:3000/api1/2");
//     http.send();
//     http.onload = () => {
//         const data = JSON.parse(http.responseText)
//         console.log(data);
//     }
//     http.onerror = () => {
//         console.log("error");
//     }
// }