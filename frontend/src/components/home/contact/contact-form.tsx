import { Input, Textarea } from '@nextui-org/react';
import { IconSend } from '@tabler/icons-react';

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="flex flex-col gap-y-6 p-6 bg-zinc-900 lg:w-1/2 mx-auto rounded-lg">
      <Input type="text" label="Name" isRequired />
      <Input type="email" label="Email" isRequired />
      <Input type="text" label="Subject" isRequired />
      <Textarea
        label="Your message"
        placeholder="Write something here..."
        className="w-full"
        isRequired
      />
      <button className="button flex flex-row gap-x-2 items-center justify-center lg:self-end">
        <IconSend size={20} />
        <span>Send</span>
      </button>
    </form>
  );
};

export default ContactForm;
