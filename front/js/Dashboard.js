const cookie = document.cookie.split('=');
if (cookie[0] == "key") {
    const http = new XMLHttpRequest();
    http.open("POST", "http://localhost:3000/test/");
    http.setRequestHeader("Content-Type", "application/json");
    http.send(cookie[1]);
    http.onload = () => {
        const res = JSON.parse(http.responseText)

        const lnametext = document.getElementById("lnametext");
        lnametext.innerHTML = res.key.lname;
        const fnametext = document.getElementById("fnametext");
        fnametext.innerHTML = res.key.fname;
        const agetext = document.getElementById("agetext");
        agetext.innerHTML = res.key.age;
        const usertext = document.getElementById("usertext");
        usertext.innerHTML = res.key.user;
        const passtext = document.getElementById("passtext");
        passtext.innerHTML = res.key.pass;
    }
    http.onerror = () => { console.log("error") }
} else {
    location.href = "./vorod.html";
}

const profile = document.getElementById("profile");
const post = document.getElementById("post");
const admin = document.getElementById("admin");
const nav_r_profile = document.getElementById("nav-r-profile");
const nav_r_post = document.getElementById("nav-r-post");
const nav_r_admin = document.getElementById("nav-r-admin");

function navasly() {
    location.href = "./index.html";
}
function navprofile() {
    admin.style.display = "none";
    post.style.display = "none";
    profile.style.display = "flex";
    nav_r_profile.style.backgroundColor = "rgb(178, 0, 127)";
    nav_r_post.style.backgroundColor = "rgb(155, 155, 155)";
    nav_r_admin.style.backgroundColor = "rgb(155, 155, 155)";
}
function navpost() {
    admin.style.display = "none";
    profile.style.display = "none";
    post.style.display = "block";
    nav_r_profile.style.backgroundColor = "rgb(155, 155, 155)";
    nav_r_post.style.backgroundColor = "rgb(178, 0, 127)";
    nav_r_admin.style.backgroundColor = "rgb(155, 155, 155)";
}
function navadmin() {
    profile.style.display = "none";
    post.style.display = "none";
    admin.style.display = "block";
    nav_r_profile.style.backgroundColor = "rgb(155, 155, 155)";
    nav_r_post.style.backgroundColor = "rgb(155, 155, 155)";
    nav_r_admin.style.backgroundColor = "rgb(178, 0, 127)";
}

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();


const newpostc = document.getElementById("newpost");
const closepostc = document.getElementById("closepost");

function closepost() {
    newpostc.style.display = "none";
    closepostc.style.display = "none";
}
function newpost() {
    newpostc.style.display = "block";
    closepostc.style.display = "block";
}

const newadminc = document.getElementById("newadmin");
const closeadminc = document.getElementById("closeadmin");

function closeadmin() {
    newadminc.style.display = "none";
    closeadminc.style.display = "none";
}
function newadmin() {
    newadminc.style.display = "block";
    closeadminc.style.display = "block";
}

function ersal_an() {
    const ersal = document.getElementById("ersal");
    ersal.style.animation = "text 0.3s";
    setTimeout(() => {
        ersal.style.animation = "";
    }, 300);
}
function ersal() {
    const time = document.createElement("span");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const text = document.getElementById("textarea").value;
    time.innerHTML = hour + ":" + minute;
    time.classList = "time";
    div.classList = "bot1";
    const cookie = document.cookie.split('=');

    const httpcookie = new XMLHttpRequest();
    httpcookie.open("POST", "http://localhost:3000/test/");
    httpcookie.setRequestHeader("Content-Type", "application/json");
    httpcookie.send(cookie[1]);
    httpcookie.onload = () => {
        const res = JSON.parse(httpcookie.responseText)
        console.log(res);
        const req = {
            "lname": res.key.lname,
            "text": text,
        };

        const httppost = new XMLHttpRequest();
        httppost.open("POST", "http://localhost:3000/post/");
        httppost.setRequestHeader("Content-Type", "application/json");
        httppost.send(JSON.stringify(req));
        httppost.onload = () => {
            const res = JSON.parse(httppost.responseText)
        }
        httppost.onerror = () => { console.log("error") }

        const textnode = document.createTextNode(text);
        p.appendChild(textnode);
        p.appendChild(time);
        div.appendChild(p);
        document.getElementById("posts").appendChild(div);
    }
    httpcookie.onerror = () => { console.log("error") }
}

