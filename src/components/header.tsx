import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { slideUp, slideDown } from "@/utils/slideUtil"
import { useScrollCtrl } from "@/hooks/useScrollCtrl"
import { checkBreakPoint } from "@/utils/resizeUtil"

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const subMenuRef = useRef<HTMLDivElement>(null)
  const subMenuTriggerRef = useRef<HTMLParagraphElement>(null)

  const [menuState, setMenuState] = useState(false)
  const [subMenuState, setSubMenuState] = useState(false)
  const setScrollOffFlg = useScrollCtrl()

  const breakPoint = 768

  // header bg
  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height

      window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight / 2) {
          headerRef.current?.classList.add('is-active')
        } else {
          headerRef.current?.classList.remove('is-active')
        }
      })
    }
  }, [])

  // hamburger
  useEffect(() => {
    if (hamburgerRef.current && menuRef.current) {
      if (menuState) {
        hamburgerRef.current.classList.add('is-active')
        menuRef.current.classList.add('is-active')
      } else {
        hamburgerRef.current.classList.remove('is-active')
        menuRef.current.classList.remove('is-active')
      }
    }
  }, [menuState])

  const handleMenu = () => {
    if (hamburgerRef.current) {
      if (!menuState) {
        setMenuState(true)
        setScrollOffFlg(true)
      } else {
        setMenuState(false)
        setScrollOffFlg(false)
      }
    }
  }

  // sub menu
  useEffect(() => {
    if (subMenuRef.current) {
      if (subMenuState) {
        slideDown(subMenuRef.current)
      } else {
        slideUp(subMenuRef.current)
      }
    }
  }, [subMenuState])

  const handleSubMenu = () => {
    if (subMenuRef.current) {
      if (subMenuTriggerRef.current) {
        if (!subMenuState) {
          setSubMenuState(true)
          subMenuTriggerRef.current.classList.add('is-active')
        } else {
          setSubMenuState(false)
          subMenuTriggerRef.current.classList.remove('is-active')
        }
      }
    }
  }

  // reset
  const resizeEvent = () => {
    if (checkBreakPoint() === 0) {
      setScrollOffFlg(false)
      setMenuState(false)
      setSubMenuState(false)
      subMenuTriggerRef.current?.classList.remove('is-active')
    }
  }

  useEffect(() => {
    const mql = window.matchMedia('screen and (max-width: ' + breakPoint + 'px)')
    mql.addListener(resizeEvent)
  }, [])

  return (
    <header>
      <div id="header" className="c-header" ref={headerRef}>
        <div className="inner-block">
          <h1><Link href="/" className="logo"><span className="txt">Planto.</span></Link></h1>
          <ul className="link" ref={menuRef}>
            <li><Link href="/"><span className="txt">Home</span></Link></li>
            <li>
              <p className="no-link" ref={subMenuTriggerRef} onClick={handleSubMenu}>Plants Type</p>
              <div className="type-list" ref={subMenuRef}>
                <ul className="inn">
                  <li>
                    <Link href="#">1</Link>
                  </li>
                  <li>
                    <Link href="#">2</Link>
                  </li>
                  <li>
                    <Link href="#">3</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li><Link href="/more"><span className="txt">More</span></Link></li>
            <li><Link href="/contact"><span className="txt">Contact</span></Link></li>
          </ul>
          <div className="nav-area">
            <button type="button" className="nav-btn"><img src="/img/icon_search.png" alt="" /></button>
            <Link href="#" className="nav-btn opacity-75"><img src="/img/icon_bag.png" alt="" /></Link>
            <button type="button" className="nav-btn hamburger sp" ref={hamburgerRef} onClick={handleMenu}>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}