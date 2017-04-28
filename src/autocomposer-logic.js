var range = require('tonal-range');
var chord = require('tonal-chord');
var note = require('tonal-note');

/**
 * Encapsulates data and musical logic to be used by the application
 */
class AutoComposerLogic {
  constructor() {
    this.DEFAULT_LOWER_LIMIT = "Db4";
    this.DEFAULT_UPPER_LIMIT = "G#5";

    this.ACCOMPANIMENT_LOWER_LIMIT = "Gb2";
    this.ACCOMPANIMENT_UPPER_LIMIT = "C#4";

    this.BASS_LOWER_LIMIT = "E1";
    this.BASS_UPPER_LIMIT = "F2";

    this.INITIAL_PROGRESSION = "G Em C D",
    this.NUM_MELODIES_LIMIT = 100; // Number of melodies that the user sees.
    this.NUM_GENERATIONS_LIMIT = 100000; // Number of melody generation attempts that the program will make.
    this.CHORDS_LIMIT = 4;
  }

  /**
  * Returns all the chord types available for use.
  * @return {string[]} - chord types available for use
  */
  getChordDictionary() {
    return chord.names();
  }

  /**
  * Filters out melodies that have a range larger than an octave.
  * @param {string} melodyString - String representing the melody
  * @return {boolean} - Returns false if the melody has a range larger than one octave. Returns true otherwise
  */
  filterMelodyRange(melodyString) {
    var totalRange = range.numeric(melodyString);
    var highest = Math.max.apply(null, totalRange);
    var lowest = Math.min.apply(null, totalRange);

    return highest - lowest <= 12;
  }

    /**
    * Parses text, and determines if user input represents a valid note/chord.
    * @param {string} input - value given by the user
    * @return {boolean} - a true value means the string can be used by the rest of the program.
    */
  isValidText(input) {
    var isChord = chord.isKnownChord(input) ? true : false;
    var isNote = note.name(input) ? true : false;

    return isChord || isNote;
  }

    /**
    * Converts ASCII accidentals to Unicode accidentals in HTML
    * @param {string} input - text with ASCII accidentals
    * @return {string} - text with Unicode accidentals in HTML
    */
  convertAsciiAccidentalsToHtml(input) {
    var out = input.replace(/([A-G0-9])b/g, '$1&#9837;');
    out = out.replace(/([A-G0-9])#/g, '$1&#9839;');
    out = out.replace(/([A-G0-9])o/g, '$1&‌deg;');

    return out;
  }

    /**
    * Converts ASCII accidentals to Unicode accidentals
    * @param {string} input - text with ASCII accidentals
    * @return {string} - text with Unicode accidentals
    */
  convertAsciiAccidentalsToText(input) {
    var out = input.replace(/([A-G0-9])b/g, '$1♭');
    out = out.replace(/([A-G0-9])#/g, '$1♯');
    out = out.replace(/([A-G0-9])o/g, '$1°');

    return out;
  }

    /**
    * Converts Unicode accidentals to ASCII
    * @param {string} input - text with Unicode accidentals
    * @return {string} - text with ASCII accidentals
    */
  convertAccidentalsToAscii(input) {
    var out = input.replace(/([A-G0-9])♭/g, '$1b');
    out = out.replace(/([A-G0-9])♯/g, '$1#');
    out = out.replace(/([A-G0-9])°/g, '$1o');

    return out;
  }

};

exports.AutoComposerLogic = AutoComposerLogic;
