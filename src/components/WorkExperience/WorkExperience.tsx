import { useState } from 'react';
import { Subtitle } from '../Typography/Typography';
import {
  StyledBadge,
  StyledContainer,
  StyledList,
  StyledSkillsWrapper,
} from './WorkExperience.styled';
import { workExperienceConfig } from './utils';

enum WorkCompany {
  osome = 'osome',
  tinkoff = 'tinkoff',
  busfor = 'busfor',
  htmlAcademy = 'htmlAcademy',
}

export const WorkExperience = () => {
  const [activeCompanyType, setCompanyType] = useState<null | WorkCompany>(null);

  return (
    <StyledContainer>
      <Subtitle>work expirience</Subtitle>
      <StyledList>
        {workExperienceConfig.map(({ companyName, date, position, description, skills }) => (
          <li key={companyName}>
            <p>{companyName}</p>
            <p>{position}</p>
            <StyledSkillsWrapper>
              {skills.map((skill) => (
                <StyledBadge>{skill}</StyledBadge>
              ))}
            </StyledSkillsWrapper>
          </li>
        ))}
      </StyledList>
    </StyledContainer>
  );
};
