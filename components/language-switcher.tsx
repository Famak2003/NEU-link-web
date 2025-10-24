'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n/config';

const LanguageSwitcher:React.FC<{scrolled?: boolean}> = ({scrolled}) => {
    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    return (
        <div className="flex gap-4">
            {i18n.locales.map((locale, idx) => {
                const first = idx === 0
                return(
                    <>
                        <Link
                            key={locale}
                            href={redirectedPathName(locale)}
                            className={`uppercase hover:underline ${scrolled ? "text-white" : "text-black"} ${locale} `}
                        >
                            {locale}
                        </Link>
                        {first && (
                            <span className={`${scrolled ? "text-white" : "text-black"}`}>
                                /
                            </span>
                        )}
                    </>
                )
            })}
        </div>
    );
}

export default LanguageSwitcher