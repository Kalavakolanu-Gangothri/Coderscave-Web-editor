
function out(){
    let HTML = document.getElementById("html-code").value;
    let CSS = document.getElementById("css-code").value;
    let JAVASCRIPT = document.getElementById("js-code").value;
    let OUTPUT = document.getElementById("out");

    OUTPUT.contentDocument.body.innerHTML = HTML + "<style>" + CSS + "</style>";
    OUTPUT.contentWindow.eval(JAVASCRIPT);
}