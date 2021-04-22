import Image from "next/image";

export default function Sidebar() {
  return (
    <aside>
      <Image
        src="/images/profile.jpg"
        alt="João's profile picture"
        width={148}
        height={148}
        className="rounded-xl filter grayscale"
      />
      <div className="flex flex-col space-y-2 mt-8 text-lg font-medium tracking-tight">
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
    </aside>
  );
}
