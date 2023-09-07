import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
//import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from '@next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`} style={{scrollBehavior:'smooth'}}>
        <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" ></link>
<link href="https://fonts.googleapis.com/css2?family=Jura:wght@300&family=Montserrat+Subrayada&display=swap" rel="stylesheet"></link>
        
         </head>
      <body className="bg-white tracking-tight text-gray-100 antialiased dark:bg-slate-900 dark:text-slate-100"   style={{
      backgroundColor:"black",
      }}>
        <Providers>
          
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
