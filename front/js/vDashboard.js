function clickr() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

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
    function test() {
        const http = new XMLHttpRequest();
        let datareq = {
            user: user,
            pass: pass,
        }
        http.open("POST", "http://localhost:3000/test/");
        http.setRequestHeader("Content-Type", "application/json");
        http.send(JSON.stringify(datareq));
        http.onload = () => {
            const datares = JSON.parse(http.responseText)
            console.log(datares);
            if (datares.key) {
                document.cookie = "key =" + JSON.stringify(datareq);
                location.href = "./Dashboard.html";
            } else {
                alert("اشتباه است");
            }
        }
        http.onerror = () => {
            console.log("error");
        }
    } test();
}