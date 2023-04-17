function vorod() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

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
    const http = new XMLHttpRequest();
    let req = {
        user: user,
        pass: pass,
    }
    http.open("POST", "http://localhost:3000/test/");
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(req));
    http.onload = () => {
        const res = JSON.parse(http.responseText)
        console.log(res);
        if (res.key) {
            document.cookie = "key =" + JSON.stringify(req);
            location.href = "./Dashboard.html";
        } else {
            alert("اشتباه است");
        }
    }
    http.onerror = () => {
        console.log("error");
    }
}