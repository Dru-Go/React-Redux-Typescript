import colors from '../../utils/colors'
import {typeScale, primaryFont} from '../../utils/typography'
import styled from "styled-components";

const Tables = styled.table`
  border-spacing: 0;
  margin: auto;
  empty-cells: show;
  margin-top: 20px;
  width: 50%;
  th,
  td {
    padding: 10px;
    text-align: left;
    font-type: ${primaryFont};
  }
  thead{
    background-color: ${colors.neutral_300}; 
  }
  th{
    font-size: ${typeScale.header5};
    color: ${colors.neutral_400}
  }
  td{
    font-size: ${typeScale.paragraph}
    color: ${colors.neutral_400}
  }
`;

export default Tables