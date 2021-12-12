console.log(window);

function getPageUrl(){
    let url = window.location.href;
    //debugger;
    console.log(url);
    window.history.forward();
}

getPageUrl();

function add(){
    let result = 4  +  7;
    let emp = JSON.stringify({"id":111, "age": 22});

    //data stored in local storage is available untill explicityly deleted
    window.localStorage.setItem("result", result);
    window.localStorage.setItem("name", "John");    //data stored in local storage is in string formate
    localStorage.setItem("empOne", emp);

    console.log(result);
}

function getStorageData(){
    let name = localStorage.getItem("name");
    let result = localStorage.getItem("result");
    let e = localStorage.getItem("empOne");

    console.log(typeof(name)+ "name is "+name);
    console.log(typeof(result)+"result is "+result);
    console.log(typeof(e)+ "employee is "+e);

    console.log(name);
    console.log(parseInt(result));
    let empObj = JSON.parse(e); //this converts the string for emp object to object form
    console.log(typeof(empObj));
    console.log(empObj);

    const {id,age} = empObj;    //this is object destructuring feature of ES6
    console.log(id);
    console.log(age);
}

function clearData(){
    localStorage.clear();
}


function addtoSession(){
    let result = 4  +  7;
    let emp = JSON.stringify({"id":111, "age": 22});

    //data stored in session storage is available until user closes all browse window
    window.sessionStorage.setItem("result", result);
    window.sessionStorage.setItem("name", "John");    //data stored in local storage is in string formate
    sessionStorage.setItem("empOne", emp);

    console.log(result);
}

function getStorageDataSession(){
    let name = sessionStorage.getItem("name");
    let result = sessionStorage.getItem("result");
    let e = sessionStorage.getItem("empOne");

    console.log(typeof(name)+ "name is "+name);
    console.log(typeof(result)+"result is "+result);
    console.log(typeof(e)+ "employee is "+e);

    console.log(name);
    console.log(parseInt(result));
    let empObj = JSON.parse(e); //this converts the string for emp object to object form
    console.log(typeof(empObj));
    console.log(empObj);

    const {id,age} = empObj;    //this is object destructuring feature of ES6
    console.log(id);
    console.log(age);
}

function clearDatainSession(){
    sessionStorage.clear();
}