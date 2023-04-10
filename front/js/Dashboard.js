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
    console.log("no");
}

const profile = document.getElementById("profile");
const post = document.getElementById("post");

function navpost() {
    profile.style.display = "none";
    post.style.display = "block";
}
function navprofile() {
    profile.style.display = "block";
    post.style.display = "none";
}

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();

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
    const res = JSON.parse(httppost.responseText);

    for (let i = 0; i < res.length; i++) {
        const aname = document.createElement("span");
        const time = document.createElement("span");
        const p = document.createElement("p");
        const div = document.createElement("div");
        time.innerHTML = hour + ":" + minute;
        aname.classList = "name";
        time.classList = "time";
        div.classList = "bot1";
        aname.innerHTML = res[i].lname;
        const textnode = document.createTextNode(res[i].text);
        p.appendChild(textnode);
        p.appendChild(aname);
        p.appendChild(time);
        div.appendChild(p);
        document.getElementById("posts").appendChild(div);
    }
}
httppost.onerror = () => { console.log("error") }