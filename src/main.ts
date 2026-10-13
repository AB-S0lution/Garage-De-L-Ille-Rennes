import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './style.css'
import { footerHTML, headerHTML, initMenu } from './core/layout'
import { startRouter } from './core/router'
import { initSmooth } from './core/motion'
import { typo } from './core/dom'
import './views' // enregistre les routes

const app = document.getElementById('app')!
app.innerHTML = typo(headerHTML()) + '<main id="main" tabindex="-1"></main>' + typo(footerHTML())
initMenu()
initSmooth()
startRouter(document.getElementById('main')!)
