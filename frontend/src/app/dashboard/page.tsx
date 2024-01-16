import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

type Props = {};

export default async function DashboardPage({}: Props) {
  const session = await getServerSession();

  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {session?.user?.name ?? 'there'}!</p>
    </div>
  );
}
