nS = localStorage;
np = document.getElementById('n-c');
ssL = document.getElementById('t-ss');
sL = document.getElementById('t-s');
cCL = document.getElementById('c-c');
wCL = document.getElementById('w-c');
sans = '"Helvetica Neue", Helvetica, Arial, sans-serif';
serif = '"Hoefler Text", "Cambria", "Baskerville Old Face", Garamond, "Times New Roman", Georgia, serif';
var scrtchpd = {
    jsO: function(){
        var b = document.getElementById('b');
        b.className = "m-b n-d-i v";
        var s = document.getElementById('s-w');
        s.className = "h";
    }, 

    stN: function() {
        if (nS.myNote) {
            np.value = nS.myNote;    
        } else {
            nS.setItem('myNote', "");
            nS.setItem('fontStyle', "sans");
        }
    },

    svN: function() {
        document.onkeyup = function () {
            nS.myNote= np.value;
        }
    },

    fN: function() {
        np.focus();
    },

    ttT: function() {
        var tooltip = document.getElementById('n-d');
        var className = tooltip.getAttribute("class");
        if (className=="h") {
            tooltip.className = "v";
        }
        else {
            tooltip.className = "h";
        }   

        scrtchpd.cntC(np.value);

        return false;

    },

    cTT: function() {
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                tooltip.className = "h";
            }
        };
    },

    fST: function(type) {
        if (type=="sans") {
            sL.className = "";
            ssL.className = "a";
            np.style.fontFamily = sans;
            nS.setItem('fontStyle', 'sans');
            return false;
        } else {
            sL.className = "a";
            ssL.className = "";
            np.style.fontFamily = serif;
            nS.setItem('fontStyle', 'serif');
            return false;
        }
    },

    sFS: function() {
        if (nS.fontStyle) {
            
            if (nS.fontStyle == 'sans') {
                ssL.className = "a";
                np.style.fontFamily = sans;
            } else {
                sL.className = "a";
                np.style.fontFamily = serif;
            }
        }
    },

    cntC: function(text) {
        cCL.innerHTML = text.length;

        var value = text;
        var regex = /\s+/gi;
        var wordCount = value.trim().replace(regex, ' ').split(' ').length;
        wCL.innerHTML = wordCount;
    },

    cW: function() {
        np.onkeyup = function () {
            scrtchpd.cntC(this.value);
        };
    },

    cTS: function() {
        if (nS.textSize) {
            np.style.fontSize = parseFloat(nS.textSize) + "px";
        }
    },

    rszT: function(multiplier) {
        var currentFont = np.style.fontSize.replace("px", "");
        var textSize= np.style.fontSize = parseInt(currentFont) + parseInt(multiplier) + "px"

        nS.setItem('textSize', textSize);
        return false;
    },

    rstT: function(defaultSize) {
        var textSize = np.style.fontSize = defaultSize + "px";
        np.style.lineHeight = '1.3em';
        nS.setItem('textSize', textSize);
        return false;
    },

    clP: function() {
        if (confirm('Clear all of your notes?')) { 
            np.value = "";
            scrtchpd.fN();
            nS.myNote= np.value;
        }
        return false;
    }
}
scrtchpd.jsO();
scrtchpd.fN();
scrtchpd.stN();
scrtchpd.svN();
scrtchpd.cTS();
scrtchpd.sFS();
scrtchpd.cW();
scrtchpd.cTT();