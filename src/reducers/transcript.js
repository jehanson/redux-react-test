'use strict';
import { TRANSCRIPT_WORD } from '../actions/transcript';

const MAX_TRANSCRIPT_LINES = 5;

const DEFAULT_STATE = [];


function shouldNextWordBeOnNewline(lines) {
  if (lines.length == 0) {
    return true;
  }
  const lastLine = lines[lines.length - 1];
  const lastWord = lastLine[lastLine.length - 1];
  return lastWord.isEndOfSentence;
}


export function transcript(state = DEFAULT_STATE, action) {

  switch (action.type) {
    case TRANSCRIPT_WORD:

      const word = action.word;
      const lastChar = word[word.length - 1];
      const isEndOfSentence = lastChar === '.' || lastChar === '?' || lastChar === '!';

      const wordObj = {word, isEndOfSentence};


      let newTranscript = [...state];

      if (shouldNextWordBeOnNewline(newTranscript)) {
        newTranscript.push([wordObj]);
      } else {
        newTranscript[newTranscript.length - 1] = [...newTranscript[newTranscript.length - 1], wordObj];
      }

      if (newTranscript.length > MAX_TRANSCRIPT_LINES) {
        newTranscript = newTranscript.splice(newTranscript.length - MAX_TRANSCRIPT_LINES);
      }

      return newTranscript;
    default:
      return state;
  }

}


