import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown, faExpand, faGavel, faLock, faBell, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add([
  faAppStore,
  faLock,
  faCircle,
  faGavel,
  faCaretDown,
  faBell,
  faExpand,
  faLock,
  faUserLock
])

export default Vue.component('fa', FontAwesomeIcon)