const httppost = new XMLHttpRequest();
httppost.open("GET", "http://localhost:3000/post/");
httppost.send();
httppost.onload = () => {
    const res = JSON.parse(httppost.responseText)
    console.log(res);
    for (i = 0; i < res.length; i++) {
        const divspost = document.createElement("div");
        const divlname = document.createElement("div");
        const divtext = document.createElement("div");
        divspost.classList = "divspost";
        divlname.classList = "divpost";
        divtext.classList = "divpost";
        const textnodelname = document.createTextNode(res[i].lname);
        const textnodetext = document.createTextNode(res[i].text);
        divlname.appendChild(textnodelname);
        divtext.appendChild(textnodetext);
        divspost.appendChild(divlname);
        divspost.appendChild(divtext);
        document.getElementById("posts").appendChild(divspost);
    }
}
httppost.onerror = () => { console.log("error") }

function register() {
    const lname = document.getElementById("lname").value;
    const fname = document.getElementById("fname").value;
    const age = document.getElementById("age").value;
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const passok = document.getElementById("passok").value;

    if (lname.length < 2) {
        alert("اسم شما نباید کمتر از 2 حرف باشد");
        return;
    }
    if (lname.length > 20) {
        alert("اسم شما نباید بیشتر از 20 حرف باشد");
        return;
    }
    if (fname.length < 2) {
        alert("فامیلی شما نباید کمتر از 2 حرف باشد");
        return;
    }
    if (fname.length > 20) {
        alert("فامیلی شما نباید بیشتر از 20 حرف باشد");
        return;
    }
    if (age.length > 3) {
        alert("سن شما 4 رقمی شده است");
        return;
    }
    if (user.length < 3) {
        alert("نام کاربری شما نباید کمتر از 3 حرف باشد");
        return;
    }
    if (user.length > 15) {
        alert("نام کاربری شما نباید بیشتر از 15 حرف باشد");
        return;
    }
    if (pass.length < 3) {
        alert("رمز شما نباید کمتر از 3 حرف باشد");
        return;
    }
    if (pass.length > 15) {
        alert("رمز شما نباید بیشتر از 15 حرف باشد");
        return;
    }
    if (pass.length != passok.length) {
        alert("رمز شما همخوانی ندارد");
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
        location.href = "Dashboard.html";
    }
    http.onerror = () => { console.log("error") }
}

const httpuser = new XMLHttpRequest();
httpuser.open("GET", "http://localhost:3000/user")
httpuser.send();
httpuser.onload = () => {
    const res = JSON.parse(httpuser.responseText)
    console.log(res);
    for (i = 0; i < res.length; i++) {
        const divsuser = document.createElement("div");
        const divlname = document.createElement("div");
        const divfname = document.createElement("div");
        const divage = document.createElement("div");
        const divuser = document.createElement("div");
        const divpass = document.createElement("div");
        divlname.classList = "divuser";
        divfname.classList = "divuser";
        divage.classList = "divuser";
        divuser.classList = "divuser";
        divpass.classList = "divuser";
        divsuser.classList = "divsuser";
        const textnodelname = document.createTextNode(res[i].lname);
        const textnodefname = document.createTextNode(res[i].fname);
        const textnodeage = document.createTextNode(res[i].age);
        const textnodeuser = document.createTextNode(res[i].user);
        const textnodepass = document.createTextNode(res[i].pass);
        divlname.appendChild(textnodelname);
        divfname.appendChild(textnodefname);
        divage.appendChild(textnodeage);
        divuser.appendChild(textnodeuser);
        divpass.appendChild(textnodepass);
        divsuser.appendChild(divlname);
        divsuser.appendChild(divfname);
        divsuser.appendChild(divage);
        divsuser.appendChild(divuser);
        divsuser.appendChild(divpass);
        document.getElementById("admins").appendChild(divsuser);
    }
}
httpuser.onerror = () => { console.log("error") }