import { useEffect, useState } from "react"

export const useScrollCtrl = () => {
  const [scrollOffFlg, setScrollOffFlg] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)
  const [winScroll, setWinScroll] = useState(0)
  const body = (typeof document !== 'undefined') ? document.querySelector<HTMLElement>('body') : '';

  const getScrollPos = function () {
    if (!isScrollable) {
      return;
    }
    setWinScroll(window.scrollY)
  }

  const scrollOff = function () {
    if (body) {
      body.style.top = `${-window.scrollY}px`
      body.style.position = 'fixed'
      body.style.width = '100%'
      body.classList.add('fixed')
    }
    setIsScrollable(false);
  };

  const scrollOn = function () {
    if (body) {
      body.style.position = ''
      body.style.top = ''
      body.classList.remove('fixed')
    }
    window.scrollTo(0, winScroll);
    setIsScrollable(true);
  };

  useEffect(() => {
    getScrollPos();

    if (scrollOffFlg) {
      scrollOff()
    } else {
      scrollOn()
    }
  }, [scrollOffFlg])

  return setScrollOffFlg
}