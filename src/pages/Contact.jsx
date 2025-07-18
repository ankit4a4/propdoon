import ContactForm from '../components/contact/ContactForm';
import ContactHero from '../components/contact/ContactHero';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {


  return (
    <div className="pt-20">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default Contact;