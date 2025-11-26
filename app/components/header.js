export const addHeader = () => {
  const header = document.createElement('header')
  header.innerHTML = `
    <div class="header__logo">
      <p class="header__name">RAS</p>
    </div>

    <button class="header__hamburger" id="hamburger" aria-label="Menu hamburguer">
      <img width="20" width="40" src="../assets/icones/hamburger.svg" loading="lazy" alt="Menu hamburger" />
    </button>
    
    <div class="header__right" closable="true" id="id-header" aria-expanded="false">
      <button class="header__close" closable="true" aria-label="Fechar menu hamburguer">✕</button>

      <div class="header__container">
        <div class="header__links">
        <buttton class="header__link" href="/#inicio">Perfil</buttton>
      </div>
    </div>
  `
  document.body.querySelector('.container').appendChild(header)

  const idHeader = header.querySelector('#id-header')
  const hamburger = header.querySelector('#hamburger')
  const headerLink = header.querySelectorAll('.header__link')
  let setTime = null

  const hamburgerMenu_open = () => {
    clearTimeout(setTime)
    idHeader.setAttribute('aria-expanded', 'true')
    idHeader?.classList.remove('menu--close')
    idHeader?.classList.add('menu--open')
  }

  const hamburgerMenu_close = (event) => {
    const isClosable = Boolean(event.target.getAttribute('closable'))
    if (!isClosable) return
    idHeader?.classList.add('menu--close')
    setTime = setTimeout(() => {
      idHeader.setAttribute('aria-expanded', 'false')
      idHeader?.classList.remove('menu--close')
      idHeader?.classList.remove('menu--open')
    }, 1000)
  }

  const urlParams = () => {
    setTimeout(() => {
      header.querySelector('[active]')?.removeAttribute('active')
      const url = window.location
      const param = url.hash.slice(1) || url.pathname.split('.')[0].replace('/', '') || 'inicio'
    }, 0)
  }

  hamburger?.addEventListener('click', hamburgerMenu_open)
  header?.addEventListener('click', hamburgerMenu_close)
  headerLink.forEach(obj => obj.addEventListener('click', urlParams))
  urlParams()
}
