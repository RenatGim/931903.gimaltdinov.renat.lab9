var v;

function Add (symbol) {
    document.getElementById("string").style.color = 'gray';
    v = document.getElementById("string").value;

    if(v =="0" && symbol!='.') v = '';
    if((v.endsWith('*') || v.endsWith('/') || v.endsWith('+') || v.endsWith('-') || v.endsWith('.')) && 
       (symbol == '*' || symbol == '/' || symbol == '+' || symbol == '.'))
       {
           v = v.slice(0,-1);
        }
    if(symbol == '*' || symbol == '/' || symbol == '+' ||symbol == '-')
       {
           for (var i = 1; i < v.length - 1; i++)
           if (v[i] == '*' || v[i] == '/' || v[i] == '+' || v[i] == '-') v = v.slice(i+1);
        }
    if(symbol == '.')
       {
        for (var i = v.length; i > 0; i--) {
        if (v[i] == '.') i=0;
        else if (v[i] == '*' || v[i] == '/' || v[i] == '+' || v[i] == '-'|| i-1 == 0) {i=0; v += symbol;} }
       }
    if(symbol !='.') v += symbol;
    document.getElementById("string").value = v;
}

function Last () {
    v = document.getElementById("string").value.slice(0,-1);
    if(v == '') document.getElementById("string").value = '0';
    else document.getElementById("string").value = v;
}

function Cleare () {
    document.getElementById("string").value = '0';
}

function Solve () {
    v = document.getElementById("string").value;
    var first=v[0], second='', result, action;
    var next = false;
    for (var i = 1; i < v.length; i++) {
        if (v[i]!='*' && v[i]!='/' && v[i]!='+' && v[i]!='-' && next==false) first += v[i];
        else if ((v[i] =='*' || v[i]=='/' || v[i]=='+' || v[i]=='-') && next==false) {next = true; action = v[i]}
        else if (next==true) second += v[i];
    }
    if (action == '+') result = Number(first) + Number(second);
    else if (action == '-') result = Number(first) - Number(second);
    else if (action == '*') result = Number(first) * Number(second);
    else if (action == '/') result = Number(first) / Number(second);
    document.getElementById("string").value = result;
    document.getElementById("string").style.color = 'black';
}