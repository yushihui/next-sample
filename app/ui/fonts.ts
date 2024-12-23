import { Inter, Lusitana, ZCOOL_XiaoWei } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });


export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

export const notoSansSC = ZCOOL_XiaoWei({
    subsets: ["chinese-simplified"],
    weight: ["400"],
    display: "swap", 
  });