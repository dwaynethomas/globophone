//jQuery("button").click(function() {
//  alert("This is a button.");
//});

function save() {
    var fieldValue = document.getElementById('nwnmid').value;
    localStorage.setItem('text', fieldValue);

}