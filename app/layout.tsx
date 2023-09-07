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
     <!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-5XGVW72');

		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		
		  gtag('config', 'G-N3ZHJ9GWKC');
		
		</script>
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-N3ZHJ9GWKC"></script>
		<!-- End Google Tag Manager -->
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
