import { FC } from "react";
import FooterLinkListItem from "./FooterLinkListItem";

const links = {
  company: [
    {
      title: "lorem ipsum",
      url: "#",
    },
    {
      title: "lorem ipsum",
      url: "#",
    },
    {
      title: "lorem ipsum",
      url: "#",
    },
  ],
  product: [
    {
      title: "lorem ipsum",
      url: "#",
    },
    {
      title: "lorem ipsum",
      url: "#",
    },
    {
      title: "lorem ipsum",
      url: "#",
    },
  ],
  services: [
    {
      title: "lorem ipsum",
      url: "#",
    },
    {
      title: "lorem ipsum",
      url: "#",
    },
    {
      title: "lorem ipsum",
      url: "#",
    },
  ],
  legal: [
    {
      title: "lorem ipsum",
      url: "#",
    },
    {
      title: "lorem ipsum",
      url: "#",
    },
    {
      title: "lorem ipsum",
      url: "#",
    },
  ],
};

const FooterLinkList: FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-8 justify-between">
      {Object.entries(links).map(([title, links]) => (
        <FooterLinkListItem title={title} links={links} key={title} />
      ))}
    </div>
  );
};

export default FooterLinkList;
