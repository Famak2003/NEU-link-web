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
                            key={idx}
                            href={redirectedPathName(locale)}
                            className={`uppercase hover:underline text-white ${locale} `}
                        >
                            {locale}
                        </Link>
                        {first && (
                            <span className={` text-white`}>
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