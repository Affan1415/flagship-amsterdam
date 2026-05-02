import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flagship Amsterdam | Premium Adventure Experiences",
  description:
    "Discover extraordinary adventures in Amsterdam. Curated experiences that redefine exploration.",
  keywords: ["Amsterdam", "tours", "adventures", "experiences", "travel"],
  openGraph: {
    title: "Flagship Amsterdam | Premium Adventure Experiences",
    description:
      "Discover extraordinary adventures in Amsterdam. Curated experiences that redefine exploration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-[#fafafa]">
        {children}

        {/* Yetti Booking Widget Script */}
        <Script id="yetti-booking" strategy="afterInteractive">
          {`
            (function(){
              'use strict';
              var WIDGET_URL='https://yetti.ai/widget/wk_l_uYByiUYkNST3IxiRZYWAxDFJ6GzVIu';

              function _ybStyle(){
                if(document.getElementById('_yb_s'))return;
                var s=document.createElement('style');s.id='_yb_s';
                s.textContent='@keyframes _ybIn{from{opacity:0}to{opacity:1}}@keyframes _ybUp{from{opacity:0;transform:translateY(18px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}';
                document.head.appendChild(s);
              }

              function openModal(actId){
                if(document.getElementById('_yb_ov'))return;
                _ybStyle();

                var ov=document.createElement('div');
                ov.id='_yb_ov';
                ov.setAttribute('style',
                  'position:fixed!important;top:0!important;left:0!important;'+
                  'width:100%!important;height:100%!important;'+
                  'z-index:2147483647!important;'+
                  'background:rgba(2,6,23,0.82);'+
                  'display:flex;align-items:center;justify-content:center;'+
                  'box-sizing:border-box;padding:16px;'+
                  'animation:_ybIn .2s ease;');

                var wrap=document.createElement('div');
                wrap.setAttribute('style',
                  'position:relative;'+
                  'width:min(100%, 1180px);'+
                  'height:min(calc(100vh - 32px), 920px);'+
                  'animation:_ybUp .28s cubic-bezier(.22,1,.36,1);');

                var box=document.createElement('div');
                box.setAttribute('style',
                  'width:100%;height:100%;'+
                  'border-radius:20px;overflow:hidden;'+
                  'box-shadow:0 40px 100px rgba(0,0,0,0.55);');

                var fr=document.createElement('iframe');
                var _src=new URL(WIDGET_URL);
                if(actId)_src.searchParams.set('activity',actId);
                _src.searchParams.set('return_url',location.href);
                fr.src=_src.toString();
                fr.allow='payment';
                fr.setAttribute('allowfullscreen','');
                fr.setAttribute('style','width:100%;height:100%;border:none;display:block;background:#fff;');

                function close(){
                  var o=document.getElementById('_yb_ov');
                  if(!o)return;
                  o.style.animation='_ybIn .18s ease reverse forwards';
                  setTimeout(function(){if(o&&o.parentNode)o.parentNode.removeChild(o);},170);
                  var sp=new URLSearchParams(location.search);
                  if(sp.has('yetti-modal')){
                    sp.delete('yetti-modal');sp.delete('activity');
                    history.replaceState(null,'',location.pathname+(sp.toString()?'?'+sp.toString():''));
                  }
                }

                ov.onclick=function(e){if(e.target===ov)close();};

                var esc=function(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}};
                document.addEventListener('keydown',esc);

                window.addEventListener('message',function(e){
                  if(e.data&&e.data.type==='yetti-close-modal'){
                    close();
                    if(e.data.redirect_url)location.href=e.data.redirect_url;
                  }
                });

                box.appendChild(fr);
                wrap.appendChild(box);
                ov.appendChild(wrap);
                document.body.appendChild(ov);
              }

              function checkUrl(){
                var sp=new URLSearchParams(location.search);
                if(sp.get('yetti-modal')==='true')openModal(sp.get('activity')||'');
              }

              document.addEventListener('click',function(e){
                var tgt=e.target;
                var a=tgt.closest?tgt.closest('a[href*="yetti-modal=true"]'):null;
                if(a){
                  e.preventDefault();
                  try{
                    var u=new URL(a.href,location.href);
                    openModal(u.searchParams.get('activity')||'');
                    history.pushState(null,'',a.href);
                  }catch(_){location.href=a.href;}
                  return;
                }
                var btn=tgt.closest?tgt.closest('[data-yetti-activity]'):null;
                if(btn){e.preventDefault();openModal(btn.getAttribute('data-yetti-activity'));}
              },true);

              window.YettiBooking={open:openModal};

              if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',checkUrl);
              else checkUrl();
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
