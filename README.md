# scrtchpdLite | 10k Apart Entry

A lightweight version of [scrtchpd](http://scrtchpd.com). You can see this special [10k Apart](https://a-k-apart.com/) version live at [lite.scrtchpd.com](lite.scrtchpd.com).

scrtchpdLite is a single page notepad app. As you type, your notes are saved in your browser using `localStorage`. 

The original scrtchpd was built years ago using jQuery and a lot of plugins. It's a straightforward app, so I've been curious if there's a way that to recreate the it without any libraries or plugins. And when I saw this competition, I added an additional challenge, keep the whole thing under 10k! Turns out it's definitely possible, and I learned a ton in the process. 

After the initial scrtchpd functionality was built, I had a few `kb` to spare, so I added a few new features: 

- **Type Size:** Using the + or - buttons, users can enlarge or shrink the text size of a note. This choice is saved in the app.
- **Type Style:** Users can select either a sans-serif or serif typeface to use in the app. This choice is also saved in the app.
- **Details:** As the user types, the app counts the number of words and characters in the note.
- **Clear Note Pad:** Why use the keyboard to delete your notes when you can use a button?

#### A few things I considered:

### Performance

All assets have been minimized, and use the least amount of code possible to accomplish the goal. A few notes: 
- The icons are minimized, inline `SVG` elements.
- Class and ID names have been minimized to single characters.
- All animations are based in `CSS` for modern browsers.
- The weight of the page comes in under 10k, and once gzipped, it will be even lighter. 

### Size

> Your total initial download can’t be over 10kB. 

Once gzipped, the assets come in well under 10k. 

Markup: `2.8k`.
Javascript: `2.4k`.
CSS: `3.7k`.

**Total size: `8.9k`.**
**Total gzipped size: `8.3k`.**

### Interoperability

> Your project must work equally well in all modern browsers.

The app has been tested in modern, and not-so-modern browsers, and even works in every IE version I could find. The app is pretty simple, so there was only one adjustment I had to make to make this work everywhere: Seemingly a bug, modern versions of IE hide the placeholder text of a field once focused. This hides the intro text on first load, which is a bummer. So in IE the field doesn't auto focus, but in all other browsers it does. 

### Accessibility

> Everybody should be able to use your awesome creation.

Yes! The writing experience is accessible on all devices. I ran the app through the Wave Accessibility Evaluation Tool, and got the thumbs up. 

### Progressive Enhancement

> The Web is a messy place and you never know what technologies will be available in your user’s devices and browsers.

I've tested the app on a large number of browsers and devices and it looks and works great. Another benefit of keeping an app simple! In older versions of IE, the placeholder text isn't displayed, but the app works as intended. 

### Libraries

> Use only what you need.

I've learned so much about Javascript during this experiment! This is my favorite rule because it forced me to understand what's actually happening in the JS that I write. 

## How To Run This Thing

It's a static app, so just open up `index.html` on a server, and you should be all set.