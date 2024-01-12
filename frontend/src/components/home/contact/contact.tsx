import ContactForm from './contact-form';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="screens my-24">
      <h3 className="text-center lg:text-left text-2xl lg:text-4xl font-bold mb-4">
        Contact with us
      </h3>
      <ContactForm />
    </section>
  );
};

export default Contact;
