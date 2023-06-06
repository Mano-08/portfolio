import twitterIcon from "../public/images/twitter.svg";
import githubIcon from "../public/images/github.svg";
import linkedinIcon from "../public/images/linkedin.svg";
import devpostIcon from "../public/images/devpost.svg";

export interface socialIconsType {
  Twitter: string;
  LinkedIn: string;
  Devpost: string;
  GitHub: string;
}

export const socialIcons: socialIconsType = {
  Twitter: twitterIcon,
  LinkedIn: linkedinIcon,
  Devpost: devpostIcon,
  GitHub: githubIcon,
};
