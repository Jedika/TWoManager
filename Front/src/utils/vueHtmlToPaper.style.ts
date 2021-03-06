const style = `

*,
:after,
:before {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
}
#q-app,
body,
html {
  width: 100%;
  direction: ltr;
}
body.platform-ios.within-iframe,
body.platform-ios.within-iframe #q-app {
  width: 100px;
  min-width: 100%;
}
body,
html {
  margin: 0;
  box-sizing: border-box;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  font-family: inherit;
  margin: 0;
}
optgroup {
  font-weight: 700;
}
button,
input,
select {
  overflow: visible;
  text-transform: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
button:-moz-focusring,
input:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
input[type='search'] {
  -webkit-appearance: textfield;
}
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
.q-icon {
  line-height: 1;
  width: 1em;
  height: 1em;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  text-align: center;
  position: relative;
  box-sizing: content-box;
  fill: currentColor;
}
.q-icon:after,
.q-icon:before {
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.q-icon > svg {
  width: 100%;
  height: 100%;
}
.material-icons,
.material-icons-outlined,
.material-icons-round,
.material-icons-sharp,
.q-icon {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: inherit;
  font-size: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.q-panel,
.q-panel > div {
  height: 100%;
  width: 100%;
}
.q-panel-parent {
  overflow: hidden;
  position: relative;
}
.q-loading-bar {
  position: fixed;
  z-index: 9998;
  transition: transform 0.5s cubic-bezier(0, 0, 0.2, 1), opacity 0.5s;
  background: #f44336;
}
.q-loading-bar--top {
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
}
.q-loading-bar--bottom {
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.q-loading-bar--right {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
}
.q-loading-bar--left {
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
}
.q-avatar {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  border-radius: 50%;
  font-size: 48px;
  height: 1em;
  width: 1em;
}
.q-avatar__content {
  font-size: 0.5em;
  line-height: 0.5em;
}
.q-avatar__content,
.q-avatar img:not(.q-icon) {
  border-radius: inherit;
  height: inherit;
  width: inherit;
}
.q-avatar--square {
  border-radius: 0;
}
.q-badge {
  background-color: #1976d2;
  background-color: var(--q-color-primary);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  vertical-align: baseline;
}
.q-badge--single-line {
  white-space: nowrap;
}
.q-badge--multi-line {
  word-break: break-all;
  word-wrap: break-word;
}
.q-badge--floating {
  position: absolute;
  top: -4px;
  right: -3px;
  cursor: inherit;
}
.q-badge--transparent {
  opacity: 0.8;
}
.q-badge--outline {
  background-color: transparent;
  border: 1px solid currentColor;
}
.q-badge--rounded {
  border-radius: 1em;
}
.q-banner {
  min-height: 54px;
  padding: 8px 16px;
  background: #fff;
}
.q-banner--top-padding {
  padding-top: 14px;
}
.q-banner__avatar {
  min-width: 1px !important;
}
.q-banner__avatar > .q-avatar {
  font-size: 46px;
}
.q-banner__avatar > .q-icon {
  font-size: 40px;
}
.q-banner__actions.col-auto,
.q-banner__avatar:not(:empty) + .q-banner__content {
  padding-left: 16px;
}
.q-banner__actions.col-all .q-btn-item {
  margin: 4px 0 0 4px;
}
.q-banner--dense {
  min-height: 32px;
  padding: 8px;
}
.q-banner--dense.q-banner--top-padding {
  padding-top: 12px;
}
.q-banner--dense .q-banner__avatar > .q-avatar,
.q-banner--dense .q-banner__avatar > .q-icon {
  font-size: 28px;
}
.q-banner--dense .q-banner__actions.col-auto,
.q-banner--dense .q-banner__avatar:not(:empty) + .q-banner__content {
  padding-left: 8px;
}
.q-bar {
  background: rgba(0, 0, 0, 0.2);
}
.q-bar > .q-icon {
  margin-left: 2px;
}
.q-bar > div,
.q-bar > div + .q-icon {
  margin-left: 8px;
}
.q-bar > .q-btn {
  margin-left: 2px;
}
.q-bar > .q-btn:first-child,
.q-bar > .q-icon:first-child,
.q-bar > div:first-child {
  margin-left: 0;
}
.q-bar--standard {
  padding: 0 12px;
  height: 32px;
  font-size: 18px;
}
.q-bar--standard > div {
  font-size: 16px;
}
.q-bar--standard .q-btn {
  font-size: 11px;
}
.q-bar--dense {
  padding: 0 8px;
  height: 24px;
  font-size: 14px;
}
.q-bar--dense .q-btn {
  font-size: 8px;
}
.q-bar--dark {
  background: hsla(0, 0%, 100%, 0.15);
}
.q-breadcrumbs__el {
  color: inherit;
}
.q-breadcrumbs__el-icon {
  font-size: 125%;
}
.q-breadcrumbs__el-icon--with-label {
  margin-right: 8px;
}
.q-breadcrumbs--last a {
  pointer-events: none;
}
[dir='rtl'] .q-breadcrumbs__separator .q-icon {
  transform: scaleX(-1);
}
.q-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  outline: 0;
  border: 0;
  vertical-align: middle;
  padding: 0;
  font-size: 14px;
  line-height: 1.715em;
  text-decoration: none;
  color: inherit;
  background: transparent;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  width: auto;
  height: auto;
}
.q-btn .q-icon,
.q-btn .q-spinner {
  font-size: 1.715em;
}
.q-btn.disabled {
  opacity: 0.7 !important;
}
.q-btn__wrapper {
  padding: 4px 16px;
  min-height: 2.572em;
  border-radius: inherit;
  width: 100%;
  height: 100%;
}
.q-btn__wrapper:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
.q-btn--actionable {
  cursor: pointer;
}
.q-btn--actionable.q-btn--standard .q-btn__wrapper:before {
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.q-btn--actionable.q-btn--standard.q-btn--active .q-btn__wrapper:before,
.q-btn--actionable.q-btn--standard:active .q-btn__wrapper:before {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14),
    0 1px 14px rgba(0, 0, 0, 0.12);
}
.q-btn--no-uppercase {
  text-transform: none;
}
.q-btn--rectangle {
  border-radius: 3px;
}
.q-btn--outline {
  background: transparent !important;
}
.q-btn--outline .q-btn__wrapper:before {
  border: 1px solid currentColor;
}
.q-btn--push {
  border-radius: 7px;
}
.q-btn--push .q-btn__wrapper:before {
  border-bottom: 3px solid rgba(0, 0, 0, 0.15);
}
.q-btn--push.q-btn--actionable {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.q-btn--push.q-btn--actionable .q-btn__wrapper:before {
  transition: top 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    bottom 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    border-bottom-width 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.q-btn--push.q-btn--actionable.q-btn--active,
.q-btn--push.q-btn--actionable:active {
  transform: translateY(2px);
}
.q-btn--push.q-btn--actionable.q-btn--active .q-btn__wrapper:before,
.q-btn--push.q-btn--actionable:active .q-btn__wrapper:before {
  border-bottom-width: 0;
}
.q-btn--rounded {
  border-radius: 28px;
}
.q-btn--round {
  border-radius: 50%;
}
.q-btn--round .q-btn__wrapper {
  padding: 0;
  min-width: 3em;
  min-height: 3em;
}
.q-btn--flat .q-btn__wrapper:before,
.q-btn--outline .q-btn__wrapper:before,
.q-btn--unelevated .q-btn__wrapper:before {
  box-shadow: none;
}
.q-btn--dense .q-btn__wrapper {
  padding: 0.285em;
  min-height: 2em;
}
.q-btn--dense.q-btn--round .q-btn__wrapper {
  padding: 0;
  min-height: 2.4em;
  min-width: 2.4em;
}
.q-btn--dense .on-left {
  margin-right: 6px;
}
.q-btn--dense .on-right {
  margin-left: 6px;
}
.q-btn--fab-mini .q-icon,
.q-btn--fab .q-icon {
  font-size: 24px;
}
.q-btn--fab .q-icon {
  margin: auto;
}
.q-btn--fab .q-btn__wrapper {
  padding: 16px;
  min-height: 56px;
  min-width: 56px;
}
.q-btn--fab-mini .q-btn__wrapper {
  padding: 8px;
  min-height: 40px;
  min-width: 40px;
}
.q-btn__content {
  transition: opacity 0.3s;
  z-index: 0;
}
.q-btn__content--hidden {
  opacity: 0;
  pointer-events: none;
}
.q-btn__progress {
  border-radius: inherit;
  z-index: 0;
}
.q-btn__progress-indicator {
  z-index: -1;
  transform: translateX(-100%);
  background: hsla(0, 0%, 100%, 0.25);
}
.q-btn__progress--dark .q-btn__progress-indicator {
  background: rgba(0, 0, 0, 0.2);
}
.q-btn--flat .q-btn__progress-indicator,
.q-btn--outline .q-btn__progress-indicator {
  opacity: 0.2;
  background: currentColor;
}
.q-btn-dropdown--split .q-btn-dropdown__arrow-container {
  border-left: 1px solid hsla(0, 0%, 100%, 0.3);
}
.q-btn-dropdown--split .q-btn-dropdown__arrow-container .q-btn__wrapper {
  padding: 0 4px;
}
.q-btn-dropdown--simple * + .q-btn-dropdown__arrow {
  margin-left: 8px;
}
.q-btn-dropdown__arrow {
  transition: transform 0.28s;
}
.q-btn-dropdown--current {
  flex-grow: 1;
}
.q-btn-group {
  border-radius: 3px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  vertical-align: middle;
}
.q-btn-group > .q-btn-item {
  border-radius: inherit;
  align-self: stretch;
}
.q-btn-group > .q-btn-item .q-btn__wrapper:before {
  box-shadow: none;
}
.q-btn-group > .q-btn-item .q-badge--floating {
  right: 0;
}
.q-btn-group > .q-btn-group {
  box-shadow: none;
}
.q-btn-group > .q-btn-group:first-child > .q-btn:first-child {
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.q-btn-group > .q-btn-group:last-child > .q-btn:last-child {
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}
.q-btn-group
  > .q-btn-group:not(:first-child)
  > .q-btn:first-child
  .q-btn__wrapper:before {
  border-left: 0;
}
.q-btn-group
  > .q-btn-group:not(:last-child)
  > .q-btn:last-child
  .q-btn__wrapper:before {
  border-right: 0;
}
.q-btn-group > .q-btn-item:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.q-btn-group > .q-btn-item:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.q-btn-group > .q-btn-item.q-btn--standard .q-btn__wrapper:before {
  z-index: -1;
}
.q-btn-group--push {
  border-radius: 7px;
}
.q-btn-group--push > .q-btn--push.q-btn--actionable {
  transform: none;
}
.q-btn-group--push > .q-btn--push.q-btn--actionable .q-btn__wrapper {
  transition: margin-top 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    margin-bottom 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.q-btn-group--push
  > .q-btn--push.q-btn--actionable.q-btn--active
  .q-btn__wrapper,
.q-btn-group--push > .q-btn--push.q-btn--actionable:active .q-btn__wrapper {
  margin-top: 2px;
  margin-bottom: -2px;
}
.q-btn-group--rounded {
  border-radius: 28px;
}
.q-btn-group--flat,
.q-btn-group--outline,
.q-btn-group--unelevated {
  box-shadow: none;
}
.q-btn-group--outline > .q-separator {
  display: none;
}
.q-btn-group--outline > .q-btn-item + .q-btn-item .q-btn__wrapper:before {
  border-left: 0;
}
.q-btn-group--outline > .q-btn-item:not(:last-child) .q-btn__wrapper:before {
  border-right: 0;
}
.q-btn-group--stretch {
  align-self: stretch;
  border-radius: 0;
}
.q-btn-group--glossy > .q-btn-item {
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.3),
    hsla(0, 0%, 100%, 0) 50%,
    rgba(0, 0, 0, 0.12) 51%,
    rgba(0, 0, 0, 0.04)
  ) !important;
}
.q-btn-group--spread > .q-btn-group {
  display: flex !important;
}
.q-btn-group--spread
  > .q-btn-group
  > .q-btn-item:not(.q-btn-dropdown__arrow-container),
.q-btn-group--spread > .q-btn-item {
  width: auto;
  min-width: 0;
  max-width: 100%;
  flex: 10000 1 0%;
}
.q-btn-toggle,
.q-card {
  position: relative;
}
.q-card {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  vertical-align: top;
  background: #fff;
}
.q-card > div:first-child,
.q-card > img:first-child {
  border-top: 0;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.q-card > div:last-child,
.q-card > img:last-child {
  border-bottom: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
.q-card > div:not(:first-child),
.q-card > img:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.q-card > div:not(:last-child),
.q-card > img:not(:last-child) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.q-card > div {
  border-left: 0;
  border-right: 0;
  box-shadow: none;
}
.q-card--bordered {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-card--dark {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-card__section {
  position: relative;
}
.q-card__section--vert {
  padding: 16px;
}
.q-card__section--horiz > div:first-child,
.q-card__section--horiz > img:first-child {
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.q-card__section--horiz > div:last-child,
.q-card__section--horiz > img:last-child {
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}
.q-card__section--horiz > div:not(:first-child),
.q-card__section--horiz > img:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.q-card__section--horiz > div:not(:last-child),
.q-card__section--horiz > img:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.q-card__section--horiz > div {
  border-top: 0;
  border-bottom: 0;
  box-shadow: none;
}
.q-card__actions {
  padding: 8px;
  align-items: center;
}
.q-card__actions .q-btn__wrapper {
  padding: 0 8px;
}
.q-card__actions--horiz > .q-btn-group + .q-btn-item,
.q-card__actions--horiz > .q-btn-item + .q-btn-group,
.q-card__actions--horiz > .q-btn-item + .q-btn-item {
  margin-left: 8px;
}
.q-card__actions--vert > .q-btn-item.q-btn--round {
  align-self: center;
}
.q-card__actions--vert > .q-btn-group + .q-btn-item,
.q-card__actions--vert > .q-btn-item + .q-btn-group,
.q-card__actions--vert > .q-btn-item + .q-btn-item {
  margin-top: 4px;
}
.q-card__actions--vert > .q-btn-group > .q-btn-item {
  flex-grow: 1;
}
.q-card > img {
  display: block;
  width: 100%;
  max-width: 100%;
  border: 0;
}
.q-carousel {
  background-color: #fff;
  height: 400px;
}
.q-carousel__slide {
  min-height: 100%;
  background-size: cover;
  background-position: 50%;
}
.q-carousel .q-carousel--padding,
.q-carousel__slide {
  padding: 16px;
}
.q-carousel__slides-container {
  height: 100%;
}
.q-carousel__control {
  color: #fff;
}
.q-carousel__arrow {
  pointer-events: none;
}
.q-carousel__arrow .q-icon {
  font-size: 28px;
}
.q-carousel__arrow .q-btn {
  pointer-events: all;
}
.q-carousel__next-arrow--horizontal,
.q-carousel__prev-arrow--horizontal {
  top: 16px;
  bottom: 16px;
}
.q-carousel__prev-arrow--horizontal {
  left: 16px;
}
.q-carousel__next-arrow--horizontal {
  right: 16px;
}
.q-carousel__next-arrow--vertical,
.q-carousel__prev-arrow--vertical {
  left: 16px;
  right: 16px;
}
.q-carousel__prev-arrow--vertical {
  top: 16px;
}
.q-carousel__next-arrow--vertical {
  bottom: 16px;
}
.q-carousel__navigation--bottom,
.q-carousel__navigation--top {
  left: 16px;
  right: 16px;
  overflow-x: auto;
  overflow-y: hidden;
}
.q-carousel__navigation--top {
  top: 16px;
}
.q-carousel__navigation--bottom {
  bottom: 16px;
}
.q-carousel__navigation--left,
.q-carousel__navigation--right {
  top: 16px;
  bottom: 16px;
  overflow-x: hidden;
  overflow-y: auto;
}
.q-carousel__navigation--left > .q-carousel__navigation-inner,
.q-carousel__navigation--right > .q-carousel__navigation-inner {
  flex-direction: column;
}
.q-carousel__navigation--left {
  left: 16px;
}
.q-carousel__navigation--right {
  right: 16px;
}
.q-carousel__navigation-inner {
  flex: 1 1 auto;
}
.q-carousel__navigation .q-btn {
  margin: 6px 4px;
}
.q-carousel__navigation .q-btn .q-btn__wrapper {
  padding: 5px;
}
.q-carousel__navigation-icon--inactive {
  opacity: 0.7;
}
.q-carousel .q-carousel__thumbnail {
  margin: 2px;
  height: 50px;
  width: auto;
  display: inline-block;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  vertical-align: middle;
  opacity: 0.7;
  transition: opacity 0.3s;
}
.q-carousel .q-carousel__thumbnail--active,
.q-carousel .q-carousel__thumbnail:hover {
  opacity: 1;
}
.q-carousel .q-carousel__thumbnail--active {
  border-color: currentColor;
  cursor: default;
}
.q-carousel--arrows-vertical .q-carousel--padding,
.q-carousel--arrows-vertical.q-carousel--with-padding .q-carousel__slide,
.q-carousel--navigation-top .q-carousel--padding,
.q-carousel--navigation-top.q-carousel--with-padding .q-carousel__slide {
  padding-top: 60px;
}
.q-carousel--arrows-vertical .q-carousel--padding,
.q-carousel--arrows-vertical.q-carousel--with-padding .q-carousel__slide,
.q-carousel--navigation-bottom .q-carousel--padding,
.q-carousel--navigation-bottom.q-carousel--with-padding .q-carousel__slide {
  padding-bottom: 60px;
}
.q-carousel--arrows-horizontal .q-carousel--padding,
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide,
.q-carousel--navigation-left .q-carousel--padding,
.q-carousel--navigation-left.q-carousel--with-padding .q-carousel__slide {
  padding-left: 60px;
}
.q-carousel--arrows-horizontal .q-carousel--padding,
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide,
.q-carousel--navigation-right .q-carousel--padding,
.q-carousel--navigation-right.q-carousel--with-padding .q-carousel__slide {
  padding-right: 60px;
}
.q-carousel.fullscreen {
  height: 100%;
}
.q-message-label,
.q-message-name,
.q-message-stamp {
  font-size: small;
}
.q-message-label {
  margin: 24px 0;
}
.q-message-stamp {
  color: inherit;
  margin-top: 4px;
  opacity: 0.6;
  display: none;
}
.q-message-avatar {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  min-width: 48px;
}
.q-message {
  margin-bottom: 8px;
}
.q-message:first-child .q-message-label {
  margin-top: 0;
}
.q-message-avatar--received {
  margin-right: 8px;
}
.q-message-text--received {
  color: #81c784;
  border-radius: 4px 4px 4px 0;
}
.q-message-text--received:last-child:before {
  right: 100%;
  border-right: 0 solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 8px solid currentColor;
}
.q-message-text-content--received {
  color: #000;
}
.q-message-name--sent {
  text-align: right;
}
.q-message-avatar--sent {
  margin-left: 8px;
}
.q-message-container--sent {
  flex-direction: row-reverse;
}
.q-message-text--sent {
  color: #e0e0e0;
  border-radius: 4px 4px 0 4px;
}
.q-message-text--sent:last-child:before {
  left: 100%;
  border-left: 0 solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid currentColor;
}
.q-message-text-content--sent {
  color: #000;
}
.q-message-text {
  background: currentColor;
  padding: 8px;
  line-height: 1.2;
  word-break: break-word;
  position: relative;
}
.q-message-text + .q-message-text {
  margin-top: 3px;
}
.q-message-text:last-child {
  min-height: 48px;
}
.q-message-text:last-child .q-message-stamp {
  display: block;
}
.q-message-text:last-child:before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
}
.q-checkbox {
  vertical-align: middle;
}
.q-checkbox__bg {
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border: 2px solid currentColor;
  border-radius: 2px;
  transition: background 0.22s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.q-checkbox__native {
  width: 1px;
  height: 1px;
}
.q-checkbox__svg {
  color: #fff;
}
.q-checkbox__truthy {
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.78334;
  stroke-dasharray: 29.78334;
}
.q-checkbox__indet {
  fill: currentColor;
  transform-origin: 50% 50%;
  transform: rotate(-280deg) scale(0);
}
.q-checkbox__inner {
  font-size: 40px;
  width: 1em;
  min-width: 1em;
  height: 1em;
  outline: 0;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.54);
}
.q-checkbox__inner--indet,
.q-checkbox__inner--truthy {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-checkbox__inner--indet .q-checkbox__bg,
.q-checkbox__inner--truthy .q-checkbox__bg {
  background: currentColor;
}
.q-checkbox__inner--truthy path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 0.18s cubic-bezier(0.4, 0, 0.6, 1) 0ms;
}
.q-checkbox__inner--indet .q-checkbox__indet {
  transform: rotate(0) scale(1);
  transition: transform 0.22s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.q-checkbox.disabled {
  opacity: 0.75 !important;
}
.q-checkbox--dark .q-checkbox__inner {
  color: hsla(0, 0%, 100%, 0.7);
}
.q-checkbox--dark .q-checkbox__inner:before {
  opacity: 0.32 !important;
}
.q-checkbox--dark .q-checkbox__inner--indet,
.q-checkbox--dark .q-checkbox__inner--truthy {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-checkbox--dense .q-checkbox__inner {
  width: 0.5em;
  min-width: 0.5em;
  height: 0.5em;
}
.q-checkbox--dense .q-checkbox__bg {
  left: 5%;
  top: 5%;
  width: 90%;
  height: 90%;
}
.q-checkbox--dense .q-checkbox__label {
  padding-left: 0.5em;
}
.q-checkbox--dense.reverse .q-checkbox__label {
  padding-left: 0;
  padding-right: 0.5em;
}
body.desktop .q-checkbox:not(.disabled) .q-checkbox__inner:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.12;
  transform: scale3d(0, 0, 1);
  transition: transform 0.22s cubic-bezier(0, 0, 0.2, 1);
}
body.desktop .q-checkbox:not(.disabled):focus .q-checkbox__inner:before,
body.desktop .q-checkbox:not(.disabled):hover .q-checkbox__inner:before {
  transform: scale3d(1, 1, 1);
}
body.desktop .q-checkbox--dense:not(.disabled):focus .q-checkbox__inner:before,
body.desktop .q-checkbox--dense:not(.disabled):hover .q-checkbox__inner:before {
  transform: scale3d(1.4, 1.4, 1);
}
.q-chip {
  vertical-align: middle;
  border-radius: 16px;
  outline: 0;
  position: relative;
  height: 2em;
  max-width: 100%;
  margin: 4px;
  background: #e0e0e0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  padding: 0.5em 0.9em;
}
.q-chip--colored .q-chip__icon,
.q-chip--dark .q-chip__icon {
  color: inherit;
}
.q-chip--outline {
  background: transparent !important;
  border: 1px solid currentColor;
}
.q-chip .q-avatar {
  font-size: 2em;
  margin-left: -0.45em;
  margin-right: 0.2em;
  border-radius: 16px;
}
.q-chip--selected .q-avatar {
  display: none;
}
.q-chip__icon {
  color: rgba(0, 0, 0, 0.54);
  font-size: 1.5em;
  margin: -0.2em;
}
.q-chip__icon--left {
  margin-right: 0.2em;
}
.q-chip__icon--right {
  margin-left: 0.2em;
}
.q-chip__icon--remove {
  margin-left: 0.1em;
  margin-right: -0.5em;
  opacity: 0.6;
  outline: 0;
}
.q-chip__icon--remove:focus,
.q-chip__icon--remove:hover {
  opacity: 1;
}
.q-chip__content {
  white-space: nowrap;
}
.q-chip--dense {
  border-radius: 12px;
  padding: 0 0.4em;
  height: 1.5em;
}
.q-chip--dense .q-avatar {
  font-size: 1.5em;
  margin-left: -0.27em;
  margin-right: 0.1em;
  border-radius: 12px;
}
.q-chip--dense .q-chip__icon {
  font-size: 1.25em;
}
.q-chip--dense .q-chip__icon--left {
  margin-right: 0.195em;
}
.q-chip--dense .q-chip__icon--remove {
  margin-right: -0.25em;
}
.q-chip--square {
  border-radius: 4px;
}
.q-chip--square .q-avatar {
  border-radius: 3px 0 0 3px;
}
body.desktop .q-chip--clickable:focus {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
}
.q-circular-progress {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  line-height: 1;
}
.q-circular-progress.q-focusable {
  border-radius: 50%;
}
.q-circular-progress__svg {
  width: 100%;
  height: 100%;
}
.q-circular-progress__text {
  font-size: 0.25em;
}
.q-circular-progress--indeterminate .q-circular-progress__svg {
  transform-origin: 50% 50%;
  -webkit-animation: q-spin 2s linear infinite;
  animation: q-spin 2s linear infinite;
}
.q-circular-progress--indeterminate .q-circular-progress__circle {
  stroke-dasharray: 1 400;
  stroke-dashoffset: 0;
  -webkit-animation: q-circular-progress-circle 1.5s ease-in-out infinite;
  animation: q-circular-progress-circle 1.5s ease-in-out infinite;
}
.q-color-picker {
  overflow: hidden;
  background: #fff;
  max-width: 350px;
  vertical-align: top;
  min-width: 180px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
.q-color-picker .q-tab {
  padding: 0 !important;
}
.q-color-picker--bordered {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-color-picker__header {
  height: 68px;
}
.q-color-picker__header input {
  line-height: 24px;
  border: 0;
}
.q-color-picker__header .q-tab {
  min-height: 32px !important;
  height: 32px !important;
}
.q-color-picker__header .q-tab--inactive {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.15) 25%,
    rgba(0, 0, 0, 0.1)
  );
}
.q-color-picker__error-icon {
  bottom: 2px;
  right: 2px;
  font-size: 24px;
  opacity: 0;
  transition: opacity 0.3s ease-in;
}
.q-color-picker__header-content {
  position: relative;
  background: #fff;
}
.q-color-picker__header-content--light {
  color: #000;
}
.q-color-picker__header-content--dark {
  color: #fff;
}
.q-color-picker__header-content--dark .q-tab--inactive:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsla(0, 0%, 100%, 0.2);
}
.q-color-picker__header-banner {
  height: 36px;
}
.q-color-picker__header-bg {
  background: #fff;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==') !important;
}
.q-color-picker__footer {
  height: 36px;
}
.q-color-picker__footer .q-tab {
  min-height: 36px !important;
  height: 36px !important;
}
.q-color-picker__footer .q-tab--inactive {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.15) 25%,
    rgba(0, 0, 0, 0.1)
  );
}
.q-color-picker__spectrum {
  width: 100%;
  height: 100%;
}
.q-color-picker__spectrum-tab {
  padding: 0 !important;
}
.q-color-picker__spectrum-white {
  background: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
}
.q-color-picker__spectrum-black {
  background: linear-gradient(0deg, #000, transparent);
}
.q-color-picker__spectrum-circle {
  width: 10px;
  height: 10px;
  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3),
    0 0 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transform: translate(-5px, -5px);
}
.q-color-picker__hue .q-slider__track-container {
  background: linear-gradient(
    90deg,
    red 0%,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    red
  ) !important;
  opacity: 1;
}
.q-color-picker__alpha .q-slider__track-container {
  color: #fff;
  opacity: 1;
  height: 8px;
  background-color: #fff !important;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==') !important;
}
.q-color-picker__alpha .q-slider__track-container:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #757575);
}
.q-color-picker__sliders {
  padding: 4px 16px 16px;
}
.q-color-picker__sliders .q-slider__track-container {
  height: 10px;
  margin-top: -5px;
}
.q-color-picker__sliders .q-slider__track {
  display: none;
}
.q-color-picker__sliders .q-slider__thumb path {
  stroke-width: 2px;
  fill: transparent;
}
.q-color-picker__sliders .q-slider--active path {
  stroke-width: 3px;
}
.q-color-picker__sliders .q-slider {
  height: 16px;
  margin-top: 8px;
  color: #424242;
}
.q-color-picker__tune-tab .q-slider {
  margin-left: 18px;
  margin-right: 18px;
}
.q-color-picker__tune-tab input {
  font-size: 11px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 3.5em;
}
.q-color-picker__palette-tab {
  padding: 0 !important;
}
.q-color-picker__palette-rows--editable .q-color-picker__cube {
  cursor: pointer;
}
.q-color-picker__cube {
  padding-bottom: 10%;
  width: 10% !important;
}
.q-color-picker input {
  color: inherit;
  background: transparent;
  outline: 0;
  text-align: center;
}
.q-color-picker .q-tabs {
  overflow: hidden;
}
.q-color-picker .q-tab--active {
  box-shadow: 0 0 14px 3px rgba(0, 0, 0, 0.2);
}
.q-color-picker .q-tab--active .q-focus-helper,
.q-color-picker .q-tab__indicator {
  display: none;
}
.q-color-picker .q-tab-panels {
  background: inherit;
}
.q-color-picker--dark .q-color-picker__tune-tab input {
  border: 1px solid hsla(0, 0%, 100%, 0.3);
}
.q-color-picker--dark .q-slider {
  color: #bdbdbd;
}
.q-date {
  display: inline-flex;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: #fff;
  width: 290px;
  min-width: 290px;
  max-width: 100%;
}
.q-date--bordered {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-date__header {
  border-top-left-radius: inherit;
  color: #fff;
  background-color: #1976d2;
  background-color: var(--q-color-primary);
  padding: 16px;
}
.q-date__actions {
  padding: 0 16px 16px;
}
.q-date__content,
.q-date__main {
  outline: 0;
}
.q-date__content .q-btn {
  font-weight: 400;
}
.q-date__header-link {
  opacity: 0.64;
  outline: 0;
  transition: opacity 0.3s ease-out;
}
.q-date__header-link--active,
.q-date__header-link:focus,
.q-date__header-link:hover {
  opacity: 1;
}
.q-date__header-subtitle {
  font-size: 14px;
  line-height: 1.75;
  letter-spacing: 0.00938em;
}
.q-date__header-title-label {
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.00735em;
}
.q-date__view {
  height: 100%;
  width: 100%;
  min-height: 290px;
  padding: 16px;
}
.q-date__navigation {
  height: 12.5%;
}
.q-date__navigation > div:first-child {
  width: 8%;
  min-width: 24px;
  justify-content: flex-end;
}
.q-date__navigation > div:last-child {
  width: 8%;
  min-width: 24px;
  justify-content: flex-start;
}
.q-date__calendar-weekdays {
  height: 12.5%;
}
.q-date__calendar-weekdays > div {
  opacity: 0.38;
  font-size: 12px;
}
.q-date__calendar-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 14.285% !important;
  height: 12.5% !important;
  position: relative;
  padding: 1px;
}
.q-date__calendar-item:after {
  content: '';
  position: absolute;
  pointer-events: none;
  top: 1px;
  right: 0;
  bottom: 1px;
  left: 0;
  border-style: dashed;
  border-color: transparent;
  border-width: 1px;
}
.q-date__calendar-item > div,
.q-date__calendar-item button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.q-date__calendar-item > div {
  line-height: 30px;
  text-align: center;
}
.q-date__calendar-item--out {
  opacity: 0.18;
}
.q-date__calendar-item--fill {
  visibility: hidden;
}
.q-date__range-from:before,
.q-date__range-to:before,
.q-date__range:before {
  content: '';
  background-color: currentColor;
  position: absolute;
  top: 1px;
  bottom: 1px;
  left: 0;
  right: 0;
  opacity: 0.3;
}
.q-date__range-from:nth-child(7n-6):before,
.q-date__range-to:nth-child(7n-6):before,
.q-date__range:nth-child(7n-6):before {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.q-date__range-from:nth-child(7n):before,
.q-date__range-to:nth-child(7n):before,
.q-date__range:nth-child(7n):before {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.q-date__range-from:before {
  left: 50%;
}
.q-date__range-to:before {
  right: 50%;
}
.q-date__edit-range:after {
  border-color: currentColor transparent;
}
.q-date__edit-range:nth-child(7n-6):after {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.q-date__edit-range:nth-child(7n):after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.q-date__edit-range-from-to:after,
.q-date__edit-range-from:after {
  left: 4px;
  border-left-color: currentColor;
  border-top-color: currentColor;
  border-bottom-color: currentColor;
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
}
.q-date__edit-range-from-to:after,
.q-date__edit-range-to:after {
  right: 4px;
  border-right-color: currentColor;
  border-top-color: currentColor;
  border-bottom-color: currentColor;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
}
.q-date__calendar-days-container {
  height: 75%;
  min-height: 192px;
}
.q-date__calendar-days > div {
  height: 16.66% !important;
}
.q-date__event {
  position: absolute;
  bottom: 2px;
  left: 50%;
  height: 5px;
  width: 8px;
  border-radius: 5px;
  background-color: #26a69a;
  background-color: var(--q-color-secondary);
  transform: translate3d(-50%, 0, 0);
}
.q-date__today {
  box-shadow: 0 0 1px 0 currentColor;
}
.q-date__years-content {
  padding: 0 8px;
}
.q-date__months-item,
.q-date__years-item {
  flex: 0 0 33.3333%;
}
.q-date--readonly .q-date__content,
.q-date--readonly .q-date__header,
.q-date.disabled .q-date__content,
.q-date.disabled .q-date__header {
  pointer-events: none;
}
.q-date--readonly .q-date__navigation {
  display: none;
}
.q-date--portrait {
  flex-direction: column;
}
.q-date--portrait-standard .q-date__content {
  height: calc(100% - 86px);
}
.q-date--portrait-standard .q-date__header {
  border-top-right-radius: inherit;
  height: 86px;
}
.q-date--portrait-standard .q-date__header-title {
  align-items: center;
  height: 30px;
}
.q-date--portrait-minimal .q-date__content {
  height: 100%;
}
.q-date--landscape {
  flex-direction: row;
  align-items: stretch;
  min-width: 420px;
}
.q-date--landscape > div {
  display: flex;
  flex-direction: column;
}
.q-date--landscape .q-date__content {
  height: 100%;
}
.q-date--landscape-standard {
  min-width: 420px;
}
.q-date--landscape-standard .q-date__header {
  border-bottom-left-radius: inherit;
  min-width: 110px;
  width: 110px;
}
.q-date--landscape-standard .q-date__header-title {
  flex-direction: column;
}
.q-date--landscape-standard .q-date__header-today {
  margin-top: 12px;
  margin-left: -8px;
}
.q-date--landscape-minimal {
  width: 310px;
}
.q-date--dark {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-dialog__title {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
}
.q-dialog__progress {
  font-size: 4rem;
}
.q-dialog__inner {
  outline: 0;
}
.q-dialog__inner > div {
  pointer-events: all;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  border-radius: 4px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14),
    0 1px 10px rgba(0, 0, 0, 0.12);
}
.q-dialog__inner--square > div {
  border-radius: 0 !important;
}
.q-dialog__inner
  > .q-card
  > .q-card__actions
  .q-btn--rectangle
  .q-btn__wrapper {
  min-width: 64px;
}
.q-dialog__inner--minimized {
  padding: 24px;
}
.q-dialog__inner--minimized > div {
  max-height: calc(100vh - 48px);
}
.q-dialog__inner--maximized > div {
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
  border-radius: 0 !important;
}
.q-dialog__inner--bottom,
.q-dialog__inner--top {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.q-dialog__inner--left,
.q-dialog__inner--right {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.q-dialog__inner--left > div,
.q-dialog__inner--top > div {
  border-top-left-radius: 0;
}
.q-dialog__inner--right > div,
.q-dialog__inner--top > div {
  border-top-right-radius: 0;
}
.q-dialog__inner--bottom > div,
.q-dialog__inner--left > div {
  border-bottom-left-radius: 0;
}
.q-dialog__inner--bottom > div,
.q-dialog__inner--right > div {
  border-bottom-right-radius: 0;
}
.q-dialog__inner--fullwidth > div {
  width: 100% !important;
  max-width: 100% !important;
}
.q-dialog__inner--fullheight > div {
  height: 100% !important;
  max-height: 100% !important;
}
.q-dialog__backdrop {
  z-index: -1;
  pointer-events: all;
  background: rgba(0, 0, 0, 0.4);
}
body.platform-android:not(.native-mobile) .q-dialog__inner--minimized > div,
body.platform-ios .q-dialog__inner--minimized > div {
  max-height: calc(100vh - 108px);
}
body.q-ios-padding .q-dialog__inner {
  padding-top: 20px !important;
  padding-top: env(safe-area-inset-top) !important;
  padding-bottom: env(safe-area-inset-bottom) !important;
}
body.q-ios-padding .q-dialog__inner > div {
  max-height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom)
  ) !important;
}
@media (max-width: 599px) {
  .q-dialog__inner--bottom,
  .q-dialog__inner--top {
    padding-left: 0;
    padding-right: 0;
  }
  .q-dialog__inner--bottom > div,
  .q-dialog__inner--top > div {
    width: 100% !important;
  }
}
@media (min-width: 600px) {
  .q-dialog__inner--minimized > div {
    max-width: 560px;
  }
}
.q-body--dialog {
  overflow: hidden;
}
.q-bottom-sheet {
  padding-bottom: 8px;
}
.q-bottom-sheet__avatar {
  border-radius: 50%;
}
.q-bottom-sheet--list {
  width: 400px;
}
.q-bottom-sheet--list .q-icon,
.q-bottom-sheet--list img {
  font-size: 24px;
  width: 24px;
  height: 24px;
}
.q-bottom-sheet--grid {
  width: 700px;
}
.q-bottom-sheet--grid .q-bottom-sheet__item {
  padding: 8px;
  text-align: center;
  min-width: 100px;
}
.q-bottom-sheet--grid .q-bottom-sheet__empty-icon,
.q-bottom-sheet--grid .q-icon,
.q-bottom-sheet--grid img {
  font-size: 48px;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
}
.q-bottom-sheet--grid .q-separator {
  margin: 12px 0;
}
.q-bottom-sheet__item {
  flex: 0 0 33.3333%;
}
@media (min-width: 600px) {
  .q-bottom-sheet__item {
    flex: 0 0 25%;
  }
}
.q-dialog-plugin {
  width: 400px;
}
.q-dialog-plugin__form {
  max-height: 50vh;
}
.q-dialog-plugin .q-card__section + .q-card__section {
  padding-top: 0;
}
.q-dialog-plugin--progress {
  text-align: center;
}
.q-editor {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: #fff;
}
.q-editor.disabled {
  border-style: dashed;
}
.q-editor > div:first-child,
.q-editor__toolbars-container,
.q-editor__toolbars-container > div:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.q-editor__content {
  outline: 0;
  padding: 10px;
  min-height: 10em;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  overflow: auto;
}
.q-editor__content pre {
  white-space: pre-wrap;
}
.q-editor__content hr {
  border: 0;
  outline: 0;
  margin: 1px;
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
}
.q-editor__content:empty:not(:focus):before {
  content: attr(placeholder);
  opacity: 0.7;
}
.q-editor__toolbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  min-height: 32px;
}
.q-editor .q-btn {
  margin: 4px;
}
.q-editor__toolbar-group {
  position: relative;
  margin: 0 4px;
}
.q-editor__toolbar-group + .q-editor__toolbar-group:before {
  content: '';
  position: absolute;
  left: -4px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  background: rgba(0, 0, 0, 0.12);
}
.q-editor__link-input {
  color: inherit;
  text-decoration: none;
  text-transform: none;
  border: none;
  border-radius: 0;
  background: none;
  outline: 0;
}
.q-editor--flat,
.q-editor--flat .q-editor__toolbar {
  border: 0;
}
.q-editor--dense .q-editor__toolbar-group {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.q-editor--dark {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-editor--dark .q-editor__content hr {
  background: hsla(0, 0%, 100%, 0.28);
}
.q-editor--dark .q-editor__toolbar {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-editor--dark .q-editor__toolbar-group + .q-editor__toolbar-group:before {
  background: hsla(0, 0%, 100%, 0.28);
}
.q-expansion-item__border {
  opacity: 0;
}
.q-expansion-item__toggle-icon {
  position: relative;
  transition: transform 0.3s;
}
.q-expansion-item__toggle-icon--rotated {
  transform: rotate(180deg);
}
.q-expansion-item__toggle-focus {
  width: 1em !important;
  height: 1em !important;
  position: relative !important;
}
.q-expansion-item__toggle-focus + .q-expansion-item__toggle-icon {
  margin-top: -1em;
}
.q-expansion-item--standard.q-expansion-item--expanded
  > div
  > .q-expansion-item__border {
  opacity: 1;
}
.q-expansion-item--popup {
  transition: padding 0.5s;
}
.q-expansion-item--popup > .q-expansion-item__container {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-expansion-item--popup > .q-expansion-item__container > .q-separator {
  display: none;
}
.q-expansion-item--popup.q-expansion-item--collapsed {
  padding: 0 15px;
}
.q-expansion-item--popup.q-expansion-item--expanded {
  padding: 15px 0;
}
.q-expansion-item--popup.q-expansion-item--expanded
  + .q-expansion-item--popup.q-expansion-item--expanded {
  padding-top: 0;
}
.q-expansion-item--popup.q-expansion-item--collapsed:not(:first-child)
  > .q-expansion-item__container {
  border-top-width: 0;
}
.q-expansion-item--popup.q-expansion-item--expanded
  + .q-expansion-item--popup.q-expansion-item--collapsed
  > .q-expansion-item__container {
  border-top-width: 1px;
}
.q-expansion-item__content > .q-card {
  box-shadow: none;
  border-radius: 0;
}
.q-expansion-item--expanded
  + .q-expansion-item--expanded
  > div
  > .q-expansion-item__border--top,
.q-expansion-item:first-child > div > .q-expansion-item__border--top,
.q-expansion-item:last-child > div > .q-expansion-item__border--bottom {
  opacity: 0;
}
.q-expansion-item--expanded .q-textarea--autogrow textarea {
  -webkit-animation: q-expansion-done 0s;
  animation: q-expansion-done 0s;
}
.z-fab {
  z-index: 990;
}
.q-fab {
  position: relative;
  vertical-align: middle;
}
.q-fab > .q-btn {
  width: 100%;
}
.q-fab--form-rounded {
  border-radius: 28px;
}
.q-fab--form-square {
  border-radius: 4px;
}
.q-fab--opened .q-fab__actions {
  opacity: 1;
  transform: scale(1) translate(0, 0);
  pointer-events: all;
}
.q-fab--opened .q-fab__icon {
  transform: rotate(180deg);
  opacity: 0;
}
.q-fab--opened .q-fab__active-icon {
  transform: rotate(0deg);
  opacity: 1;
}
.q-fab__active-icon,
.q-fab__icon {
  transition: opacity 0.4s, transform 0.4s;
}
.q-fab__icon {
  opacity: 1;
  transform: rotate(0deg);
}
.q-fab__active-icon {
  opacity: 0;
  transform: rotate(-180deg);
}
.q-fab__label--external {
  position: absolute;
  padding: 0 8px;
  transition: opacity 0.18s cubic-bezier(0.65, 0.815, 0.735, 0.395);
}
.q-fab__label--external-hidden {
  opacity: 0;
  pointer-events: none;
}
.q-fab__label--external-left {
  top: 50%;
  left: -12px;
  transform: translate(-100%, -50%);
}
.q-fab__label--external-right {
  top: 50%;
  right: -12px;
  transform: translate(100%, -50%);
}
.q-fab__label--external-bottom {
  bottom: -12px;
  left: 50%;
  transform: translate(-50%, 100%);
}
.q-fab__label--external-top {
  top: -12px;
  left: 50%;
  transform: translate(-50%, -100%);
}
.q-fab__label--internal {
  padding: 0;
  transition: font-size 0.12s cubic-bezier(0.65, 0.815, 0.735, 0.395),
    max-height 0.12s cubic-bezier(0.65, 0.815, 0.735, 0.395),
    opacity 0.07s cubic-bezier(0.65, 0.815, 0.735, 0.395);
  max-height: 30px;
}
.q-fab__label--internal-hidden {
  font-size: 0;
  opacity: 0;
}
.q-fab__label--internal-top {
  padding-bottom: 0.12em;
}
.q-fab__label--internal-bottom {
  padding-top: 0.12em;
}
.q-fab__label--internal-bottom.q-fab__label--internal-hidden,
.q-fab__label--internal-top.q-fab__label--internal-hidden {
  max-height: 0;
}
.q-fab__label--internal-left {
  padding-left: 0.285em;
  padding-right: 0.571em;
}
.q-fab__label--internal-right {
  padding-right: 0.285em;
  padding-left: 0.571em;
}
.q-fab__icon-holder {
  min-width: 24px;
  min-height: 24px;
  position: relative;
}
.q-fab__actions {
  position: absolute;
  opacity: 0;
  transition: transform 0.18s ease-in, opacity 0.18s ease-in;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 3px;
}
.q-fab__actions .q-btn {
  margin: 5px;
}
.q-fab__actions--right {
  transform-origin: 0 50%;
  transform: scale(0.4) translateX(-62px);
  height: 56px;
  left: 100%;
  margin-left: 9px;
}
.q-fab__actions--left {
  transform-origin: 100% 50%;
  transform: scale(0.4) translateX(62px);
  height: 56px;
  right: 100%;
  margin-right: 9px;
  flex-direction: row-reverse;
}
.q-fab__actions--up {
  transform-origin: 50% 100%;
  transform: scale(0.4) translateY(62px);
  width: 56px;
  bottom: 100%;
  margin-bottom: 9px;
  flex-direction: column-reverse;
}
.q-fab__actions--down {
  transform-origin: 50% 0;
  transform: scale(0.4) translateY(-62px);
  width: 56px;
  top: 100%;
  margin-top: 9px;
  flex-direction: column;
}
.q-fab__actions--down,
.q-fab__actions--up {
  left: 50%;
  margin-left: -28px;
}
.q-fab--align-left > .q-fab__actions--down,
.q-fab--align-left > .q-fab__actions--up {
  align-items: flex-start;
  left: 28px;
}
.q-fab--align-right > .q-fab__actions--down,
.q-fab--align-right > .q-fab__actions--up {
  align-items: flex-end;
  left: auto;
  right: 0;
}
.q-field {
  font-size: 14px;
}
.q-field ::-ms-clear,
.q-field ::-ms-reveal {
  display: none;
}
.q-field--with-bottom {
  padding-bottom: 20px;
}
.q-field__marginal {
  height: 56px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 24px;
}
.q-field__marginal > * + * {
  margin-left: 2px;
}
.q-field__marginal .q-avatar {
  font-size: 32px;
}
.q-field__before,
.q-field__prepend {
  padding-right: 12px;
}
.q-field__after,
.q-field__append {
  padding-left: 12px;
}
.q-field__after:empty,
.q-field__append:empty {
  display: none;
}
.q-field__append + .q-field__append {
  padding-left: 2px;
}
.q-field__inner {
  text-align: left;
}
.q-field__bottom {
  font-size: 12px;
  min-height: 12px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.54);
  padding: 8px 12px 0;
}
.q-field__bottom--animated {
  transform: translateY(100%);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.q-field__messages {
  line-height: 1;
}
.q-field__messages > div {
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.q-field__messages > div + div {
  margin-top: 4px;
}
.q-field__counter {
  padding-left: 8px;
  line-height: 1;
}
.q-field--item-aligned {
  padding: 8px 16px;
}
.q-field--item-aligned .q-field__before {
  min-width: 56px;
}
.q-field__control-container {
  height: inherit;
}
.q-field__control {
  color: #1976d2;
  color: var(--q-color-primary);
  height: 56px;
  max-width: 100%;
  outline: none;
}
.q-field__control:after,
.q-field__control:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.q-field__control:before {
  border-radius: inherit;
}
.q-field__shadow {
  top: 8px;
  opacity: 0;
  overflow: hidden;
  white-space: pre-wrap;
  transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field__shadow + .q-field__native::-moz-placeholder {
  -moz-transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field__shadow + .q-field__native:-ms-input-placeholder {
  -ms-transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field__shadow + .q-field__native::placeholder {
  transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field__shadow + .q-field__native:focus::-moz-placeholder {
  opacity: 0;
}
.q-field__shadow + .q-field__native:focus:-ms-input-placeholder {
  opacity: 0;
}
.q-field__shadow + .q-field__native:focus::placeholder {
  opacity: 0;
}
.q-field__input,
.q-field__native,
.q-field__prefix,
.q-field__suffix {
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.00937em;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
  border-radius: 0;
  background: none;
  color: rgba(0, 0, 0, 0.87);
  outline: 0;
  padding: 6px 0;
}
.q-field__input,
.q-field__native {
  width: 100%;
  min-width: 0;
  outline: 0 !important;
}
.q-field__input:-webkit-autofill,
.q-field__native:-webkit-autofill {
  -webkit-animation-name: q-autofill;
  -webkit-animation-fill-mode: both;
}
.q-field__input:-webkit-autofill + .q-field__label,
.q-field__native:-webkit-autofill + .q-field__label {
  transform: translateY(-40%) scale(0.75);
}
.q-field__input[type='number']:invalid + .q-field__label,
.q-field__native[type='number']:invalid + .q-field__label {
  transform: translateY(-40%) scale(0.75);
}
.q-field__input:invalid,
.q-field__native:invalid {
  box-shadow: none;
}
.q-field__native[type='file'] {
  line-height: 1em;
}
.q-field__input {
  padding: 0;
  height: 0;
  min-height: 24px;
  line-height: 24px;
}
.q-field__prefix,
.q-field__suffix {
  transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}
.q-field__prefix {
  padding-right: 4px;
}
.q-field__suffix {
  padding-left: 4px;
}
.q-field--disabled .q-placeholder,
.q-field--readonly .q-placeholder {
  opacity: 1 !important;
}
.q-field--readonly.q-field--labeled .q-field__input,
.q-field--readonly.q-field--labeled .q-field__native {
  cursor: default;
}
.q-field--readonly.q-field--float .q-field__input,
.q-field--readonly.q-field--float .q-field__native {
  cursor: text;
}
.q-field--disabled .q-field__inner {
  cursor: not-allowed;
}
.q-field--disabled .q-field__control {
  pointer-events: none;
}
.q-field--disabled .q-field__control > div {
  opacity: 0.6 !important;
}
.q-field--disabled .q-field__control > div,
.q-field--disabled .q-field__control > div * {
  outline: 0 !important;
}
.q-field__label {
  left: 0;
  right: 0;
  top: 18px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.00937em;
  text-decoration: inherit;
  text-transform: inherit;
  transform-origin: left top;
  transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1),
    right 0.324s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--float .q-field__label {
  transform: translateY(-40%) scale(0.75);
  right: -33.33333%;
  transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1),
    right 0.396s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--highlighted .q-field__label {
  color: currentColor;
}
.q-field--highlighted .q-field__shadow {
  opacity: 0.5;
}
.q-field--filled .q-field__control {
  padding: 0 12px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px 4px 0 0;
}
.q-field--filled .q-field__control:before {
  background: rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  opacity: 0;
  transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--filled .q-field__control:hover:before {
  opacity: 1;
}
.q-field--filled .q-field__control:after {
  height: 2px;
  top: auto;
  transform-origin: center bottom;
  transform: scale3d(0, 1, 1);
  background: currentColor;
  transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--filled.q-field--rounded .q-field__control {
  border-radius: 28px 28px 0 0;
}
.q-field--filled.q-field--highlighted .q-field__control:before {
  opacity: 1;
  background: rgba(0, 0, 0, 0.12);
}
.q-field--filled.q-field--highlighted .q-field__control:after {
  transform: scale3d(1, 1, 1);
}
.q-field--filled.q-field--dark .q-field__control,
.q-field--filled.q-field--dark .q-field__control:before {
  background: hsla(0, 0%, 100%, 0.07);
}
.q-field--filled.q-field--dark.q-field--highlighted .q-field__control:before {
  background: hsla(0, 0%, 100%, 0.1);
}
.q-field--filled.q-field--readonly .q-field__control:before {
  opacity: 1;
  background: transparent;
  border-bottom-style: dashed;
}
.q-field--outlined .q-field__control {
  border-radius: 4px;
  padding: 0 12px;
}
.q-field--outlined .q-field__control:before {
  border: 1px solid rgba(0, 0, 0, 0.24);
  transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--outlined .q-field__control:hover:before {
  border-color: #000;
}
.q-field--outlined .q-field__control:after {
  height: inherit;
  border-radius: inherit;
  border: 2px solid transparent;
  transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--outlined .q-field__input:-webkit-autofill,
.q-field--outlined .q-field__native:-webkit-autofill {
  margin-top: 1px;
  margin-bottom: 1px;
}
.q-field--outlined.q-field--rounded .q-field__control {
  border-radius: 28px;
}
.q-field--outlined.q-field--highlighted .q-field__control:hover:before {
  border-color: transparent;
}
.q-field--outlined.q-field--highlighted .q-field__control:after {
  border-color: currentColor;
  border-width: 2px;
  transform: scale3d(1, 1, 1);
}
.q-field--outlined.q-field--readonly .q-field__control:before {
  border-style: dashed;
}
.q-field--standard .q-field__control:before {
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--standard .q-field__control:hover:before {
  border-color: #000;
}
.q-field--standard .q-field__control:after {
  height: 2px;
  top: auto;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  transform-origin: center bottom;
  transform: scale3d(0, 1, 1);
  background: currentColor;
  transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--standard.q-field--highlighted .q-field__control:after {
  transform: scale3d(1, 1, 1);
}
.q-field--standard.q-field--readonly .q-field__control:before {
  border-bottom-style: dashed;
}
.q-field--dark .q-field__control:before {
  border-color: hsla(0, 0%, 100%, 0.6);
}
.q-field--dark .q-field__control:hover:before {
  border-color: #fff;
}
.q-field--dark .q-field__input,
.q-field--dark .q-field__native,
.q-field--dark .q-field__prefix,
.q-field--dark .q-field__suffix {
  color: #fff;
}
.q-field--dark .q-field__bottom,
.q-field--dark .q-field__marginal,
.q-field--dark:not(.q-field--highlighted) .q-field__label {
  color: hsla(0, 0%, 100%, 0.7);
}
.q-field--standout .q-field__control {
  padding: 0 12px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  transition: box-shadow 0.36s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--standout .q-field__control:before {
  background: rgba(0, 0, 0, 0.07);
  opacity: 0;
  transition: opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-field--standout .q-field__control:hover:before {
  opacity: 1;
}
.q-field--standout.q-field--rounded .q-field__control {
  border-radius: 28px;
}
.q-field--standout.q-field--highlighted .q-field__control {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  background: #000;
}
.q-field--standout.q-field--highlighted .q-field__append,
.q-field--standout.q-field--highlighted .q-field__input,
.q-field--standout.q-field--highlighted .q-field__native,
.q-field--standout.q-field--highlighted .q-field__prefix,
.q-field--standout.q-field--highlighted .q-field__prepend,
.q-field--standout.q-field--highlighted .q-field__suffix {
  color: #fff;
}
.q-field--standout.q-field--readonly .q-field__control:before {
  opacity: 1;
  background: transparent;
  border: 1px dashed rgba(0, 0, 0, 0.24);
}
.q-field--standout.q-field--dark .q-field__control,
.q-field--standout.q-field--dark .q-field__control:before {
  background: hsla(0, 0%, 100%, 0.07);
}
.q-field--standout.q-field--dark.q-field--highlighted .q-field__control {
  background: #fff;
}
.q-field--standout.q-field--dark.q-field--highlighted .q-field__append,
.q-field--standout.q-field--dark.q-field--highlighted .q-field__input,
.q-field--standout.q-field--dark.q-field--highlighted .q-field__native,
.q-field--standout.q-field--dark.q-field--highlighted .q-field__prefix,
.q-field--standout.q-field--dark.q-field--highlighted .q-field__prepend,
.q-field--standout.q-field--dark.q-field--highlighted .q-field__suffix {
  color: #000;
}
.q-field--standout.q-field--dark.q-field--readonly .q-field__control:before {
  border-color: hsla(0, 0%, 100%, 0.24);
}
.q-field--labeled .q-field__native,
.q-field--labeled .q-field__prefix,
.q-field--labeled .q-field__suffix {
  line-height: 24px;
  padding-top: 24px;
  padding-bottom: 8px;
}
.q-field--labeled .q-field__shadow {
  top: 0;
}
.q-field--labeled:not(.q-field--float) .q-field__prefix,
.q-field--labeled:not(.q-field--float) .q-field__suffix {
  opacity: 0;
}
.q-field--labeled:not(.q-field--float) .q-field__input:-ms-input-placeholder,
.q-field--labeled:not(.q-field--float) .q-field__native:-ms-input-placeholder {
  color: transparent !important;
}
.q-field--labeled:not(.q-field--float) .q-field__input::-moz-placeholder,
.q-field--labeled:not(.q-field--float) .q-field__native::-moz-placeholder {
  color: transparent;
}
.q-field--labeled:not(.q-field--float) .q-field__input:-ms-input-placeholder,
.q-field--labeled:not(.q-field--float) .q-field__native:-ms-input-placeholder {
  color: transparent;
}
.q-field--labeled:not(.q-field--float) .q-field__input::placeholder,
.q-field--labeled:not(.q-field--float) .q-field__native::placeholder {
  color: transparent;
}
.q-field--labeled.q-field--dense .q-field__native,
.q-field--labeled.q-field--dense .q-field__prefix,
.q-field--labeled.q-field--dense .q-field__suffix {
  padding-top: 14px;
  padding-bottom: 2px;
}
.q-field--dense .q-field__shadow {
  top: 0;
}
.q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
  height: 40px;
}
.q-field--dense .q-field__bottom {
  font-size: 11px;
}
.q-field--dense .q-field__label {
  font-size: 14px;
  top: 10px;
}
.q-field--dense .q-field__before,
.q-field--dense .q-field__prepend {
  padding-right: 6px;
}
.q-field--dense .q-field__after,
.q-field--dense .q-field__append {
  padding-left: 6px;
}
.q-field--dense .q-field__append + .q-field__append {
  padding-left: 2px;
}
.q-field--dense .q-field__marginal .q-avatar {
  font-size: 24px;
}
.q-field--dense.q-field--float .q-field__label {
  transform: translateY(-30%) scale(0.75);
}
.q-field--dense .q-field__input:-webkit-autofill + .q-field__label,
.q-field--dense .q-field__native:-webkit-autofill + .q-field__label {
  transform: translateY(-30%) scale(0.75);
}
.q-field--dense .q-field__input[type='number']:invalid + .q-field__label,
.q-field--dense .q-field__native[type='number']:invalid + .q-field__label {
  transform: translateY(-30%) scale(0.75);
}
.q-field--borderless.q-field--dense .q-field__control,
.q-field--borderless .q-field__bottom,
.q-field--standard.q-field--dense .q-field__control,
.q-field--standard .q-field__bottom {
  padding-left: 0;
  padding-right: 0;
}
.q-field--error .q-field__label {
  -webkit-animation: q-field-label 0.36s;
  animation: q-field-label 0.36s;
}
.q-field--error .q-field__bottom {
  color: #c10015;
  color: var(--q-color-negative);
}
.q-field__focusable-action {
  opacity: 0.6;
  cursor: pointer;
  outline: 0 !important;
  border: 0;
  color: inherit;
  background: transparent;
  padding: 0;
}
.q-field__focusable-action:focus,
.q-field__focusable-action:hover {
  opacity: 1;
}
.q-field--auto-height .q-field__control {
  height: auto;
}
.q-field--auto-height .q-field__control,
.q-field--auto-height .q-field__native {
  min-height: 56px;
}
.q-field--auto-height .q-field__native {
  align-items: center;
}
.q-field--auto-height .q-field__control-container {
  padding-top: 0;
}
.q-field--auto-height .q-field__native,
.q-field--auto-height .q-field__prefix,
.q-field--auto-height .q-field__suffix {
  line-height: 18px;
}
.q-field--auto-height.q-field--labeled .q-field__control-container {
  padding-top: 24px;
}
.q-field--auto-height.q-field--labeled .q-field__shadow {
  top: 24px;
}
.q-field--auto-height.q-field--labeled .q-field__native,
.q-field--auto-height.q-field--labeled .q-field__prefix,
.q-field--auto-height.q-field--labeled .q-field__suffix {
  padding-top: 0;
}
.q-field--auto-height.q-field--labeled .q-field__native {
  min-height: 24px;
}
.q-field--auto-height.q-field--dense .q-field__control,
.q-field--auto-height.q-field--dense .q-field__native {
  min-height: 40px;
}
.q-field--auto-height.q-field--dense.q-field--labeled
  .q-field__control-container {
  padding-top: 14px;
}
.q-field--auto-height.q-field--dense.q-field--labeled .q-field__shadow {
  top: 14px;
}
.q-field--auto-height.q-field--dense.q-field--labeled .q-field__native {
  min-height: 24px;
}
.q-field--square .q-field__control {
  border-radius: 0 !important;
}
.q-transition--field-message-enter-active,
.q-transition--field-message-leave-active {
  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1),
    opacity 0.6s cubic-bezier(0.86, 0, 0.07, 1);
}
.q-transition--field-message-enter,
.q-transition--field-message-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.q-transition--field-message-leave,
.q-transition--field-message-leave-active {
  position: absolute;
}
.q-file {
  width: 100%;
}
.q-file .q-field__native {
  word-break: break-all;
}
.q-file .q-field__input {
  opacity: 0 !important;
}
.q-file .q-field__input::-webkit-file-upload-button {
  cursor: pointer;
}
.q-file__dnd {
  outline: 1px dashed currentColor;
  outline-offset: -4px;
}
.q-form,
.q-img {
  position: relative;
}
.q-img {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
}
.q-img__loading .q-spinner {
  font-size: 50px;
}
.q-img__image {
  border-radius: inherit;
  background-repeat: no-repeat;
}
.q-img__content {
  overflow: hidden;
  border-radius: inherit;
}
.q-img__content > div {
  position: absolute;
  padding: 16px;
  color: #fff;
  background: rgba(0, 0, 0, 0.47);
}
.q-img--menu .q-img__image {
  pointer-events: none;
}
.q-img--menu .q-img__image > img {
  pointer-events: all;
  opacity: 0;
}
.q-img--menu .q-img__content {
  pointer-events: none;
}
.q-img--menu .q-img__content > div {
  pointer-events: all;
}
.q-inner-loading {
  background: hsla(0, 0%, 100%, 0.6);
}
.q-inner-loading--dark {
  background: rgba(0, 0, 0, 0.4);
}
.q-textarea .q-field__control {
  min-height: 56px;
  height: auto;
}
.q-textarea .q-field__control-container {
  padding-top: 2px;
  padding-bottom: 2px;
}
.q-textarea .q-field__shadow {
  top: 2px;
  bottom: 2px;
}
.q-textarea .q-field__native,
.q-textarea .q-field__prefix,
.q-textarea .q-field__suffix {
  line-height: 18px;
}
.q-textarea .q-field__native {
  resize: vertical;
  padding-top: 17px;
  min-height: 52px;
}
.q-textarea.q-field--labeled .q-field__control-container {
  padding-top: 26px;
}
.q-textarea.q-field--labeled .q-field__shadow {
  top: 26px;
}
.q-textarea.q-field--labeled .q-field__native,
.q-textarea.q-field--labeled .q-field__prefix,
.q-textarea.q-field--labeled .q-field__suffix {
  padding-top: 0;
}
.q-textarea.q-field--labeled .q-field__native {
  min-height: 26px;
  padding-top: 1px;
}
.q-textarea--autogrow .q-field__native {
  resize: none;
}
.q-textarea.q-field--dense .q-field__control,
.q-textarea.q-field--dense .q-field__native {
  min-height: 36px;
}
.q-textarea.q-field--dense .q-field__native {
  padding-top: 9px;
}
.q-textarea.q-field--dense.q-field--labeled .q-field__control-container {
  padding-top: 14px;
}
.q-textarea.q-field--dense.q-field--labeled .q-field__shadow {
  top: 14px;
}
.q-textarea.q-field--dense.q-field--labeled .q-field__native {
  min-height: 24px;
  padding-top: 3px;
}
.q-textarea.q-field--dense.q-field--labeled .q-field__prefix,
.q-textarea.q-field--dense.q-field--labeled .q-field__suffix {
  padding-top: 2px;
}
.q-textarea.disabled .q-field__native,
body.mobile .q-textarea .q-field__native {
  resize: none;
}
.q-intersection {
  position: relative;
}
.q-item {
  min-height: 48px;
  padding: 8px 16px;
  color: inherit;
  transition: color 0.3s, background-color 0.3s;
}
.q-item__section--side {
  color: #757575;
  align-items: flex-start;
  padding-right: 16px;
  width: auto;
  min-width: 0;
  max-width: 100%;
}
.q-item__section--side > .q-icon {
  font-size: 24px;
}
.q-item__section--side > .q-avatar {
  font-size: 40px;
}
.q-item__section--avatar {
  color: inherit;
  min-width: 56px;
}
.q-item__section--thumbnail img {
  width: 100px;
  height: 56px;
}
.q-item__section--nowrap {
  white-space: nowrap;
}
.q-item > .q-focus-helper + .q-item__section--thumbnail,
.q-item > .q-item__section--thumbnail:first-child {
  margin-left: -16px;
}
.q-item > .q-item__section--thumbnail:last-of-type {
  margin-right: -16px;
}
.q-item__label {
  line-height: 1.2em !important;
  max-width: 100%;
}
.q-item__label--overline {
  color: rgba(0, 0, 0, 0.7);
}
.q-item__label--caption {
  color: rgba(0, 0, 0, 0.54);
}
.q-item__label--header {
  color: #757575;
  padding: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.01786em;
}
.q-list--padding .q-item__label--header,
.q-separator--spaced + .q-item__label--header {
  padding-top: 8px;
}
.q-item__label + .q-item__label {
  margin-top: 4px;
}
.q-item__section--main {
  width: auto;
  min-width: 0;
  max-width: 100%;
  flex: 10000 1 0%;
}
.q-item__section--main + .q-item__section--main {
  margin-left: 8px;
}
.q-item__section--main ~ .q-item__section--side {
  align-items: flex-end;
  padding-right: 0;
  padding-left: 16px;
}
.q-item__section--main.q-item__section--thumbnail {
  margin-left: 0;
  margin-right: -16px;
}
.q-list--bordered {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-list--separator > .q-item-type + .q-item-type,
.q-list--separator > .q-virtual-scroll__content > .q-item-type + .q-item-type {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.q-list--padding {
  padding: 8px 0;
}
.q-item--dense,
.q-list--dense > .q-item {
  min-height: 32px;
  padding: 2px 16px;
}
.q-list--dark.q-list--separator > .q-item-type + .q-item-type,
.q-list--dark.q-list--separator
  > .q-virtual-scroll__content
  > .q-item-type
  + .q-item-type {
  border-top-color: hsla(0, 0%, 100%, 0.28);
}
.q-item--dark,
.q-list--dark {
  color: #fff;
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-item--dark .q-item__section--side:not(.q-item__section--avatar),
.q-list--dark .q-item__section--side:not(.q-item__section--avatar) {
  color: hsla(0, 0%, 100%, 0.7);
}
.q-item--dark .q-item__label--header,
.q-list--dark .q-item__label--header {
  color: hsla(0, 0%, 100%, 0.64);
}
.q-item--dark .q-item__label--caption,
.q-item--dark .q-item__label--overline,
.q-list--dark .q-item__label--caption,
.q-list--dark .q-item__label--overline {
  color: hsla(0, 0%, 100%, 0.8);
}
.q-item {
  position: relative;
}
.q-item--active,
.q-item.q-router-link--active {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-knob {
  font-size: 48px;
}
.q-knob--editable {
  cursor: pointer;
  outline: 0;
}
.q-knob--editable:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: none;
  transition: box-shadow 0.24s ease-in-out;
}
.q-knob--editable:focus:before {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14),
    0 1px 10px rgba(0, 0, 0, 0.12);
}
.q-layout {
  width: 100%;
}
.q-layout-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.q-layout-container .q-layout {
  min-height: 100%;
}
.q-layout-container > div {
  transform: translate3d(0, 0, 0);
}
.q-layout-container > div > div {
  min-height: 0;
  max-height: 100%;
}
.q-layout__shadow {
  width: 100%;
}
.q-layout__shadow:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0px 10px rgba(0, 0, 0, 0.24);
}
.q-layout__section--marginal {
  background-color: #1976d2;
  background-color: var(--q-color-primary);
  color: #fff;
}
.q-header--hidden {
  transform: translateY(-110%);
}
.q-header--bordered {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.q-header .q-layout__shadow {
  bottom: -10px;
}
.q-header .q-layout__shadow:after {
  bottom: 10px;
}
.q-footer--hidden {
  transform: translateY(110%);
}
.q-footer--bordered {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.q-footer .q-layout__shadow {
  top: -10px;
}
.q-footer .q-layout__shadow:after {
  top: 10px;
}
.q-footer,
.q-header {
  z-index: 2000;
}
.q-drawer {
  position: absolute;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
}
.q-drawer--on-top {
  z-index: 3000;
}
.q-drawer--left {
  left: 0;
  transform: translateX(-100%);
}
.q-drawer--left.q-drawer--bordered {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.q-drawer--left .q-layout__shadow {
  left: 10px;
  right: -10px;
}
.q-drawer--left .q-layout__shadow:after {
  right: 10px;
}
.q-drawer--right {
  right: 0;
  transform: translateX(100%);
}
.q-drawer--right.q-drawer--bordered {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.q-drawer--right .q-layout__shadow {
  left: -10px;
}
.q-drawer--right .q-layout__shadow:after {
  left: 10px;
}
.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini {
  padding: 0 !important;
}
.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini .q-item,
.q-drawer-container:not(.q-drawer--mini-animate)
  .q-drawer--mini
  .q-item__section {
  text-align: center;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
  min-width: 0;
}
.q-drawer--mini .q-expansion-item__content,
.q-drawer--mini .q-mini-drawer-hide,
.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini .q-item__label,
.q-drawer-container:not(.q-drawer--mini-animate)
  .q-drawer--mini
  .q-item__section--main,
.q-drawer-container:not(.q-drawer--mini-animate)
  .q-drawer--mini
  .q-item__section--side
  ~ .q-item__section--side {
  display: none;
}
.q-drawer--mini-animate .q-drawer__content {
  overflow-x: hidden;
  white-space: nowrap;
}
.q-drawer--mobile .q-mini-drawer-hide,
.q-drawer--mobile .q-mini-drawer-only,
.q-drawer--standard .q-mini-drawer-only {
  display: none;
}
.q-drawer__backdrop {
  z-index: 2999 !important;
  will-change: background-color;
}
.q-drawer__opener {
  z-index: 2001;
  height: 100%;
  width: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.q-footer,
.q-header,
.q-layout,
.q-page {
  position: relative;
}
.q-page-sticky--shrink {
  pointer-events: none;
}
.q-page-sticky--shrink > div {
  display: inline-block;
  pointer-events: auto;
}
body.q-ios-padding
  .q-layout--standard
  .q-drawer--top-padding
  .q-drawer__content,
body.q-ios-padding
  .q-layout--standard
  .q-header
  > .q-tabs:first-child
  .q-tabs-head,
body.q-ios-padding .q-layout--standard .q-header > .q-toolbar:first-child {
  padding-top: 20px;
  min-height: 70px;
  padding-top: env(safe-area-inset-top);
  min-height: calc(env(safe-area-inset-top) + 50px);
}
body.q-ios-padding
  .q-layout--standard
  .q-drawer--top-padding
  .q-drawer__content,
body.q-ios-padding
  .q-layout--standard
  .q-footer
  > .q-tabs:last-child
  .q-tabs-head,
body.q-ios-padding .q-layout--standard .q-footer > .q-toolbar:last-child {
  padding-bottom: env(safe-area-inset-bottom);
  min-height: calc(env(safe-area-inset-bottom) + 50px);
}
.q-body--layout-animate .q-drawer__backdrop {
  transition: background-color 0.12s !important;
}
.q-body--layout-animate .q-drawer {
  transition: transform 0.12s, width 0.12s, top 0.12s, bottom 0.12s !important;
}
.q-body--layout-animate .q-layout__section--marginal {
  transition: transform 0.12s, left 0.12s, right 0.12s !important;
}
.q-body--layout-animate .q-page-container {
  transition: padding-top 0.12s, padding-right 0.12s, padding-bottom 0.12s,
    padding-left 0.12s !important;
}
.q-body--layout-animate .q-page-sticky {
  transition: transform 0.12s, left 0.12s, right 0.12s, top 0.12s, bottom 0.12s !important;
}
body:not(.q-body--layout-animate) .q-layout--prevent-focus {
  visibility: hidden;
}
.q-body--drawer-toggle {
  overflow-x: hidden !important;
}
@media (max-width: 599px) {
  .q-layout-padding {
    padding: 8px;
  }
}
@media (min-width: 600px) and (max-width: 1439px) {
  .q-layout-padding {
    padding: 16px;
  }
}
@media (min-width: 1440px) {
  .q-layout-padding {
    padding: 24px;
  }
}
body.body--dark .q-drawer,
body.body--dark .q-footer,
body.body--dark .q-header {
  border-color: hsla(0, 0%, 100%, 0.28);
}
body.platform-ios .q-layout--containerized {
  position: unset !important;
}
.q-linear-progress {
  position: relative;
  width: 100%;
  overflow: hidden;
  font-size: 4px;
  height: 1em;
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-linear-progress__model,
.q-linear-progress__track {
  transform-origin: 0 0;
}
.q-linear-progress__model--with-transition,
.q-linear-progress__track--with-transition {
  transition: transform 0.3s;
}
.q-linear-progress--reverse .q-linear-progress__model,
.q-linear-progress--reverse .q-linear-progress__track {
  transform-origin: 0 100%;
}
.q-linear-progress__model--determinate {
  background: currentColor;
}
.q-linear-progress__model--indeterminate,
.q-linear-progress__model--query {
  transition: none;
}
.q-linear-progress__model--indeterminate:after,
.q-linear-progress__model--indeterminate:before,
.q-linear-progress__model--query:after,
.q-linear-progress__model--query:before {
  background: currentColor;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: 0 0;
}
.q-linear-progress__model--indeterminate:before,
.q-linear-progress__model--query:before {
  -webkit-animation: q-linear-progress--indeterminate 2.1s
    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  animation: q-linear-progress--indeterminate 2.1s
    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.q-linear-progress__model--indeterminate:after,
.q-linear-progress__model--query:after {
  transform: translate3d(-101%, 0, 0) scale3d(1, 1, 1);
  -webkit-animation: q-linear-progress--indeterminate-short 2.1s
    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation: q-linear-progress--indeterminate-short 2.1s
    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  -webkit-animation-delay: 1.15s;
  animation-delay: 1.15s;
}
.q-linear-progress__track {
  opacity: 0.4;
}
.q-linear-progress__track--light {
  background: rgba(0, 0, 0, 0.26);
}
.q-linear-progress__track--dark {
  background: hsla(0, 0%, 100%, 0.6);
}
.q-linear-progress__stripe {
  transition: width 0.3s;
  background-image: linear-gradient(
    45deg,
    hsla(0, 0%, 100%, 0.15) 25%,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0) 50%,
    hsla(0, 0%, 100%, 0.15) 0,
    hsla(0, 0%, 100%, 0.15) 75%,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0)
  ) !important;
  background-size: 40px 40px !important;
}
.q-menu {
  position: fixed !important;
  display: inline-block;
  max-width: 95vw;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  outline: 0;
  max-height: 65vh;
  z-index: 6000;
}
.q-menu--square {
  border-radius: 0;
}
.q-option-group--inline > div {
  display: inline-block;
}
.q-pagination input {
  text-align: center;
  -moz-appearance: textfield;
}
.q-pagination input::-webkit-inner-spin-button,
.q-pagination input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.q-parallax {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: inherit;
}
.q-parallax__media > img,
.q-parallax__media > video {
  position: absolute;
  left: 50%;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  will-change: transform;
  display: none;
}
.q-popup-edit {
  padding: 8px 16px;
}
.q-popup-edit__buttons {
  margin-top: 8px;
}
.q-popup-edit__buttons .q-btn + .q-btn {
  margin-left: 8px;
}
.q-pull-to-refresh {
  position: relative;
}
.q-pull-to-refresh__puller {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #1976d2;
  color: var(--q-color-primary);
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
.q-pull-to-refresh__puller--animating {
  transition: transform 0.3s, opacity 0.3s;
}
.q-radio {
  vertical-align: middle;
}
.q-radio__bg {
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
}
.q-radio__bg path {
  fill: currentColor;
}
.q-radio__native {
  width: 1px;
  height: 1px;
}
.q-radio__check {
  transform-origin: 50% 50%;
  transform: scale3d(0, 0, 1);
  transition: transform 0.22s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.q-radio__inner {
  font-size: 40px;
  width: 1em;
  min-width: 1em;
  height: 1em;
  outline: 0;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.54);
}
.q-radio__inner--truthy {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-radio__inner--truthy .q-radio__check {
  transform: scale3d(1, 1, 1);
}
.q-radio.disabled {
  opacity: 0.75 !important;
}
.q-radio--dark .q-radio__inner {
  color: hsla(0, 0%, 100%, 0.7);
}
.q-radio--dark .q-radio__inner:before {
  opacity: 0.32 !important;
}
.q-radio--dark .q-radio__inner--truthy {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-radio--dense .q-radio__inner {
  width: 0.5em;
  min-width: 0.5em;
  height: 0.5em;
}
.q-radio--dense .q-radio__bg {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.q-radio--dense .q-radio__label {
  padding-left: 0.5em;
}
.q-radio--dense.reverse .q-radio__label {
  padding-left: 0;
  padding-right: 0.5em;
}
body.desktop .q-radio:not(.disabled) .q-radio__inner:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.12;
  transform: scale3d(0, 0, 1);
  transition: transform 0.22s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
body.desktop .q-radio:not(.disabled):focus .q-radio__inner:before,
body.desktop .q-radio:not(.disabled):hover .q-radio__inner:before {
  transform: scale3d(1, 1, 1);
}
body.desktop .q-radio--dense:not(.disabled):focus .q-radio__inner:before,
body.desktop .q-radio--dense:not(.disabled):hover .q-radio__inner:before {
  transform: scale3d(1.5, 1.5, 1);
}
.q-rating {
  color: #ffeb3b;
  vertical-align: middle;
}
.q-rating__icon {
  color: currentColor;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  opacity: 0.4;
  transition: transform 0.2s ease-in, opacity 0.2s ease-in;
}
.q-rating__icon--hovered {
  transform: scale(1.3);
}
.q-rating__icon--active {
  opacity: 1;
}
.q-rating__icon--exselected {
  opacity: 0.7;
}
.q-rating__icon + .q-rating__icon {
  margin-left: 2px;
}
.q-rating--no-dimming .q-rating__icon {
  opacity: 1;
}
.q-rating--editable .q-icon {
  cursor: pointer;
}
.q-rating--non-editable span,
.q-rating .q-icon {
  outline: 0;
}
.q-responsive {
  position: relative;
  max-width: 100%;
  max-height: 100%;
}
.q-responsive__filler {
  width: inherit;
  max-width: inherit;
  height: inherit;
  max-height: inherit;
}
.q-responsive__content {
  border-radius: inherit;
}
.q-responsive__content > * {
  width: 100% !important;
  height: 100% !important;
  max-height: 100% !important;
  max-width: 100% !important;
}
.q-scrollarea {
  position: relative;
}
.q-scrollarea__bar,
.q-scrollarea__thumb {
  opacity: 0.2;
  transition: opacity 0.3s;
  will-change: opacity;
  cursor: -webkit-grab;
  cursor: grab;
}
.q-scrollarea__bar--v,
.q-scrollarea__thumb--v {
  right: 0;
  width: 10px;
}
.q-scrollarea__bar--h,
.q-scrollarea__thumb--h {
  bottom: 0;
  height: 10px;
}
.q-scrollarea__bar--invisible,
.q-scrollarea__thumb--invisible {
  opacity: 0 !important;
  pointer-events: none;
}
.q-scrollarea__thumb {
  background: #000;
}
.q-scrollarea__thumb:hover {
  opacity: 0.3;
}
.q-scrollarea__thumb:active {
  opacity: 0.5;
}
.q-scrollarea--dark .q-scrollarea__thumb {
  background: #fff;
}
.q-select--without-input .q-field__control {
  cursor: pointer;
}
.q-select--with-input .q-field__control {
  cursor: text;
}
.q-select .q-field__input {
  min-width: 50px !important;
}
.q-select .q-field__input--padding {
  padding-left: 4px;
}
.q-select__autocomplete-input {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  opacity: 0;
}
.q-select__dropdown-icon {
  cursor: pointer;
  transition: transform 0.28s;
}
.q-select.q-field--readonly .q-field__control,
.q-select.q-field--readonly .q-select__dropdown-icon {
  cursor: default;
}
.q-select__dialog {
  width: 90vw !important;
  max-width: 90vw !important;
  max-height: calc(100vh - 70px) !important;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.q-select__dialog > .scroll {
  position: relative;
  background: inherit;
}
body.mobile:not(.native-mobile) .q-select__dialog {
  max-height: calc(100vh - 108px) !important;
}
body.platform-android.native-mobile .q-dialog__inner--top .q-select__dialog {
  max-height: calc(100vh - 24px) !important;
}
body.platform-android:not(.native-mobile)
  .q-dialog__inner--top
  .q-select__dialog {
  max-height: calc(100vh - 80px) !important;
}
body.platform-ios.native-mobile .q-dialog__inner--top > div {
  border-radius: 4px;
}
body.platform-ios.native-mobile
  .q-dialog__inner--top
  .q-select__dialog--focused {
  max-height: 47vh !important;
}
body.platform-ios:not(.native-mobile)
  .q-dialog__inner--top
  .q-select__dialog--focused {
  max-height: 50vh !important;
}
.q-separator {
  border: 0;
  background: rgba(0, 0, 0, 0.12);
  margin: 0;
  transition: background 0.3s, opacity 0.3s;
  flex-shrink: 0;
}
.q-separator--dark {
  background: hsla(0, 0%, 100%, 0.28);
}
.q-separator--horizontal {
  display: block;
  height: 1px;
}
.q-separator--horizontal-inset {
  margin-left: 16px;
  margin-right: 16px;
}
.q-separator--horizontal-item-inset {
  margin-left: 72px;
  margin-right: 0;
}
.q-separator--horizontal-item-thumbnail-inset {
  margin-left: 116px;
  margin-right: 0;
}
.q-separator--vertical {
  width: 1px;
  height: auto;
  align-self: stretch;
}
.q-separator--vertical-inset {
  margin-top: 8px;
  margin-bottom: 8px;
}
.q-skeleton {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-sizing: border-box;
}
.q-skeleton--anim {
  cursor: wait;
}
.q-skeleton:before {
  content: '\00a0';
}
.q-skeleton--type-text {
  transform: scale(1, 0.5);
}
.q-skeleton--type-circle,
.q-skeleton--type-QAvatar {
  height: 48px;
  width: 48px;
  border-radius: 50%;
}
.q-skeleton--type-QBtn {
  width: 90px;
  height: 36px;
}
.q-skeleton--type-QBadge {
  width: 70px;
  height: 16px;
}
.q-skeleton--type-QChip {
  width: 90px;
  height: 28px;
  border-radius: 16px;
}
.q-skeleton--type-QToolbar {
  height: 50px;
}
.q-skeleton--type-QCheckbox,
.q-skeleton--type-QRadio {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.q-skeleton--type-QToggle {
  width: 56px;
  height: 40px;
  border-radius: 7px;
}
.q-skeleton--type-QRange,
.q-skeleton--type-QSlider {
  height: 40px;
}
.q-skeleton--type-QInput {
  height: 56px;
}
.q-skeleton--bordered {
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.q-skeleton--square {
  border-radius: 0;
}
.q-skeleton--anim-fade {
  -webkit-animation: q-skeleton--fade 1.5s linear 0.5s infinite;
  animation: q-skeleton--fade 1.5s linear 0.5s infinite;
}
.q-skeleton--anim-pulse {
  -webkit-animation: q-skeleton--pulse 1.5s ease-in-out 0.5s infinite;
  animation: q-skeleton--pulse 1.5s ease-in-out 0.5s infinite;
}
.q-skeleton--anim-pulse-x {
  -webkit-animation: q-skeleton--pulse-x 1.5s ease-in-out 0.5s infinite;
  animation: q-skeleton--pulse-x 1.5s ease-in-out 0.5s infinite;
}
.q-skeleton--anim-pulse-y {
  -webkit-animation: q-skeleton--pulse-y 1.5s ease-in-out 0.5s infinite;
  animation: q-skeleton--pulse-y 1.5s ease-in-out 0.5s infinite;
}
.q-skeleton--anim-blink,
.q-skeleton--anim-pop,
.q-skeleton--anim-wave {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.q-skeleton--anim-blink:after,
.q-skeleton--anim-pop:after,
.q-skeleton--anim-wave:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}
.q-skeleton--anim-blink:after {
  background: hsla(0, 0%, 100%, 0.7);
  -webkit-animation: q-skeleton--fade 1.5s linear 0.5s infinite;
  animation: q-skeleton--fade 1.5s linear 0.5s infinite;
}
.q-skeleton--anim-wave:after {
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.5),
    hsla(0, 0%, 100%, 0)
  );
  -webkit-animation: q-skeleton--wave 1.5s linear 0.5s infinite;
  animation: q-skeleton--wave 1.5s linear 0.5s infinite;
}
.q-skeleton--dark {
  background: hsla(0, 0%, 100%, 0.05);
}
.q-skeleton--dark.q-skeleton--bordered {
  border: 1px solid hsla(0, 0%, 100%, 0.25);
}
.q-skeleton--dark.q-skeleton--anim-wave:after {
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.1),
    hsla(0, 0%, 100%, 0)
  );
}
.q-skeleton--dark.q-skeleton--anim-blink:after {
  background: hsla(0, 0%, 100%, 0.2);
}
.q-slide-item {
  position: relative;
  background: #fff;
}
.q-slide-item__bottom,
.q-slide-item__left,
.q-slide-item__right,
.q-slide-item__top {
  visibility: hidden;
  font-size: 14px;
  color: #fff;
}
.q-slide-item__bottom .q-icon,
.q-slide-item__left .q-icon,
.q-slide-item__right .q-icon,
.q-slide-item__top .q-icon {
  font-size: 1.714em;
}
.q-slide-item__left {
  background: #4caf50;
  padding: 8px 16px;
}
.q-slide-item__left > div {
  transform-origin: left center;
}
.q-slide-item__right {
  background: #ff9800;
  padding: 8px 16px;
}
.q-slide-item__right > div {
  transform-origin: right center;
}
.q-slide-item__top {
  background: #2196f3;
  padding: 16px 8px;
}
.q-slide-item__top > div {
  transform-origin: top center;
}
.q-slide-item__bottom {
  background: #9c27b0;
  padding: 16px 8px;
}
.q-slide-item__bottom > div {
  transform-origin: bottom center;
}
.q-slide-item__content {
  background: inherit;
  transition: transform 0.2s ease-in;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
.q-slider {
  position: relative;
  color: #1976d2;
  color: var(--q-color-primary);
  outline: 0;
}
.q-slider--h {
  width: 100%;
  height: 40px;
}
.q-slider--v {
  width: 40px;
  height: 200px;
}
.q-slider__track-container {
  background: rgba(0, 0, 0, 0.26);
}
.q-slider__track-container--h {
  top: 50%;
  margin-top: -1px;
  width: 100%;
  height: 2px;
}
.q-slider__track-container--v {
  left: 50%;
  margin-left: -1px;
  height: 100%;
  width: 2px;
}
.q-slider__track {
  background: currentColor;
}
.q-slider__track--h {
  will-change: width, left;
  top: 0;
  bottom: 0;
}
.q-slider__track--v {
  will-change: height, top;
  left: 0;
  right: 0;
}
.q-slider__track-markers {
  color: #000;
}
.q-slider__track-markers--h {
  background-image: repeating-linear-gradient(
    90deg,
    currentColor,
    currentColor 2px,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0)
  );
}
.q-slider__track-markers--v {
  background-image: repeating-linear-gradient(
    0deg,
    currentColor,
    currentColor 2px,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0)
  );
}
.q-slider__track-markers:after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 2px;
  width: 2px;
  background: currentColor;
}
.q-slider__thumb-container {
  width: 20px;
  height: 20px;
  outline: 0;
}
.q-slider__thumb-container--h {
  top: 50%;
  margin-top: -10px;
  transform: translateX(-10px);
  will-change: left;
}
.q-slider__thumb-container--v {
  left: 50%;
  margin-left: -10px;
  transform: translateY(-10px);
  will-change: top;
}
.q-slider__thumb {
  top: 0;
  left: 0;
  transform: scale(1);
  transition: transform 0.18s ease-out, fill 0.18s ease-out,
    stroke 0.18s ease-out;
  stroke-width: 3.5;
  stroke: currentColor;
}
.q-slider__thumb path {
  stroke: currentColor;
  fill: currentColor;
}
.q-slider__focus-ring {
  width: 20px;
  height: 20px;
  transition: transform 266.67ms ease-out, opacity 266.67ms ease-out,
    background-color 266.67ms ease-out;
  border-radius: 50%;
  opacity: 0;
  transition-delay: 0.14s;
}
.q-slider__arrow {
  position: absolute;
  width: 0;
  height: 0;
  transform-origin: 50% 50%;
  transition: transform 100ms ease-out;
}
.q-slider__arrow--h {
  top: 19px;
  left: 4px;
  border-top: 6px solid currentColor;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  transform: scale(0) translateY(0);
}
.q-slider__arrow--v {
  top: 4px;
  left: 15px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid currentColor;
  transform: scale(0) translateX(-20px);
}
.q-slider__pin {
  transition: transform 100ms ease-out;
  z-index: 1;
  white-space: nowrap;
}
.q-slider__pin--h {
  bottom: 0;
  right: 0;
  transform: scale(0) translateY(0);
  will-change: left;
}
.q-slider__pin--v {
  top: 50%;
  left: 20px;
  height: 0;
  transform: scale(0) translateX(-20px);
  will-change: top;
  transform-origin: left center;
}
.q-slider__pin-text-container {
  min-height: 25px;
  padding: 2px 8px;
  border-radius: 4px;
  background: currentColor;
  position: relative;
  text-align: center;
}
.q-slider__pin-text-container--h {
  right: -50%;
}
.q-slider__pin-text-container--v {
  transform: translateY(-50%);
}
.q-slider__pin-text {
  color: #fff;
  font-size: 12px;
}
.q-slider--editable {
  cursor: -webkit-grab;
  cursor: grab;
}
.q-slider--no-value .q-slider__thumb,
.q-slider--no-value .q-slider__track {
  visibility: hidden;
}
.q-slider--focus .q-slider__thumb {
  transform: scale(1);
}
.q-slider--focus .q-slider__focus-ring,
body.desktop .q-slider.q-slider--editable:hover .q-slider__focus-ring {
  background: currentColor;
  transform: scale3d(1.55, 1.55, 1);
  opacity: 0.25;
}
.q-slider--focus .q-slider__thumb,
.q-slider--focus .q-slider__track,
body.desktop .q-slider.q-slider--editable:hover .q-slider__thumb,
body.desktop .q-slider.q-slider--editable:hover .q-slider__track {
  visibility: visible;
}
.q-slider--inactive .q-slider__thumb-container--h {
  transition: left 0.28s, right 0.28s;
}
.q-slider--inactive .q-slider__thumb-container--v {
  transition: top 0.28s, bottom 0.28s;
}
.q-slider--inactive .q-slider__track--h {
  transition: width 0.28s, left 0.28s, right 0.28s;
}
.q-slider--inactive .q-slider__track--v {
  transition: height 0.28s, top 0.28s, bottom 0.28s;
}
.q-slider--active {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
.q-slider--active .q-slider__thumb {
  transform: scale(1.5);
}
.q-slider--active.q-slider--label .q-slider__thumb,
.q-slider--active .q-slider__focus-ring {
  transform: scale(0) !important;
}
body.desktop .q-slider.q-slider--enabled:hover .q-slider__arrow--h,
body.desktop .q-slider.q-slider--enabled:hover .q-slider__pin--h {
  transform: scale(1) translateY(-25px);
}
body.desktop .q-slider.q-slider--enabled:hover .q-slider__arrow--v,
body.desktop .q-slider.q-slider--enabled:hover .q-slider__pin--v {
  transform: scale(1) translateX(5px);
}
.q-slider--label.q-slider--active .q-slider__arrow--h,
.q-slider--label.q-slider--active .q-slider__pin--h,
.q-slider--label .q-slider--focus .q-slider__arrow--h,
.q-slider--label .q-slider--focus .q-slider__pin--h,
.q-slider--label.q-slider--label-always .q-slider__arrow--h,
.q-slider--label.q-slider--label-always .q-slider__pin--h {
  transform: scale(1) translateY(-25px);
}
.q-slider--label.q-slider--active .q-slider__arrow--v,
.q-slider--label.q-slider--active .q-slider__pin--v,
.q-slider--label .q-slider--focus .q-slider__arrow--v,
.q-slider--label .q-slider--focus .q-slider__pin--v,
.q-slider--label.q-slider--label-always .q-slider__arrow--v,
.q-slider--label.q-slider--label-always .q-slider__pin--v {
  transform: scale(1) translateX(5px);
}
.q-slider--dark .q-slider__track-container {
  background: hsla(0, 0%, 100%, 0.3);
}
.q-slider--dark .q-slider__track-markers {
  color: #fff;
}
.q-slider--reversed .q-slider__thumb-container--h {
  transform: translateX(10px);
}
.q-slider--reversed .q-slider__thumb-container--v {
  transform: translateY(10px);
}
.q-slider--dense--h {
  height: 20px;
}
.q-slider--dense--v {
  width: 20px;
}
.q-space {
  flex-grow: 1 !important;
}
.q-spinner {
  vertical-align: middle;
}
.q-spinner-mat {
  -webkit-animation: q-spin 2s linear infinite;
  animation: q-spin 2s linear infinite;
  transform-origin: center center;
}
.q-spinner-mat .path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  -webkit-animation: q-mat-dash 1.5s ease-in-out infinite;
  animation: q-mat-dash 1.5s ease-in-out infinite;
}
.q-splitter__panel {
  position: relative;
  z-index: 0;
}
.q-splitter__panel > .q-splitter {
  width: 100%;
  height: 100%;
}
.q-splitter__separator {
  background-color: rgba(0, 0, 0, 0.12);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  z-index: 1;
}
.q-splitter__separator-area > * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.q-splitter--dark .q-splitter__separator {
  background-color: hsla(0, 0%, 100%, 0.28);
}
.q-splitter--vertical > .q-splitter__panel {
  height: 100%;
}
.q-splitter--vertical.q-splitter--active {
  cursor: col-resize;
}
.q-splitter--vertical > .q-splitter__separator {
  width: 1px;
}
.q-splitter--vertical > .q-splitter__separator > div {
  left: -6px;
  right: -6px;
}
.q-splitter--vertical.q-splitter--workable > .q-splitter__separator {
  cursor: col-resize;
}
.q-splitter--horizontal > .q-splitter__panel {
  width: 100%;
}
.q-splitter--horizontal.q-splitter--active {
  cursor: row-resize;
}
.q-splitter--horizontal > .q-splitter__separator {
  height: 1px;
}
.q-splitter--horizontal > .q-splitter__separator > div {
  top: -6px;
  bottom: -6px;
}
.q-splitter--horizontal.q-splitter--workable > .q-splitter__separator {
  cursor: row-resize;
}
.q-splitter__after,
.q-splitter__before {
  overflow: auto;
}
.q-stepper {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: #fff;
}
.q-stepper__title {
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
}
.q-stepper__caption {
  font-size: 12px;
  line-height: 14px;
}
.q-stepper__dot {
  margin-right: 8px;
  font-size: 14px;
  width: 24px;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  background: currentColor;
}
.q-stepper__dot span {
  color: #fff;
}
.q-stepper__tab {
  padding: 8px 24px;
  font-size: 14px;
  color: #9e9e9e;
  flex-direction: row;
}
.q-stepper--dark .q-stepper__dot span {
  color: #000;
}
.q-stepper__tab--navigation {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
.q-stepper__tab--active,
.q-stepper__tab--done {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-stepper__tab--active .q-stepper__dot,
.q-stepper__tab--active .q-stepper__label,
.q-stepper__tab--done .q-stepper__dot,
.q-stepper__tab--done .q-stepper__label {
  text-shadow: 0 0 0 currentColor;
}
.q-stepper__tab--disabled .q-stepper__dot {
  background: rgba(0, 0, 0, 0.22);
}
.q-stepper__tab--disabled .q-stepper__label {
  color: rgba(0, 0, 0, 0.32);
}
.q-stepper__tab--error {
  color: #c10015;
  color: var(--q-color-negative);
}
.q-stepper__tab--error .q-stepper__dot {
  background: transparent !important;
}
.q-stepper__tab--error .q-stepper__dot span {
  color: currentColor;
  font-size: 24px;
}
.q-stepper__header {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.q-stepper__header--border {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.q-stepper__header--standard-labels .q-stepper__tab {
  min-height: 72px;
  justify-content: center;
}
.q-stepper__header--standard-labels .q-stepper__tab:first-child {
  justify-content: flex-start;
}
.q-stepper__header--standard-labels .q-stepper__tab:last-child {
  justify-content: flex-end;
}
.q-stepper__header--standard-labels .q-stepper__dot:after {
  display: none;
}
.q-stepper__header--alternative-labels .q-stepper__tab {
  min-height: 104px;
  padding: 24px 32px;
  flex-direction: column;
  justify-content: flex-start;
}
.q-stepper__header--alternative-labels .q-stepper__dot {
  margin-right: 0;
}
.q-stepper__header--alternative-labels .q-stepper__label {
  margin-top: 8px;
  text-align: center;
}
.q-stepper__header--alternative-labels .q-stepper__label:after,
.q-stepper__header--alternative-labels .q-stepper__label:before {
  display: none;
}
.q-stepper__nav {
  padding-top: 24px;
}
.q-stepper--bordered {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-stepper--horizontal .q-stepper__step-inner {
  padding: 24px;
}
.q-stepper--horizontal .q-stepper__tab:first-child {
  border-top-left-radius: inherit;
}
.q-stepper--horizontal .q-stepper__tab:last-child {
  border-top-right-radius: inherit;
}
.q-stepper--horizontal .q-stepper__tab:first-child .q-stepper__dot:before,
.q-stepper--horizontal .q-stepper__tab:last-child .q-stepper__dot:after,
.q-stepper--horizontal .q-stepper__tab:last-child .q-stepper__label:after {
  display: none;
}
.q-stepper--horizontal .q-stepper__tab {
  overflow: hidden;
}
.q-stepper--horizontal .q-stepper__line:after,
.q-stepper--horizontal .q-stepper__line:before {
  position: absolute;
  top: 50%;
  height: 1px;
  width: 100vw;
  background: rgba(0, 0, 0, 0.12);
}
.q-stepper--horizontal .q-stepper__dot:after,
.q-stepper--horizontal .q-stepper__label:after {
  content: '';
  left: 100%;
  margin-left: 8px;
}
.q-stepper--horizontal .q-stepper__dot:before {
  content: '';
  right: 100%;
  margin-right: 8px;
}
.q-stepper--horizontal > .q-stepper__nav {
  padding: 0 24px 24px;
}
.q-stepper--vertical {
  padding: 16px 0;
}
.q-stepper--vertical .q-stepper__tab {
  padding: 12px 24px;
}
.q-stepper--vertical .q-stepper__title {
  line-height: 18px;
}
.q-stepper--vertical .q-stepper__step-inner {
  padding: 0 24px 32px 60px;
}
.q-stepper--vertical > .q-stepper__nav {
  padding: 24px 24px 0;
}
.q-stepper--vertical .q-stepper__step {
  overflow: hidden;
}
.q-stepper--vertical .q-stepper__dot {
  margin-right: 12px;
}
.q-stepper--vertical .q-stepper__dot:after,
.q-stepper--vertical .q-stepper__dot:before {
  content: '';
  position: absolute;
  left: 50%;
  width: 1px;
  height: 99999px;
  background: rgba(0, 0, 0, 0.12);
}
.q-stepper--vertical .q-stepper__dot:before {
  bottom: 100%;
  margin-bottom: 8px;
}
.q-stepper--vertical .q-stepper__dot:after {
  top: 100%;
  margin-top: 8px;
}
.q-stepper--vertical .q-stepper__step:first-child .q-stepper__dot:before,
.q-stepper--vertical .q-stepper__step:last-child .q-stepper__dot:after {
  display: none;
}
.q-stepper--vertical .q-stepper__step:last-child .q-stepper__step-inner {
  padding-bottom: 8px;
}
.q-stepper--dark.q-stepper--bordered,
.q-stepper--dark .q-stepper__header--border {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-stepper--dark.q-stepper--horizontal .q-stepper__line:after,
.q-stepper--dark.q-stepper--horizontal .q-stepper__line:before,
.q-stepper--dark.q-stepper--vertical .q-stepper__dot:after,
.q-stepper--dark.q-stepper--vertical .q-stepper__dot:before {
  background: hsla(0, 0%, 100%, 0.28);
}
.q-stepper--dark .q-stepper__tab--disabled {
  color: hsla(0, 0%, 100%, 0.28);
}
.q-stepper--dark .q-stepper__tab--disabled .q-stepper__dot {
  background: hsla(0, 0%, 100%, 0.28);
}
.q-stepper--dark .q-stepper__tab--disabled .q-stepper__label {
  color: hsla(0, 0%, 100%, 0.54);
}
.q-stepper--contracted .q-stepper__header,
.q-stepper--contracted .q-stepper__header--alternative-labels .q-stepper__tab {
  min-height: 72px;
}
.q-stepper--contracted
  .q-stepper__header--alternative-labels
  .q-stepper__tab:first-child {
  align-items: flex-start;
}
.q-stepper--contracted
  .q-stepper__header--alternative-labels
  .q-stepper__tab:last-child {
  align-items: flex-end;
}
.q-stepper--contracted .q-stepper__header .q-stepper__tab {
  padding: 24px 0;
}
.q-stepper--contracted
  .q-stepper__header
  .q-stepper__tab:first-child
  .q-stepper__dot {
  transform: translateX(24px);
}
.q-stepper--contracted
  .q-stepper__header
  .q-stepper__tab:last-child
  .q-stepper__dot {
  transform: translateX(-24px);
}
.q-stepper--contracted .q-stepper__tab:not(:last-child) .q-stepper__dot:after {
  display: block !important;
}
.q-stepper--contracted .q-stepper__dot {
  margin: 0;
}
.q-stepper--contracted .q-stepper__label {
  display: none;
}
.q-tab-panels {
  background: #fff;
}
.q-tab-panel {
  padding: 16px;
}
.q-markup-table {
  overflow: auto;
  background: #fff;
}
.q-table {
  width: 100%;
  max-width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.q-table tbody td,
.q-table thead tr {
  height: 48px;
}
.q-table th {
  font-weight: 500;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.q-table th.sortable {
  cursor: pointer;
}
.q-table th.sortable:hover .q-table__sort-icon {
  opacity: 0.64;
}
.q-table th.sorted .q-table__sort-icon {
  opacity: 0.86 !important;
}
.q-table th.sort-desc .q-table__sort-icon {
  transform: rotate(180deg);
}
.q-table td,
.q-table th {
  padding: 7px 16px;
  background-color: inherit;
}
.q-table td,
.q-table th,
.q-table thead {
  border-style: solid;
  border-width: 0;
}
.q-table tbody td {
  font-size: 13px;
}
.q-table__card {
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
.q-table__card .q-table__middle {
  flex: 1 1 auto;
}
.q-table__card .q-table__bottom,
.q-table__card .q-table__top {
  flex: 0 0 auto;
}
.q-table__container {
  position: relative;
}
.q-table__container > div:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.q-table__container > div:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
.q-table__container > .q-inner-loading {
  border-radius: inherit !important;
}
.q-table__top {
  padding: 12px 16px;
}
.q-table__top .q-table__control {
  flex-wrap: wrap;
}
.q-table__title {
  font-size: 20px;
  letter-spacing: 0.005em;
  font-weight: 400;
}
.q-table__separator {
  min-width: 8px !important;
}
.q-table__progress {
  height: 0 !important;
}
.q-table__progress th {
  padding: 0 !important;
  border: 0 !important;
}
.q-table__progress .q-linear-progress {
  position: absolute;
  bottom: 0;
}
.q-table__middle {
  max-width: 100%;
}
.q-table__bottom {
  min-height: 50px;
  padding: 4px 14px 4px 16px;
  font-size: 12px;
}
.q-table__bottom .q-table__control {
  min-height: 24px;
}
.q-table__bottom-nodata-icon {
  font-size: 200%;
  margin-right: 8px;
}
.q-table__bottom-item {
  margin-right: 16px;
}
.q-table__control {
  display: flex;
  align-items: center;
}
.q-table__sort-icon {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  opacity: 0;
  font-size: 120%;
}
.q-table__sort-icon--center,
.q-table__sort-icon--left {
  margin-left: 4px;
}
.q-table__sort-icon--right {
  margin-right: 4px;
}
.q-table--col-auto-width {
  width: 1px;
}
.q-table--flat {
  box-shadow: none;
}
.q-table--bordered {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-table--square {
  border-radius: 0;
}
.q-table__linear-progress {
  height: 2px;
}
.q-table--no-wrap td,
.q-table--no-wrap th {
  white-space: nowrap;
}
.q-table--grid {
  box-shadow: none;
  border-radius: 4px;
}
.q-table--grid .q-table__top {
  padding-bottom: 4px;
}
.q-table--grid .q-table__middle {
  min-height: 2px;
  margin-bottom: 4px;
}
.q-table--grid .q-table__middle thead,
.q-table--grid .q-table__middle thead th {
  border: 0 !important;
}
.q-table--grid .q-table__linear-progress {
  bottom: 0;
}
.q-table--grid .q-table__bottom {
  border-top: 0;
}
.q-table--grid .q-table__grid-content {
  flex: 1 1 auto;
}
.q-table--grid.fullscreen {
  background: inherit;
}
.q-table__grid-item-card {
  vertical-align: top;
  padding: 12px;
}
.q-table__grid-item-card .q-separator {
  margin: 12px 0;
}
.q-table__grid-item-row + .q-table__grid-item-row {
  margin-top: 8px;
}
.q-table__grid-item-title {
  opacity: 0.54;
  font-weight: 500;
  font-size: 12px;
}
.q-table__grid-item-value {
  font-size: 13px;
}
.q-table__grid-item {
  padding: 4px;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.q-table__grid-item--selected {
  transform: scale(0.95);
}
.q-table--cell-separator tbody tr:not(:last-child) td,
.q-table--cell-separator thead th,
.q-table--horizontal-separator tbody tr:not(:last-child) td,
.q-table--horizontal-separator thead th {
  border-bottom-width: 1px;
}
.q-table--cell-separator td,
.q-table--cell-separator th,
.q-table--vertical-separator td,
.q-table--vertical-separator th {
  border-left-width: 1px;
}
.q-table--cell-separator.q-table--loading tr:nth-last-child(2) th,
.q-table--cell-separator thead tr:last-child th,
.q-table--vertical-separator.q-table--loading tr:nth-last-child(2) th,
.q-table--vertical-separator thead tr:last-child th {
  border-bottom-width: 1px;
}
.q-table--cell-separator td:first-child,
.q-table--cell-separator th:first-child,
.q-table--vertical-separator td:first-child,
.q-table--vertical-separator th:first-child {
  border-left: 0;
}
.q-table--cell-separator .q-table__top,
.q-table--vertical-separator .q-table__top {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.q-table--dense .q-table__top {
  padding: 6px 16px;
}
.q-table--dense .q-table__bottom {
  min-height: 33px;
}
.q-table--dense .q-table__sort-icon {
  font-size: 110%;
}
.q-table--dense .q-table td,
.q-table--dense .q-table th {
  padding: 4px 8px;
}
.q-table--dense .q-table tbody td,
.q-table--dense .q-table tbody tr,
.q-table--dense .q-table thead tr {
  height: 28px;
}
.q-table--dense .q-table td:first-child,
.q-table--dense .q-table th:first-child {
  padding-left: 16px;
}
.q-table--dense .q-table td:last-child,
.q-table--dense .q-table th:last-child {
  padding-right: 16px;
}
.q-table--dense .q-table__bottom-item {
  margin-right: 8px;
}
.q-table--dense .q-table__select .q-field__control,
.q-table--dense .q-table__select .q-field__native {
  min-height: 24px;
  padding: 0;
}
.q-table--dense .q-table__select .q-field__marginal {
  height: 24px;
}
.q-table__bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.q-table td,
.q-table th,
.q-table thead,
.q-table tr {
  border-color: rgba(0, 0, 0, 0.12);
}
.q-table tbody td {
  position: relative;
}
.q-table tbody td:after,
.q-table tbody td:before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
.q-table tbody td:before {
  background: rgba(0, 0, 0, 0.03);
}
.q-table tbody td:after {
  background: rgba(0, 0, 0, 0.06);
}
.q-table tbody tr.selected td:after,
body.desktop
  .q-table
  > tbody
  > tr:not(.q-tr--no-hover):hover
  > td:not(.q-td--no-hover):before {
  content: '';
}
.q-table--dark,
.q-table--dark .q-table__bottom,
.q-table--dark td,
.q-table--dark th,
.q-table--dark thead,
.q-table--dark tr,
.q-table__card--dark {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-table--dark tbody td:before {
  background: hsla(0, 0%, 100%, 0.07);
}
.q-table--dark tbody td:after {
  background: hsla(0, 0%, 100%, 0.1);
}
.q-table--dark.q-table--cell-separator .q-table__top,
.q-table--dark.q-table--vertical-separator .q-table__top {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-tab {
  padding: 0 16px;
  min-height: 48px;
  transition: color 0.3s, background-color 0.3s;
  text-transform: uppercase;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
}
.q-tab--full {
  min-height: 72px;
}
.q-tab--no-caps {
  text-transform: none;
}
.q-tab__content {
  height: inherit;
  padding: 4px 0;
  min-width: 40px;
}
.q-tab__content--inline .q-tab__icon + .q-tab__label {
  padding-left: 8px;
}
.q-tab__content .q-chip--floating {
  top: 0;
  right: -16px;
}
.q-tab__icon {
  width: 24px;
  height: 24px;
  font-size: 24px;
}
.q-tab__label {
  font-size: 14px;
  line-height: 1.715em;
  font-weight: 500;
}
.q-tab .q-badge {
  top: 3px;
  right: -12px;
}
.q-tab__alert,
.q-tab__alert-icon {
  position: absolute;
}
.q-tab__alert {
  top: 7px;
  right: -9px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: currentColor;
}
.q-tab__alert-icon {
  top: 2px;
  right: -12px;
  font-size: 18px;
}
.q-tab__indicator {
  opacity: 0;
  height: 2px;
  background: currentColor;
}
.q-tab--active .q-tab__indicator {
  opacity: 1;
  transform-origin: left;
}
.q-tab--inactive {
  opacity: 0.85;
}
.q-tabs {
  position: relative;
  transition: color 0.3s, background-color 0.3s;
}
.q-tabs--scrollable.q-tabs__arrows--outside.q-tabs--horizontal {
  padding-left: 36px;
  padding-right: 36px;
}
.q-tabs--scrollable.q-tabs__arrows--outside.q-tabs--vertical {
  padding-top: 36px;
  padding-bottom: 36px;
}
.q-tabs--scrollable.q-tabs__arrows--outside .q-tabs__arrow--faded {
  opacity: 0.3;
  pointer-events: none;
}
.q-tabs--not-scrollable .q-tabs__arrow,
.q-tabs--scrollable.q-tabs__arrows--inside .q-tabs__arrow--faded {
  display: none;
}
.q-tabs--not-scrollable .q-tabs__content {
  border-radius: inherit;
}
.q-tabs__arrow {
  cursor: pointer;
  font-size: 32px;
  min-width: 36px;
  text-shadow: 0 0 3px #fff, 0 0 1px #fff, 0 0 1px #000;
  transition: opacity 0.3s;
}
.q-tabs__content {
  overflow: hidden;
  flex: 1 1 auto;
}
.q-tabs__content--align-center {
  justify-content: center;
}
.q-tabs__content--align-right {
  justify-content: flex-end;
}
.q-tabs__content--align-justify .q-tab {
  flex: 1 1 auto;
}
.q-tabs__offset {
  display: none;
}
.q-tabs--horizontal .q-tabs__arrow {
  height: 100%;
}
.q-tabs--horizontal .q-tabs__arrow--left {
  top: 0;
  left: 0;
  bottom: 0;
}
.q-tabs--horizontal .q-tabs__arrow--right {
  top: 0;
  right: 0;
  bottom: 0;
}
.q-tabs--vertical,
.q-tabs--vertical .q-tabs__content {
  display: block !important;
  height: 100%;
}
.q-tabs--vertical .q-tabs__arrow {
  width: 100%;
  height: 36px;
  text-align: center;
}
.q-tabs--vertical .q-tabs__arrow--left {
  top: 0;
  left: 0;
  right: 0;
}
.q-tabs--vertical .q-tabs__arrow--right {
  left: 0;
  right: 0;
  bottom: 0;
}
.q-tabs--vertical .q-tab {
  padding: 0 8px;
}
.q-tabs--vertical .q-tab__indicator {
  height: unset;
  width: 2px;
}
.q-tabs--vertical.q-tabs--not-scrollable .q-tabs__content {
  height: 100%;
}
.q-tabs--vertical.q-tabs--dense .q-tab__content {
  min-width: 24px;
}
.q-tabs--dense .q-tab {
  min-height: 36px;
}
.q-tabs--dense .q-tab--full {
  min-height: 52px;
}
@media (min-width: 1440px) {
  .q-footer .q-tab__content,
  .q-header .q-tab__content {
    min-width: 128px;
  }
}
.q-time {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: #fff;
  outline: 0;
  width: 290px;
  min-width: 290px;
  max-width: 100%;
}
.q-time--bordered {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-time__header {
  border-top-left-radius: inherit;
  color: #fff;
  background-color: #1976d2;
  background-color: var(--q-color-primary);
  padding: 16px;
  font-weight: 300;
}
.q-time__actions {
  padding: 0 16px 16px;
}
.q-time__header-label {
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.00833em;
}
.q-time__header-label > div + div {
  margin-left: 4px;
}
.q-time__link {
  opacity: 0.56;
  outline: 0;
  transition: opacity 0.3s ease-out;
}
.q-time__link--active,
.q-time__link:focus,
.q-time__link:hover {
  opacity: 1;
}
.q-time__header-ampm {
  font-size: 16px;
  letter-spacing: 0.1em;
}
.q-time__content {
  padding: 16px;
}
.q-time__content:before {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.q-time__container-parent {
  padding: 16px;
}
.q-time__container-child {
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.12);
}
.q-time__clock {
  padding: 24px;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  font-size: 14px;
}
.q-time__clock-circle {
  position: relative;
}
.q-time__clock-center {
  height: 6px;
  width: 6px;
  margin: auto;
  border-radius: 50%;
  min-height: 0;
  background: currentColor;
}
.q-time__clock-pointer {
  width: 2px;
  height: 50%;
  transform-origin: 0 0;
  min-height: 0;
  position: absolute;
  left: 50%;
  right: 0;
  bottom: 0;
  color: #1976d2;
  color: var(--q-color-primary);
  background: currentColor;
  transform: translateX(-50%);
}
.q-time__clock-pointer:after,
.q-time__clock-pointer:before {
  content: '';
  position: absolute;
  left: 50%;
  border-radius: 50%;
  background: currentColor;
  transform: translateX(-50%);
}
.q-time__clock-pointer:before {
  bottom: -4px;
  width: 8px;
  height: 8px;
}
.q-time__clock-pointer:after {
  top: -3px;
  height: 6px;
  width: 6px;
}
.q-time__clock-position {
  position: absolute;
  min-height: 32px;
  width: 32px;
  height: 32px;
  font-size: 12px;
  line-height: 32px;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.q-time__clock-position--disable {
  opacity: 0.4;
}
.q-time__clock-position--active {
  background-color: #1976d2;
  background-color: var(--q-color-primary);
  color: #fff;
}
.q-time__clock-pos-0 {
  top: 0%;
  left: 50%;
}
.q-time__clock-pos-1 {
  top: 6.7%;
  left: 75%;
}
.q-time__clock-pos-2 {
  top: 25%;
  left: 93.3%;
}
.q-time__clock-pos-3 {
  top: 50%;
  left: 100%;
}
.q-time__clock-pos-4 {
  top: 75%;
  left: 93.3%;
}
.q-time__clock-pos-5 {
  top: 93.3%;
  left: 75%;
}
.q-time__clock-pos-6 {
  top: 100%;
  left: 50%;
}
.q-time__clock-pos-7 {
  top: 93.3%;
  left: 25%;
}
.q-time__clock-pos-8 {
  top: 75%;
  left: 6.7%;
}
.q-time__clock-pos-9 {
  top: 50%;
  left: 0%;
}
.q-time__clock-pos-10 {
  top: 25%;
  left: 6.7%;
}
.q-time__clock-pos-11 {
  top: 6.7%;
  left: 25%;
}
.q-time__clock-pos-12 {
  top: 15%;
  left: 50%;
}
.q-time__clock-pos-13 {
  top: 19.69%;
  left: 67.5%;
}
.q-time__clock-pos-14 {
  top: 32.5%;
  left: 80.31%;
}
.q-time__clock-pos-15 {
  top: 50%;
  left: 85%;
}
.q-time__clock-pos-16 {
  top: 67.5%;
  left: 80.31%;
}
.q-time__clock-pos-17 {
  top: 80.31%;
  left: 67.5%;
}
.q-time__clock-pos-18 {
  top: 85%;
  left: 50%;
}
.q-time__clock-pos-19 {
  top: 80.31%;
  left: 32.5%;
}
.q-time__clock-pos-20 {
  top: 67.5%;
  left: 19.69%;
}
.q-time__clock-pos-21 {
  top: 50%;
  left: 15%;
}
.q-time__clock-pos-22 {
  top: 32.5%;
  left: 19.69%;
}
.q-time__clock-pos-23 {
  top: 19.69%;
  left: 32.5%;
}
.q-time__now-button {
  background-color: #1976d2;
  background-color: var(--q-color-primary);
  color: #fff;
  top: 12px;
  right: 12px;
}
.q-time--readonly .q-time__content,
.q-time--readonly .q-time__header-ampm,
.q-time.disabled .q-time__content,
.q-time.disabled .q-time__header-ampm {
  pointer-events: none;
}
.q-time--portrait {
  display: inline-flex;
  flex-direction: column;
}
.q-time--portrait .q-time__header {
  border-top-right-radius: inherit;
  min-height: 86px;
}
.q-time--portrait .q-time__header-ampm {
  margin-left: 12px;
}
.q-time--portrait.q-time--bordered .q-time__content {
  margin: 1px 0;
}
.q-time--landscape {
  display: inline-flex;
  align-items: stretch;
  min-width: 420px;
}
.q-time--landscape > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.q-time--landscape .q-time__header {
  border-bottom-left-radius: inherit;
  min-width: 156px;
}
.q-time--landscape .q-time__header-ampm {
  margin-top: 12px;
}
.q-time--dark {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-timeline {
  padding: 0;
  width: 100%;
  list-style: none;
}
.q-timeline h6 {
  line-height: inherit;
}
.q-timeline--dark {
  color: #fff;
}
.q-timeline--dark .q-timeline__subtitle {
  opacity: 0.7;
}
.q-timeline__content {
  padding-bottom: 24px;
}
.q-timeline__title {
  margin-top: 0;
  margin-bottom: 16px;
}
.q-timeline__subtitle {
  font-size: 12px;
  margin-bottom: 8px;
  opacity: 0.4;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}
.q-timeline__dot {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15px;
}
.q-timeline__dot:after,
.q-timeline__dot:before {
  content: '';
  background: currentColor;
  display: block;
  position: absolute;
}
.q-timeline__dot:before {
  border: 3px solid transparent;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 4px;
  left: 0;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}
.q-timeline__dot:after {
  width: 3px;
  opacity: 0.4;
  top: 24px;
  bottom: 0;
  left: 6px;
}
.q-timeline__dot .q-icon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  height: 38px;
  line-height: 38px;
  width: 100%;
  color: #fff;
}
.q-timeline__dot-img {
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  height: 31px;
  width: 31px;
  background: currentColor;
  border-radius: 50%;
}
.q-timeline__heading {
  position: relative;
}
.q-timeline__heading:first-child .q-timeline__heading-title {
  padding-top: 0;
}
.q-timeline__heading:last-child .q-timeline__heading-title {
  padding-bottom: 0;
}
.q-timeline__heading-title {
  padding: 32px 0;
  margin: 0;
}
.q-timeline__entry {
  position: relative;
  line-height: 22px;
}
.q-timeline__entry:last-child {
  padding-bottom: 0 !important;
}
.q-timeline__entry:last-child .q-timeline__dot:after {
  content: none;
}
.q-timeline__entry--icon .q-timeline__dot {
  width: 31px;
}
.q-timeline__entry--icon .q-timeline__dot:before {
  height: 31px;
  width: 31px;
}
.q-timeline__entry--icon .q-timeline__dot:after {
  top: 41px;
  left: 14px;
}
.q-timeline__entry--icon .q-timeline__subtitle {
  padding-top: 8px;
}
.q-timeline--dense--right .q-timeline__entry {
  padding-left: 40px;
}
.q-timeline--dense--right .q-timeline__entry--icon .q-timeline__dot {
  left: -8px;
}
.q-timeline--dense--right .q-timeline__dot {
  left: 0;
}
.q-timeline--dense--left .q-timeline__heading {
  text-align: right;
}
.q-timeline--dense--left .q-timeline__entry {
  padding-right: 40px;
}
.q-timeline--dense--left .q-timeline__entry--icon .q-timeline__dot {
  right: -8px;
}
.q-timeline--dense--left .q-timeline__content,
.q-timeline--dense--left .q-timeline__subtitle,
.q-timeline--dense--left .q-timeline__title {
  text-align: right;
}
.q-timeline--dense--left .q-timeline__dot {
  right: 0;
}
.q-timeline--comfortable {
  display: table;
}
.q-timeline--comfortable .q-timeline__heading {
  display: table-row;
  font-size: 200%;
}
.q-timeline--comfortable .q-timeline__heading > div {
  display: table-cell;
}
.q-timeline--comfortable .q-timeline__entry {
  display: table-row;
  padding: 0;
}
.q-timeline--comfortable .q-timeline__entry--icon .q-timeline__content {
  padding-top: 8px;
}
.q-timeline--comfortable .q-timeline__content,
.q-timeline--comfortable .q-timeline__dot,
.q-timeline--comfortable .q-timeline__subtitle {
  display: table-cell;
  vertical-align: top;
}
.q-timeline--comfortable .q-timeline__subtitle {
  width: 35%;
}
.q-timeline--comfortable .q-timeline__dot {
  position: relative;
  min-width: 31px;
}
.q-timeline--comfortable--right
  .q-timeline__heading
  .q-timeline__heading-title {
  margin-left: -50px;
}
.q-timeline--comfortable--right .q-timeline__subtitle {
  text-align: right;
  padding-right: 30px;
}
.q-timeline--comfortable--right .q-timeline__content {
  padding-left: 30px;
}
.q-timeline--comfortable--right .q-timeline__entry--icon .q-timeline__dot {
  left: -8px;
}
.q-timeline--comfortable--left .q-timeline__heading {
  text-align: right;
}
.q-timeline--comfortable--left .q-timeline__heading .q-timeline__heading-title {
  margin-right: -50px;
}
.q-timeline--comfortable--left .q-timeline__subtitle {
  padding-left: 30px;
}
.q-timeline--comfortable--left .q-timeline__content {
  padding-right: 30px;
}
.q-timeline--comfortable--left .q-timeline__content,
.q-timeline--comfortable--left .q-timeline__title {
  text-align: right;
}
.q-timeline--comfortable--left .q-timeline__entry--icon .q-timeline__dot {
  right: 0;
}
.q-timeline--comfortable--left .q-timeline__dot {
  right: -8px;
}
.q-timeline--loose .q-timeline__heading-title {
  text-align: center;
  margin-left: 0;
}
.q-timeline--loose .q-timeline__content,
.q-timeline--loose .q-timeline__dot,
.q-timeline--loose .q-timeline__entry,
.q-timeline--loose .q-timeline__subtitle {
  display: block;
  margin: 0;
  padding: 0;
}
.q-timeline--loose .q-timeline__dot {
  position: absolute;
  left: 50%;
  margin-left: -7.15px;
}
.q-timeline--loose .q-timeline__entry {
  padding-bottom: 24px;
  overflow: hidden;
}
.q-timeline--loose .q-timeline__entry--icon .q-timeline__dot {
  margin-left: -15px;
}
.q-timeline--loose .q-timeline__entry--icon .q-timeline__subtitle {
  line-height: 38px;
}
.q-timeline--loose .q-timeline__entry--icon .q-timeline__content {
  padding-top: 8px;
}
.q-timeline--loose .q-timeline__entry--left .q-timeline__content,
.q-timeline--loose .q-timeline__entry--right .q-timeline__subtitle {
  float: left;
  padding-right: 30px;
  text-align: right;
}
.q-timeline--loose .q-timeline__entry--left .q-timeline__subtitle,
.q-timeline--loose .q-timeline__entry--right .q-timeline__content {
  float: right;
  text-align: left;
  padding-left: 30px;
}
.q-timeline--loose .q-timeline__content,
.q-timeline--loose .q-timeline__subtitle {
  width: 50%;
}
.q-toggle {
  vertical-align: middle;
}
.q-toggle__native {
  width: 1px;
  height: 1px;
}
.q-toggle__track {
  height: 0.35em;
  border-radius: 0.175em;
  opacity: 0.38;
  background: currentColor;
}
.q-toggle__thumb {
  top: 0.25em;
  left: 0.25em;
  width: 0.5em;
  height: 0.5em;
  transition: left 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 0;
}
.q-toggle__thumb:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.q-toggle__thumb .q-icon {
  font-size: 0.3em;
  min-width: 1em;
  color: #000;
  opacity: 0.54;
  z-index: 1;
}
.q-toggle__inner {
  font-size: 40px;
  width: 1.4em;
  min-width: 1.4em;
  height: 1em;
  padding: 0.325em 0.3em;
}
.q-toggle__inner--indet .q-toggle__thumb {
  left: 0.45em;
}
.q-toggle__inner--truthy {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-toggle__inner--truthy .q-toggle__track {
  opacity: 0.54;
}
.q-toggle__inner--truthy .q-toggle__thumb {
  left: 0.65em;
}
.q-toggle__inner--truthy .q-toggle__thumb:after {
  background-color: currentColor;
}
.q-toggle__inner--truthy .q-toggle__thumb .q-icon {
  color: #fff;
  opacity: 1;
}
.q-toggle.disabled {
  opacity: 0.75 !important;
}
.q-toggle--dark .q-toggle__inner {
  color: #fff;
}
.q-toggle--dark .q-toggle__inner--truthy {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-toggle--dark .q-toggle__thumb:before {
  opacity: 0.32 !important;
}
.q-toggle--dense .q-toggle__inner {
  width: 0.8em;
  min-width: 0.8em;
  height: 0.5em;
  padding: 0.07625em 0;
}
.q-toggle--dense .q-toggle__thumb {
  top: 0;
  left: 0;
}
.q-toggle--dense .q-toggle__inner--indet .q-toggle__thumb {
  left: 0.15em;
}
.q-toggle--dense .q-toggle__inner--truthy .q-toggle__thumb {
  left: 0.3em;
}
.q-toggle--dense .q-toggle__label {
  padding-left: 0.5em;
}
.q-toggle--dense.reverse .q-toggle__label {
  padding-left: 0;
  padding-right: 0.5em;
}
body.desktop .q-toggle:not(.disabled) .q-toggle__thumb:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.12;
  transform: scale3d(0, 0, 1);
  transition: transform 0.22s cubic-bezier(0, 0, 0.2, 1);
}
body.desktop .q-toggle:not(.disabled):focus .q-toggle__thumb:before,
body.desktop .q-toggle:not(.disabled):hover .q-toggle__thumb:before {
  transform: scale3d(2, 2, 1);
}
body.desktop .q-toggle--dense:not(.disabled):focus .q-toggle__thumb:before,
body.desktop .q-toggle--dense:not(.disabled):hover .q-toggle__thumb:before {
  transform: scale3d(1.5, 1.5, 1);
}
.q-toolbar {
  position: relative;
  padding: 0 12px;
  min-height: 50px;
  width: 100%;
}
.q-toolbar--inset {
  padding-left: 58px;
}
.q-toolbar .q-avatar {
  font-size: 38px;
}
.q-toolbar__title {
  flex: 1 1 0%;
  min-width: 1px;
  max-width: 100%;
  font-size: 21px;
  font-weight: 400;
  letter-spacing: 0.01em;
  padding: 0 12px;
}
.q-toolbar__title:first-child {
  padding-left: 0;
}
.q-toolbar__title:last-child {
  padding-right: 0;
}
.q-tooltip--style {
  font-size: 10px;
  color: #fafafa;
  background: #757575;
  border-radius: 4px;
  text-transform: none;
  font-weight: 400;
}
.q-tooltip {
  z-index: 9000;
  position: fixed !important;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 6px 10px;
}
@media (max-width: 599px) {
  .q-tooltip {
    font-size: 14px;
    padding: 8px 16px;
  }
}
.q-tree {
  position: relative;
  color: #9e9e9e;
}
.q-tree__node {
  padding: 0 0 3px 22px;
}
.q-tree__node:after {
  content: '';
  position: absolute;
  top: -3px;
  bottom: 0;
  width: 2px;
  right: auto;
  left: -13px;
  border-left: 1px solid currentColor;
}
.q-tree__node:last-child:after {
  display: none;
}
.q-tree__node--disabled {
  pointer-events: none;
}
.q-tree__node--disabled .disabled {
  opacity: 1 !important;
}
.q-tree__node--disabled > .disabled,
.q-tree__node--disabled > div,
.q-tree__node--disabled > i {
  opacity: 0.6 !important;
}
.q-tree__node--disabled > .disabled .q-tree__node--disabled > .disabled,
.q-tree__node--disabled > .disabled .q-tree__node--disabled > div,
.q-tree__node--disabled > .disabled .q-tree__node--disabled > i,
.q-tree__node--disabled > div .q-tree__node--disabled > .disabled,
.q-tree__node--disabled > div .q-tree__node--disabled > div,
.q-tree__node--disabled > div .q-tree__node--disabled > i,
.q-tree__node--disabled > i .q-tree__node--disabled > .disabled,
.q-tree__node--disabled > i .q-tree__node--disabled > div,
.q-tree__node--disabled > i .q-tree__node--disabled > i {
  opacity: 1 !important;
}
.q-tree__node-header:before {
  content: '';
  position: absolute;
  top: -3px;
  bottom: 50%;
  width: 35px;
  left: -35px;
  border-left: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
}
.q-tree__children {
  padding-left: 25px;
}
.q-tree__node-body {
  padding: 5px 0 8px 5px;
}
.q-tree__node--parent {
  padding-left: 2px;
}
.q-tree__node--parent > .q-tree__node-header:before {
  width: 15px;
  left: -15px;
}
.q-tree__node--parent > .q-tree__node-collapsible > .q-tree__node-body {
  padding: 5px 0 8px 27px;
}
.q-tree__node--parent > .q-tree__node-collapsible > .q-tree__node-body:after {
  content: '';
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  right: auto;
  left: 12px;
  border-left: 1px solid currentColor;
  bottom: 50px;
}
.q-tree__node--link {
  cursor: pointer;
}
.q-tree__node-header {
  padding: 4px;
  margin-top: 3px;
  border-radius: 4px;
  outline: 0;
}
.q-tree__node-header-content {
  color: #000;
  transition: color 0.3s;
}
.q-tree__node--selected .q-tree__node-header-content {
  color: #9e9e9e;
}
.q-tree__icon,
.q-tree__node-header-content .q-icon,
.q-tree__spinner {
  font-size: 21px;
}
.q-tree__img {
  height: 42px;
}
.q-tree__avatar,
.q-tree__node-header-content .q-avatar {
  font-size: 28px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
}
.q-tree__arrow,
.q-tree__spinner {
  font-size: 16px;
}
.q-tree__arrow {
  transition: transform 0.3s;
}
.q-tree__arrow--rotate {
  transform: rotate3d(0, 0, 1, 90deg);
}
.q-tree > .q-tree__node {
  padding: 0;
}
.q-tree > .q-tree__node:after,
.q-tree > .q-tree__node > .q-tree__node-header:before {
  display: none;
}
.q-tree > .q-tree__node--child > .q-tree__node-header {
  padding-left: 24px;
}
.q-tree--dark .q-tree__node-header-content {
  color: #fff;
}
.q-tree--no-connectors .q-tree__node-body:after,
.q-tree--no-connectors .q-tree__node-header:before,
.q-tree--no-connectors .q-tree__node:after {
  display: none !important;
}
[dir='rtl'] .q-tree__arrow {
  transform: rotate3d(0, 0, 1, 180deg);
}
[dir='rtl'] .q-tree__arrow--rotate {
  transform: rotate3d(0, 0, 1, 90deg);
}
.q-uploader {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  vertical-align: top;
  background: #fff;
  position: relative;
  width: 320px;
  max-height: 320px;
}
.q-uploader--bordered {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-uploader__input {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer !important;
  z-index: 1;
}
.q-uploader__input::-webkit-file-upload-button {
  cursor: pointer;
}
.q-uploader__file:before,
.q-uploader__header:before {
  content: '';
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background: currentColor;
  opacity: 0.04;
}
.q-uploader__header {
  position: relative;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background-color: #1976d2;
  background-color: var(--q-color-primary);
  color: #fff;
  width: 100%;
}
.q-uploader__spinner {
  font-size: 24px;
  margin-right: 4px;
}
.q-uploader__header-content {
  padding: 8px;
}
.q-uploader__dnd {
  outline: 1px dashed currentColor;
  outline-offset: -4px;
  background: hsla(0, 0%, 100%, 0.6);
}
.q-uploader__overlay {
  font-size: 36px;
  color: #000;
  background-color: hsla(0, 0%, 100%, 0.6);
}
.q-uploader__list {
  position: relative;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  padding: 8px;
  min-height: 60px;
  flex: 1 1 auto;
}
.q-uploader__file {
  border-radius: 4px 4px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.q-uploader__file .q-circular-progress {
  font-size: 24px;
}
.q-uploader__file--img {
  color: #fff;
  height: 200px;
  min-width: 200px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.q-uploader__file--img:before {
  content: none;
}
.q-uploader__file--img .q-circular-progress {
  color: #fff;
}
.q-uploader__file--img .q-uploader__file-header {
  padding-bottom: 24px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 20%,
    hsla(0, 0%, 100%, 0)
  );
}
.q-uploader__file + .q-uploader__file {
  margin-top: 8px;
}
.q-uploader__file-header {
  position: relative;
  padding: 4px 8px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.q-uploader__file-header-content {
  padding-right: 8px;
}
.q-uploader__file-status {
  font-size: 24px;
  margin-right: 4px;
}
.q-uploader__title {
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  word-break: break-word;
}
.q-uploader__subtitle {
  font-size: 12px;
  line-height: 18px;
}
.q-uploader--disable .q-uploader__header,
.q-uploader--disable .q-uploader__list {
  pointer-events: none;
}
.q-uploader--dark,
.q-uploader--dark .q-uploader__file {
  border-color: hsla(0, 0%, 100%, 0.28);
}
.q-uploader--dark .q-uploader__dnd,
.q-uploader--dark .q-uploader__overlay {
  background: hsla(0, 0%, 100%, 0.3);
}
.q-uploader--dark .q-uploader__overlay {
  color: #fff;
}
.q-video {
  position: relative;
  overflow: hidden;
  border-radius: inherit;
}
.q-video embed,
.q-video iframe,
.q-video object {
  width: 100%;
  height: 100%;
}
.q-video--responsive {
  height: 0;
}
.q-video--responsive embed,
.q-video--responsive iframe,
.q-video--responsive object {
  position: absolute;
  top: 0;
  left: 0;
}
.q-virtual-scroll:focus {
  outline: 0;
}
.q-virtual-scroll__content {
  outline: none;
}
.q-virtual-scroll__content * {
  overflow-anchor: none;
}
.q-virtual-scroll__padding {
  background: linear-gradient(
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0) 20%,
    hsla(0, 0%, 50.2%, 0.03) 0,
    hsla(0, 0%, 50.2%, 0.08) 50%,
    hsla(0, 0%, 50.2%, 0.03) 80%,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0)
  );
  background-size: 100% 50px;
  background-size: var(--q-virtual-scroll-item-width, 100%)
    var(--q-virtual-scroll-item-height, 50px);
}
.q-table .q-virtual-scroll__padding tr {
  height: 0 !important;
}
.q-table .q-virtual-scroll__padding td {
  padding: 0 !important;
}
.q-virtual-scroll--horizontal {
  align-items: stretch;
}
.q-virtual-scroll--horizontal,
.q-virtual-scroll--horizontal .q-virtual-scroll__content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.q-virtual-scroll--horizontal .q-virtual-scroll__content,
.q-virtual-scroll--horizontal .q-virtual-scroll__content > *,
.q-virtual-scroll--horizontal .q-virtual-scroll__padding {
  flex: 0 0 auto;
}
.q-virtual-scroll--horizontal .q-virtual-scroll__padding {
  background: linear-gradient(
    270deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0) 20%,
    hsla(0, 0%, 50.2%, 0.03) 0,
    hsla(0, 0%, 50.2%, 0.08) 50%,
    hsla(0, 0%, 50.2%, 0.03) 80%,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0)
  );
  background-size: 50px 100%;
  background-size: var(--q-virtual-scroll-item-width, 50px)
    var(--q-virtual-scroll-item-height, 100%);
}
.q-ripple {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  z-index: 0;
  overflow: hidden;
  contain: strict;
}
.q-ripple,
.q-ripple__inner {
  position: absolute;
  top: 0;
  left: 0;
  color: inherit;
  pointer-events: none;
}
.q-ripple__inner {
  opacity: 0;
  border-radius: 50%;
  background: currentColor;
  will-change: transform, opacity;
}
.q-ripple__inner--enter {
  transition: transform 0.225s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-ripple__inner--leave {
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.q-morph--internal,
.q-morph--invisible {
  opacity: 0 !important;
  pointer-events: none !important;
  position: fixed !important;
  right: 200vw !important;
  bottom: 200vh !important;
}
.q-loading {
  color: #000;
  position: fixed !important;
}
.q-loading:before {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: currentColor;
  opacity: 0.5;
  z-index: -1;
}
.q-loading > div {
  margin: 40px 20px 0;
  max-width: 450px;
  text-align: center;
}
.q-notifications__list {
  z-index: 9500;
  pointer-events: none;
  left: 0;
  right: 0;
  margin-bottom: 10px;
  position: relative;
}
.q-notifications__list--center {
  top: 0;
  bottom: 0;
}
.q-notifications__list--top {
  top: 0;
}
.q-notifications__list--bottom {
  bottom: 0;
}
body.q-ios-padding .q-notifications__list--center,
body.q-ios-padding .q-notifications__list--top {
  top: 20px;
  top: env(safe-area-inset-top);
}
body.q-ios-padding .q-notifications__list--bottom,
body.q-ios-padding .q-notifications__list--center {
  bottom: env(safe-area-inset-bottom);
}
.q-notification {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  pointer-events: all;
  display: inline-flex;
  margin: 10px 10px 0;
  transition: transform 1s, opacity 1s;
  z-index: 9500;
  flex-shrink: 0;
  max-width: 95vw;
  background: #323232;
  color: #fff;
  font-size: 14px;
}
.q-notification__icon {
  font-size: 24px;
  margin-right: 16px;
  flex: 0 0 1em;
}
.q-notification__avatar,
.q-notification__spinner {
  font-size: 32px;
  margin-right: 8px;
}
.q-notification__message {
  padding: 8px 0;
}
.q-notification__caption {
  font-size: 0.9em;
  opacity: 0.7;
}
.q-notification__actions {
  color: #1976d2;
  color: var(--q-color-primary);
}
.q-notification__badge {
  -webkit-animation: q-notif-badge 0.42s;
  animation: q-notif-badge 0.42s;
  padding: 4px 8px;
  position: absolute;
  background: #c10015;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: #c10015;
  background-color: var(--q-color-negative);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
}
.q-notification__badge--top-left,
.q-notification__badge--top-right {
  top: -6px;
}
.q-notification__badge--bottom-left,
.q-notification__badge--bottom-right {
  bottom: -6px;
}
.q-notification__badge--bottom-left,
.q-notification__badge--top-left {
  left: -22px;
}
.q-notification__badge--bottom-right,
.q-notification__badge--top-right {
  right: -22px;
}
.q-notification__progress {
  z-index: -1;
  position: absolute;
  height: 3px;
  bottom: 0;
  left: -10px;
  right: -10px;
  -webkit-animation: q-notif-progress linear;
  animation: q-notif-progress linear;
  background: currentColor;
  opacity: 0.3;
  border-radius: 4px 4px 0 0;
  transform-origin: 0 50%;
  transform: scaleX(0);
}
.q-notification--standard {
  padding: 0 16px;
  min-height: 48px;
}
.q-notification--standard .q-notification__actions {
  padding: 6px 0 6px 8px;
  margin-right: -8px;
}
.q-notification--multi-line {
  min-height: 68px;
  padding: 8px 16px;
}
.q-notification--multi-line .q-notification__badge--top-left,
.q-notification--multi-line .q-notification__badge--top-right {
  top: -15px;
}
.q-notification--multi-line .q-notification__badge--bottom-left,
.q-notification--multi-line .q-notification__badge--bottom-right {
  bottom: -15px;
}
.q-notification--multi-line .q-notification__progress {
  bottom: -8px;
}
.q-notification--multi-line .q-notification__actions {
  padding: 0;
}
.q-notification--multi-line .q-notification__actions--with-media {
  padding-left: 25px;
}
.q-notification--top-enter,
.q-notification--top-leave-to,
.q-notification--top-left-enter,
.q-notification--top-left-leave-to,
.q-notification--top-right-enter,
.q-notification--top-right-leave-to {
  opacity: 0;
  transform: translateY(-50px);
  z-index: 9499;
}
.q-notification--center-enter,
.q-notification--center-leave-to,
.q-notification--left-enter,
.q-notification--left-leave-to,
.q-notification--right-enter,
.q-notification--right-leave-to {
  opacity: 0;
  transform: rotateX(90deg);
  z-index: 9499;
}
.q-notification--bottom-enter,
.q-notification--bottom-leave-to,
.q-notification--bottom-left-enter,
.q-notification--bottom-left-leave-to,
.q-notification--bottom-right-enter,
.q-notification--bottom-right-leave-to {
  opacity: 0;
  transform: translateY(50px);
  z-index: 9499;
}
.q-notification--bottom-leave-active,
.q-notification--bottom-left-leave-active,
.q-notification--bottom-right-leave-active,
.q-notification--center-leave-active,
.q-notification--left-leave-active,
.q-notification--right-leave-active,
.q-notification--top-leave-active,
.q-notification--top-left-leave-active,
.q-notification--top-right-leave-active {
  position: absolute;
  z-index: 9499;
  margin-left: 0;
  margin-right: 0;
}
.q-notification--center-leave-active,
.q-notification--top-leave-active {
  top: 0;
}
.q-notification--bottom-leave-active,
.q-notification--bottom-left-leave-active,
.q-notification--bottom-right-leave-active {
  bottom: 0;
}
@media (min-width: 600px) {
  .q-notification {
    max-width: 65vw;
  }
}
:root {
  --animate-duration: 0.3s;
  --animate-delay: 0.3s;
  --animate-repeat: 1;
}
.animated {
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}
.animated.repeat-1 {
  -webkit-animation-iteration-count: var(--animate-repeat);
  animation-iteration-count: var(--animate-repeat);
}
.animated.repeat-2 {
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);
  animation-iteration-count: calc(var(--animate-repeat) * 2);
}
.animated.repeat-3 {
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 3);
  animation-iteration-count: calc(var(--animate-repeat) * 3);
}
.animated.delay-1s {
  -webkit-animation-delay: var(--animate-delay);
  animation-delay: var(--animate-delay);
}
.animated.delay-2s {
  -webkit-animation-delay: calc(var(--animate-delay) * 2);
  animation-delay: calc(var(--animate-delay) * 2);
}
.animated.delay-3s {
  -webkit-animation-delay: calc(var(--animate-delay) * 3);
  animation-delay: calc(var(--animate-delay) * 3);
}
.animated.delay-4s {
  -webkit-animation-delay: calc(var(--animate-delay) * 4);
  animation-delay: calc(var(--animate-delay) * 4);
}
.animated.delay-5s {
  -webkit-animation-delay: calc(var(--animate-delay) * 5);
  animation-delay: calc(var(--animate-delay) * 5);
}
.animated.faster {
  -webkit-animation-duration: calc(var(--animate-duration) / 2);
  animation-duration: calc(var(--animate-duration) / 2);
}
.animated.fast {
  -webkit-animation-duration: calc(var(--animate-duration) * 0.8);
  animation-duration: calc(var(--animate-duration) * 0.8);
}
.animated.slow {
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
}
.animated.slower {
  -webkit-animation-duration: calc(var(--animate-duration) * 3);
  animation-duration: calc(var(--animate-duration) * 3);
}
@media (prefers-reduced-motion: reduce), print {
  .animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
  .animated[class*='Out'] {
    opacity: 0;
  }
}
.q-animate--scale {
  -webkit-animation: q-scale 0.15s;
  animation: q-scale 0.15s;
  -webkit-animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
}
.q-animate--fade {
  -webkit-animation: q-fade 0.2s;
  animation: q-fade 0.2s;
}
:root {
  --q-color-primary: #1976d2;
  --q-color-secondary: #26a69a;
  --q-color-accent: #9c27b0;
  --q-color-positive: #21ba45;
  --q-color-negative: #c10015;
  --q-color-info: #31ccec;
  --q-color-warning: #f2c037;
  --q-color-dark: #1d1d1d;
}
.text-dark {
  color: #1d1d1d !important;
  color: var(--q-color-dark) !important;
}
.bg-dark {
  background: #1d1d1d !important;
  background: var(--q-color-dark) !important;
}
.text-primary {
  color: #1976d2 !important;
  color: var(--q-color-primary) !important;
}
.bg-primary {
  background: #1976d2 !important;
  background: var(--q-color-primary) !important;
}
.text-secondary {
  color: #26a69a !important;
  color: var(--q-color-secondary) !important;
}
.bg-secondary {
  background: #26a69a !important;
  background: var(--q-color-secondary) !important;
}
.text-accent {
  color: #9c27b0 !important;
  color: var(--q-color-accent) !important;
}
.bg-accent {
  background: #9c27b0 !important;
  background: var(--q-color-accent) !important;
}
.text-positive {
  color: #21ba45 !important;
  color: var(--q-color-positive) !important;
}
.bg-positive {
  background: #21ba45 !important;
  background: var(--q-color-positive) !important;
}
.text-negative {
  color: #c10015 !important;
  color: var(--q-color-negative) !important;
}
.bg-negative {
  background: #c10015 !important;
  background: var(--q-color-negative) !important;
}
.text-info {
  color: #31ccec !important;
  color: var(--q-color-info) !important;
}
.bg-info {
  background: #31ccec !important;
  background: var(--q-color-info) !important;
}
.text-warning {
  color: #f2c037 !important;
  color: var(--q-color-warning) !important;
}
.bg-warning {
  background: #f2c037 !important;
  background: var(--q-color-warning) !important;
}
.text-white {
  color: #fff !important;
}
.bg-white {
  background: #fff !important;
}
.text-black {
  color: #000 !important;
}
.bg-black {
  background: #000 !important;
}
.text-transparent {
  color: transparent !important;
}
.bg-transparent {
  background: transparent !important;
}
.text-separator {
  color: rgba(0, 0, 0, 0.12) !important;
}
.bg-separator {
  background: rgba(0, 0, 0, 0.12) !important;
}
.text-dark-separator {
  color: hsla(0, 0%, 100%, 0.28) !important;
}
.bg-dark-separator {
  background: hsla(0, 0%, 100%, 0.28) !important;
}
.text-red {
  color: #f44336 !important;
}
.text-red-1 {
  color: #ffebee !important;
}
.text-red-2 {
  color: #ffcdd2 !important;
}
.text-red-3 {
  color: #ef9a9a !important;
}
.text-red-4 {
  color: #e57373 !important;
}
.text-red-5 {
  color: #ef5350 !important;
}
.text-red-6 {
  color: #f44336 !important;
}
.text-red-7 {
  color: #e53935 !important;
}
.text-red-8 {
  color: #d32f2f !important;
}
.text-red-9 {
  color: #c62828 !important;
}
.text-red-10 {
  color: #b71c1c !important;
}
.text-red-11 {
  color: #ff8a80 !important;
}
.text-red-12 {
  color: #ff5252 !important;
}
.text-red-13 {
  color: #ff1744 !important;
}
.text-red-14 {
  color: #d50000 !important;
}
.text-pink {
  color: #e91e63 !important;
}
.text-pink-1 {
  color: #fce4ec !important;
}
.text-pink-2 {
  color: #f8bbd0 !important;
}
.text-pink-3 {
  color: #f48fb1 !important;
}
.text-pink-4 {
  color: #f06292 !important;
}
.text-pink-5 {
  color: #ec407a !important;
}
.text-pink-6 {
  color: #e91e63 !important;
}
.text-pink-7 {
  color: #d81b60 !important;
}
.text-pink-8 {
  color: #c2185b !important;
}
.text-pink-9 {
  color: #ad1457 !important;
}
.text-pink-10 {
  color: #880e4f !important;
}
.text-pink-11 {
  color: #ff80ab !important;
}
.text-pink-12 {
  color: #ff4081 !important;
}
.text-pink-13 {
  color: #f50057 !important;
}
.text-pink-14 {
  color: #c51162 !important;
}
.text-purple {
  color: #9c27b0 !important;
}
.text-purple-1 {
  color: #f3e5f5 !important;
}
.text-purple-2 {
  color: #e1bee7 !important;
}
.text-purple-3 {
  color: #ce93d8 !important;
}
.text-purple-4 {
  color: #ba68c8 !important;
}
.text-purple-5 {
  color: #ab47bc !important;
}
.text-purple-6 {
  color: #9c27b0 !important;
}
.text-purple-7 {
  color: #8e24aa !important;
}
.text-purple-8 {
  color: #7b1fa2 !important;
}
.text-purple-9 {
  color: #6a1b9a !important;
}
.text-purple-10 {
  color: #4a148c !important;
}
.text-purple-11 {
  color: #ea80fc !important;
}
.text-purple-12 {
  color: #e040fb !important;
}
.text-purple-13 {
  color: #d500f9 !important;
}
.text-purple-14 {
  color: #a0f !important;
}
.text-deep-purple {
  color: #673ab7 !important;
}
.text-deep-purple-1 {
  color: #ede7f6 !important;
}
.text-deep-purple-2 {
  color: #d1c4e9 !important;
}
.text-deep-purple-3 {
  color: #b39ddb !important;
}
.text-deep-purple-4 {
  color: #9575cd !important;
}
.text-deep-purple-5 {
  color: #7e57c2 !important;
}
.text-deep-purple-6 {
  color: #673ab7 !important;
}
.text-deep-purple-7 {
  color: #5e35b1 !important;
}
.text-deep-purple-8 {
  color: #512da8 !important;
}
.text-deep-purple-9 {
  color: #4527a0 !important;
}
.text-deep-purple-10 {
  color: #311b92 !important;
}
.text-deep-purple-11 {
  color: #b388ff !important;
}
.text-deep-purple-12 {
  color: #7c4dff !important;
}
.text-deep-purple-13 {
  color: #651fff !important;
}
.text-deep-purple-14 {
  color: #6200ea !important;
}
.text-indigo {
  color: #3f51b5 !important;
}
.text-indigo-1 {
  color: #e8eaf6 !important;
}
.text-indigo-2 {
  color: #c5cae9 !important;
}
.text-indigo-3 {
  color: #9fa8da !important;
}
.text-indigo-4 {
  color: #7986cb !important;
}
.text-indigo-5 {
  color: #5c6bc0 !important;
}
.text-indigo-6 {
  color: #3f51b5 !important;
}
.text-indigo-7 {
  color: #3949ab !important;
}
.text-indigo-8 {
  color: #303f9f !important;
}
.text-indigo-9 {
  color: #283593 !important;
}
.text-indigo-10 {
  color: #1a237e !important;
}
.text-indigo-11 {
  color: #8c9eff !important;
}
.text-indigo-12 {
  color: #536dfe !important;
}
.text-indigo-13 {
  color: #3d5afe !important;
}
.text-indigo-14 {
  color: #304ffe !important;
}
.text-blue {
  color: #2196f3 !important;
}
.text-blue-1 {
  color: #e3f2fd !important;
}
.text-blue-2 {
  color: #bbdefb !important;
}
.text-blue-3 {
  color: #90caf9 !important;
}
.text-blue-4 {
  color: #64b5f6 !important;
}
.text-blue-5 {
  color: #42a5f5 !important;
}
.text-blue-6 {
  color: #2196f3 !important;
}
.text-blue-7 {
  color: #1e88e5 !important;
}
.text-blue-8 {
  color: #1976d2 !important;
}
.text-blue-9 {
  color: #1565c0 !important;
}
.text-blue-10 {
  color: #0d47a1 !important;
}
.text-blue-11 {
  color: #82b1ff !important;
}
.text-blue-12 {
  color: #448aff !important;
}
.text-blue-13 {
  color: #2979ff !important;
}
.text-blue-14 {
  color: #2962ff !important;
}
.text-light-blue {
  color: #03a9f4 !important;
}
.text-light-blue-1 {
  color: #e1f5fe !important;
}
.text-light-blue-2 {
  color: #b3e5fc !important;
}
.text-light-blue-3 {
  color: #81d4fa !important;
}
.text-light-blue-4 {
  color: #4fc3f7 !important;
}
.text-light-blue-5 {
  color: #29b6f6 !important;
}
.text-light-blue-6 {
  color: #03a9f4 !important;
}
.text-light-blue-7 {
  color: #039be5 !important;
}
.text-light-blue-8 {
  color: #0288d1 !important;
}
.text-light-blue-9 {
  color: #0277bd !important;
}
.text-light-blue-10 {
  color: #01579b !important;
}
.text-light-blue-11 {
  color: #80d8ff !important;
}
.text-light-blue-12 {
  color: #40c4ff !important;
}
.text-light-blue-13 {
  color: #00b0ff !important;
}
.text-light-blue-14 {
  color: #0091ea !important;
}
.text-cyan {
  color: #00bcd4 !important;
}
.text-cyan-1 {
  color: #e0f7fa !important;
}
.text-cyan-2 {
  color: #b2ebf2 !important;
}
.text-cyan-3 {
  color: #80deea !important;
}
.text-cyan-4 {
  color: #4dd0e1 !important;
}
.text-cyan-5 {
  color: #26c6da !important;
}
.text-cyan-6 {
  color: #00bcd4 !important;
}
.text-cyan-7 {
  color: #00acc1 !important;
}
.text-cyan-8 {
  color: #0097a7 !important;
}
.text-cyan-9 {
  color: #00838f !important;
}
.text-cyan-10 {
  color: #006064 !important;
}
.text-cyan-11 {
  color: #84ffff !important;
}
.text-cyan-12 {
  color: #18ffff !important;
}
.text-cyan-13 {
  color: #00e5ff !important;
}
.text-cyan-14 {
  color: #00b8d4 !important;
}
.text-teal {
  color: #009688 !important;
}
.text-teal-1 {
  color: #e0f2f1 !important;
}
.text-teal-2 {
  color: #b2dfdb !important;
}
.text-teal-3 {
  color: #80cbc4 !important;
}
.text-teal-4 {
  color: #4db6ac !important;
}
.text-teal-5 {
  color: #26a69a !important;
}
.text-teal-6 {
  color: #009688 !important;
}
.text-teal-7 {
  color: #00897b !important;
}
.text-teal-8 {
  color: #00796b !important;
}
.text-teal-9 {
  color: #00695c !important;
}
.text-teal-10 {
  color: #004d40 !important;
}
.text-teal-11 {
  color: #a7ffeb !important;
}
.text-teal-12 {
  color: #64ffda !important;
}
.text-teal-13 {
  color: #1de9b6 !important;
}
.text-teal-14 {
  color: #00bfa5 !important;
}
.text-green {
  color: #4caf50 !important;
}
.text-green-1 {
  color: #e8f5e9 !important;
}
.text-green-2 {
  color: #c8e6c9 !important;
}
.text-green-3 {
  color: #a5d6a7 !important;
}
.text-green-4 {
  color: #81c784 !important;
}
.text-green-5 {
  color: #66bb6a !important;
}
.text-green-6 {
  color: #4caf50 !important;
}
.text-green-7 {
  color: #43a047 !important;
}
.text-green-8 {
  color: #388e3c !important;
}
.text-green-9 {
  color: #2e7d32 !important;
}
.text-green-10 {
  color: #1b5e20 !important;
}
.text-green-11 {
  color: #b9f6ca !important;
}
.text-green-12 {
  color: #69f0ae !important;
}
.text-green-13 {
  color: #00e676 !important;
}
.text-green-14 {
  color: #00c853 !important;
}
.text-light-green {
  color: #8bc34a !important;
}
.text-light-green-1 {
  color: #f1f8e9 !important;
}
.text-light-green-2 {
  color: #dcedc8 !important;
}
.text-light-green-3 {
  color: #c5e1a5 !important;
}
.text-light-green-4 {
  color: #aed581 !important;
}
.text-light-green-5 {
  color: #9ccc65 !important;
}
.text-light-green-6 {
  color: #8bc34a !important;
}
.text-light-green-7 {
  color: #7cb342 !important;
}
.text-light-green-8 {
  color: #689f38 !important;
}
.text-light-green-9 {
  color: #558b2f !important;
}
.text-light-green-10 {
  color: #33691e !important;
}
.text-light-green-11 {
  color: #ccff90 !important;
}
.text-light-green-12 {
  color: #b2ff59 !important;
}
.text-light-green-13 {
  color: #76ff03 !important;
}
.text-light-green-14 {
  color: #64dd17 !important;
}
.text-lime {
  color: #cddc39 !important;
}
.text-lime-1 {
  color: #f9fbe7 !important;
}
.text-lime-2 {
  color: #f0f4c3 !important;
}
.text-lime-3 {
  color: #e6ee9c !important;
}
.text-lime-4 {
  color: #dce775 !important;
}
.text-lime-5 {
  color: #d4e157 !important;
}
.text-lime-6 {
  color: #cddc39 !important;
}
.text-lime-7 {
  color: #c0ca33 !important;
}
.text-lime-8 {
  color: #afb42b !important;
}
.text-lime-9 {
  color: #9e9d24 !important;
}
.text-lime-10 {
  color: #827717 !important;
}
.text-lime-11 {
  color: #f4ff81 !important;
}
.text-lime-12 {
  color: #eeff41 !important;
}
.text-lime-13 {
  color: #c6ff00 !important;
}
.text-lime-14 {
  color: #aeea00 !important;
}
.text-yellow {
  color: #ffeb3b !important;
}
.text-yellow-1 {
  color: #fffde7 !important;
}
.text-yellow-2 {
  color: #fff9c4 !important;
}
.text-yellow-3 {
  color: #fff59d !important;
}
.text-yellow-4 {
  color: #fff176 !important;
}
.text-yellow-5 {
  color: #ffee58 !important;
}
.text-yellow-6 {
  color: #ffeb3b !important;
}
.text-yellow-7 {
  color: #fdd835 !important;
}
.text-yellow-8 {
  color: #fbc02d !important;
}
.text-yellow-9 {
  color: #f9a825 !important;
}
.text-yellow-10 {
  color: #f57f17 !important;
}
.text-yellow-11 {
  color: #ffff8d !important;
}
.text-yellow-12 {
  color: #ff0 !important;
}
.text-yellow-13 {
  color: #ffea00 !important;
}
.text-yellow-14 {
  color: #ffd600 !important;
}
.text-amber {
  color: #ffc107 !important;
}
.text-amber-1 {
  color: #fff8e1 !important;
}
.text-amber-2 {
  color: #ffecb3 !important;
}
.text-amber-3 {
  color: #ffe082 !important;
}
.text-amber-4 {
  color: #ffd54f !important;
}
.text-amber-5 {
  color: #ffca28 !important;
}
.text-amber-6 {
  color: #ffc107 !important;
}
.text-amber-7 {
  color: #ffb300 !important;
}
.text-amber-8 {
  color: #ffa000 !important;
}
.text-amber-9 {
  color: #ff8f00 !important;
}
.text-amber-10 {
  color: #ff6f00 !important;
}
.text-amber-11 {
  color: #ffe57f !important;
}
.text-amber-12 {
  color: #ffd740 !important;
}
.text-amber-13 {
  color: #ffc400 !important;
}
.text-amber-14 {
  color: #ffab00 !important;
}
.text-orange {
  color: #ff9800 !important;
}
.text-orange-1 {
  color: #fff3e0 !important;
}
.text-orange-2 {
  color: #ffe0b2 !important;
}
.text-orange-3 {
  color: #ffcc80 !important;
}
.text-orange-4 {
  color: #ffb74d !important;
}
.text-orange-5 {
  color: #ffa726 !important;
}
.text-orange-6 {
  color: #ff9800 !important;
}
.text-orange-7 {
  color: #fb8c00 !important;
}
.text-orange-8 {
  color: #f57c00 !important;
}
.text-orange-9 {
  color: #ef6c00 !important;
}
.text-orange-10 {
  color: #e65100 !important;
}
.text-orange-11 {
  color: #ffd180 !important;
}
.text-orange-12 {
  color: #ffab40 !important;
}
.text-orange-13 {
  color: #ff9100 !important;
}
.text-orange-14 {
  color: #ff6d00 !important;
}
.text-deep-orange {
  color: #ff5722 !important;
}
.text-deep-orange-1 {
  color: #fbe9e7 !important;
}
.text-deep-orange-2 {
  color: #ffccbc !important;
}
.text-deep-orange-3 {
  color: #ffab91 !important;
}
.text-deep-orange-4 {
  color: #ff8a65 !important;
}
.text-deep-orange-5 {
  color: #ff7043 !important;
}
.text-deep-orange-6 {
  color: #ff5722 !important;
}
.text-deep-orange-7 {
  color: #f4511e !important;
}
.text-deep-orange-8 {
  color: #e64a19 !important;
}
.text-deep-orange-9 {
  color: #d84315 !important;
}
.text-deep-orange-10 {
  color: #bf360c !important;
}
.text-deep-orange-11 {
  color: #ff9e80 !important;
}
.text-deep-orange-12 {
  color: #ff6e40 !important;
}
.text-deep-orange-13 {
  color: #ff3d00 !important;
}
.text-deep-orange-14 {
  color: #dd2c00 !important;
}
.text-brown {
  color: #795548 !important;
}
.text-brown-1 {
  color: #efebe9 !important;
}
.text-brown-2 {
  color: #d7ccc8 !important;
}
.text-brown-3 {
  color: #bcaaa4 !important;
}
.text-brown-4 {
  color: #a1887f !important;
}
.text-brown-5 {
  color: #8d6e63 !important;
}
.text-brown-6 {
  color: #795548 !important;
}
.text-brown-7 {
  color: #6d4c41 !important;
}
.text-brown-8 {
  color: #5d4037 !important;
}
.text-brown-9 {
  color: #4e342e !important;
}
.text-brown-10 {
  color: #3e2723 !important;
}
.text-brown-11 {
  color: #d7ccc8 !important;
}
.text-brown-12 {
  color: #bcaaa4 !important;
}
.text-brown-13 {
  color: #8d6e63 !important;
}
.text-brown-14 {
  color: #5d4037 !important;
}
.text-grey {
  color: #9e9e9e !important;
}
.text-grey-1 {
  color: #fafafa !important;
}
.text-grey-2 {
  color: #f5f5f5 !important;
}
.text-grey-3 {
  color: #eee !important;
}
.text-grey-4 {
  color: #e0e0e0 !important;
}
.text-grey-5 {
  color: #bdbdbd !important;
}
.text-grey-6 {
  color: #9e9e9e !important;
}
.text-grey-7 {
  color: #757575 !important;
}
.text-grey-8 {
  color: #616161 !important;
}
.text-grey-9 {
  color: #424242 !important;
}
.text-grey-10 {
  color: #212121 !important;
}
.text-grey-11 {
  color: #f5f5f5 !important;
}
.text-grey-12 {
  color: #eee !important;
}
.text-grey-13 {
  color: #bdbdbd !important;
}
.text-grey-14 {
  color: #616161 !important;
}
.text-blue-grey {
  color: #607d8b !important;
}
.text-blue-grey-1 {
  color: #eceff1 !important;
}
.text-blue-grey-2 {
  color: #cfd8dc !important;
}
.text-blue-grey-3 {
  color: #b0bec5 !important;
}
.text-blue-grey-4 {
  color: #90a4ae !important;
}
.text-blue-grey-5 {
  color: #78909c !important;
}
.text-blue-grey-6 {
  color: #607d8b !important;
}
.text-blue-grey-7 {
  color: #546e7a !important;
}
.text-blue-grey-8 {
  color: #455a64 !important;
}
.text-blue-grey-9 {
  color: #37474f !important;
}
.text-blue-grey-10 {
  color: #263238 !important;
}
.text-blue-grey-11 {
  color: #cfd8dc !important;
}
.text-blue-grey-12 {
  color: #b0bec5 !important;
}
.text-blue-grey-13 {
  color: #78909c !important;
}
.text-blue-grey-14 {
  color: #455a64 !important;
}
.bg-red {
  background: #f44336 !important;
}
.bg-red-1 {
  background: #ffebee !important;
}
.bg-red-2 {
  background: #ffcdd2 !important;
}
.bg-red-3 {
  background: #ef9a9a !important;
}
.bg-red-4 {
  background: #e57373 !important;
}
.bg-red-5 {
  background: #ef5350 !important;
}
.bg-red-6 {
  background: #f44336 !important;
}
.bg-red-7 {
  background: #e53935 !important;
}
.bg-red-8 {
  background: #d32f2f !important;
}
.bg-red-9 {
  background: #c62828 !important;
}
.bg-red-10 {
  background: #b71c1c !important;
}
.bg-red-11 {
  background: #ff8a80 !important;
}
.bg-red-12 {
  background: #ff5252 !important;
}
.bg-red-13 {
  background: #ff1744 !important;
}
.bg-red-14 {
  background: #d50000 !important;
}
.bg-pink {
  background: #e91e63 !important;
}
.bg-pink-1 {
  background: #fce4ec !important;
}
.bg-pink-2 {
  background: #f8bbd0 !important;
}
.bg-pink-3 {
  background: #f48fb1 !important;
}
.bg-pink-4 {
  background: #f06292 !important;
}
.bg-pink-5 {
  background: #ec407a !important;
}
.bg-pink-6 {
  background: #e91e63 !important;
}
.bg-pink-7 {
  background: #d81b60 !important;
}
.bg-pink-8 {
  background: #c2185b !important;
}
.bg-pink-9 {
  background: #ad1457 !important;
}
.bg-pink-10 {
  background: #880e4f !important;
}
.bg-pink-11 {
  background: #ff80ab !important;
}
.bg-pink-12 {
  background: #ff4081 !important;
}
.bg-pink-13 {
  background: #f50057 !important;
}
.bg-pink-14 {
  background: #c51162 !important;
}
.bg-purple {
  background: #9c27b0 !important;
}
.bg-purple-1 {
  background: #f3e5f5 !important;
}
.bg-purple-2 {
  background: #e1bee7 !important;
}
.bg-purple-3 {
  background: #ce93d8 !important;
}
.bg-purple-4 {
  background: #ba68c8 !important;
}
.bg-purple-5 {
  background: #ab47bc !important;
}
.bg-purple-6 {
  background: #9c27b0 !important;
}
.bg-purple-7 {
  background: #8e24aa !important;
}
.bg-purple-8 {
  background: #7b1fa2 !important;
}
.bg-purple-9 {
  background: #6a1b9a !important;
}
.bg-purple-10 {
  background: #4a148c !important;
}
.bg-purple-11 {
  background: #ea80fc !important;
}
.bg-purple-12 {
  background: #e040fb !important;
}
.bg-purple-13 {
  background: #d500f9 !important;
}
.bg-purple-14 {
  background: #a0f !important;
}
.bg-deep-purple {
  background: #673ab7 !important;
}
.bg-deep-purple-1 {
  background: #ede7f6 !important;
}
.bg-deep-purple-2 {
  background: #d1c4e9 !important;
}
.bg-deep-purple-3 {
  background: #b39ddb !important;
}
.bg-deep-purple-4 {
  background: #9575cd !important;
}
.bg-deep-purple-5 {
  background: #7e57c2 !important;
}
.bg-deep-purple-6 {
  background: #673ab7 !important;
}
.bg-deep-purple-7 {
  background: #5e35b1 !important;
}
.bg-deep-purple-8 {
  background: #512da8 !important;
}
.bg-deep-purple-9 {
  background: #4527a0 !important;
}
.bg-deep-purple-10 {
  background: #311b92 !important;
}
.bg-deep-purple-11 {
  background: #b388ff !important;
}
.bg-deep-purple-12 {
  background: #7c4dff !important;
}
.bg-deep-purple-13 {
  background: #651fff !important;
}
.bg-deep-purple-14 {
  background: #6200ea !important;
}
.bg-indigo {
  background: #3f51b5 !important;
}
.bg-indigo-1 {
  background: #e8eaf6 !important;
}
.bg-indigo-2 {
  background: #c5cae9 !important;
}
.bg-indigo-3 {
  background: #9fa8da !important;
}
.bg-indigo-4 {
  background: #7986cb !important;
}
.bg-indigo-5 {
  background: #5c6bc0 !important;
}
.bg-indigo-6 {
  background: #3f51b5 !important;
}
.bg-indigo-7 {
  background: #3949ab !important;
}
.bg-indigo-8 {
  background: #303f9f !important;
}
.bg-indigo-9 {
  background: #283593 !important;
}
.bg-indigo-10 {
  background: #1a237e !important;
}
.bg-indigo-11 {
  background: #8c9eff !important;
}
.bg-indigo-12 {
  background: #536dfe !important;
}
.bg-indigo-13 {
  background: #3d5afe !important;
}
.bg-indigo-14 {
  background: #304ffe !important;
}
.bg-blue {
  background: #2196f3 !important;
}
.bg-blue-1 {
  background: #e3f2fd !important;
}
.bg-blue-2 {
  background: #bbdefb !important;
}
.bg-blue-3 {
  background: #90caf9 !important;
}
.bg-blue-4 {
  background: #64b5f6 !important;
}
.bg-blue-5 {
  background: #42a5f5 !important;
}
.bg-blue-6 {
  background: #2196f3 !important;
}
.bg-blue-7 {
  background: #1e88e5 !important;
}
.bg-blue-8 {
  background: #1976d2 !important;
}
.bg-blue-9 {
  background: #1565c0 !important;
}
.bg-blue-10 {
  background: #0d47a1 !important;
}
.bg-blue-11 {
  background: #82b1ff !important;
}
.bg-blue-12 {
  background: #448aff !important;
}
.bg-blue-13 {
  background: #2979ff !important;
}
.bg-blue-14 {
  background: #2962ff !important;
}
.bg-light-blue {
  background: #03a9f4 !important;
}
.bg-light-blue-1 {
  background: #e1f5fe !important;
}
.bg-light-blue-2 {
  background: #b3e5fc !important;
}
.bg-light-blue-3 {
  background: #81d4fa !important;
}
.bg-light-blue-4 {
  background: #4fc3f7 !important;
}
.bg-light-blue-5 {
  background: #29b6f6 !important;
}
.bg-light-blue-6 {
  background: #03a9f4 !important;
}
.bg-light-blue-7 {
  background: #039be5 !important;
}
.bg-light-blue-8 {
  background: #0288d1 !important;
}
.bg-light-blue-9 {
  background: #0277bd !important;
}
.bg-light-blue-10 {
  background: #01579b !important;
}
.bg-light-blue-11 {
  background: #80d8ff !important;
}
.bg-light-blue-12 {
  background: #40c4ff !important;
}
.bg-light-blue-13 {
  background: #00b0ff !important;
}
.bg-light-blue-14 {
  background: #0091ea !important;
}
.bg-cyan {
  background: #00bcd4 !important;
}
.bg-cyan-1 {
  background: #e0f7fa !important;
}
.bg-cyan-2 {
  background: #b2ebf2 !important;
}
.bg-cyan-3 {
  background: #80deea !important;
}
.bg-cyan-4 {
  background: #4dd0e1 !important;
}
.bg-cyan-5 {
  background: #26c6da !important;
}
.bg-cyan-6 {
  background: #00bcd4 !important;
}
.bg-cyan-7 {
  background: #00acc1 !important;
}
.bg-cyan-8 {
  background: #0097a7 !important;
}
.bg-cyan-9 {
  background: #00838f !important;
}
.bg-cyan-10 {
  background: #006064 !important;
}
.bg-cyan-11 {
  background: #84ffff !important;
}
.bg-cyan-12 {
  background: #18ffff !important;
}
.bg-cyan-13 {
  background: #00e5ff !important;
}
.bg-cyan-14 {
  background: #00b8d4 !important;
}
.bg-teal {
  background: #009688 !important;
}
.bg-teal-1 {
  background: #e0f2f1 !important;
}
.bg-teal-2 {
  background: #b2dfdb !important;
}
.bg-teal-3 {
  background: #80cbc4 !important;
}
.bg-teal-4 {
  background: #4db6ac !important;
}
.bg-teal-5 {
  background: #26a69a !important;
}
.bg-teal-6 {
  background: #009688 !important;
}
.bg-teal-7 {
  background: #00897b !important;
}
.bg-teal-8 {
  background: #00796b !important;
}
.bg-teal-9 {
  background: #00695c !important;
}
.bg-teal-10 {
  background: #004d40 !important;
}
.bg-teal-11 {
  background: #a7ffeb !important;
}
.bg-teal-12 {
  background: #64ffda !important;
}
.bg-teal-13 {
  background: #1de9b6 !important;
}
.bg-teal-14 {
  background: #00bfa5 !important;
}
.bg-green {
  background: #4caf50 !important;
}
.bg-green-1 {
  background: #e8f5e9 !important;
}
.bg-green-2 {
  background: #c8e6c9 !important;
}
.bg-green-3 {
  background: #a5d6a7 !important;
}
.bg-green-4 {
  background: #81c784 !important;
}
.bg-green-5 {
  background: #66bb6a !important;
}
.bg-green-6 {
  background: #4caf50 !important;
}
.bg-green-7 {
  background: #43a047 !important;
}
.bg-green-8 {
  background: #388e3c !important;
}
.bg-green-9 {
  background: #2e7d32 !important;
}
.bg-green-10 {
  background: #1b5e20 !important;
}
.bg-green-11 {
  background: #b9f6ca !important;
}
.bg-green-12 {
  background: #69f0ae !important;
}
.bg-green-13 {
  background: #00e676 !important;
}
.bg-green-14 {
  background: #00c853 !important;
}
.bg-light-green {
  background: #8bc34a !important;
}
.bg-light-green-1 {
  background: #f1f8e9 !important;
}
.bg-light-green-2 {
  background: #dcedc8 !important;
}
.bg-light-green-3 {
  background: #c5e1a5 !important;
}
.bg-light-green-4 {
  background: #aed581 !important;
}
.bg-light-green-5 {
  background: #9ccc65 !important;
}
.bg-light-green-6 {
  background: #8bc34a !important;
}
.bg-light-green-7 {
  background: #7cb342 !important;
}
.bg-light-green-8 {
  background: #689f38 !important;
}
.bg-light-green-9 {
  background: #558b2f !important;
}
.bg-light-green-10 {
  background: #33691e !important;
}
.bg-light-green-11 {
  background: #ccff90 !important;
}
.bg-light-green-12 {
  background: #b2ff59 !important;
}
.bg-light-green-13 {
  background: #76ff03 !important;
}
.bg-light-green-14 {
  background: #64dd17 !important;
}
.bg-lime {
  background: #cddc39 !important;
}
.bg-lime-1 {
  background: #f9fbe7 !important;
}
.bg-lime-2 {
  background: #f0f4c3 !important;
}
.bg-lime-3 {
  background: #e6ee9c !important;
}
.bg-lime-4 {
  background: #dce775 !important;
}
.bg-lime-5 {
  background: #d4e157 !important;
}
.bg-lime-6 {
  background: #cddc39 !important;
}
.bg-lime-7 {
  background: #c0ca33 !important;
}
.bg-lime-8 {
  background: #afb42b !important;
}
.bg-lime-9 {
  background: #9e9d24 !important;
}
.bg-lime-10 {
  background: #827717 !important;
}
.bg-lime-11 {
  background: #f4ff81 !important;
}
.bg-lime-12 {
  background: #eeff41 !important;
}
.bg-lime-13 {
  background: #c6ff00 !important;
}
.bg-lime-14 {
  background: #aeea00 !important;
}
.bg-yellow {
  background: #ffeb3b !important;
}
.bg-yellow-1 {
  background: #fffde7 !important;
}
.bg-yellow-2 {
  background: #fff9c4 !important;
}
.bg-yellow-3 {
  background: #fff59d !important;
}
.bg-yellow-4 {
  background: #fff176 !important;
}
.bg-yellow-5 {
  background: #ffee58 !important;
}
.bg-yellow-6 {
  background: #ffeb3b !important;
}
.bg-yellow-7 {
  background: #fdd835 !important;
}
.bg-yellow-8 {
  background: #fbc02d !important;
}
.bg-yellow-9 {
  background: #f9a825 !important;
}
.bg-yellow-10 {
  background: #f57f17 !important;
}
.bg-yellow-11 {
  background: #ffff8d !important;
}
.bg-yellow-12 {
  background: #ff0 !important;
}
.bg-yellow-13 {
  background: #ffea00 !important;
}
.bg-yellow-14 {
  background: #ffd600 !important;
}
.bg-amber {
  background: #ffc107 !important;
}
.bg-amber-1 {
  background: #fff8e1 !important;
}
.bg-amber-2 {
  background: #ffecb3 !important;
}
.bg-amber-3 {
  background: #ffe082 !important;
}
.bg-amber-4 {
  background: #ffd54f !important;
}
.bg-amber-5 {
  background: #ffca28 !important;
}
.bg-amber-6 {
  background: #ffc107 !important;
}
.bg-amber-7 {
  background: #ffb300 !important;
}
.bg-amber-8 {
  background: #ffa000 !important;
}
.bg-amber-9 {
  background: #ff8f00 !important;
}
.bg-amber-10 {
  background: #ff6f00 !important;
}
.bg-amber-11 {
  background: #ffe57f !important;
}
.bg-amber-12 {
  background: #ffd740 !important;
}
.bg-amber-13 {
  background: #ffc400 !important;
}
.bg-amber-14 {
  background: #ffab00 !important;
}
.bg-orange {
  background: #ff9800 !important;
}
.bg-orange-1 {
  background: #fff3e0 !important;
}
.bg-orange-2 {
  background: #ffe0b2 !important;
}
.bg-orange-3 {
  background: #ffcc80 !important;
}
.bg-orange-4 {
  background: #ffb74d !important;
}
.bg-orange-5 {
  background: #ffa726 !important;
}
.bg-orange-6 {
  background: #ff9800 !important;
}
.bg-orange-7 {
  background: #fb8c00 !important;
}
.bg-orange-8 {
  background: #f57c00 !important;
}
.bg-orange-9 {
  background: #ef6c00 !important;
}
.bg-orange-10 {
  background: #e65100 !important;
}
.bg-orange-11 {
  background: #ffd180 !important;
}
.bg-orange-12 {
  background: #ffab40 !important;
}
.bg-orange-13 {
  background: #ff9100 !important;
}
.bg-orange-14 {
  background: #ff6d00 !important;
}
.bg-deep-orange {
  background: #ff5722 !important;
}
.bg-deep-orange-1 {
  background: #fbe9e7 !important;
}
.bg-deep-orange-2 {
  background: #ffccbc !important;
}
.bg-deep-orange-3 {
  background: #ffab91 !important;
}
.bg-deep-orange-4 {
  background: #ff8a65 !important;
}
.bg-deep-orange-5 {
  background: #ff7043 !important;
}
.bg-deep-orange-6 {
  background: #ff5722 !important;
}
.bg-deep-orange-7 {
  background: #f4511e !important;
}
.bg-deep-orange-8 {
  background: #e64a19 !important;
}
.bg-deep-orange-9 {
  background: #d84315 !important;
}
.bg-deep-orange-10 {
  background: #bf360c !important;
}
.bg-deep-orange-11 {
  background: #ff9e80 !important;
}
.bg-deep-orange-12 {
  background: #ff6e40 !important;
}
.bg-deep-orange-13 {
  background: #ff3d00 !important;
}
.bg-deep-orange-14 {
  background: #dd2c00 !important;
}
.bg-brown {
  background: #795548 !important;
}
.bg-brown-1 {
  background: #efebe9 !important;
}
.bg-brown-2 {
  background: #d7ccc8 !important;
}
.bg-brown-3 {
  background: #bcaaa4 !important;
}
.bg-brown-4 {
  background: #a1887f !important;
}
.bg-brown-5 {
  background: #8d6e63 !important;
}
.bg-brown-6 {
  background: #795548 !important;
}
.bg-brown-7 {
  background: #6d4c41 !important;
}
.bg-brown-8 {
  background: #5d4037 !important;
}
.bg-brown-9 {
  background: #4e342e !important;
}
.bg-brown-10 {
  background: #3e2723 !important;
}
.bg-brown-11 {
  background: #d7ccc8 !important;
}
.bg-brown-12 {
  background: #bcaaa4 !important;
}
.bg-brown-13 {
  background: #8d6e63 !important;
}
.bg-brown-14 {
  background: #5d4037 !important;
}
.bg-grey {
  background: #9e9e9e !important;
}
.bg-grey-1 {
  background: #fafafa !important;
}
.bg-grey-2 {
  background: #f5f5f5 !important;
}
.bg-grey-3 {
  background: #eee !important;
}
.bg-grey-4 {
  background: #e0e0e0 !important;
}
.bg-grey-5 {
  background: #bdbdbd !important;
}
.bg-grey-6 {
  background: #9e9e9e !important;
}
.bg-grey-7 {
  background: #757575 !important;
}
.bg-grey-8 {
  background: #616161 !important;
}
.bg-grey-9 {
  background: #424242 !important;
}
.bg-grey-10 {
  background: #212121 !important;
}
.bg-grey-11 {
  background: #f5f5f5 !important;
}
.bg-grey-12 {
  background: #eee !important;
}
.bg-grey-13 {
  background: #bdbdbd !important;
}
.bg-grey-14 {
  background: #616161 !important;
}
.bg-blue-grey {
  background: #607d8b !important;
}
.bg-blue-grey-1 {
  background: #eceff1 !important;
}
.bg-blue-grey-2 {
  background: #cfd8dc !important;
}
.bg-blue-grey-3 {
  background: #b0bec5 !important;
}
.bg-blue-grey-4 {
  background: #90a4ae !important;
}
.bg-blue-grey-5 {
  background: #78909c !important;
}
.bg-blue-grey-6 {
  background: #607d8b !important;
}
.bg-blue-grey-7 {
  background: #546e7a !important;
}
.bg-blue-grey-8 {
  background: #455a64 !important;
}
.bg-blue-grey-9 {
  background: #37474f !important;
}
.bg-blue-grey-10 {
  background: #263238 !important;
}
.bg-blue-grey-11 {
  background: #cfd8dc !important;
}
.bg-blue-grey-12 {
  background: #b0bec5 !important;
}
.bg-blue-grey-13 {
  background: #78909c !important;
}
.bg-blue-grey-14 {
  background: #455a64 !important;
}
.shadow-transition {
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.shadow-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
}
.shadow-up-1 {
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2), 0 -1px 1px rgba(0, 0, 0, 0.14),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12);
}
.shadow-2 {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
.shadow-up-2 {
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2), 0 -2px 2px rgba(0, 0, 0, 0.14),
    0 -3px 1px -2px rgba(0, 0, 0, 0.12);
}
.shadow-3 {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.12);
}
.shadow-up-3 {
  box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.2), 0 -3px 4px rgba(0, 0, 0, 0.14),
    0 -3px 3px -2px rgba(0, 0, 0, 0.12);
}
.shadow-4 {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14),
    0 1px 10px rgba(0, 0, 0, 0.12);
}
.shadow-up-4 {
  box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.2), 0 -4px 5px rgba(0, 0, 0, 0.14),
    0 -1px 10px rgba(0, 0, 0, 0.12);
}
.shadow-5 {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14),
    0 1px 14px rgba(0, 0, 0, 0.12);
}
.shadow-up-5 {
  box-shadow: 0 -3px 5px -1px rgba(0, 0, 0, 0.2), 0 -5px 8px rgba(0, 0, 0, 0.14),
    0 -1px 14px rgba(0, 0, 0, 0.12);
}
.shadow-6 {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.14),
    0 1px 18px rgba(0, 0, 0, 0.12);
}
.shadow-up-6 {
  box-shadow: 0 -3px 5px -1px rgba(0, 0, 0, 0.2),
    0 -6px 10px rgba(0, 0, 0, 0.14), 0 -1px 18px rgba(0, 0, 0, 0.12);
}
.shadow-7 {
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2),
    0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);
}
.shadow-up-7 {
  box-shadow: 0 -4px 5px -2px rgba(0, 0, 0, 0.2),
    0 -7px 10px 1px rgba(0, 0, 0, 0.14), 0 -2px 16px 1px rgba(0, 0, 0, 0.12);
}
.shadow-8 {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.shadow-up-8 {
  box-shadow: 0 -5px 5px -3px rgba(0, 0, 0, 0.2),
    0 -8px 10px 1px rgba(0, 0, 0, 0.14), 0 -3px 14px 2px rgba(0, 0, 0, 0.12);
}
.shadow-9 {
  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2),
    0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);
}
.shadow-up-9 {
  box-shadow: 0 -5px 6px -3px rgba(0, 0, 0, 0.2),
    0 -9px 12px 1px rgba(0, 0, 0, 0.14), 0 -3px 16px 2px rgba(0, 0, 0, 0.12);
}
.shadow-10 {
  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2),
    0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);
}
.shadow-up-10 {
  box-shadow: 0 -6px 6px -3px rgba(0, 0, 0, 0.2),
    0 -10px 14px 1px rgba(0, 0, 0, 0.14), 0 -4px 18px 3px rgba(0, 0, 0, 0.12);
}
.shadow-11 {
  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2),
    0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12);
}
.shadow-up-11 {
  box-shadow: 0 -6px 7px -4px rgba(0, 0, 0, 0.2),
    0 -11px 15px 1px rgba(0, 0, 0, 0.14), 0 -4px 20px 3px rgba(0, 0, 0, 0.12);
}
.shadow-12 {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.shadow-up-12 {
  box-shadow: 0 -7px 8px -4px rgba(0, 0, 0, 0.2),
    0 -12px 17px 2px rgba(0, 0, 0, 0.14), 0 -5px 22px 4px rgba(0, 0, 0, 0.12);
}
.shadow-13 {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);
}
.shadow-up-13 {
  box-shadow: 0 -7px 8px -4px rgba(0, 0, 0, 0.2),
    0 -13px 19px 2px rgba(0, 0, 0, 0.14), 0 -5px 24px 4px rgba(0, 0, 0, 0.12);
}
.shadow-14 {
  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2),
    0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12);
}
.shadow-up-14 {
  box-shadow: 0 -7px 9px -4px rgba(0, 0, 0, 0.2),
    0 -14px 21px 2px rgba(0, 0, 0, 0.14), 0 -5px 26px 4px rgba(0, 0, 0, 0.12);
}
.shadow-15 {
  box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2),
    0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12);
}
.shadow-up-15 {
  box-shadow: 0 -8px 9px -5px rgba(0, 0, 0, 0.2),
    0 -15px 22px 2px rgba(0, 0, 0, 0.14), 0 -6px 28px 5px rgba(0, 0, 0, 0.12);
}
.shadow-16 {
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
}
.shadow-up-16 {
  box-shadow: 0 -8px 10px -5px rgba(0, 0, 0, 0.2),
    0 -16px 24px 2px rgba(0, 0, 0, 0.14), 0 -6px 30px 5px rgba(0, 0, 0, 0.12);
}
.shadow-17 {
  box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2),
    0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12);
}
.shadow-up-17 {
  box-shadow: 0 -8px 11px -5px rgba(0, 0, 0, 0.2),
    0 -17px 26px 2px rgba(0, 0, 0, 0.14), 0 -6px 32px 5px rgba(0, 0, 0, 0.12);
}
.shadow-18 {
  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.2),
    0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12);
}
.shadow-up-18 {
  box-shadow: 0 -9px 11px -5px rgba(0, 0, 0, 0.2),
    0 -18px 28px 2px rgba(0, 0, 0, 0.14), 0 -7px 34px 6px rgba(0, 0, 0, 0.12);
}
.shadow-19 {
  box-shadow: 0 9px 12px -6px rgba(0, 0, 0, 0.2),
    0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12);
}
.shadow-up-19 {
  box-shadow: 0 -9px 12px -6px rgba(0, 0, 0, 0.2),
    0 -19px 29px 2px rgba(0, 0, 0, 0.14), 0 -7px 36px 6px rgba(0, 0, 0, 0.12);
}
.shadow-20 {
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2),
    0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);
}
.shadow-up-20 {
  box-shadow: 0 -10px 13px -6px rgba(0, 0, 0, 0.2),
    0 -20px 31px 3px rgba(0, 0, 0, 0.14), 0 -8px 38px 7px rgba(0, 0, 0, 0.12);
}
.shadow-21 {
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2),
    0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12);
}
.shadow-up-21 {
  box-shadow: 0 -10px 13px -6px rgba(0, 0, 0, 0.2),
    0 -21px 33px 3px rgba(0, 0, 0, 0.14), 0 -8px 40px 7px rgba(0, 0, 0, 0.12);
}
.shadow-22 {
  box-shadow: 0 10px 14px -6px rgba(0, 0, 0, 0.2),
    0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12);
}
.shadow-up-22 {
  box-shadow: 0 -10px 14px -6px rgba(0, 0, 0, 0.2),
    0 -22px 35px 3px rgba(0, 0, 0, 0.14), 0 -8px 42px 7px rgba(0, 0, 0, 0.12);
}
.shadow-23 {
  box-shadow: 0 11px 14px -7px rgba(0, 0, 0, 0.2),
    0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12);
}
.shadow-up-23 {
  box-shadow: 0 -11px 14px -7px rgba(0, 0, 0, 0.2),
    0 -23px 36px 3px rgba(0, 0, 0, 0.14), 0 -9px 44px 8px rgba(0, 0, 0, 0.12);
}
.shadow-24 {
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
}
.shadow-up-24 {
  box-shadow: 0 -11px 15px -7px rgba(0, 0, 0, 0.2),
    0 -24px 38px 3px rgba(0, 0, 0, 0.14), 0 -9px 46px 8px rgba(0, 0, 0, 0.12);
}
.no-shadow,
.shadow-0 {
  box-shadow: none !important;
}
.inset-shadow {
  box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.7) !important;
}
.inset-shadow-down {
  box-shadow: inset 0 -7px 9px -7px rgba(0, 0, 0, 0.7) !important;
}
.z-marginals {
  z-index: 2000;
}
.z-notify {
  z-index: 9500;
}
.z-fullscreen {
  z-index: 6000;
}
.z-inherit {
  z-index: inherit !important;
}
.column,
.flex,
.row {
  display: flex;
  flex-wrap: wrap;
}
.column.inline,
.flex.inline,
.row.inline {
  display: inline-flex;
}
.row.reverse {
  flex-direction: row-reverse;
}
.column {
  flex-direction: column;
}
.column.reverse {
  flex-direction: column-reverse;
}
.wrap {
  flex-wrap: wrap;
}
.no-wrap {
  flex-wrap: nowrap;
}
.reverse-wrap {
  flex-wrap: wrap-reverse;
}
.order-first {
  order: -10000;
}
.order-last {
  order: 10000;
}
.order-none {
  order: 0;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.flex-center,
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-evenly {
  justify-content: space-evenly;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.flex-center,
.items-center {
  align-items: center;
}
.items-baseline {
  align-items: baseline;
}
.items-stretch {
  align-items: stretch;
}
.content-start {
  align-content: flex-start;
}
.content-end {
  align-content: flex-end;
}
.content-center {
  align-content: center;
}
.content-stretch {
  align-content: stretch;
}
.content-between {
  align-content: space-between;
}
.content-around {
  align-content: space-around;
}
.self-start {
  align-self: flex-start;
}
.self-end {
  align-self: flex-end;
}
.self-center {
  align-self: center;
}
.self-baseline {
  align-self: baseline;
}
.self-stretch {
  align-self: stretch;
}
.q-gutter-none,
.q-gutter-none > *,
.q-gutter-x-none,
.q-gutter-x-none > * {
  margin-left: 0;
}
.q-gutter-none,
.q-gutter-none > *,
.q-gutter-y-none,
.q-gutter-y-none > * {
  margin-top: 0;
}
.q-col-gutter-none,
.q-col-gutter-x-none {
  margin-left: 0;
}
.q-col-gutter-none > *,
.q-col-gutter-x-none > * {
  padding-left: 0;
}
.q-col-gutter-none,
.q-col-gutter-y-none {
  margin-top: 0;
}
.q-col-gutter-none > *,
.q-col-gutter-y-none > * {
  padding-top: 0;
}
.q-gutter-x-xs,
.q-gutter-xs {
  margin-left: -4px;
}
.q-gutter-x-xs > *,
.q-gutter-xs > * {
  margin-left: 4px;
}
.q-gutter-xs,
.q-gutter-y-xs {
  margin-top: -4px;
}
.q-gutter-xs > *,
.q-gutter-y-xs > * {
  margin-top: 4px;
}
.q-col-gutter-x-xs,
.q-col-gutter-xs {
  margin-left: -4px;
}
.q-col-gutter-x-xs > *,
.q-col-gutter-xs > * {
  padding-left: 4px;
}
.q-col-gutter-xs,
.q-col-gutter-y-xs {
  margin-top: -4px;
}
.q-col-gutter-xs > *,
.q-col-gutter-y-xs > * {
  padding-top: 4px;
}
.q-gutter-sm,
.q-gutter-x-sm {
  margin-left: -8px;
}
.q-gutter-sm > *,
.q-gutter-x-sm > * {
  margin-left: 8px;
}
.q-gutter-sm,
.q-gutter-y-sm {
  margin-top: -8px;
}
.q-gutter-sm > *,
.q-gutter-y-sm > * {
  margin-top: 8px;
}
.q-col-gutter-sm,
.q-col-gutter-x-sm {
  margin-left: -8px;
}
.q-col-gutter-sm > *,
.q-col-gutter-x-sm > * {
  padding-left: 8px;
}
.q-col-gutter-sm,
.q-col-gutter-y-sm {
  margin-top: -8px;
}
.q-col-gutter-sm > *,
.q-col-gutter-y-sm > * {
  padding-top: 8px;
}
.q-gutter-md,
.q-gutter-x-md {
  margin-left: -16px;
}
.q-gutter-md > *,
.q-gutter-x-md > * {
  margin-left: 16px;
}
.q-gutter-md,
.q-gutter-y-md {
  margin-top: -16px;
}
.q-gutter-md > *,
.q-gutter-y-md > * {
  margin-top: 16px;
}
.q-col-gutter-md,
.q-col-gutter-x-md {
  margin-left: -16px;
}
.q-col-gutter-md > *,
.q-col-gutter-x-md > * {
  padding-left: 16px;
}
.q-col-gutter-md,
.q-col-gutter-y-md {
  margin-top: -16px;
}
.q-col-gutter-md > *,
.q-col-gutter-y-md > * {
  padding-top: 16px;
}
.q-gutter-lg,
.q-gutter-x-lg {
  margin-left: -24px;
}
.q-gutter-lg > *,
.q-gutter-x-lg > * {
  margin-left: 24px;
}
.q-gutter-lg,
.q-gutter-y-lg {
  margin-top: -24px;
}
.q-gutter-lg > *,
.q-gutter-y-lg > * {
  margin-top: 24px;
}
.q-col-gutter-lg,
.q-col-gutter-x-lg {
  margin-left: -24px;
}
.q-col-gutter-lg > *,
.q-col-gutter-x-lg > * {
  padding-left: 24px;
}
.q-col-gutter-lg,
.q-col-gutter-y-lg {
  margin-top: -24px;
}
.q-col-gutter-lg > *,
.q-col-gutter-y-lg > * {
  padding-top: 24px;
}
.q-gutter-x-xl,
.q-gutter-xl {
  margin-left: -48px;
}
.q-gutter-x-xl > *,
.q-gutter-xl > * {
  margin-left: 48px;
}
.q-gutter-xl,
.q-gutter-y-xl {
  margin-top: -48px;
}
.q-gutter-xl > *,
.q-gutter-y-xl > * {
  margin-top: 48px;
}
.q-col-gutter-x-xl,
.q-col-gutter-xl {
  margin-left: -48px;
}
.q-col-gutter-x-xl > *,
.q-col-gutter-xl > * {
  padding-left: 48px;
}
.q-col-gutter-xl,
.q-col-gutter-y-xl {
  margin-top: -48px;
}
.q-col-gutter-xl > *,
.q-col-gutter-y-xl > * {
  padding-top: 48px;
}
@media (min-width: 0) {
  .flex > .col,
  .flex > .col-0,
  .flex > .col-1,
  .flex > .col-2,
  .flex > .col-3,
  .flex > .col-4,
  .flex > .col-5,
  .flex > .col-6,
  .flex > .col-7,
  .flex > .col-8,
  .flex > .col-9,
  .flex > .col-10,
  .flex > .col-11,
  .flex > .col-12,
  .flex > .col-auto,
  .flex > .col-grow,
  .flex > .col-shrink,
  .flex > .col-xs,
  .flex > .col-xs-0,
  .flex > .col-xs-1,
  .flex > .col-xs-2,
  .flex > .col-xs-3,
  .flex > .col-xs-4,
  .flex > .col-xs-5,
  .flex > .col-xs-6,
  .flex > .col-xs-7,
  .flex > .col-xs-8,
  .flex > .col-xs-9,
  .flex > .col-xs-10,
  .flex > .col-xs-11,
  .flex > .col-xs-12,
  .flex > .col-xs-auto,
  .flex > .col-xs-grow,
  .flex > .col-xs-shrink,
  .row > .col,
  .row > .col-0,
  .row > .col-1,
  .row > .col-2,
  .row > .col-3,
  .row > .col-4,
  .row > .col-5,
  .row > .col-6,
  .row > .col-7,
  .row > .col-8,
  .row > .col-9,
  .row > .col-10,
  .row > .col-11,
  .row > .col-12,
  .row > .col-auto,
  .row > .col-grow,
  .row > .col-shrink,
  .row > .col-xs,
  .row > .col-xs-0,
  .row > .col-xs-1,
  .row > .col-xs-2,
  .row > .col-xs-3,
  .row > .col-xs-4,
  .row > .col-xs-5,
  .row > .col-xs-6,
  .row > .col-xs-7,
  .row > .col-xs-8,
  .row > .col-xs-9,
  .row > .col-xs-10,
  .row > .col-xs-11,
  .row > .col-xs-12,
  .row > .col-xs-auto,
  .row > .col-xs-grow,
  .row > .col-xs-shrink {
    width: auto;
    min-width: 0;
    max-width: 100%;
  }
  .column > .col,
  .column > .col-0,
  .column > .col-1,
  .column > .col-2,
  .column > .col-3,
  .column > .col-4,
  .column > .col-5,
  .column > .col-6,
  .column > .col-7,
  .column > .col-8,
  .column > .col-9,
  .column > .col-10,
  .column > .col-11,
  .column > .col-12,
  .column > .col-auto,
  .column > .col-grow,
  .column > .col-shrink,
  .column > .col-xs,
  .column > .col-xs-0,
  .column > .col-xs-1,
  .column > .col-xs-2,
  .column > .col-xs-3,
  .column > .col-xs-4,
  .column > .col-xs-5,
  .column > .col-xs-6,
  .column > .col-xs-7,
  .column > .col-xs-8,
  .column > .col-xs-9,
  .column > .col-xs-10,
  .column > .col-xs-11,
  .column > .col-xs-12,
  .column > .col-xs-auto,
  .column > .col-xs-grow,
  .column > .col-xs-shrink,
  .flex > .col,
  .flex > .col-0,
  .flex > .col-1,
  .flex > .col-2,
  .flex > .col-3,
  .flex > .col-4,
  .flex > .col-5,
  .flex > .col-6,
  .flex > .col-7,
  .flex > .col-8,
  .flex > .col-9,
  .flex > .col-10,
  .flex > .col-11,
  .flex > .col-12,
  .flex > .col-auto,
  .flex > .col-grow,
  .flex > .col-shrink,
  .flex > .col-xs,
  .flex > .col-xs-0,
  .flex > .col-xs-1,
  .flex > .col-xs-2,
  .flex > .col-xs-3,
  .flex > .col-xs-4,
  .flex > .col-xs-5,
  .flex > .col-xs-6,
  .flex > .col-xs-7,
  .flex > .col-xs-8,
  .flex > .col-xs-9,
  .flex > .col-xs-10,
  .flex > .col-xs-11,
  .flex > .col-xs-12,
  .flex > .col-xs-auto,
  .flex > .col-xs-grow,
  .flex > .col-xs-shrink {
    height: auto;
    min-height: 0;
    max-height: 100%;
  }
  .col,
  .col-xs {
    flex: 10000 1 0%;
  }
  .col-0,
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col-auto,
  .col-xs-0,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-auto {
    flex: 0 0 auto;
  }
  .col-grow,
  .col-xs-grow {
    flex: 1 0 auto;
  }
  .col-shrink,
  .col-xs-shrink {
    flex: 0 1 auto;
  }
  .row > .col-0,
  .row > .col-xs-0 {
    height: auto;
    width: 0%;
  }
  .row > .offset-0,
  .row > .offset-xs-0 {
    margin-left: 0%;
  }
  .column > .col-0,
  .column > .col-xs-0 {
    height: 0%;
    width: auto;
  }
  .row > .col-1,
  .row > .col-xs-1 {
    height: auto;
    width: 8.3333%;
  }
  .row > .offset-1,
  .row > .offset-xs-1 {
    margin-left: 8.3333%;
  }
  .column > .col-1,
  .column > .col-xs-1 {
    height: 8.3333%;
    width: auto;
  }
  .row > .col-2,
  .row > .col-xs-2 {
    height: auto;
    width: 16.6667%;
  }
  .row > .offset-2,
  .row > .offset-xs-2 {
    margin-left: 16.6667%;
  }
  .column > .col-2,
  .column > .col-xs-2 {
    height: 16.6667%;
    width: auto;
  }
  .row > .col-3,
  .row > .col-xs-3 {
    height: auto;
    width: 25%;
  }
  .row > .offset-3,
  .row > .offset-xs-3 {
    margin-left: 25%;
  }
  .column > .col-3,
  .column > .col-xs-3 {
    height: 25%;
    width: auto;
  }
  .row > .col-4,
  .row > .col-xs-4 {
    height: auto;
    width: 33.3333%;
  }
  .row > .offset-4,
  .row > .offset-xs-4 {
    margin-left: 33.3333%;
  }
  .column > .col-4,
  .column > .col-xs-4 {
    height: 33.3333%;
    width: auto;
  }
  .row > .col-5,
  .row > .col-xs-5 {
    height: auto;
    width: 41.6667%;
  }
  .row > .offset-5,
  .row > .offset-xs-5 {
    margin-left: 41.6667%;
  }
  .column > .col-5,
  .column > .col-xs-5 {
    height: 41.6667%;
    width: auto;
  }
  .row > .col-6,
  .row > .col-xs-6 {
    height: auto;
    width: 50%;
  }
  .row > .offset-6,
  .row > .offset-xs-6 {
    margin-left: 50%;
  }
  .column > .col-6,
  .column > .col-xs-6 {
    height: 50%;
    width: auto;
  }
  .row > .col-7,
  .row > .col-xs-7 {
    height: auto;
    width: 58.3333%;
  }
  .row > .offset-7,
  .row > .offset-xs-7 {
    margin-left: 58.3333%;
  }
  .column > .col-7,
  .column > .col-xs-7 {
    height: 58.3333%;
    width: auto;
  }
  .row > .col-8,
  .row > .col-xs-8 {
    height: auto;
    width: 66.6667%;
  }
  .row > .offset-8,
  .row > .offset-xs-8 {
    margin-left: 66.6667%;
  }
  .column > .col-8,
  .column > .col-xs-8 {
    height: 66.6667%;
    width: auto;
  }
  .row > .col-9,
  .row > .col-xs-9 {
    height: auto;
    width: 75%;
  }
  .row > .offset-9,
  .row > .offset-xs-9 {
    margin-left: 75%;
  }
  .column > .col-9,
  .column > .col-xs-9 {
    height: 75%;
    width: auto;
  }
  .row > .col-10,
  .row > .col-xs-10 {
    height: auto;
    width: 83.3333%;
  }
  .row > .offset-10,
  .row > .offset-xs-10 {
    margin-left: 83.3333%;
  }
  .column > .col-10,
  .column > .col-xs-10 {
    height: 83.3333%;
    width: auto;
  }
  .row > .col-11,
  .row > .col-xs-11 {
    height: auto;
    width: 91.6667%;
  }
  .row > .offset-11,
  .row > .offset-xs-11 {
    margin-left: 91.6667%;
  }
  .column > .col-11,
  .column > .col-xs-11 {
    height: 91.6667%;
    width: auto;
  }
  .row > .col-12,
  .row > .col-xs-12 {
    height: auto;
    width: 100%;
  }
  .row > .offset-12,
  .row > .offset-xs-12 {
    margin-left: 100%;
  }
  .column > .col-12,
  .column > .col-xs-12 {
    height: 100%;
    width: auto;
  }
  .row > .col-all {
    height: auto;
    flex: 0 0 100%;
  }
}
@media (min-width: 600px) {
  .flex > .col-sm,
  .flex > .col-sm-0,
  .flex > .col-sm-1,
  .flex > .col-sm-2,
  .flex > .col-sm-3,
  .flex > .col-sm-4,
  .flex > .col-sm-5,
  .flex > .col-sm-6,
  .flex > .col-sm-7,
  .flex > .col-sm-8,
  .flex > .col-sm-9,
  .flex > .col-sm-10,
  .flex > .col-sm-11,
  .flex > .col-sm-12,
  .flex > .col-sm-auto,
  .flex > .col-sm-grow,
  .flex > .col-sm-shrink,
  .row > .col-sm,
  .row > .col-sm-0,
  .row > .col-sm-1,
  .row > .col-sm-2,
  .row > .col-sm-3,
  .row > .col-sm-4,
  .row > .col-sm-5,
  .row > .col-sm-6,
  .row > .col-sm-7,
  .row > .col-sm-8,
  .row > .col-sm-9,
  .row > .col-sm-10,
  .row > .col-sm-11,
  .row > .col-sm-12,
  .row > .col-sm-auto,
  .row > .col-sm-grow,
  .row > .col-sm-shrink {
    width: auto;
    min-width: 0;
    max-width: 100%;
  }
  .column > .col-sm,
  .column > .col-sm-0,
  .column > .col-sm-1,
  .column > .col-sm-2,
  .column > .col-sm-3,
  .column > .col-sm-4,
  .column > .col-sm-5,
  .column > .col-sm-6,
  .column > .col-sm-7,
  .column > .col-sm-8,
  .column > .col-sm-9,
  .column > .col-sm-10,
  .column > .col-sm-11,
  .column > .col-sm-12,
  .column > .col-sm-auto,
  .column > .col-sm-grow,
  .column > .col-sm-shrink,
  .flex > .col-sm,
  .flex > .col-sm-0,
  .flex > .col-sm-1,
  .flex > .col-sm-2,
  .flex > .col-sm-3,
  .flex > .col-sm-4,
  .flex > .col-sm-5,
  .flex > .col-sm-6,
  .flex > .col-sm-7,
  .flex > .col-sm-8,
  .flex > .col-sm-9,
  .flex > .col-sm-10,
  .flex > .col-sm-11,
  .flex > .col-sm-12,
  .flex > .col-sm-auto,
  .flex > .col-sm-grow,
  .flex > .col-sm-shrink {
    height: auto;
    min-height: 0;
    max-height: 100%;
  }
  .col-sm {
    flex: 10000 1 0%;
  }
  .col-sm-0,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-auto {
    flex: 0 0 auto;
  }
  .col-sm-grow {
    flex: 1 0 auto;
  }
  .col-sm-shrink {
    flex: 0 1 auto;
  }
  .row > .col-sm-0 {
    height: auto;
    width: 0%;
  }
  .row > .offset-sm-0 {
    margin-left: 0%;
  }
  .column > .col-sm-0 {
    height: 0%;
    width: auto;
  }
  .row > .col-sm-1 {
    height: auto;
    width: 8.3333%;
  }
  .row > .offset-sm-1 {
    margin-left: 8.3333%;
  }
  .column > .col-sm-1 {
    height: 8.3333%;
    width: auto;
  }
  .row > .col-sm-2 {
    height: auto;
    width: 16.6667%;
  }
  .row > .offset-sm-2 {
    margin-left: 16.6667%;
  }
  .column > .col-sm-2 {
    height: 16.6667%;
    width: auto;
  }
  .row > .col-sm-3 {
    height: auto;
    width: 25%;
  }
  .row > .offset-sm-3 {
    margin-left: 25%;
  }
  .column > .col-sm-3 {
    height: 25%;
    width: auto;
  }
  .row > .col-sm-4 {
    height: auto;
    width: 33.3333%;
  }
  .row > .offset-sm-4 {
    margin-left: 33.3333%;
  }
  .column > .col-sm-4 {
    height: 33.3333%;
    width: auto;
  }
  .row > .col-sm-5 {
    height: auto;
    width: 41.6667%;
  }
  .row > .offset-sm-5 {
    margin-left: 41.6667%;
  }
  .column > .col-sm-5 {
    height: 41.6667%;
    width: auto;
  }
  .row > .col-sm-6 {
    height: auto;
    width: 50%;
  }
  .row > .offset-sm-6 {
    margin-left: 50%;
  }
  .column > .col-sm-6 {
    height: 50%;
    width: auto;
  }
  .row > .col-sm-7 {
    height: auto;
    width: 58.3333%;
  }
  .row > .offset-sm-7 {
    margin-left: 58.3333%;
  }
  .column > .col-sm-7 {
    height: 58.3333%;
    width: auto;
  }
  .row > .col-sm-8 {
    height: auto;
    width: 66.6667%;
  }
  .row > .offset-sm-8 {
    margin-left: 66.6667%;
  }
  .column > .col-sm-8 {
    height: 66.6667%;
    width: auto;
  }
  .row > .col-sm-9 {
    height: auto;
    width: 75%;
  }
  .row > .offset-sm-9 {
    margin-left: 75%;
  }
  .column > .col-sm-9 {
    height: 75%;
    width: auto;
  }
  .row > .col-sm-10 {
    height: auto;
    width: 83.3333%;
  }
  .row > .offset-sm-10 {
    margin-left: 83.3333%;
  }
  .column > .col-sm-10 {
    height: 83.3333%;
    width: auto;
  }
  .row > .col-sm-11 {
    height: auto;
    width: 91.6667%;
  }
  .row > .offset-sm-11 {
    margin-left: 91.6667%;
  }
  .column > .col-sm-11 {
    height: 91.6667%;
    width: auto;
  }
  .row > .col-sm-12 {
    height: auto;
    width: 100%;
  }
  .row > .offset-sm-12 {
    margin-left: 100%;
  }
  .column > .col-sm-12 {
    height: 100%;
    width: auto;
  }
}
@media (min-width: 1024px) {
  .flex > .col-md,
  .flex > .col-md-0,
  .flex > .col-md-1,
  .flex > .col-md-2,
  .flex > .col-md-3,
  .flex > .col-md-4,
  .flex > .col-md-5,
  .flex > .col-md-6,
  .flex > .col-md-7,
  .flex > .col-md-8,
  .flex > .col-md-9,
  .flex > .col-md-10,
  .flex > .col-md-11,
  .flex > .col-md-12,
  .flex > .col-md-auto,
  .flex > .col-md-grow,
  .flex > .col-md-shrink,
  .row > .col-md,
  .row > .col-md-0,
  .row > .col-md-1,
  .row > .col-md-2,
  .row > .col-md-3,
  .row > .col-md-4,
  .row > .col-md-5,
  .row > .col-md-6,
  .row > .col-md-7,
  .row > .col-md-8,
  .row > .col-md-9,
  .row > .col-md-10,
  .row > .col-md-11,
  .row > .col-md-12,
  .row > .col-md-auto,
  .row > .col-md-grow,
  .row > .col-md-shrink {
    width: auto;
    min-width: 0;
    max-width: 100%;
  }
  .column > .col-md,
  .column > .col-md-0,
  .column > .col-md-1,
  .column > .col-md-2,
  .column > .col-md-3,
  .column > .col-md-4,
  .column > .col-md-5,
  .column > .col-md-6,
  .column > .col-md-7,
  .column > .col-md-8,
  .column > .col-md-9,
  .column > .col-md-10,
  .column > .col-md-11,
  .column > .col-md-12,
  .column > .col-md-auto,
  .column > .col-md-grow,
  .column > .col-md-shrink,
  .flex > .col-md,
  .flex > .col-md-0,
  .flex > .col-md-1,
  .flex > .col-md-2,
  .flex > .col-md-3,
  .flex > .col-md-4,
  .flex > .col-md-5,
  .flex > .col-md-6,
  .flex > .col-md-7,
  .flex > .col-md-8,
  .flex > .col-md-9,
  .flex > .col-md-10,
  .flex > .col-md-11,
  .flex > .col-md-12,
  .flex > .col-md-auto,
  .flex > .col-md-grow,
  .flex > .col-md-shrink {
    height: auto;
    min-height: 0;
    max-height: 100%;
  }
  .col-md {
    flex: 10000 1 0%;
  }
  .col-md-0,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-auto {
    flex: 0 0 auto;
  }
  .col-md-grow {
    flex: 1 0 auto;
  }
  .col-md-shrink {
    flex: 0 1 auto;
  }
  .row > .col-md-0 {
    height: auto;
    width: 0%;
  }
  .row > .offset-md-0 {
    margin-left: 0%;
  }
  .column > .col-md-0 {
    height: 0%;
    width: auto;
  }
  .row > .col-md-1 {
    height: auto;
    width: 8.3333%;
  }
  .row > .offset-md-1 {
    margin-left: 8.3333%;
  }
  .column > .col-md-1 {
    height: 8.3333%;
    width: auto;
  }
  .row > .col-md-2 {
    height: auto;
    width: 16.6667%;
  }
  .row > .offset-md-2 {
    margin-left: 16.6667%;
  }
  .column > .col-md-2 {
    height: 16.6667%;
    width: auto;
  }
  .row > .col-md-3 {
    height: auto;
    width: 25%;
  }
  .row > .offset-md-3 {
    margin-left: 25%;
  }
  .column > .col-md-3 {
    height: 25%;
    width: auto;
  }
  .row > .col-md-4 {
    height: auto;
    width: 33.3333%;
  }
  .row > .offset-md-4 {
    margin-left: 33.3333%;
  }
  .column > .col-md-4 {
    height: 33.3333%;
    width: auto;
  }
  .row > .col-md-5 {
    height: auto;
    width: 41.6667%;
  }
  .row > .offset-md-5 {
    margin-left: 41.6667%;
  }
  .column > .col-md-5 {
    height: 41.6667%;
    width: auto;
  }
  .row > .col-md-6 {
    height: auto;
    width: 50%;
  }
  .row > .offset-md-6 {
    margin-left: 50%;
  }
  .column > .col-md-6 {
    height: 50%;
    width: auto;
  }
  .row > .col-md-7 {
    height: auto;
    width: 58.3333%;
  }
  .row > .offset-md-7 {
    margin-left: 58.3333%;
  }
  .column > .col-md-7 {
    height: 58.3333%;
    width: auto;
  }
  .row > .col-md-8 {
    height: auto;
    width: 66.6667%;
  }
  .row > .offset-md-8 {
    margin-left: 66.6667%;
  }
  .column > .col-md-8 {
    height: 66.6667%;
    width: auto;
  }
  .row > .col-md-9 {
    height: auto;
    width: 75%;
  }
  .row > .offset-md-9 {
    margin-left: 75%;
  }
  .column > .col-md-9 {
    height: 75%;
    width: auto;
  }
  .row > .col-md-10 {
    height: auto;
    width: 83.3333%;
  }
  .row > .offset-md-10 {
    margin-left: 83.3333%;
  }
  .column > .col-md-10 {
    height: 83.3333%;
    width: auto;
  }
  .row > .col-md-11 {
    height: auto;
    width: 91.6667%;
  }
  .row > .offset-md-11 {
    margin-left: 91.6667%;
  }
  .column > .col-md-11 {
    height: 91.6667%;
    width: auto;
  }
  .row > .col-md-12 {
    height: auto;
    width: 100%;
  }
  .row > .offset-md-12 {
    margin-left: 100%;
  }
  .column > .col-md-12 {
    height: 100%;
    width: auto;
  }
}
@media (min-width: 1440px) {
  .flex > .col-lg,
  .flex > .col-lg-0,
  .flex > .col-lg-1,
  .flex > .col-lg-2,
  .flex > .col-lg-3,
  .flex > .col-lg-4,
  .flex > .col-lg-5,
  .flex > .col-lg-6,
  .flex > .col-lg-7,
  .flex > .col-lg-8,
  .flex > .col-lg-9,
  .flex > .col-lg-10,
  .flex > .col-lg-11,
  .flex > .col-lg-12,
  .flex > .col-lg-auto,
  .flex > .col-lg-grow,
  .flex > .col-lg-shrink,
  .row > .col-lg,
  .row > .col-lg-0,
  .row > .col-lg-1,
  .row > .col-lg-2,
  .row > .col-lg-3,
  .row > .col-lg-4,
  .row > .col-lg-5,
  .row > .col-lg-6,
  .row > .col-lg-7,
  .row > .col-lg-8,
  .row > .col-lg-9,
  .row > .col-lg-10,
  .row > .col-lg-11,
  .row > .col-lg-12,
  .row > .col-lg-auto,
  .row > .col-lg-grow,
  .row > .col-lg-shrink {
    width: auto;
    min-width: 0;
    max-width: 100%;
  }
  .column > .col-lg,
  .column > .col-lg-0,
  .column > .col-lg-1,
  .column > .col-lg-2,
  .column > .col-lg-3,
  .column > .col-lg-4,
  .column > .col-lg-5,
  .column > .col-lg-6,
  .column > .col-lg-7,
  .column > .col-lg-8,
  .column > .col-lg-9,
  .column > .col-lg-10,
  .column > .col-lg-11,
  .column > .col-lg-12,
  .column > .col-lg-auto,
  .column > .col-lg-grow,
  .column > .col-lg-shrink,
  .flex > .col-lg,
  .flex > .col-lg-0,
  .flex > .col-lg-1,
  .flex > .col-lg-2,
  .flex > .col-lg-3,
  .flex > .col-lg-4,
  .flex > .col-lg-5,
  .flex > .col-lg-6,
  .flex > .col-lg-7,
  .flex > .col-lg-8,
  .flex > .col-lg-9,
  .flex > .col-lg-10,
  .flex > .col-lg-11,
  .flex > .col-lg-12,
  .flex > .col-lg-auto,
  .flex > .col-lg-grow,
  .flex > .col-lg-shrink {
    height: auto;
    min-height: 0;
    max-height: 100%;
  }
  .col-lg {
    flex: 10000 1 0%;
  }
  .col-lg-0,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-auto {
    flex: 0 0 auto;
  }
  .col-lg-grow {
    flex: 1 0 auto;
  }
  .col-lg-shrink {
    flex: 0 1 auto;
  }
  .row > .col-lg-0 {
    height: auto;
    width: 0%;
  }
  .row > .offset-lg-0 {
    margin-left: 0%;
  }
  .column > .col-lg-0 {
    height: 0%;
    width: auto;
  }
  .row > .col-lg-1 {
    height: auto;
    width: 8.3333%;
  }
  .row > .offset-lg-1 {
    margin-left: 8.3333%;
  }
  .column > .col-lg-1 {
    height: 8.3333%;
    width: auto;
  }
  .row > .col-lg-2 {
    height: auto;
    width: 16.6667%;
  }
  .row > .offset-lg-2 {
    margin-left: 16.6667%;
  }
  .column > .col-lg-2 {
    height: 16.6667%;
    width: auto;
  }
  .row > .col-lg-3 {
    height: auto;
    width: 25%;
  }
  .row > .offset-lg-3 {
    margin-left: 25%;
  }
  .column > .col-lg-3 {
    height: 25%;
    width: auto;
  }
  .row > .col-lg-4 {
    height: auto;
    width: 33.3333%;
  }
  .row > .offset-lg-4 {
    margin-left: 33.3333%;
  }
  .column > .col-lg-4 {
    height: 33.3333%;
    width: auto;
  }
  .row > .col-lg-5 {
    height: auto;
    width: 41.6667%;
  }
  .row > .offset-lg-5 {
    margin-left: 41.6667%;
  }
  .column > .col-lg-5 {
    height: 41.6667%;
    width: auto;
  }
  .row > .col-lg-6 {
    height: auto;
    width: 50%;
  }
  .row > .offset-lg-6 {
    margin-left: 50%;
  }
  .column > .col-lg-6 {
    height: 50%;
    width: auto;
  }
  .row > .col-lg-7 {
    height: auto;
    width: 58.3333%;
  }
  .row > .offset-lg-7 {
    margin-left: 58.3333%;
  }
  .column > .col-lg-7 {
    height: 58.3333%;
    width: auto;
  }
  .row > .col-lg-8 {
    height: auto;
    width: 66.6667%;
  }
  .row > .offset-lg-8 {
    margin-left: 66.6667%;
  }
  .column > .col-lg-8 {
    height: 66.6667%;
    width: auto;
  }
  .row > .col-lg-9 {
    height: auto;
    width: 75%;
  }
  .row > .offset-lg-9 {
    margin-left: 75%;
  }
  .column > .col-lg-9 {
    height: 75%;
    width: auto;
  }
  .row > .col-lg-10 {
    height: auto;
    width: 83.3333%;
  }
  .row > .offset-lg-10 {
    margin-left: 83.3333%;
  }
  .column > .col-lg-10 {
    height: 83.3333%;
    width: auto;
  }
  .row > .col-lg-11 {
    height: auto;
    width: 91.6667%;
  }
  .row > .offset-lg-11 {
    margin-left: 91.6667%;
  }
  .column > .col-lg-11 {
    height: 91.6667%;
    width: auto;
  }
  .row > .col-lg-12 {
    height: auto;
    width: 100%;
  }
  .row > .offset-lg-12 {
    margin-left: 100%;
  }
  .column > .col-lg-12 {
    height: 100%;
    width: auto;
  }
}
@media (min-width: 1920px) {
  .flex > .col-xl,
  .flex > .col-xl-0,
  .flex > .col-xl-1,
  .flex > .col-xl-2,
  .flex > .col-xl-3,
  .flex > .col-xl-4,
  .flex > .col-xl-5,
  .flex > .col-xl-6,
  .flex > .col-xl-7,
  .flex > .col-xl-8,
  .flex > .col-xl-9,
  .flex > .col-xl-10,
  .flex > .col-xl-11,
  .flex > .col-xl-12,
  .flex > .col-xl-auto,
  .flex > .col-xl-grow,
  .flex > .col-xl-shrink,
  .row > .col-xl,
  .row > .col-xl-0,
  .row > .col-xl-1,
  .row > .col-xl-2,
  .row > .col-xl-3,
  .row > .col-xl-4,
  .row > .col-xl-5,
  .row > .col-xl-6,
  .row > .col-xl-7,
  .row > .col-xl-8,
  .row > .col-xl-9,
  .row > .col-xl-10,
  .row > .col-xl-11,
  .row > .col-xl-12,
  .row > .col-xl-auto,
  .row > .col-xl-grow,
  .row > .col-xl-shrink {
    width: auto;
    min-width: 0;
    max-width: 100%;
  }
  .column > .col-xl,
  .column > .col-xl-0,
  .column > .col-xl-1,
  .column > .col-xl-2,
  .column > .col-xl-3,
  .column > .col-xl-4,
  .column > .col-xl-5,
  .column > .col-xl-6,
  .column > .col-xl-7,
  .column > .col-xl-8,
  .column > .col-xl-9,
  .column > .col-xl-10,
  .column > .col-xl-11,
  .column > .col-xl-12,
  .column > .col-xl-auto,
  .column > .col-xl-grow,
  .column > .col-xl-shrink,
  .flex > .col-xl,
  .flex > .col-xl-0,
  .flex > .col-xl-1,
  .flex > .col-xl-2,
  .flex > .col-xl-3,
  .flex > .col-xl-4,
  .flex > .col-xl-5,
  .flex > .col-xl-6,
  .flex > .col-xl-7,
  .flex > .col-xl-8,
  .flex > .col-xl-9,
  .flex > .col-xl-10,
  .flex > .col-xl-11,
  .flex > .col-xl-12,
  .flex > .col-xl-auto,
  .flex > .col-xl-grow,
  .flex > .col-xl-shrink {
    height: auto;
    min-height: 0;
    max-height: 100%;
  }
  .col-xl {
    flex: 10000 1 0%;
  }
  .col-xl-0,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl-auto {
    flex: 0 0 auto;
  }
  .col-xl-grow {
    flex: 1 0 auto;
  }
  .col-xl-shrink {
    flex: 0 1 auto;
  }
  .row > .col-xl-0 {
    height: auto;
    width: 0%;
  }
  .row > .offset-xl-0 {
    margin-left: 0%;
  }
  .column > .col-xl-0 {
    height: 0%;
    width: auto;
  }
  .row > .col-xl-1 {
    height: auto;
    width: 8.3333%;
  }
  .row > .offset-xl-1 {
    margin-left: 8.3333%;
  }
  .column > .col-xl-1 {
    height: 8.3333%;
    width: auto;
  }
  .row > .col-xl-2 {
    height: auto;
    width: 16.6667%;
  }
  .row > .offset-xl-2 {
    margin-left: 16.6667%;
  }
  .column > .col-xl-2 {
    height: 16.6667%;
    width: auto;
  }
  .row > .col-xl-3 {
    height: auto;
    width: 25%;
  }
  .row > .offset-xl-3 {
    margin-left: 25%;
  }
  .column > .col-xl-3 {
    height: 25%;
    width: auto;
  }
  .row > .col-xl-4 {
    height: auto;
    width: 33.3333%;
  }
  .row > .offset-xl-4 {
    margin-left: 33.3333%;
  }
  .column > .col-xl-4 {
    height: 33.3333%;
    width: auto;
  }
  .row > .col-xl-5 {
    height: auto;
    width: 41.6667%;
  }
  .row > .offset-xl-5 {
    margin-left: 41.6667%;
  }
  .column > .col-xl-5 {
    height: 41.6667%;
    width: auto;
  }
  .row > .col-xl-6 {
    height: auto;
    width: 50%;
  }
  .row > .offset-xl-6 {
    margin-left: 50%;
  }
  .column > .col-xl-6 {
    height: 50%;
    width: auto;
  }
  .row > .col-xl-7 {
    height: auto;
    width: 58.3333%;
  }
  .row > .offset-xl-7 {
    margin-left: 58.3333%;
  }
  .column > .col-xl-7 {
    height: 58.3333%;
    width: auto;
  }
  .row > .col-xl-8 {
    height: auto;
    width: 66.6667%;
  }
  .row > .offset-xl-8 {
    margin-left: 66.6667%;
  }
  .column > .col-xl-8 {
    height: 66.6667%;
    width: auto;
  }
  .row > .col-xl-9 {
    height: auto;
    width: 75%;
  }
  .row > .offset-xl-9 {
    margin-left: 75%;
  }
  .column > .col-xl-9 {
    height: 75%;
    width: auto;
  }
  .row > .col-xl-10 {
    height: auto;
    width: 83.3333%;
  }
  .row > .offset-xl-10 {
    margin-left: 83.3333%;
  }
  .column > .col-xl-10 {
    height: 83.3333%;
    width: auto;
  }
  .row > .col-xl-11 {
    height: auto;
    width: 91.6667%;
  }
  .row > .offset-xl-11 {
    margin-left: 91.6667%;
  }
  .column > .col-xl-11 {
    height: 91.6667%;
    width: auto;
  }
  .row > .col-xl-12 {
    height: auto;
    width: 100%;
  }
  .row > .offset-xl-12 {
    margin-left: 100%;
  }
  .column > .col-xl-12 {
    height: 100%;
    width: auto;
  }
}
.rounded-borders {
  border-radius: 4px;
}
.border-radius-inherit {
  border-radius: inherit;
}
.no-transition {
  transition: none !important;
}
.transition-0 {
  transition: 0s !important;
}
.glossy {
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.3),
    hsla(0, 0%, 100%, 0) 50%,
    rgba(0, 0, 0, 0.12) 51%,
    rgba(0, 0, 0, 0.04)
  ) !important;
}
.q-placeholder::-moz-placeholder {
  color: inherit;
  opacity: 0.7;
}
.q-placeholder:-ms-input-placeholder {
  color: inherit !important;
  opacity: 0.7 !important;
}
.q-placeholder::placeholder {
  color: inherit;
  opacity: 0.7;
}
.q-body--fullscreen-mixin,
.q-body--prevent-scroll {
  position: fixed !important;
}
.q-body--force-scrollbar {
  overflow-y: scroll;
}
.q-no-input-spinner {
  -moz-appearance: textfield !important;
}
.q-no-input-spinner::-webkit-inner-spin-button,
.q-no-input-spinner::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.q-link {
  outline: 0;
  text-decoration: none;
}
body.electron .q-electron-drag {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
body.electron .q-electron-drag--exception,
body.electron .q-electron-drag .q-btn-item {
  -webkit-app-region: no-drag;
}
img.responsive {
  max-width: 100%;
  height: auto;
}
.non-selectable {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
.scroll {
  overflow: auto;
}
.scroll,
.scroll-x,
.scroll-y {
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
}
.scroll-x {
  overflow-x: auto;
}
.scroll-y {
  overflow-y: auto;
}
.no-scroll {
  overflow: hidden !important;
}
.no-pointer-events,
.no-pointer-events--children,
.no-pointer-events--children * {
  pointer-events: none !important;
}
.all-pointer-events {
  pointer-events: all !important;
}
.cursor-pointer {
  cursor: pointer !important;
}
.cursor-not-allowed {
  cursor: not-allowed !important;
}
.cursor-inherit {
  cursor: inherit !important;
}
.cursor-none {
  cursor: none !important;
}
[aria-busy='true'] {
  cursor: progress;
}
[aria-controls],
[role='button'] {
  cursor: pointer;
}
[aria-disabled] {
  cursor: default;
}
.rotate-45 {
  transform: rotate(45deg);
}
.rotate-90 {
  transform: rotate(90deg);
}
.rotate-135 {
  transform: rotate(135deg);
}
.rotate-180 {
  transform: rotate(180deg);
}
.rotate-205 {
  transform: rotate(205deg);
}
.rotate-225 {
  transform: rotate(225deg);
}
.rotate-270 {
  transform: rotate(270deg);
}
.rotate-315 {
  transform: rotate(315deg);
}
.flip-horizontal {
  transform: scaleX(-1);
}
.flip-vertical {
  transform: scaleY(-1);
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.relative-position {
  position: relative;
}
.fixed,
.fixed-bottom,
.fixed-bottom-left,
.fixed-bottom-right,
.fixed-center,
.fixed-full,
.fixed-left,
.fixed-right,
.fixed-top,
.fixed-top-left,
.fixed-top-right,
.fullscreen {
  position: fixed;
}
.absolute,
.absolute-bottom,
.absolute-bottom-left,
.absolute-bottom-right,
.absolute-center,
.absolute-full,
.absolute-left,
.absolute-right,
.absolute-top,
.absolute-top-left,
.absolute-top-right {
  position: absolute;
}
.absolute-top,
.fixed-top {
  top: 0;
  left: 0;
  right: 0;
}
.absolute-right,
.fixed-right {
  top: 0;
  right: 0;
  bottom: 0;
}
.absolute-bottom,
.fixed-bottom {
  right: 0;
  bottom: 0;
  left: 0;
}
.absolute-left,
.fixed-left {
  top: 0;
  bottom: 0;
  left: 0;
}
.absolute-top-left,
.fixed-top-left {
  top: 0;
  left: 0;
}
.absolute-top-right,
.fixed-top-right {
  top: 0;
  right: 0;
}
.absolute-bottom-left,
.fixed-bottom-left {
  bottom: 0;
  left: 0;
}
.absolute-bottom-right,
.fixed-bottom-right {
  bottom: 0;
  right: 0;
}
.fullscreen {
  z-index: 6000;
  border-radius: 0 !important;
  max-width: 100vw;
  max-height: 100vh;
}
.absolute-full,
.fixed-full,
.fullscreen {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.absolute-center,
.fixed-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.vertical-top {
  vertical-align: top !important;
}
.vertical-middle {
  vertical-align: middle !important;
}
.vertical-bottom {
  vertical-align: bottom !important;
}
.on-left {
  margin-right: 12px;
}
.on-right {
  margin-left: 12px;
}
.q-position-engine {
  margin-top: var(--q-pe-top, 0) !important;
  margin-left: var(--q-pe-left, 0) !important;
  will-change: auto;
  visibility: collapse;
}
:root {
  --q-size-xs: 0;
  --q-size-sm: 600px;
  --q-size-md: 1024px;
  --q-size-lg: 1440px;
  --q-size-xl: 1920px;
}
.fit {
  width: 100% !important;
}
.fit,
.full-height {
  height: 100% !important;
}
.full-width {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.window-height {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  height: 100vh !important;
}
.window-width {
  margin-left: 0 !important;
  margin-right: 0 !important;
  width: 100vw !important;
}
.block {
  display: block !important;
}
.inline-block {
  display: inline-block !important;
}
.q-pa-none {
  padding: 0 0;
}
.q-pl-none {
  padding-left: 0;
}
.q-pr-none {
  padding-right: 0;
}
.q-pt-none,
.q-py-none {
  padding-top: 0;
}
.q-pb-none,
.q-py-none {
  padding-bottom: 0;
}
.q-px-none {
  padding-left: 0;
  padding-right: 0;
}
.q-ma-none {
  margin: 0 0;
}
.q-ml-none {
  margin-left: 0;
}
.q-mr-none {
  margin-right: 0;
}
.q-mt-none,
.q-my-none {
  margin-top: 0;
}
.q-mb-none,
.q-my-none {
  margin-bottom: 0;
}
.q-mx-none {
  margin-left: 0;
  margin-right: 0;
}
.q-pa-xs {
  padding: 4px 4px;
}
.q-pl-xs {
  padding-left: 4px;
}
.q-pr-xs {
  padding-right: 4px;
}
.q-pt-xs,
.q-py-xs {
  padding-top: 4px;
}
.q-pb-xs,
.q-py-xs {
  padding-bottom: 4px;
}
.q-px-xs {
  padding-left: 4px;
  padding-right: 4px;
}
.q-ma-xs {
  margin: 4px 4px;
}
.q-ml-xs {
  margin-left: 4px;
}
.q-mr-xs {
  margin-right: 4px;
}
.q-mt-xs,
.q-my-xs {
  margin-top: 4px;
}
.q-mb-xs,
.q-my-xs {
  margin-bottom: 4px;
}
.q-mx-xs {
  margin-left: 4px;
  margin-right: 4px;
}
.q-pa-sm {
  padding: 8px 8px;
}
.q-pl-sm {
  padding-left: 8px;
}
.q-pr-sm {
  padding-right: 8px;
}
.q-pt-sm,
.q-py-sm {
  padding-top: 8px;
}
.q-pb-sm,
.q-py-sm {
  padding-bottom: 8px;
}
.q-px-sm {
  padding-left: 8px;
  padding-right: 8px;
}
.q-ma-sm {
  margin: 8px 8px;
}
.q-ml-sm {
  margin-left: 8px;
}
.q-mr-sm {
  margin-right: 8px;
}
.q-mt-sm,
.q-my-sm {
  margin-top: 8px;
}
.q-mb-sm,
.q-my-sm {
  margin-bottom: 8px;
}
.q-mx-sm {
  margin-left: 8px;
  margin-right: 8px;
}
.q-pa-md {
  padding: 16px 16px;
}
.q-pl-md {
  padding-left: 16px;
}
.q-pr-md {
  padding-right: 16px;
}
.q-pt-md,
.q-py-md {
  padding-top: 16px;
}
.q-pb-md,
.q-py-md {
  padding-bottom: 16px;
}
.q-px-md {
  padding-left: 16px;
  padding-right: 16px;
}
.q-ma-md {
  margin: 16px 16px;
}
.q-ml-md {
  margin-left: 16px;
}
.q-mr-md {
  margin-right: 16px;
}
.q-mt-md,
.q-my-md {
  margin-top: 16px;
}
.q-mb-md,
.q-my-md {
  margin-bottom: 16px;
}
.q-mx-md {
  margin-left: 16px;
  margin-right: 16px;
}
.q-pa-lg {
  padding: 24px 24px;
}
.q-pl-lg {
  padding-left: 24px;
}
.q-pr-lg {
  padding-right: 24px;
}
.q-pt-lg,
.q-py-lg {
  padding-top: 24px;
}
.q-pb-lg,
.q-py-lg {
  padding-bottom: 24px;
}
.q-px-lg {
  padding-left: 24px;
  padding-right: 24px;
}
.q-ma-lg {
  margin: 24px 24px;
}
.q-ml-lg {
  margin-left: 24px;
}
.q-mr-lg {
  margin-right: 24px;
}
.q-mt-lg,
.q-my-lg {
  margin-top: 24px;
}
.q-mb-lg,
.q-my-lg {
  margin-bottom: 24px;
}
.q-mx-lg {
  margin-left: 24px;
  margin-right: 24px;
}
.q-pa-xl {
  padding: 48px 48px;
}
.q-pl-xl {
  padding-left: 48px;
}
.q-pr-xl {
  padding-right: 48px;
}
.q-pt-xl,
.q-py-xl {
  padding-top: 48px;
}
.q-pb-xl,
.q-py-xl {
  padding-bottom: 48px;
}
.q-px-xl {
  padding-left: 48px;
  padding-right: 48px;
}
.q-ma-xl {
  margin: 48px 48px;
}
.q-ml-xl {
  margin-left: 48px;
}
.q-mr-xl {
  margin-right: 48px;
}
.q-mt-xl,
.q-my-xl {
  margin-top: 48px;
}
.q-mb-xl,
.q-my-xl {
  margin-bottom: 48px;
}
.q-mx-xl {
  margin-left: 48px;
  margin-right: 48px;
}
.q-mt-auto,
.q-my-auto {
  margin-top: auto;
}
.q-ml-auto {
  margin-left: auto;
}
.q-mb-auto,
.q-my-auto {
  margin-bottom: auto;
}
.q-mr-auto,
.q-mx-auto {
  margin-right: auto;
}
.q-mx-auto {
  margin-left: auto;
}
.q-touch {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  user-drag: none;
  -khtml-user-drag: none;
  -webkit-user-drag: none;
}
.q-touch-x {
  touch-action: pan-x;
}
.q-touch-y {
  touch-action: pan-y;
}
.q-transition--fade-leave-active,
.q-transition--flip-leave-active,
.q-transition--jump-down-leave-active,
.q-transition--jump-left-leave-active,
.q-transition--jump-right-leave-active,
.q-transition--jump-up-leave-active,
.q-transition--rotate-leave-active,
.q-transition--scale-leave-active,
.q-transition--slide-down-leave-active,
.q-transition--slide-left-leave-active,
.q-transition--slide-right-leave-active,
.q-transition--slide-up-leave-active {
  position: absolute;
}
.q-transition--slide-down-enter-active,
.q-transition--slide-down-leave-active,
.q-transition--slide-left-enter-active,
.q-transition--slide-left-leave-active,
.q-transition--slide-right-enter-active,
.q-transition--slide-right-leave-active,
.q-transition--slide-up-enter-active,
.q-transition--slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.q-transition--slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
.q-transition--slide-left-enter,
.q-transition--slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}
.q-transition--slide-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.q-transition--slide-up-enter {
  transform: translate3d(0, 100%, 0);
}
.q-transition--slide-down-enter,
.q-transition--slide-up-leave-to {
  transform: translate3d(0, -100%, 0);
}
.q-transition--slide-down-leave-to {
  transform: translate3d(0, 100%, 0);
}
.q-transition--jump-down-enter-active,
.q-transition--jump-down-leave-active,
.q-transition--jump-left-enter-active,
.q-transition--jump-left-leave-active,
.q-transition--jump-right-enter-active,
.q-transition--jump-right-leave-active,
.q-transition--jump-up-enter-active,
.q-transition--jump-up-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.q-transition--jump-down-enter,
.q-transition--jump-down-leave-to,
.q-transition--jump-left-enter,
.q-transition--jump-left-leave-to,
.q-transition--jump-right-enter,
.q-transition--jump-right-leave-to,
.q-transition--jump-up-enter,
.q-transition--jump-up-leave-to {
  opacity: 0;
}
.q-transition--jump-right-enter {
  transform: translate3d(-15px, 0, 0);
}
.q-transition--jump-left-enter,
.q-transition--jump-right-leave-to {
  transform: translate3d(15px, 0, 0);
}
.q-transition--jump-left-leave-to {
  transform: translateX(-15px);
}
.q-transition--jump-up-enter {
  transform: translate3d(0, 15px, 0);
}
.q-transition--jump-down-enter,
.q-transition--jump-up-leave-to {
  transform: translate3d(0, -15px, 0);
}
.q-transition--jump-down-leave-to {
  transform: translate3d(0, 15px, 0);
}
.q-transition--fade-enter-active,
.q-transition--fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.q-transition--fade-enter,
.q-transition--fade-leave,
.q-transition--fade-leave-to {
  opacity: 0;
}
.q-transition--scale-enter-active,
.q-transition--scale-leave-active {
  transition: opacity 0.3s, transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.q-transition--scale-enter,
.q-transition--scale-leave,
.q-transition--scale-leave-to {
  opacity: 0;
  transform: scale3d(0, 0, 1);
}
.q-transition--rotate-enter-active,
.q-transition--rotate-leave-active {
  transition: opacity 0.3s, transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform-style: preserve-3d;
}
.q-transition--rotate-enter,
.q-transition--rotate-leave,
.q-transition--rotate-leave-to {
  opacity: 0;
  transform: scale3d(0, 0, 1) rotate3d(0, 0, 1, 90deg);
}
.q-transition--flip-down-enter-active,
.q-transition--flip-down-leave-active,
.q-transition--flip-left-enter-active,
.q-transition--flip-left-leave-active,
.q-transition--flip-right-enter-active,
.q-transition--flip-right-leave-active,
.q-transition--flip-up-enter-active,
.q-transition--flip-up-leave-active {
  transition: transform 0.3s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.q-transition--flip-down-enter-to,
.q-transition--flip-down-leave,
.q-transition--flip-left-enter-to,
.q-transition--flip-left-leave,
.q-transition--flip-right-enter-to,
.q-transition--flip-right-leave,
.q-transition--flip-up-enter-to,
.q-transition--flip-up-leave {
  transform: perspective(400px) rotate3d(1, 1, 0, 0deg);
}
.q-transition--flip-right-enter {
  transform: perspective(400px) rotate3d(0, 1, 0, -180deg);
}
.q-transition--flip-left-enter,
.q-transition--flip-right-leave-to {
  transform: perspective(400px) rotate3d(0, 1, 0, 180deg);
}
.q-transition--flip-left-leave-to {
  transform: perspective(400px) rotate3d(0, 1, 0, -180deg);
}
.q-transition--flip-up-enter {
  transform: perspective(400px) rotate3d(1, 0, 0, -180deg);
}
.q-transition--flip-down-enter,
.q-transition--flip-up-leave-to {
  transform: perspective(400px) rotate3d(1, 0, 0, 180deg);
}
.q-transition--flip-down-leave-to {
  transform: perspective(400px) rotate3d(1, 0, 0, -180deg);
}
body {
  min-width: 100px;
  min-height: 100%;
  font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  line-height: 1.5;
  font-size: 14px;
}
h1 {
  font-size: 6rem;
  line-height: 6rem;
  letter-spacing: -0.01562em;
}
h1,
h2 {
  font-weight: 300;
}
h2 {
  font-size: 3.75rem;
  line-height: 3.75rem;
  letter-spacing: -0.00833em;
}
h3 {
  font-size: 3rem;
  line-height: 3.125rem;
  letter-spacing: normal;
}
h3,
h4 {
  font-weight: 400;
}
h4 {
  font-size: 2.125rem;
  line-height: 2.5rem;
  letter-spacing: 0.00735em;
}
h5 {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: normal;
}
h5,
h6 {
  line-height: 2rem;
}
h6 {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
}
p {
  margin: 0 0 16px;
}
.text-h1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 6rem;
  letter-spacing: -0.01562em;
}
.text-h2 {
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.00833em;
}
.text-h3 {
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal;
}
.text-h4 {
  font-size: 2.125rem;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.00735em;
}
.text-h5 {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal;
}
.text-h6 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
}
.text-subtitle1 {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0.00937em;
}
.text-subtitle2 {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: 0.00714em;
}
.text-body1 {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em;
}
.text-body2 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.01786em;
}
.text-overline {
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.16667em;
}
.text-caption {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.03333em;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-capitalize {
  text-transform: capitalize;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-justify {
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.text-italic {
  font-style: italic;
}
.text-bold {
  font-weight: 700;
}
.text-no-wrap {
  white-space: nowrap;
}
.text-strike {
  text-decoration: line-through;
}
.text-weight-thin {
  font-weight: 100;
}
.text-weight-light {
  font-weight: 300;
}
.text-weight-regular {
  font-weight: 400;
}
.text-weight-medium {
  font-weight: 500;
}
.text-weight-bold {
  font-weight: 700;
}
.text-weight-bolder {
  font-weight: 900;
}
small {
  font-size: 80%;
}
big {
  font-size: 170%;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
.no-margin {
  margin: 0 !important;
}
.no-padding {
  padding: 0 !important;
}
.no-border {
  border: 0 !important;
}
.no-border-radius {
  border-radius: 0 !important;
}
.no-box-shadow {
  box-shadow: none !important;
}
.no-outline {
  outline: 0 !important;
}
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.ellipsis-2-lines,
.ellipsis-3-lines {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.ellipsis-2-lines {
  -webkit-line-clamp: 2;
}
.ellipsis-3-lines {
  -webkit-line-clamp: 3;
}
.readonly {
  cursor: default !important;
}
.disabled,
.disabled *,
[disabled],
[disabled] * {
  outline: 0 !important;
  cursor: not-allowed !important;
}
.disabled,
[disabled] {
  opacity: 0.6 !important;
}
.hidden {
  display: none !important;
}
.invisible {
  visibility: hidden !important;
}
.transparent {
  background: transparent !important;
}
.overflow-auto {
  overflow: auto !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.overflow-hidden-y {
  overflow-y: hidden !important;
}
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
.dimmed:after,
.light-dimmed:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.dimmed:after {
  background: rgba(0, 0, 0, 0.4) !important;
}
.light-dimmed:after {
  background: hsla(0, 0%, 100%, 0.6) !important;
}
.z-top {
  z-index: 7000 !important;
}
.z-max {
  z-index: 9998 !important;
}
body.capacitor .capacitor-hide,
body.cordova .cordova-hide,
body.desktop .desktop-hide,
body.electron .electron-hide,
body.mobile .mobile-hide,
body.native-mobile .native-mobile-hide,
body.platform-android .platform-android-hide,
body.platform-ios .platform-ios-hide,
body.touch .touch-hide,
body.within-iframe .within-iframe-hide,
body:not(.capacitor) .capacitor-only,
body:not(.cordova) .cordova-only,
body:not(.desktop) .desktop-only,
body:not(.electron) .electron-only,
body:not(.mobile) .mobile-only,
body:not(.native-mobile) .native-mobile-only,
body:not(.platform-android) .platform-android-only,
body:not(.platform-ios) .platform-ios-only,
body:not(.touch) .touch-only,
body:not(.within-iframe) .within-iframe-only {
  display: none !important;
}
@media (orientation: portrait) {
  .orientation-landscape {
    display: none !important;
  }
}
@media (orientation: landscape) {
  .orientation-portrait {
    display: none !important;
  }
}
@media screen {
  .print-only {
    display: none !important;
  }
}
@media print {
  .print-hide {
    display: none !important;
  }
}
@media (max-width: 599px) {
  .gt-lg,
  .gt-md,
  .gt-sm,
  .gt-xs,
  .lg,
  .md,
  .sm,
  .xl,
  .xs-hide {
    display: none !important;
  }
}
@media (min-width: 600px) and (max-width: 1023px) {
  .gt-lg,
  .gt-md,
  .gt-sm,
  .lg,
  .lt-sm,
  .md,
  .sm-hide,
  .xl,
  .xs {
    display: none !important;
  }
}
@media (min-width: 1024px) and (max-width: 1439px) {
  .gt-lg,
  .gt-md,
  .lg,
  .lt-md,
  .lt-sm,
  .md-hide,
  .sm,
  .xl,
  .xs {
    display: none !important;
  }
}
@media (min-width: 1440px) and (max-width: 1919px) {
  .gt-lg,
  .lg-hide,
  .lt-lg,
  .lt-md,
  .lt-sm,
  .md,
  .sm,
  .xl,
  .xs {
    display: none !important;
  }
}
@media (min-width: 1920px) {
  .lg,
  .lt-lg,
  .lt-md,
  .lt-sm,
  .lt-xl,
  .md,
  .sm,
  .xl-hide,
  .xs {
    display: none !important;
  }
}
.q-focus-helper {
  outline: 0;
}
body.desktop .q-focus-helper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
  opacity: 0;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    opacity 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
}
body.desktop .q-focus-helper:after,
body.desktop .q-focus-helper:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: inherit;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    opacity 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
}
body.desktop .q-focus-helper:before {
  background: #000;
}
body.desktop .q-focus-helper:after {
  background: #fff;
}
body.desktop .q-focus-helper--rounded {
  border-radius: 4px;
}
body.desktop .q-focus-helper--round {
  border-radius: 50%;
}
body.desktop .q-focusable,
body.desktop .q-hoverable,
body.desktop .q-manual-focusable {
  outline: 0;
}
body.desktop .q-focusable:focus > .q-focus-helper,
body.desktop .q-hoverable:hover > .q-focus-helper,
body.desktop .q-manual-focusable--focused > .q-focus-helper {
  background: currentColor;
  opacity: 0.15;
}
body.desktop .q-focusable:focus > .q-focus-helper:before,
body.desktop .q-hoverable:hover > .q-focus-helper:before,
body.desktop .q-manual-focusable--focused > .q-focus-helper:before {
  opacity: 0.1;
}
body.desktop .q-focusable:focus > .q-focus-helper:after,
body.desktop .q-hoverable:hover > .q-focus-helper:after,
body.desktop .q-manual-focusable--focused > .q-focus-helper:after {
  opacity: 0.4;
}
body.desktop .q-focusable:focus > .q-focus-helper,
body.desktop .q-manual-focusable--focused > .q-focus-helper {
  opacity: 0.22;
}
body.body--dark {
  color: #fff;
  background: #121212;
}
.q-dark {
  color: #fff;
  background: #424242;
  background: var(--q-color-dark);
}
@media (-ms-high-contrast: none), screen and (-ms-high-contrast: active) {
  .q-item:after,
  .q-notification:after,
  .q-toolbar:after {
    content: '';
    font-size: 0;
    visibility: collapse;
    display: inline;
    width: 0;
  }
  .q-banner > .q-banner__avatar {
    min-height: 38px;
  }
  .q-banner--dense > .q-banner__avatar {
    min-height: 20px;
  }
  .q-item:after {
    min-height: 32px;
  }
  .q-item--denseafter,
  .q-list--dense > .q-itemafter {
    min-height: 24px;
  }
  .q-toolbar:after {
    min-height: 50px;
  }
  .q-notification--standard:after {
    min-height: 48px;
  }
  .q-notification--multi-line {
    min-height: 68px;
  }
  .q-btn__wrapper,
  .q-menu .q-item__section--main,
  .q-table__middle,
  .q-time__content,
  .q-toolbar__title {
    flex-basis: auto;
  }
  .q-banner__content {
    flex-basis: 0 !important;
  }
  .q-dialog__inner > .q-banner > .q-banner__content,
  .q-menu > .q-banner > .q-banner__content {
    flex-basis: auto !important;
  }
  .q-tab__content {
    flex-basis: auto;
    min-width: 100%;
  }
  .q-card__actions--vert {
    flex: 0 0 auto;
  }
  .column {
    min-width: 0%;
  }
  .q-item__section--avatar {
    min-width: 56px;
  }
  button.q-btn--actionable:active:hover .q-btn__wrapper {
    margin: -1px 1px 1px -1px;
  }
  .q-btn-group--push
    > button.q-btn--push.q-btn--actionable:active:hover
    .q-btn__wrapper {
    margin: 1px 1px -1px -1px;
  }
  .q-btn {
    overflow: visible;
  }
  .q-btn--wrap {
    flex-direction: row;
  }
  .q-carousel__slide > * {
    max-width: 100%;
  }
  .q-tabs--vertical .q-tab__indicator {
    height: auto;
  }
  .q-spinner {
    -webkit-animation: q-ie-spinner 2s linear infinite;
    animation: q-ie-spinner 2s linear infinite;
    transform-origin: center center;
    opacity: 0.5;
  }
  .q-spinner.q-spinner-mat .path {
    stroke-dasharray: 89, 200;
  }
  .q-checkbox__indet {
    opacity: 0;
  }
  .q-checkbox__inner--indet .q-checkbox__indet {
    opacity: 1;
  }
  .q-radio__check {
    opacity: 0;
  }
  .q-radio__inner--truthy .q-radio__check {
    opacity: 1;
  }
  .q-date__main {
    min-height: 290px !important;
  }
  .q-date__months {
    align-items: stretch;
  }
  .q-time--portrait .q-time__main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1 0 auto;
  }
  .q-field__prefix,
  .q-field__suffix {
    flex: 1 0 auto;
  }
  .q-field__bottom--stale .q-field__messages {
    left: 12px;
  }
  .q-field--borderless .q-field__bottom--stale .q-field__messages,
  .q-field--standard .q-field__bottom--stale .q-field__messages {
    left: 0;
  }
  .q-field--float .q-field__label {
    max-width: 100%;
  }
  .q-focus-helper {
    z-index: 1;
  }
}
@media (-ms-high-contrast: none) and (min-width: 0),
  screen and (-ms-high-contrast: active) and (min-width: 0) {
  .flex > .col,
  .flex > .col-xs,
  .row > .col,
  .row > .col-xs {
    flex-basis: auto;
    min-width: 0%;
  }
}
@media (-ms-high-contrast: none) and (min-width: 600px),
  screen and (-ms-high-contrast: active) and (min-width: 600px) {
  .flex > .col-sm,
  .row > .col-sm {
    flex-basis: auto;
    min-width: 0%;
  }
}
@media (-ms-high-contrast: none) and (min-width: 1024px),
  screen and (-ms-high-contrast: active) and (min-width: 1024px) {
  .flex > .col-md,
  .row > .col-md {
    flex-basis: auto;
    min-width: 0%;
  }
}
@media (-ms-high-contrast: none) and (min-width: 1440px),
  screen and (-ms-high-contrast: active) and (min-width: 1440px) {
  .flex > .col-lg,
  .row > .col-lg {
    flex-basis: auto;
    min-width: 0%;
  }
}
@media (-ms-high-contrast: none) and (min-width: 1920px),
  screen and (-ms-high-contrast: active) and (min-width: 1920px) {
  .flex > .col-xl,
  .row > .col-xl {
    flex-basis: auto;
    min-width: 0%;
  }
}
@supports (-ms-ime-align: auto) {
  .q-item:after,
  .q-notification:after,
  .q-toolbar:after {
    content: '';
    font-size: 0;
    visibility: collapse;
    display: inline;
    width: 0;
  }
  .q-banner > .q-banner__avatar {
    min-height: 38px;
  }
  .q-banner--dense > .q-banner__avatar {
    min-height: 20px;
  }
  .q-item:after {
    min-height: 32px;
  }
  .q-item--denseafter,
  .q-list--dense > .q-itemafter {
    min-height: 24px;
  }
  .q-toolbar:after {
    min-height: 50px;
  }
  .q-notification--standard:after {
    min-height: 48px;
  }
  .q-notification--multi-line {
    min-height: 68px;
  }
  .q-btn__wrapper,
  .q-menu .q-item__section--main,
  .q-table__middle,
  .q-time__content,
  .q-toolbar__title {
    flex-basis: auto;
  }
  .q-banner__content {
    flex-basis: 0 !important;
  }
  .q-dialog__inner > .q-banner > .q-banner__content,
  .q-menu > .q-banner > .q-banner__content {
    flex-basis: auto !important;
  }
  .q-tab__content {
    flex-basis: auto;
    min-width: 100%;
  }
  .q-card__actions--vert {
    flex: 0 0 auto;
  }
  .column {
    min-width: 0%;
  }
  @media (-ms-high-contrast: none) and (min-width: 0),
    screen and (-ms-high-contrast: active) and (min-width: 0) {
    .flex > .col,
    .flex > .col-xs,
    .row > .col,
    .row > .col-xs {
      flex-basis: auto;
      min-width: 0%;
    }
  }
  @media (-ms-high-contrast: none) and (min-width: 600px),
    screen and (-ms-high-contrast: active) and (min-width: 600px) {
    .flex > .col-sm,
    .row > .col-sm {
      flex-basis: auto;
      min-width: 0%;
    }
  }
  @media (-ms-high-contrast: none) and (min-width: 1024px),
    screen and (-ms-high-contrast: active) and (min-width: 1024px) {
    .flex > .col-md,
    .row > .col-md {
      flex-basis: auto;
      min-width: 0%;
    }
  }
  @media (-ms-high-contrast: none) and (min-width: 1440px),
    screen and (-ms-high-contrast: active) and (min-width: 1440px) {
    .flex > .col-lg,
    .row > .col-lg {
      flex-basis: auto;
      min-width: 0%;
    }
  }
  @media (-ms-high-contrast: none) and (min-width: 1920px),
    screen and (-ms-high-contrast: active) and (min-width: 1920px) {
    .flex > .col-xl,
    .row > .col-xl {
      flex-basis: auto;
      min-width: 0%;
    }
  }
  .q-item__section--avatar {
    min-width: 56px;
  }
  button.q-btn--actionable:active:hover .q-btn__wrapper {
    margin: -1px 1px 1px -1px;
  }
  .q-btn-group--push
    > button.q-btn--push.q-btn--actionable:active:hover
    .q-btn__wrapper {
    margin: 1px 1px -1px -1px;
  }
  .q-btn {
    overflow: visible;
  }
  .q-btn--wrap {
    flex-direction: row;
  }
  .q-carousel__slide > * {
    max-width: 100%;
  }
  .q-tabs--vertical .q-tab__indicator {
    height: auto;
  }
  .q-spinner {
    -webkit-animation: q-ie-spinner 2s linear infinite;
    animation: q-ie-spinner 2s linear infinite;
    transform-origin: center center;
    opacity: 0.5;
  }
  .q-spinner.q-spinner-mat .path {
    stroke-dasharray: 89, 200;
  }
  .q-checkbox__indet {
    opacity: 0;
  }
  .q-checkbox__inner--indet .q-checkbox__indet {
    opacity: 1;
  }
  .q-radio__check {
    opacity: 0;
  }
  .q-radio__inner--truthy .q-radio__check {
    opacity: 1;
  }
  .q-date__main {
    min-height: 290px !important;
  }
  .q-date__months {
    align-items: stretch;
  }
  .q-time--portrait .q-time__main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1 0 auto;
  }
  .q-field__prefix,
  .q-field__suffix {
    flex: 1 0 auto;
  }
  .q-field__bottom--stale .q-field__messages {
    left: 12px;
  }
  .q-field--borderless .q-field__bottom--stale .q-field__messages,
  .q-field--standard .q-field__bottom--stale .q-field__messages {
    left: 0;
  }
  .q-field--float .q-field__label {
    max-width: 100%;
  }
  .q-focus-helper {
    z-index: 1;
  }
}
@-webkit-keyframes q-circular-progress-circle {
  0% {
    stroke-dasharray: 1, 400;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -100;
  }
  to {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -300;
  }
}
@keyframes q-circular-progress-circle {
  0% {
    stroke-dasharray: 1, 400;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -100;
  }
  to {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -300;
  }
}
@-webkit-keyframes q-expansion-done {
  0% {
    --q-exp-done: 1;
  }
}
@keyframes q-expansion-done {
  0% {
    --q-exp-done: 1;
  }
}
@-webkit-keyframes q-field-label {
  40% {
    margin-left: 2px;
  }
  60%,
  80% {
    margin-left: -2px;
  }
  70%,
  90% {
    margin-left: 2px;
  }
}
@keyframes q-field-label {
  40% {
    margin-left: 2px;
  }
  60%,
  80% {
    margin-left: -2px;
  }
  70%,
  90% {
    margin-left: 2px;
  }
}
@-webkit-keyframes q-autofill {
  to {
    background: transparent;
    color: inherit;
  }
}
@keyframes q-autofill {
  to {
    background: transparent;
    color: inherit;
  }
}
@-webkit-keyframes q-linear-progress--indeterminate {
  0% {
    transform: translate3d(-35%, 0, 0) scale3d(0.35, 1, 1);
  }
  60% {
    transform: translate3d(100%, 0, 0) scale3d(0.9, 1, 1);
  }
  to {
    transform: translate3d(100%, 0, 0) scale3d(0.9, 1, 1);
  }
}
@keyframes q-linear-progress--indeterminate {
  0% {
    transform: translate3d(-35%, 0, 0) scale3d(0.35, 1, 1);
  }
  60% {
    transform: translate3d(100%, 0, 0) scale3d(0.9, 1, 1);
  }
  to {
    transform: translate3d(100%, 0, 0) scale3d(0.9, 1, 1);
  }
}
@-webkit-keyframes q-linear-progress--indeterminate-short {
  0% {
    transform: translate3d(-101%, 0, 0) scale3d(1, 1, 1);
  }
  60% {
    transform: translate3d(107%, 0, 0) scale3d(0.01, 1, 1);
  }
  to {
    transform: translate3d(107%, 0, 0) scale3d(0.01, 1, 1);
  }
}
@keyframes q-linear-progress--indeterminate-short {
  0% {
    transform: translate3d(-101%, 0, 0) scale3d(1, 1, 1);
  }
  60% {
    transform: translate3d(107%, 0, 0) scale3d(0.01, 1, 1);
  }
  to {
    transform: translate3d(107%, 0, 0) scale3d(0.01, 1, 1);
  }
}
@-webkit-keyframes q-skeleton--fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
@keyframes q-skeleton--fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes q-skeleton--pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.85);
  }
  to {
    transform: scale(1);
  }
}
@keyframes q-skeleton--pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.85);
  }
  to {
    transform: scale(1);
  }
}
@-webkit-keyframes q-skeleton--pulse-x {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0.75);
  }
  to {
    transform: scaleX(1);
  }
}
@keyframes q-skeleton--pulse-x {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0.75);
  }
  to {
    transform: scaleX(1);
  }
}
@-webkit-keyframes q-skeleton--pulse-y {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.75);
  }
  to {
    transform: scaleY(1);
  }
}
@keyframes q-skeleton--pulse-y {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.75);
  }
  to {
    transform: scaleY(1);
  }
}
@-webkit-keyframes q-skeleton--wave {
  0% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes q-skeleton--wave {
  0% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
@-webkit-keyframes q-spin {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    transform: rotate3d(0, 0, 1, 270deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 359deg);
  }
}
@keyframes q-spin {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    transform: rotate3d(0, 0, 1, 270deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 359deg);
  }
}
@-webkit-keyframes q-mat-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  to {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes q-mat-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  to {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@-webkit-keyframes q-notif-badge {
  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }
  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }
  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
}
@keyframes q-notif-badge {
  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }
  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }
  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
}
@-webkit-keyframes q-notif-progress {
  0% {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}
@keyframes q-notif-progress {
  0% {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}
@-webkit-keyframes q-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
  to {
    transform: scale(1);
  }
}
@keyframes q-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
  to {
    transform: scale(1);
  }
}
@-webkit-keyframes q-fade {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes q-fade {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes q-ie-spinner {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}
@keyframes q-ie-spinner {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}

`

export default style
