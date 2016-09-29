noteStorage = localStorage;
notePad = document.getElementById('n-c');
sansLabel = document.getElementById('t-ss');
serifLabel = document.getElementById('t-s');
characterCountLabel = document.getElementById('c-c');
wordCountLabel = document.getElementById('w-c');
sans = '"Helvetica Neue", Helvetica, Arial, sans-serif';
serif = '"Hoefler Text", "Cambria", "Baskerville Old Face", Garamond, "Times New Roman", Georgia, serif';
var scrtchpd = {
    jsOptions: function(){
        var button = document.getElementById('b');
        button.className = "m-b n-d-i v";
        var save = document.getElementById('s-w');
        save.className = "h";
    }, 
    setNote: function() {
        if (noteStorage.myNote) {
            notePad.value = noteStorage.myNote;    
        } else {
            noteStorage.setItem('myNote', "");
            noteStorage.setItem('fontStyle', "sans");
        }
    },

    saveNote: function() {
        document.onkeyup = function () {
            noteStorage.myNote= notePad.value;
        }
    },

    focusNote: function() {
        notePad.focus();
    },

    tooltipToggle: function() {
        var tooltip = document.getElementById('n-d');
        var className = tooltip.getAttribute("class");
        if (className=="h") {
            tooltip.className = "v";
        }
        else {
            tooltip.className = "h";
        }   

        scrtchpd.countCharacters(notePad.value);

        return false;

    },

    closeToolTip: function() {
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                tooltip.className = "h";
            }
        };
    },

    fontStyleToggle: function(type) {
        if (type=="sans") {
            serifLabel.className = "";
            sansLabel.className = "a";
            notePad.style.fontFamily = sans;
            noteStorage.setItem('fontStyle', 'sans');
            return false;
        } else {
            serifLabel.className = "a";
            sansLabel.className = "";
            notePad.style.fontFamily = serif;
            noteStorage.setItem('fontStyle', 'serif');
            return false;
        }
    },

    checkFontStyle: function() {
        if (noteStorage.fontStyle) {
            
            if (noteStorage.fontStyle == 'sans') {
                sansLabel.className = "a";
                notePad.style.fontFamily = sans;
            } else {
                serifLabel.className = "a";
                notePad.style.fontFamily = serif;
            }
        }
    },

    countCharacters: function(text) {
        characterCountLabel.innerHTML = text.length;

        var value = text;
        var regex = /\s+/gi;
        var wordCount = value.trim().replace(regex, ' ').split(' ').length;
        wordCountLabel.innerHTML = wordCount;
    },

    characterWatcher: function() {
        notePad.onkeyup = function () {
            scrtchpd.countCharacters(this.value);
        };
    },

    checkTextSize: function() {
        if (noteStorage.textSize) {
            notePad.style.fontSize = parseFloat(noteStorage.textSize) + "px";
        }
    },

    resizeText: function(multiplier) {
        var currentFont = notePad.style.fontSize.replace("px", "");
        var textSize= notePad.style.fontSize = parseInt(currentFont) + parseInt(multiplier) + "px"

        noteStorage.setItem('textSize', textSize);
        return false;
    },

    resetText: function(defaultSize) {
        var textSize = notePad.style.fontSize = defaultSize + "px";
        notePad.style.lineHeight = '1.3em';
        noteStorage.setItem('textSize', textSize);
        return false;
    },

    clearPad: function() {
        if (confirm('Clear all of your notes?')) { 
            notePad.value = "";
            scrtchpd.focusNote();
            noteStorage.myNote= notePad.value;
        }
        return false;
    }
}
scrtchpd.jsOptions();
scrtchpd.focusNote();
scrtchpd.setNote();
scrtchpd.saveNote();
scrtchpd.checkTextSize();
scrtchpd.checkFontStyle();
scrtchpd.characterWatcher();
scrtchpd.closeToolTip();