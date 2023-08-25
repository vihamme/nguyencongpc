import Head from 'next/head';
import Image from 'next/image';
import Images from '../styles/images';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Máy Tính Nguyễn Công - Cửa Hàng Máy Tính Đồ Hoạ - Gaming chuyên nghiệp</title>
        <meta name='description' content='Mua máy tính đồ họa, laptop gaming, PC workstation, máy tính để bàn, linh kiện máy tính, card đồ họa cấu hình cao tại Nguyễn Công PC giá rẻ nhất - Giảm giá 50%' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href='/favicon.ico' />
        <meta name="keyword"
          content="nguyencongpc , pc workstation, máy trạm ,máy tính chơi game, máy tính văn phòng, mua server, may tinh dong bo, may tinh do hoa, may tinh choi game, pc workstation, render, xay dung pc do hoa, máy tính để bàn, pc" />
        <meta property="og:site_name" content="Máy Tính Nguyễn Công" />
        <meta property="og:url" content="https://nguyencongpc.vn/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Máy Tính Nguyễn Công - Cửa Hàng Máy Tính Đồ Hoạ - Gaming chuyên nghiệp" />
        <meta property="og:description" content=" Mua máy tính đồ họa, laptop gaming, PC workstation, máy tính để bàn, linh kiện máy tính, card đồ họa cấu hình cao tại Nguyễn Công PC giá rẻ nhất - Giảm giá 50%" />
        <meta property="og:image" content={Images.logo} />
        <meta property="og:locale" content="vi_VN" />
      </Head>
      <div className='center'>
        <div className='flex w-screen h-screen'>
          <Image className='object-cover '
            src={Images.backgroud} alt='backgroud'
          />
        </div>
        <div className='absolute top-10 flex flex-col items-center justify-center'>
          <Image src={Images.logo} alt='logo' />
          <button className='hover:scale-125 mb-20 '>
            <Link href={'https://nguyencongpc.vn/'}  >
              <Image
                className='object-contain' width={400} height={200}
                src={Images.xemKM} alt='button' />
            </Link>
          </button>
          <div className='flex mx-5 gap-5'>
            <div className=''>
              <Image className='object-fit' width={400} height={420} src={Images.laptop1} alt='khuyenmai' />
            </div>
            <div className='flex flex-col gap-5'>
              <Image className=' object-fit' width={200} height={200} src={Images.laptop2} alt='khuyenmai' />
              <Image className=' object-fit' width={200} height={200} src={Images.laptop3} alt='khuyenmai' />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
