import { Spinner } from '@nextui-org/react';

type Props = {};

export default function LoadingPage({}: Props) {
  return (
    <section className="screens min-h-screen flex flex-col items-center justify-center">
      <Spinner
        color="secondary"
        size="lg"
        label="Loading..."
        labelColor="secondary"
      />
    </section>
  );
}
