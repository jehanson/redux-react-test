import io from 'socket.io-client';


export const TRANSCRIPT_WORD = 'TRANSCRIPT_WORD';


export function dispatchWord(word) {
  return {
    type: TRANSCRIPT_WORD,
    word
  }
}

export function listenForTranscript() {
  return dispatch => {
    console.log('a');
    const socket = io('https://openedcaptions.com');

    socket.on('word', function (data) {
      console.log('got word! ' + data.data.body);
      dispatch({
        type: TRANSCRIPT_WORD,
        word: data.data.body
      });
    });


  }
}
