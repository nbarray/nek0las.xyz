import { withRouter } from 'react-router-dom'

let dict = {
  fr: {},
  en: {}
}
let currentLang = 'fr'

export const setLang = lang => {
  if (lang !== 'fr' && lang !== 'en') {
    currentLang = 'en'
  } else {
    currentLang = lang
  }
}

export const i18n = key => {
  try {
    return dict[currentLang][key]
  } catch (err) {
    return '-[ ^ _^]-'
  }
}

const trad = (key, valueFr, valueEn) => {
  dict.fr[key] = valueFr
  dict.en[key] = valueEn
}

export const Internationalization = withRouter(props => {
  setLang(props.location.pathname.split('/')[1] || 'en')
  return props.children
})

export default () => {
  // App.js
  trad('Welcome', 'Bienvenue sur ma page personnelle en ligne!', 'Welcome to my personal website')
  trad('About', 'A propos', 'About')
  trad('Comics', 'BD', 'Comics')
  trad('Projects', 'Projets', 'Projects')

  // About.js
  trad('After', 'Et après?', 'What next?')
  trad('About_Title', 'Que peux-tu trouver sur ce site?', 'What will you find here?')
  trad(
    'Comics_What',
    "Des BD faites quand l'inspiration me prend. J'en profite pour améliorer mes compétences en infographie et passer un bon moment.",
    'The comics I draw are usually based on stupid things that happened to me. I hope to improve my graphics skills while having fun sharing them.'
  )
  trad(
    'Projects_What',
    'Des projets sur lesquels je travaille. Les thèmes abordés:',
    'Projects I am working on, or used to work on. Addressed themes:'
  )
  trad('Projects_What_Front_1', 'Développement frontend avec', 'Frontend development with')
  trad('Projects_What_Front_2', ", et plein d'autres bibliothèques.", ' and many more libraries.')
  trad('Projects_What_Games', 'Des jeux vidéos développés avec', 'Video games development with')
  trad(
    'After_What',
    "Ce n'est que la première version de ce site, je compte à terme proposer:",
    "It's only the first version of my website, I also would like to share:"
  )
  trad('After_What_1', 'Des articles techniques', 'Technical blog posts')
  trad('After_What_2', 'Des tutoriaux & présentations', 'Tutorials & Talks')
  trad('After_What_3', 'Des devlogs', 'Devlogs')
  trad('After_What_4', 'Des dessins & plus de BD', 'Drawing & more comics')

  // Projects.js
  trad('Projects_Current', 'Projets en cours', 'Current projects')
  trad(
    'nek0las.xyz_What',
    "Vous êtes dessus! C'est ma plateforme pour partager mon travail et mes passions.",
    'You are browsing it! It is a website I use to share my work and hobbies.'
  )
  trad(
    'nek0las.xyz_Stack_1',
    'Il est réalisé avec une stack javascript autour de',
    'Its tech stack is javascript, anything that works well with'
  )
  trad('nek0las.xyz_Stack_2', 'La mise en page est faite à base de', 'The style is done with')
  trad(
    'k2s0_What',
    "C'est une application pour organiser mon quotidien. Il permet de tenir une liste de taches à accomplir, d'obtenir des rappels quotidients.",
    "It's a productivity app to managing my everyday life. I can keep track of daily tasks by getting reminders."
  )

  // TwitchPlayer.js
  trad('Hide', 'Fermer', 'Hide')
  trad('Open', 'Ouvrir', 'Open')
}
