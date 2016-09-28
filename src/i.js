noteStorage = localStorage;
notePad = document.getElementById('note-content');
sansLabel = document.getElementById('text-sans');
serifLabel = document.getElementById('text-serif');
characterCountLabel = document.getElementById('character-count');
wordCountLabel = document.getElementById('word-count');
sans = '"Helvetica Neue", Helvetica, Arial, sans-serif';
serif = '"Hoefler Text", "Cambria", "Baskerville Old Face", Garamond, "Times New Roman", Georgia, serif';
var scrtchpd = {
    
    setNote: function(){
        if (noteStorage.myNote) {
            notePad.value = noteStorage.myNote;    
        } else {
            noteStorage.setItem('myNote', "");
            noteStorage.setItem('fontStyle', "sans");
        }
    },

    saveNote: function(){
        document.onkeyup = function () {
            noteStorage.myNote= notePad.value;
        }
        
    },

    focusNote: function(){
        notePad.focus();
    },

    tooltipToggle: function(){
        
        tooltip = document.getElementById('note-details');
        var className = tooltip.getAttribute("class");
        if (className=="hidden") {
            tooltip.className = "visible";
        }
        else {
            tooltip.className = "hidden";
        }   

        scrtchpd.countCharacters(notePad.value);

        return false;

    },

    closeToolTip: function(){
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                tooltip.className = "hidden";
            }
        };
    },

    fontStyleToggle: function(type){
        if (type=="sans") {
            serifLabel.className = "";
            sansLabel.className = "active";
            notePad.style.fontFamily = sans;
            noteStorage.setItem('fontStyle', 'sans');
            return false;
        } else {
            serifLabel.className = "active";
            sansLabel.className = "";
            notePad.style.fontFamily = serif;
            noteStorage.setItem('fontStyle', 'serif');
            return false;
        }
    },

    checkFontStyle: function(){
        if (noteStorage.fontStyle) {
            
            if (noteStorage.fontStyle == 'sans') {
                sansLabel.className = "active";
                notePad.style.fontFamily = sans;
            } else {
                serifLabel.className = "active";
                notePad.style.fontFamily = serif;
            }
        }
    },

    countCharacters: function(text){
        characterCountLabel.innerHTML = text.length;

        var value = text;
        var regex = /\s+/gi;
        var wordCount = value.trim().replace(regex, ' ').split(' ').length;
        wordCountLabel.innerHTML = wordCount;
    },

    characterWatcher: function(){
        notePad.onkeyup = function () {
            scrtchpd.countCharacters(this.value);
        };
    },

    checkTextSize: function(){
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

    resetText: function(defaultSize){
        var textSize = notePad.style.fontSize = defaultSize + "px";
        notePad.style.lineHeight = '1.3em';
        noteStorage.setItem('textSize', textSize);
        return false;
    },

    clearPad: function(){
        if (confirm('Clear all of your notes?')) { 
            notePad.value = "";
            scrtchpd.focusNote();
            noteStorage.myNote= notePad.value;
        }
        
        return false;
    }
}

scrtchpd.focusNote();
scrtchpd.setNote();
scrtchpd.saveNote();
scrtchpd.checkTextSize();
scrtchpd.checkFontStyle();
scrtchpd.characterWatcher();
scrtchpd.closeToolTip();