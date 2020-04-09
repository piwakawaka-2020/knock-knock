import jokesData from './jokes'

module.exports = function joke () {
    const joke = jokesData[Math.floor(Math.random()*jokes.length)]
    return formatJoke(joke)
}

function formatJoke(joke) {
  return [
    'Knock, knock.',
    'Who’s there?',
    joke.name + '.',
    joke.name + ' who?',
    joke.name + ' ' + joke.answer
  ].join('\n')
}

export default formatJoke;