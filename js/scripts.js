

function save() { 
    check()
    if ((document.getElementById('nwnmid').value != '') && (document.getElementById('nwphnid').value.length != 10))
    {
        document.getElementById('savebutton').style.display = "none"; 
        var fieldValue = document.getElementById('nwnmid').value;
        localStorage.setItem('name', fieldValue);
        var fieldValue2 = document.getElementById('nwphnid').value;
        localStorage.setItem('phone', fieldValue2);
        document.getElementById('notsavedDiv').style.display = "none"; 
        $(".nwnmid").text(fieldValue);
        $(".nwphnid").text(fieldValue2);
        hassavedDiv();
    }
    else document.getElementById('notsavedDiv').style.display = "inline";
}

function load() {
    var storedValue = localStorage.getItem('name');
    var storedValue2 = localStorage.getItem('phone');
    if (storedValue) {
        document.getElementById('nwnmid').value = storedValue;
        document.getElementById('nwphnid').value = storedValue2;
        document.getElementById('delbutton').style.display = "inline";        
        }
}

function disappear() {
    document.getElementById('nwnmid').value = '';
    localStorage.setItem('name', '')
    document.getElementById('nwphnid').value = '';
    localStorage.setItem('phone', '')
    }

function hassavedDiv() {
    if (document.getElementById('nwnmid').value != ''){
        document.getElementById('nameinput').style.display = "none"; 
        document.getElementById('savedDiv').style.display = "block";
        document.getElementById('delbutton').style.display = "inline";
    }
}

function check() {

    // // Get the Login Name value and trim it
    // var name = $.trim($('#log').val());

    // // Check if empty of not
    // if (name === '') {
    //     alert('Text-field is empty.');
    //     return false;
    // }
}

