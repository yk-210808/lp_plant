import Link from "next/link"

export default function ContactComplete() {
  return (
    <div className="p_common">
      <div className="inner-block">
        <h1 className="c-ttl01"><span className="inn">Contact</span></h1>
        <p className="text-lg text-center">Your inquiry has been received. Please check the confirmation email we have sent you.</p>
        <Link href="/" className="c-btn01 mr-auto ml-auto mt-28">HOME</Link>
      </div>
    </div>
  )
}