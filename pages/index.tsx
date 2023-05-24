import Image from 'next/image';
import melonLogo from '../public/melon-logo.png';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
export default function Home() {
  const [ind, setInd] = useState(0);
  const [scroll, setScroll] = useState(0);
  const tags = ['events', 'news', 'updates', 'announcements', 'bounty'];

  useEffect(() => {});
  const blur = 'scale-75 skew-x-6 opacity-50 p-4 border-solid';
  const cardWrapper = 'p-2 border-2 border-black w-2/5 h-48';
  const cardClass =
    'shadow-lg transition ease-in-out delay-150 opacity-50 p-4 border-solid rounded border-4 border-black shadow-2 h-full';
  return (
    <div className="">
      <Banner />
      <Header />
      <div className="flex justify-start gap-3 p-4">
        {tags.map(tag => {
          return <Tag name={tag} key={tag} />;
        })}
      </div>
      {/* <div className="p-10">
        <div className={clsx(cardWrapper, ind !== 1 && blur)}>
          <div className={clsx(cardClass, ind !== 1 && blur)}>
            Card
            <p>Who is the most scalable crypto wallet in the world</p>
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            if (ind === 1) {
              setInd(0);
              return;
            }
            setInd(ind + 1);
          }}>
          next
        </div>
      </div> */}
    </div>
  );
}

const Header = () => {
  return (
    <div className="flex p-4 justify-between">
      <div className="flex">
        <Image src={melonLogo} alt="melon-logo" width={100} height={100} />
        <h1 className="self-center ml-4"> Melon Wallet</h1>
      </div>
      <div className="bg-white border-black border-2 self-center px-6 py-2 rounded">
        Try Melon Wallet
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <Marquee className="bg-black text-white">
      <p> Permissionless, Open Access Wallet</p>
      <div> ........................................................</div>
      <p> Permissionless, Open Access, Wallet</p>
      <div> ........................................................</div>
      <p> Permissionless, Open Access, Wallet</p>
      <div> ........................................................</div>
    </Marquee>
  );
};

interface TagInterface {
  name: string;
  selected?: boolean;
}
const Tag = (props: TagInterface) => {
  const tagClass =
    'text-xs bg-white border-black border-2 self-center px-2 py-1 rounded hover:bg-black';
  const { name, selected } = props;
  return (
    <div className="flex">
      <div className={clsx(tagClass, selected && '')}>{name}</div>
    </div>
  );
};
