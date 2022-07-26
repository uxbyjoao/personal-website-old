import splitbee from "@splitbee/web";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  trackingEvent?: string;
  children: string;
};

export default function SiteLink({ href, trackingEvent, children }: Props) {
  const handleClick = (ev: React.SyntheticEvent) => {
    // ev.preventDefault();
    splitbee.track(trackingEvent);
  };
  return (
    <Link href={href} passHref>
      <a onClick={handleClick}>{children}</a>
    </Link>
  );
}
