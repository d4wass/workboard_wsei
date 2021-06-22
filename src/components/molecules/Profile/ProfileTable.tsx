import styled from 'styled-components';
import { ProfileTableProposalData, ProfileTableInteralData, ProfileTableFeeData } from 'utils/ProfileSpecData';

const StyledTable = styled.table`
    margin: 20px;
`;

const StyledTableRow = styled.tr`
    margin-bottom: 10px;
`;

const StyledTableHead = styled.th`
    padding-bottom: 10px;
    border-bottom: solid 1px #ccc;
    text-align: start;
    color: ${({ theme }) => theme.color.blue};
    font-weight: ${({theme}) => theme.font.weight.bold};
`;

const StyledTableCell = styled.td`
    padding: 5px;
`;

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
    padding-bottom: 10px;
`;


const ProfileTable = ({tableData}: {tableData: typeof ProfileTableProposalData | typeof ProfileTableInteralData | typeof ProfileTableFeeData}) => (
    <StyledTable>
        <thead>
            <StyledTableRow>
                {tableData.map(item => <StyledTableHead>{item.titleColumn}</StyledTableHead>)}
            </StyledTableRow>
        </thead>
        <tbody>
            <StyledTableRow>
                {tableData.map(item => <StyledTableCell>{item.rows.map(item => <StyledParagraph>{item}</StyledParagraph>)}</StyledTableCell>)}
            </StyledTableRow>
        </tbody>
    </StyledTable>
);

export default ProfileTable;