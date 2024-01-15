import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/providers';
import { getServerSession } from 'next-auth';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smart Home - Life is better when you have control',
  description:
    'The best smart home devices are an essential part of a 21st century home. They can be controlled by your voice, and help with chores around the house.',
  keywords: [
    'smart home',
    'home automation',
    'home',
    'automation',
    'smart',
    'iot',
    'internet of things',
    'alexa',
    'amazon',
    'google',
    'apple',
    'siri',
    'homekit',
    'ring',
    'philips hue',
    'hue',
    'lutron',
    'ecobee',
    'sonos',
    'roomba',
    'iRobot',
    'smart lock',
    'smart thermostat',
    'smart speaker',
    'smart light',
    'smart bulb',
    'smart switch',
    'smart plug',
    'smart outlet',
    'smart camera',
    'smart doorbell',
    'smart vacuum',
    'smart home hub',
    'smart display',
    'smart home device',
    'smart home devices',
    'smart home products',
    'smart home product',
    'smart home technology',
    'smart home technologies',
    'smart home system',
    'smart home systems',
    'smart home appliances',
    'smart home appliance',
    'smart home security',
    'smart home security system',
    'smart home security systems',
    'smart home security camera',
    'smart home security cameras',
    'smart home thermostat',
    'smart home thermostats',
    'smart home lighting',
    'smart home lights',
    'smart home light',
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
