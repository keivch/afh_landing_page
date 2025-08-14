import Contacts from "@/components/contact_us/contacts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import Map from "@/components/ui/map";
import Form from "@/components/contact_us/form";

export default function contactUs() {
  return (
    <div className="font-sans grid grid-rows gap-16">
      <Header />
      <div data-aos="zoom-in">
        <Form />
      </div>
      <div data-aos="zoom-in">
        <Contacts />
      </div>
      <div data-aos="zoom-in">
        <Map />
      </div>
      <Footer />
    </div>
  );
}
