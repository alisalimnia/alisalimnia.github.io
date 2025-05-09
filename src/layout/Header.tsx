import { MenuListType } from 'TYPES/domain/Header';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MenuLineHorizontal, RemoveThin } from 'react-huge-icons/outline';

export default function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const pathName = usePathname();
    useEffect(() => {
        setShowMenu(false);
    }, [pathName]);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition >= 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuList: MenuListType[] = [
        {
            id: 1,
            title: 'خانه',
            url: '/',
        },
        {
            id: 2,
            title: 'مهارت ها',
            url: '/skills',
        },
        {
            id: 3,
            title: 'پروژه ها',
            url: '/projects',
        },
    ];

    return (
        <div
            className={`w-full fixed top-0 z-[999999]${
                scrolled ? ' bg-black/50 backdrop-blur' : ''
            } duration-100`}>
            <div
                className={`container flex items-center justify-between${
                    scrolled ? ' py-2 md:py-5' : ' py-5 md:py-10'
                } duration-300`}>
                <div className='md:hidden'>
                    <MenuLineHorizontal
                        className='w-12 h-12'
                        onClick={() => setShowMenu(!showMenu)}
                    />
                    <div
                        className={`fixed flex flex-col top-5 right-5 min-w-[200px] backdrop-blur-sm bg-black/40 rounded-lg ${
                            showMenu ? 'flex' : 'hidden'
                        }`}>
                        <div className='flex w-full '>
                            <RemoveThin
                                className='w-12 h-12'
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        </div>
                        <nav>
                            <ul className='flex flex-col gap-5 p-3'>
                                {menuList.map(({ id, title, url }: MenuListType) => (
                                    <li key={id}>
                                        <Link
                                            href={url}
                                            className='text-lg hover:animate-color-text'>
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <nav>
                        <ul className='flex items-center gap-5'>
                            {menuList.map(({ id, title, url }: MenuListType) => (
                                <li key={id}>
                                    <Link
                                        href={url}
                                        className='text-lg hover:animate-color-text'>
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='hidden md:flex text-lg lg:text-xl'>Ali Salimnia</p>
                    {/* <Image
                        width='64'
                        height='24'
                        src='/assets/images/color-logo.png'
                        alt='Ali Salimnia Logo'
                        title='لوگو علی سلیم نیا، حروف اول اسم "پیمان" با کد رنگی #ff6d00'
                        className='w-12'
                    /> */}
                </div>
            </div>
        </div>
    );
}
