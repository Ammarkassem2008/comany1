siteContent = document.getElementById("siteContent");

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

let language = {
    eng: {
        welcome:"Hi"
    },
    ar:{
        welcome:"كيفك"
    },
};

if (window.location.hash) {
    if (window.location.hash == "#ar") {
        siteContent.textContent =
            language.ar.welcome;
    }
    else if (window.location.hash == "#eng") {
        siteContent.textContent =
            language.eng.welcome;
    }
};