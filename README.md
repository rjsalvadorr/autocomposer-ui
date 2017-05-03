# AutoComposer UI
This is a React web app that uses [AutoComposerJS](https://github.com/rjsalvadorr/autocomposer-js).

## Overview
The AutoComposerJS creates small musical snippets that conform to the _best practices_ of Western music theory. In its current form, it does this by writing a simple melody over a chord progression. It also has a few more tricks:

* Writes basic accompaniment for melodies.
* Can present generated melodies in the following formats:
    + **Musical score**
    + **MIDI file**
    + **Audio** - the program play back generated MIDI files in the browser
* Displays metadata about each generated melody.

If you're a music nerd that frequently wonders about the melodic possibilities in a chord progression, this program can help you out.
It visualizes various sequences of chord tones that fit in a chord progression, and ranks them by smoothness.
In our case, smoothness is calculated as the sum of intervals between the notes of a melody.

## Potential Uses
* Brainstorming when starting or continuing a musical composition.
* Exploring how melody and harmony work together.

## More info
Check out the [project wiki](https://github.com/rjsalvadorr/autocomposer-melody/wiki), since that's updated more often than this file.
