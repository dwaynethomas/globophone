//jQuery("button").click(function() {
//  alert("This is a button.");
//});

function save() { 
    if (document.getElementById('nwnmid').value + document.getElementById('nwphnid').value  != ''){
        var fieldValue = document.getElementById('nwnmid').value;
        localStorage.setItem('name', fieldValue);
        var fieldValue2 = document.getElementById('nwphnid').value;
        localStorage.setItem('phone', fieldValue2);
        }
    else return;
    }

function load() {
    var storedValue = localStorage.getItem('name');
    var storedValue2 = localStorage.getItem('phone');
    if (storedValue) {
        document.getElementById('nwnmid').value = storedValue;
        document.getElementById('nwphnid').value = storedValue2;
        }
}

function disappear() {
    document.getElementById('nwnmid').value = '';
    localStorage.setItem('name', '')
    document.getElementById('nwphnid').value = '';
    localStorage.setItem('phone', '')
    }

function showDiv() {
    if (document.getElementById('nwnmid').value + document.getElementById('nwphnid').value  != ''){
   document.getElementById('savedDiv').style.display = "block";
    document.getElementById('delbutton').style.display = "inline";
    }
    else return;

}

