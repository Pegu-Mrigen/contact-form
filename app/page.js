import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Admission Form</h1>
      <p>Fill the fileds to apply for a course at GIHS, Gohpur</p>

      <ContactForm />
    </div>
  );
}
