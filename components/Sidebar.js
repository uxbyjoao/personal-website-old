import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="bg-gray-50 dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent transition-colors">
      <div className="hidden md:block relative w-8 h-8 2xl:w-80 2xl:h-80 xl:w-60 xl:h-60 lg:w-48 lg:h-48 md:w-28 md:h-28">
        <Image
          src="/images/profile.jpg"
          alt="João's profile picture"
          className="rounded-xl filter grayscale hover:grayscale-0 transition-all"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex space-x-3 px-5 py-5 text-xs md:flex-col md:justify-start md:px-0 md:py-0 md:space-y-2 md:space-x-0 md:mt-8 md:text-lg xl:text-2xl 2xl:text-3xl dark:text-gray-200 font-medium tracking-tight">
        <p>Skills</p>
        <p>Education</p>
        <p>Work Experience</p>
        <p>About</p>
      </div>
      <div className="hidden md:flex space-x-10 mt-8">
        <Image
          src="/images/tabler-icon-brand-twitter.svg"
          width={24}
          height={24}
        />
        <Image
          src="/images/tabler-icon-brand-instagram.svg"
          width={24}
          height={24}
        />
        <Image
          src="/images/tabler-icon-brand-behance.svg"
          width={24}
          height={24}
        />
        <Image
          src="/images/tabler-icon-brand-dribbble.svg"
          width={24}
          height={24}
        />
        <Image
          src="/images/tabler-icon-brand-linkedin.svg"
          width={24}
          height={24}
        />
      </div>
    </aside>
  );
}
