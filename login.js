"use strict";

const getCookieByName = Name => {


    const cookies = document.cookie 

    // starting index of the cookie

    let start = cookies.indexOf(Name + "=");

    if(start === -1){
        return "";

    }
    else {
        start = start + (Name.length + 1);

        // get the index of the semi-colon at the end of the cookie value 

        let end = cookies.indexOf(';', start);
        if (end === -1){
            end = cookies.length;
        }
        // use the start and end indexes to get the cookie value 

        const cookieValue = cookies.substring(start, end);

        //return the decoded cookies value 

        return decodeURIComponent(cookieValue);

    }

};

const setCookie = (Name, value, days) => {

    // Concatonate cookie Name and encode value 

    let cookie = Name + '=' + encodeURIComponent(value);

    // If theres a value for days, add max-age to cookie

    if(days){
        cookie += ", max-age=" + days * 24 * 60 * 60;
    }

    // add the path and then store the cookie

    cookie += '; Path=/';
    document.cookie = cookie;


};

const deleteCookie = Name => {
    
    alert("Prepping to delete.")
    document.cookie = Name + "= ''; max-age=0; path=/";
    alert("cookie deleted")

};

const goToPage = url => {
    
    location.href = url;
    
};

// button event handler

    document.getElementById('login').onClick = () => {
        console.log("This button works")
    
       let result  = document.getElementById('user').value;
    
       let x = document.createElement('SPAN');
    
       let y = document.createTextNode(result);
    
       x.appendChild(y);
       
       document.body.appendChild(x);
    
       console.log(result);
        
    }