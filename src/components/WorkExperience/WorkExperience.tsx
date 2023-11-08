import { useState } from 'react';
import { Subtitle } from '../Typography/Typography';
import {
  StyledBadge,
  StyledContainer,
  StyledDate,
  StyledDescription,
  StyledExpandedSection,
  StyledIcon,
  StyledItem,
  StyledList,
  StyledPanel,
  StyledPositionWrapper,
  StyledSectionSubtitle,
  StyledSkillsWrapper,
  StyledTitle,
} from './WorkExperience.styled';
import { WorkCompany, workExperienceConfig } from './utils';

export const WorkExperience = () => {
  const [activeCompanyType, setCompanyType] = useState<null | WorkCompany>(null);

  const handleSelectCompany = (companyName: WorkCompany) => () => {
    const newCompany = companyName === activeCompanyType ? null : companyName;
    setCompanyType(newCompany);
  };

  return (
    <StyledContainer>
      <Subtitle>work expirience</Subtitle>
      <StyledList>
        {workExperienceConfig.map(({ companyName, date, position, description, skills }) => (
          <StyledItem key={companyName}>
            <StyledPanel onClick={handleSelectCompany(companyName)}>
              <div>
                <StyledTitle>{companyName}</StyledTitle>
              </div>
              <div>
                <StyledDate>({date})</StyledDate>
                <StyledPositionWrapper>
                  <StyledSectionSubtitle>{position}</StyledSectionSubtitle>
                  <StyledIcon open={activeCompanyType === companyName} />
                </StyledPositionWrapper>
              </div>
            </StyledPanel>

            {activeCompanyType === companyName && (
              <StyledExpandedSection>
                <StyledDescription>{description}</StyledDescription>
                <StyledSkillsWrapper>
                  {skills.map((skill) => (
                    <StyledBadge key={skill}>{skill}</StyledBadge>
                  ))}
                </StyledSkillsWrapper>
              </StyledExpandedSection>
            )}
          </StyledItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
};
