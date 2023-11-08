import { ArrowIcon } from '../icons';

import { StyledItem, StyledLink, StyledList } from './Socials.styled';

const socialsList = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/rawle51/',
  },
  {
    name: 'github',
    link: 'https://github.com/rawle51',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/rawle51/',
  },
  {
    name: 'telegram',
    link: 'https://t.me/rawle51',
  },
];

export const Socials = () => (
  <StyledList>
    {socialsList.map(({ name, link }) => (
      <StyledItem key={name}>
        <StyledLink href={link} target="_blank" rel="noreferrer">
          <ArrowIcon />
          {name}
        </StyledLink>
      </StyledItem>
    ))}
  </StyledList>
);
