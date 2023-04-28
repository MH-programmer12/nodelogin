const cookie = document.cookie.split('=');
if (cookie[0] == "key") {
    const http = new XMLHttpRequest();
    http.open("POST", "http://localhost:3000/test/");
    http.setRequestHeader("Content-Type", "application/json");
    http.send(cookie[1]);
    http.onload = () => {
        const res = JSON.parse(http.responseText)
        console.log(res);
        console.log(res);
        const nav_pp =document.getElementById("nav-pp");
        const nav_khorog =document.getElementById("nav-khorog");
        if(res.key.lname) {
            nav_pp.innerHTML = res.key.lname;
            nav_khorog.style.display = "flex";
        } else {
            nav_pp.innerHTML = "ورود";
            nav_khorog.style.display = "none";
        }
    }
    http.onerror = () => { console.log("error") }
} else {
    console.log("no");
    function navprofile() {
        location.href = "./vorod.html";
    }
}
function navkhorog() {
    document.cookie = "key=aaa;max-age=0";
    location.href = "./index.html";
}

function navprofile() {
    location.href = "./Dashboard.html";
}

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();

const http = new XMLHttpRequest();
http.open("GET", "http://localhost:3000/post")
http.send();
http.onload = () => {
    const res = JSON.parse(http.responseText)
    console.log(res);
    for (i = 0; i < res.length; i++) {
        const a = document.createElement("a");
        const div = document.createElement("div");
        const pt = document.createElement("p");
        const pb = document.createElement("p");
        const time = document.createElement("span");
        const urlpost = "post.html?id=" + res[i].id + "";
        const href = document.createAttribute("href");
        href.value = urlpost;
        a.setAttributeNode(href);
        div.classList = "bot";
        pt.classList = "pt";
        pt.innerHTML = res[i].lname;
        pb.classList = "pb";
        time.classList = "time";
        time.innerHTML = hour + ":" + minute;
        const textnode = document.createTextNode(res[i].text);
        pb.appendChild(textnode);
        div.appendChild(pt);
        div.appendChild(pb);
        div.appendChild(time);
        a.appendChild(div);
        document.getElementById("posts").appendChild(a);
    }
}
http.onerror = () => { console.log("error") }