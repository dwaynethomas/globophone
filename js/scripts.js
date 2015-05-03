

function save() { 
    if (document.getElementById('nwnmid').value + document.getElementById('nwphnid').value  != ''){
        document.getElementById('savebutton').style.display = "none"; 
        var fieldValue = document.getElementById('nwnmid').value;
        localStorage.setItem('name', fieldValue);
        var fieldValue2 = document.getElementById('nwphnid').value;
        localStorage.setItem('phone', fieldValue2);
        document.getElementById('notsavedDiv').style.display = "none"; 
        $(".nwnmid").text(fieldValue);
        $(".nwphnid").text(fieldValue2);
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

function respondDiv() {
    if (document.getElementById('nwnmid').value + document.getElementById('nwphnid').value  != ''){
        document.getElementById('nameinput').style.display = "none"; 
        document.getElementById('savedDiv').style.display = "block";
        document.getElementById('delbutton').style.display = "inline";
    }
    else document.getElementById('notsavedDiv').style.display = "inline";

}

