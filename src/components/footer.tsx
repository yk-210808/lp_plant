import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div id="footer" className="c-footer">
        <div className="inner-block">
          <div className="logo-area">
            <div className="logo"><span className="txt">Planto.</span></div>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="sns-list">
              <li>
                <Link href="https://www.facebook.com/" target="_blank">FB</Link>
              </li>
              <li>
                <Link href="https://x.com/0o__snow" target="_blank">TW</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/" target="_blank">LI</Link>
              </li>
            </ul>
          </div>
          <div className="link-area pc">
            <p className="list-ttl">Quick Link’s</p>
            <ul className="link-list">
              <li><Link href="/"><span className="txt">Home</span></Link></li>
              <li>
                <Link href="#">Type’s Of plant’s</Link>
              </li>
              <li><Link href="/contact"><span className="txt">Contact</span></Link></li>
              <li><Link href="/privacy"><span className="txt">Privacy</span></Link></li>
            </ul>
            <p className="copyright">Planto © All right reserve</p>
          </div>
        </div>
      </div>
    </footer>
  )
}