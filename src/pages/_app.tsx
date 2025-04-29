import 'STYLE/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '../layout';
import Router from 'next/router';
import NProgress from 'nprogress';
import SeoMeta from 'next/head';

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <SeoMeta>
                <title>وبسایت علی سلیم نیا | FrontEnd Developer</title>
                <meta
                    name='description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
                <link
                    rel='canonical'
                    href='https://alisalimnia.github.io/'
                />
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <link
                    rel='shortcut icon'
                    href='/assets/images/bell.svg'
                />
                <meta
                    name='theme-color'
                    content='#2c333f'
                />
                <meta
                    property='og:title'
                    content='وبسایت شخصی علی سلیم نیا | FrontEnd Developer'
                    key='title'
                />
                <meta
                    property='og:type'
                    content='website'
                />
                <meta
                    property='og:url'
                    content='https://alisalimnia.github.io/'
                />
                <meta
                    property='og:image'
                    content='/assets/images/og-cover.png'
                />
                <meta
                    property='twitter:image:src'
                    content='/assets/images/og-cover.png'
                />
                <meta
                    property='author'
                    content='علی سلیم نیا'
                />
                <meta
                    property='og:locale'
                    content='fa_IR'
                />
                <meta
                    property='og:description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
                <meta
                    property='og:site_name'
                    content='AliSalimnia | FrontEnd Developer'
                />
                <meta
                    property='og:url'
                    content='https://alisalimnia.github.io'
                />
                <meta
                    property='twitter:card'
                    content='summary_large_image'
                />
                <meta
                    property='twitter:site'
                    content='https://t.me/salimniaali79'
                />
                <meta
                    property='twitter:creator'
                    content='https://t.me/salimniaali79'
                />
                <meta
                    property='twitter:title'
                    content='وبسایت علی سلیم نیا | FrontEnd Developer'
                />
                <meta
                    property='twitter:description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
            </SeoMeta>
            <Component {...pageProps} />
        </RootLayout>
    );
}
