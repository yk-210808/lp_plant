import Link from 'next/link';

export default function More() {
  return (
    <div className="p_common">
      <div className="more-block">
        <div className="inner-block">
          <h1 className="c-ttl01"><span className="inn">More</span></h1>

          <table className="c-table">
            <tbody>
              <tr>
                <th>Company Name</th>
                <td>Planto.</td>
              </tr>
              <tr>
                <th>Founded</th>
                <td>202X</td>
              </tr>
              <tr>
                <th>Business</th>
                <td>Web Development & Digital Solutions</td>
              </tr>
              <tr>
                <th>CEO</th>
                <td>John Doe</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>1234 Example Street, City, Country</td>
              </tr>
              <tr>
                <th>Email</th>
                <td><Link href="mailto:test@exmaple.com">test@exmaple.com</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}