import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const AuthButton = (props: Props) => {
  const { data: session } = useSession();

  if (session) {
    return (
      // <button className="button" onClick={() => signOut()}>
      //   Logout
      // </button>
      <Link href="/dashboard">
        <Image
          src={session?.user?.image ?? ''}
          alt="User Profile Image"
          width={40}
          height={40}
          className="rounded-full border border-zinc-400"
        />
      </Link>
      // Loading and Error Pages
    );
  }

  return (
    <button className="button" onClick={() => signIn()}>
      Login
    </button>
  );
};

export default AuthButton;
