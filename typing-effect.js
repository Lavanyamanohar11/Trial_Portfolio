var i=0, text,aboutMe;
text = "Web Developer | Programmer  ";
aboutMe = "About Me!";

function typing(){
    if(i<text.length){
      
    document.getElementById('typer').innerHTML+=text.charAt(i);
    i++;
    }
    if(i=== text.length){
        i=0;
        document.getElementById('typer').innerHTML='';
    } 
    setTimeout(typing,100);
}

typing();

