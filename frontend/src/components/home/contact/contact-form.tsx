'use client';

import { useState, useEffect } from 'react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Textarea } from '@nextui-org/react';
import { IconMailCheck, IconSend } from '@tabler/icons-react';

type Props = {};

export type Message = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ErrorFormComponent = ({
  message,
  error,
}: {
  message: string;
  error?: boolean;
}) => {
  if (error) {
    return <span className="text-red-500 text-xs mb-4">{message}</span>;
  }
  return (
    <span className="text-[#67CE7E] text-lg m-0 flex flex-row gap-x-2 items-center justify-center">
      {message}
      <IconMailCheck width={24} />
    </span>
  );
};

const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Message>();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<{
    message: string;
    error?: boolean;
  } | null>(null);

  const onSubmit = handleSubmit((data) => {
    setErrorMessage({
      message: 'Message sent successfully!',
      error: false,
    });
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
    reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-6 p-6 bg-zinc-900 lg:w-1/2 mx-auto rounded-lg"
    >
      <div>
        <Input
          type="text"
          label="Name"
          id="name"
          {...register('name', {
            required: {
              value: true,
              message: 'Your name is required',
            },
          })}
        />
        {errors.name && (
          <ErrorFormComponent
            message={errors.name.message ?? ''}
            error={true}
          />
        )}
      </div>

      <div>
        <Input
          type="email"
          label="Email"
          id="email"
          {...register('email', {
            required: {
              value: true,
              message: 'E-Mail is required',
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <ErrorFormComponent
            message={errors.email.message ?? ''}
            error={true}
          />
        )}
      </div>

      <div>
        <Input
          type="text"
          label="Subject"
          id="subject"
          {...register('subject', {
            required: {
              value: true,
              message: 'Subject is required',
            },
          })}
        />
        {errors.subject && (
          <ErrorFormComponent
            message={errors.subject.message ?? ''}
            error={true}
          />
        )}
      </div>

      <div>
        <Textarea
          id="message"
          label="Your message"
          placeholder="Write something here..."
          className="w-full"
          {...register('message', {
            required: {
              value: true,
              message: 'Message is required',
            },
          })}
        />
        {errors.message && (
          <ErrorFormComponent
            message={errors.message.message ?? ''}
            error={true}
          />
        )}
      </div>

      <button className="button flex flex-row gap-x-2 items-center justify-center lg:self-end">
        <IconSend size={20} />
        <span>Send</span>
      </button>

      {errorMessage && (
        <ErrorFormComponent
          message={errorMessage.message}
          error={errorMessage.error}
        />
      )}
    </form>
  );
};

export default ContactForm;
