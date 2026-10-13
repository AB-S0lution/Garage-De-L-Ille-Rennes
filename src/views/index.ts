import { route, setNotFound } from '../core/router'
import { homeView } from './home'
import { atelierView, familleView } from './atelier'
import { diagnosticView } from './diagnostic'
import { faconView, histoireView, avisView, infosView, galerieView } from './pages'
import { conseilsView, postView, faqView, devisView, legalView, privacyView, notFoundView } from './more'

route('/', () => homeView())
route('/atelier', () => atelierView())
route('/atelier/:slug', (p) => familleView(p.slug))
route('/diagnostic', () => diagnosticView())
route('/notre-facon', () => faconView())
route('/histoire', () => histoireView())
route('/avis', () => avisView())
route('/conseils', () => conseilsView())
route('/conseils/:slug', (p) => postView(p.slug))
route('/faq', () => faqView())
route('/galerie', () => galerieView())
route('/infos-pratiques', () => infosView())
route('/devis', () => devisView())
route('/mentions-legales', () => legalView())
route('/confidentialite', () => privacyView())
setNotFound(notFoundView)
