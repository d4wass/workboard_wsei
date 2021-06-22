import styled, {css} from 'styled-components';
import { WorkspaceButtonsResume } from 'utils/WorkspaceEntitiesData';

const StyledWrapper = styled.div`
    display: flex;
    padding: 10px;
`;

const StyledBtn = styled.button<{ color?: string }>`
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    color: ${({ theme }) => theme.color.blue};
    border-color: ${({ theme }) => theme.color.blue};
    cursor: pointer;

    ${({ color }) => color && css`
        background-color: ${() => color};
    `}
`;

const WorkspaceResumeBtn = () => (
    <StyledWrapper>
        {
            WorkspaceButtonsResume.map(item => <StyledBtn color={item.color}>{item.name}</StyledBtn>)
        }
    </StyledWrapper>
);

export default WorkspaceResumeBtn;