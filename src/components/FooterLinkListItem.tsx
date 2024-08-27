import { FC } from "react";

type Props = {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
};

const FooterLinkListItem: FC<Props> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-y-8">
      <h4 className="capitalize font-gilroy-thin font-black">{title}</h4>
      <div className="flex flex-col gap-y-4">
        {links.map((l) => (
          <a href={l.url} key={l.url}>
            {l.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkListItem;
