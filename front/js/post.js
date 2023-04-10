var query = window.location.search.substring(1);
arrquery = query.split("=");
postid = arrquery[1];

const httppost = new XMLHttpRequest();
httppost.open("GET", "http://localhost:3000/post/" + postid);
httppost.send();
httppost.onload = () => {
    const res = JSON.parse(httppost.responseText);

    const p = document.getElementById("p");
    p.innerHTML = res.lname;
    const text = document.getElementById("text");
    text.innerHTML = res.text;
}
httppost.onerror = () => { console.log("error") }

function ersal_an() {
    const ersal = document.getElementById("ersal");
    ersal.style.animation = "text 0.3s";
    setTimeout(() => {
        ersal.style.animation = "";
    }, 300);
}

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();

function ersalnazar() {
    const time = document.createElement("span");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const text = document.getElementById("textarea").value;
    time.innerHTML = hour + ":" + minute;
    time.classList = "time";
    div.classList = "my";
    const cookie = document.cookie.split('=');

    const httpcookie = new XMLHttpRequest();
    httpcookie.open("POST", "http://localhost:3000/test/");
    httpcookie.setRequestHeader("Content-Type", "application/json");
    httpcookie.send(cookie[1]);
    httpcookie.onload = () => {
        const res = JSON.parse(httpcookie.responseText)

        var query = window.location.search.substring(1);
        arrquery = query.split("=");
        postid = arrquery[1];

        const req = {
            "lname": res.key.lname,
            "postid": postid,
            "text": text,
        };

        const httpnazar = new XMLHttpRequest();
        httpnazar.open("POST", "http://localhost:3000/nazar/");
        httpnazar.setRequestHeader("Content-Type", "application/json");
        httpnazar.send(JSON.stringify(req));
        httpnazar.onload = () => {
            const res = JSON.parse(httpnazar.responseText);
            console.log(res);
        }
        httpnazar.onerror = () => { console.log("error") }

        const textnode = document.createTextNode(text);
        p.appendChild(textnode);
        p.appendChild(time);
        div.appendChild(p);
        document.getElementById("nazars").appendChild(div);
    }
    httpcookie.onerror = () => { console.log("error") }
}

const httpnazar = new XMLHttpRequest();
httpnazar.open("POST", "http://localhost:3000/comentpost/");
httpnazar.setRequestHeader("Content-Type", "application/json");
httpnazar.send(JSON.stringify({ postid: postid }));
httpnazar.onload = () => {
    const res = JSON.parse(httpnazar.responseText);

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
        document.getElementById("nazars").appendChild(div);
    }
}
httpnazar.onerror = () => { console.log("error") }

    // const gethttpnazar = new XMLHttpRequest();
    // gethttpnazar.open("GET", "http://localhost:3000/nazar/")
    // gethttpnazar.send();
    // gethttpnazar.onload = () => {
    //     const res = JSON.parse(gethttpnazar.responseText);


    //     for (i = 0; i < res.length; i++) {
    //         const aname = document.createElement("span");
    //         const time = document.createElement("span");
    //         const p = document.createElement("p");
    //         const div = document.createElement("div");
    //         time.innerHTML = hour + ":" + minute;
    //         aname.classList = "name";
    //         time.classList = "time";
    //         div.classList = "bot1";
    //         aname.innerHTML = res[i].lname;
    //         const textnode = document.createTextNode(res[i].text);
    //         p.appendChild(textnode);
    //         p.appendChild(aname);
    //         p.appendChild(time);
    //         div.appendChild(p);
    //         document.getElementById("nazars").appendChild(div);
    //     }
    // }
    // gethttpnazar.onerror = () => { console.log("error") }