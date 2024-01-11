import styles from '@/app/ui/home.module.css';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from "@/app/ui/fonts";
import Image  from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-300 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">

        <div className={styles.shape}></div>
          
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to the PayPortal.</strong> This is the invoice management{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Portal
            </a>
            , brought to you by Penthion MT.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots van het dashboard project, toont desktop versie"
          />
          <Image
            src='/hero-mobile.png'
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot van het dashboard project, toont mobile versie"
          />
        </div>
      </div>
    </main>
  );
}
