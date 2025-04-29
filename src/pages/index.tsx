import SkillsSliderFetching from 'DOMAIN/SkillsSlider/SkillsSliderFetching';
import Link from 'next/link';
import { DirectionDownDouble } from 'react-huge-icons/outline';
import ProjectsSliderFetching from 'DOMAIN/ProjectsSlider/ProjectsSliderFetching';

const dataSliderHome: string =
    'سال 1395 بود که به دلیل عشق و علاقم به کامپیوتر و مخصوصا حوزۀ نرم افزار و شبکه وارد رشتۀ شبکه و نرم‌افزار رایانه شدم و با زبان های #C و PHP و Javascript و python و ... آشنا شدم و با انجام پروژه های ریز و درشت یه شناختی به دست آوردم و اولین نرم افزار کاربردی و به درد بخورمو نوشتم که برای مغازمون استفاده میکردیم (یه نرم‌افزار حسابداری تحت ویندوز با سی شارپ)  و بعد کنکور دانشکدۀ فنی انقلاب اسلامی روزانه قبول شدم که جزء بهترین های فنی‌حرفه ای هست ، خلاصه که سرتون رو درد نیارم ؛ گذشت تا 1401 از اونموقع با یه شرکت که تو حوزۀ بازار سرمایه فعالیت میکنه وارد همکاری شدم و اونجا تحت عنوان برنامه نویس فرانت‌اند مشغول کارم و با ری‌اکت پروژه های بزرگ و پر چالشی رو تجربه کردم.';
export default function Home() {
    return (
        <div className='container'>
            <div className='relative flex flex-col items-center justify-center text-center gap-10  px-7 lg:px-20 '>
                <div className='flex flex-col items-center justify-center gap-10 mt-[12.5rem] mb-[22rem] md:mt-52 md:mb-[25rem] lg:mt-56 lg:mb-96'>
                    <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                        <span>توسعه دهنده فرانت اند</span>
                        <span className='animate-color-text'> Next.Js | TypeScript</span>
                    </p>
                    <p className='font-thin leading-7'>
                        علاقمند به پیشرفت در فرانت اند هستم و دوست دارم روزی استارتاپ خودمو راه
                        اندازی کنم :)
                    </p>
                </div>
                <span className='absolute bottom-10 right-1/2 translate-x-1/2 z-[999]'>
                    <Link
                        href='#about-me'
                        scroll={false}>
                        <DirectionDownDouble className='w-10 h-10 animate-bounce opacity-75' />
                    </Link>
                </span>
            </div>
            <div
                id='about-me'
                className='relative flex flex-col justify-center gap-10 lg:gap-32 py-28 lg:py-52'>
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span>خلاصه کوتاهی از</span>
                    <span className='animate-color-text'> علی سلیم نیا</span>
                </p>
                <div className='flex flex-col-reverse items-center justify-center text-center gap-10 lg:flex-row'>
                    <div className='px-6 lg:px-20'>
                        <div className='flex items-center justify-center pa relative bg-black/10 backdrop-blur border border-gray-500/50 rounded-lg text-justify p-12 leading-10'>
                            {dataSliderHome}
                        </div>
                    </div>
                </div>
            </div>
            <div
                id='skills-me'
                className='relative flex flex-col justify-center gap-10 lg:gap-40 pb-28 lg:pb-52'>
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span>مهارت های</span>
                    <span className='animate-color-text'> علی سلیم نیا</span>
                </p>
                <div className='flex flex-col-reverse items-center justify-center text-center gap-10 lg:flex-row'>
                    <SkillsSliderFetching />
                </div>
            </div>
            <div
                id='skills-me'
                className='relative flex flex-col justify-center gap-10 lg:gap-40 pb-12 lg:pb-24'>
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span>پروژه های</span>
                    <span className='animate-color-text'> علی سلیم نیا</span>
                </p>
                <div className='flex flex-col-reverse items-center justify-center text-center gap-10 lg:flex-row'>
                    <ProjectsSliderFetching />
                </div>
            </div>
            <div className='flex flex-col justify-center gap-10 lg:gap-40 h-[100vh]'>
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span className='animate-color-text'>... Updating</span>
                </p>
            </div>
        </div>
    );
}
