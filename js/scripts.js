//jQuery("button").click(function() {
//  alert("This is a button.");
//});

function save() {
    var fieldValue = document.getElementById('nwnmid').value;
    localStorage.setItem('name', fieldValue);
    var fieldValue2 = document.getElementById('nwphnid').value;
    localStorage.setItem('phone', fieldValue2);

    }



function load() {
    var storedValue = localStorage.getItem('name');
    var storedValue2 = localStorage.getItem('phone');
    if (storedValue || storedValue2) {
        document.getElementById('nwnmid').value = storedValue;
        document.getElementById('nwphnid').value = storedValue2;
                    }
    }