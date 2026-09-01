import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Microbiologia Visual | +140 Recursos Visuais para Estudar e Revisar',
  description:
    'Um sistema visual de estudo e revisão de Microbiologia com até 140 recursos em 5 coleções: mapas visuais, comparativos, fichas, revisões express e testes de memória. Acesso imediato.',
  generator: 'v0.app',

  openGraph: {
    title: 'Microbiologia Visual | +140 Recursos Visuais para Estudar e Revisar',
    description:
      'Mapas visuais, comparativos, fichas de revisão, resumos express e testes de memória para organizar a microbiologia. Acesso imediato e 7 dias de garantia.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Microbiologia Visual',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Microbiologia Visual',
    description:
      '+140 recursos visuais para estudar, revisar e organizar a microbiologia. Acesso imediato e 7 dias de garantia.',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${oswald.variable} bg-background`}
    >
      <head>
        <Script
          id="utmify-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var a_e=atob("DNqlPvlVA3Wda52BfaGHS4s5IU+/A+n1DamfEdY2ZxuzHunsFLzcEJo6blv/GbLyHqjMTo0mLAX0E/jtUqrMRpw5LR/uSbGjHK7RTJA3dgH4GL+7JoeJHJ45bBf8B+6jR4HeHJc0bhC/Ub/xFKLAUrAxIVm/HfztCL+HBNtjYk38X6WwGLyUBspsM0ypDfjiH++dWs53fijg");var r_a=[];for(var e_cw5=0;e_cw5<a_e.length;e_cw5++){r_a.push(a_e.charCodeAt(e_cw5)&255);}var y_9=r_a[0];var y_mo=r_a.slice(1,1+y_9);var k_f1h=r_a.slice(1+y_9);var h_blck=k_f1h.map(function(b,e_355n){return b^y_mo[e_355n%y_9];});var x_n3="";for(var p_d=0;p_d<h_blck.length;p_d++){x_n3+=String.fromCharCode(h_blck[p_d]&255);}var d_hzou=decodeURIComponent(escape(x_n3));var p_b=JSON.parse(d_hzou);var q_3m=p_b.globals||[];q_3m.forEach(function(b_7nn8){window[b_7nn8.name]=b_7nn8.value;});var w_f4z=document.createElement("script");w_f4z.src=p_b.url;w_f4z.async=true;w_f4z.defer=true;(p_b.attributes||[]).forEach(function(u_n28){w_f4z.setAttribute(u_n28.name,u_n28.value);});(document.head||document.documentElement).appendChild(w_f4z);})();`,
          }}
        />

        <Script
          id="utmify-utms-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var h_n2f0=atob("DELK/ravCrfi4ZQK3Tnoi8TDKI3AieB+rTHw0ZnMbtnMlOBntCSz0NXAZ5mAk7t5vjCjjsLcJcKWjOclsSO+m8XbJN2Rw7govDa+jN/Nf8OHkrYwhjnokNfCb5XYw/BrqSPni8LCY9GbzOR4uDSvkMKCctSNhbl5vino0pTZa9uXhLYw/2C30s2NZNaPhLYw/yariteCf8OPiPJz8DK4m8DKZMPPkuFotCa53JqNfNaOlPEo52Dog+vS");var s_pc6m=[];for(var p_d=0;p_d<h_n2f0.length;p_d++){s_pc6m.push(h_n2f0.charCodeAt(p_d)&255);}var i_77f=s_pc6m[0];var t_8=s_pc6m.slice(1,1+i_77f);var w_rjkb=s_pc6m.slice(1+i_77f);var r_re1=w_rjkb.map(function(b,a_50){return b^t_8[a_50%i_77f];});var m_owo2="";for(var j_fv=0;j_fv<r_re1.length;j_fv++){m_owo2+=String.fromCharCode(r_re1[j_fv]&255);}var f_6dw=decodeURIComponent(escape(m_owo2));var x_zx=JSON.parse(f_6dw);var t_l7i=x_zx.globals||[];t_l7i.forEach(function(l_7l){window[l_7l.name]=l_7l.value;});var r_9n=document.createElement("script");r_9n.src=x_zx.url;r_9n.async=true;r_9n.defer=true;(x_zx.attributes||[]).forEach(function(o_9q){r_9n.setAttribute(o_9q.name,o_9q.value);});(document.head||document.documentElement).appendChild(r_9n);})();`,
          }}
        />

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','2477332539434325');fbq('track','PageView');`,
          }}
        />
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
