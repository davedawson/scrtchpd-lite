# scrtchpdLite

A super lightweight version of [scrtchpd](http://scrtchpd.com). You can see this special 10k Apart version live at [lite.scrtchpd.com](lite.scrtchpd.com).

scrtchpdLite a one page notepad app. As you type, your notes are saved in your browser using `localStorage`. After the initial functionality was built, I had a few `kb` to spare, so I added a few features: 

- **Type Size:** Using the + or - buttons, users can enlarge or shrink the text size of a note. This choice is saved in the app as well.
- **Type Style:** Users can select either a sans-serif or serif typeface to use in the app. This choice is saved in the app as well.
- **Details:** As the user types, the app counts the number of words and characters in the note.
- **Clear Note Pad:** Why use the keyboard to delete your notes when you can use a button?

#### A few things to consider:

### Performance

All assets have been minimized, and use the least amount of code possible to accomplish the goal. A few notes: 
- The icons are minimized, inline `SVG` elements.
- All animations are based in `CSS`. 

### Size

> Your total initial download can’t be over 10kB. 

Once gzipped, the assets come in well under 10k. 

Markup: `1.8k`.
Javascript: `2.8k`.
CSS: `4.6k`.

**Total size: `9.2k`.**

### Interoperability

> Your project must work equally well in all modern browsers.

The app has been tested in browsers, and even works in every IE version I could find. The app is pretty simple, so there was only one adjustment I had to make to make this work everywhere. For some reason, modern versions of IE remove the placeholder text of a field once focused, so in IE the field doesn't auto focus, but in all other browsers it does. 

### Accessibility

> Everybody should be able to use your awesome creation.

Yes! The writing experience is accessible on all devices. I ran the app through the Wave Accessibility Evaluation Tool, and got the thumbs up. 

### Progressive Enhancement

> The Web is a messy place and you never know what technologies will be available in your user’s devices and browsers.

I've tested the app on a large number of browsers and devices and it looks and works great. Another benefit of keeping an app simple! In older versions of IE, the placeholder text isn't displayed, but the app works as intended. 

### Libraries

> Use only what you need.

I've learned so much about Javascript during this experiment! This is my favorite rule because it forced me to understand what's actually happening in the JS that I write. 

