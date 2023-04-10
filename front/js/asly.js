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

const gethttppost = new XMLHttpRequest();
gethttppost.open("GET", "http://localhost:3000/post?a='1'&b='2'&c='3'")
gethttppost.send();
gethttppost.onload = () => {
    const res = JSON.parse(gethttppost.responseText)
    console.log(res);
    for (i = 0; i < res.length; i++) {
        const a = document.createElement("a");
        const div = document.createElement("div");
        const p = document.createElement("p");
        const aname = document.createElement("span");
        const time = document.createElement("span");
        const urlpost = "post.html?id=" + res[i].id + "";
        const href = document.createAttribute("href");
        href.value = urlpost;
        a.setAttributeNode(href);
        div.classList = "bot1";
        aname.classList = "name";
        time.classList = "time";
        aname.innerHTML = res[i].lname;
        time.innerHTML = hour + ":" + minute;
        const textnode = document.createTextNode(res[i].text);
        p.appendChild(textnode);
        p.appendChild(aname);
        p.appendChild(time);
        div.appendChild(p);
        a.appendChild(div);
        document.getElementById("posts").appendChild(a);
    }
}
gethttppost.onerror = () => { console.log("error") }