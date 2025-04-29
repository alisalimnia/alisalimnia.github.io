import { Layers } from 'react-huge-icons/outline';
import ProjectsSliderFetching from 'DOMAIN/ProjectsSlider/SingleItemProject';
import { ProjectsResponseDataItem } from 'TYPES/pages/Pages';
import { useEffect, useState } from 'react';
import GetProjectsRequest from 'SERVICES/projects/GetProjects';
import Head from 'next/head';

export default function Projects() {
  const [projectsList, setProjectsList] = useState<ProjectsResponseDataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetProjectsRequest();
        setProjectsList(data?.data || []);
      } catch (error) {
        console.error('خطا در دریافت پروژه‌ها:', error);
        setProjectsList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>پروژه های توسعه دهنده فرانت اند | علی سلیم نیا</title>
        <meta
          name='description'
          content='پروژه های علی سلیم نیا، توسعه دهنده فرانت اند دور کار'
        />
        <link
          rel='canonical'
          href='https://alisalimnia.github.io/projects'
        />
        <meta
          property='og:title'
          content='پروژه های توسعه دهنده فرانت اند | علی سلیم نیا'
          key='title'
        />
        <meta
          property='og:description'
          content='پروژه های علی سلیم نیا، توسعه دهنده فرانت اند دور کار'
        />
        <meta
          property='twitter:title'
          content='پروژه های توسعه دهنده فرانت اند | علی سلیم نیا'
        />
        <meta
          property='twitter:description'
          content='پروژه های علی سلیم نیا، توسعه دهنده فرانت اند دور کار'
        />
      </Head>

      <div className='container flex flex-col gap-10'>
        <div className='flex items-center gap-3'>
          <Layers className='w-10 h-10 text-primary' />
          <h1 className='font-semibold text-xl'>پروژه ها</h1>
        </div>

        {loading ? (
          <div className='text-center'>در حال بارگذاری...</div>
        ) : projectsList && projectsList.length > 0 ? (
          <div className='flex flex-wrap'>
            {projectsList.map(({ id, attributes }: ProjectsResponseDataItem) => (
              <div
                key={id}
                className='!h-auto flex w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3'>
                <div className='!h-auto w-full bg-black/10 backdrop-blur border border-gray-500/50 p-5 leading-10 rounded-lg select-none'>
                  <ProjectsSliderFetching dataProject={attributes} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='!h-auto bg-black/10 backdrop-blur border border-gray-500/50 py-5 px-7 leading-10 rounded-lg select-none text-center'>
            <p>پروژه‌ای یافت نشد :(</p>
          </div>
        )}
      </div>
    </>
  );
}
