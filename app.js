import { Component, render } from 'preact';
import h from 'preact-hyperscript-h';
import * as utils from './utils';

const route = {}

route[''] = h.div([
  h('p.intro', 'Take the test today and unlock your physiology to discover your metabolic type.'),
  h('div.hero', [
    h.p('Are you a Lion or a Cheetah?'),
    h.img({ src: 'assets/images/lion.png' }),
    h.img({ src: 'assets/images/cheetah.png' }),
  ]),
  h.p('Are you a Lion or a Cheetah? Determining your metabolic profile will allow us to streamline your menus, supplements and activity levels to completely balance your metabolism.'),
  h.a({ href: '#about-you' }, 'Begin'),
]);

route['about-you'] = h.div('hi');

const App = props => h.div([
  h.header('ELITE FIT FOREVER METABOLIC EVALUATOR'),
  route[utils.getRoute()],
]);


const el = document.getElementById('app');
render(h(App), el);
window.onhashchange = () => render(h(App), el, el.lastChild)
