var pages=["home", "about", "view"];
var list=[];
function createNav() {
    document.body.innerHTML=""
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);
    nav.style.backgroundColor = 'green';
    nav.style.lineHeight="70px";
    nav.style.height="60px";

    document.body.appendChild(nav);

    function createButton(pg){
        var button=document.createElement("button")
        button.innerHTML=pg;
        button.addEventListener("click", function (){
            navigate(pg);
        })
        nav.appendChild(button);
    }

}

function createWrapper(){
    var wrapper=document.createElement("wrapper");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}
function navigate(pg) {
    if(pg==="home"){

        homePage();
    }else if(pg==="about"){

        aboutPage();
    }else if(pg==="view"){

        interactPage();
    }else{
        login()
    }
}
function login(){
    var user=document.createElement("input");
    user.classList.add("user");
    user.placeholder="username";
    var submit =document.createElement("button")
    submit.classList.add("submit");
    submit.innerHTML="Submit"
    var answer=document.createElement("div")
    submit.addEventListener("click", function (){
        var user_name = document.body.querySelector(".user").value;
        if (user_name==="coolStudent123"){
            createNav()
            createWrapper()
            navigate("home");
        }else{
            answer.innerHTML="The username input is not correct, please try again"
        }
    })

    document.body.appendChild(user);
    document.body.appendChild(submit);
    document.body.appendChild(answer);
}
function homePage() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Home";
    wrapper.appendChild(header);


}
function aboutPage(){
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML = "About";
    var name=document.createElement("h3")
    name.innerHTML="Virginia"
    wrapper.appendChild(header);
    wrapper.appendChild(name);
}
function interactPage() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "View Notes";
    var singleNote = document.createElement("input")
    singleNote.classList.add("one_note")
    singleNote.placeholder = "Note";
    var importance = document.createElement("input")
    importance.classList.add("import");
    importance.placeholder = "Importance";
    var note=document.createElement("button")
    note.classList.add ("note");
    note.innerHTML="Submit Note"
    var noteList=document.createElement("div")
    noteList.classList.add ("noteList");
    note.addEventListener("click", function () {
        var note = document.body.querySelector(".one_note").value;
        var importance = document.body.querySelector(".import").value;
        if (note.length === 1){
            noteList.innerHTML=" That note is not long enough to be saved"
        }else if(isNaN(parseInt(importance))){
            noteList.innerHTML="Importance must be listed as a numerical value"
        }else{
            list.push(`${importance} ${note}`);
            render_list()
        }
        function render_list(){
            noteList.innerHTML=""
            for (var i=0; i<list.length;i++){
                var note=document.createElement("div")
                note.innerHTML=list[i];
                noteList.appendChild(note)

            }
        }
    })
    wrapper.appendChild(header);
    wrapper.appendChild(singleNote);
    wrapper.appendChild(importance);
    wrapper.appendChild(note);
    wrapper.appendChild(noteList);
}

navigate("...");