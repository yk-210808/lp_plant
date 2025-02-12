import { TextInput, Textarea, Button } from "flowbite-react"
import { useState } from "react";
import { useRouter } from "next/router";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      router.push("/contact/complete");
    } else {
      alert("Transmission failed. Please try again.")
    }
  };

  return (
    <div className="p_common">
      <div className="contact-block">
        <div className="inner-block">
          <h1 className="c-ttl01"><span className="inn">Contact</span></h1>
          <form onSubmit={handleSubmit}>
            <table className="c-table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td><TextInput name="name" type="text" className="c-textInput" placeholder="Name" value={formData.name} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td><TextInput name="email" type="email" className="c-textInput" placeholder="planto@example.com" value={formData.email} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <th>Message</th>
                  <td><Textarea name="message" rows={4} className="c-textInput" placeholder="Message" value={formData.message} onChange={handleChange} required /></td>
                </tr>
              </tbody>
            </table>
            <Button size="xl" className="c-search-btn mt-24 mr-auto ml-auto" type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</Button>
          </form>
        </div>
      </div>
    </div>
  )
}