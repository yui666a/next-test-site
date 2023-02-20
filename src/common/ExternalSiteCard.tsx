import Image from "next/image";

interface ExternalSiteCardProps {
  siteName: string;
  siteUrl: string;
  siteIcon: string;
  siteIconDescription?: string;
}

const ExternalSiteCard = (props: ExternalSiteCardProps) => {
  return (
    <div key={props.siteName}>
      <a href={props.siteUrl} target="_blank" rel="noopener noreferrer">
        <h3>{props.siteName}</h3>
        <Image
          src={props.siteIcon}
          alt={props.siteIconDescription || props.siteName}
          width="30"
          height="30"
        />
      </a>
    </div>
  );
};

export default ExternalSiteCard;
