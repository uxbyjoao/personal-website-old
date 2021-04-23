import Image from "next/image";

export default function Sidebar() {
  return (
    <div>
      <div className="relative 2xl:w-80 2xl:h-80 xl:w-60 xl:h-60 lg:w-48 lg:h-48 md:w-28 md:h-28">
        <Image
          src="/images/profile.jpg"
          alt="João's profile picture"
          className="rounded-xl filter grayscale"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col space-y-2 mt-8 text-lg xl:text-2xl 2xl:text-3xl dark:text-gray-200 font-medium tracking-tight">
        <p>Skills</p>
        <p>Education</p>
        <p>Work Experience</p>
        <p>About</p>
      </div>
      <div className="flex space-x-10 mt-8">
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
    </div>
  );
}
