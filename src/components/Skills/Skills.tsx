import { skillsConfig } from './utils';
import { Subtitle } from '../Typography/Typography';
import {
  StyledContainer,
  StyledIcon,
  StyledList,
  StyledListItem,
  StyledNum,
  StyledText,
  StyledTitle,
} from './Skills.styled';

export const Skills = () => (
  <StyledContainer>
    <Subtitle>Key skills</Subtitle>
    <StyledList>
      {skillsConfig.map(({ title, description, icon }, idx) => (
        <StyledListItem key={title}>
          <StyledIcon src={icon}></StyledIcon>
          <StyledTitle>{title}</StyledTitle>
          <StyledText>{description}</StyledText>
          <StyledNum as="span">0{idx + 1}</StyledNum>
        </StyledListItem>
      ))}
    </StyledList>
  </StyledContainer>
);
