import styled from "styled-components";
import colors from '../../utils/colors'
import {primaryFont, typeScale} from '../../utils/typography'


 export const CreateButton = styled.button`
  cursor: pointer;
  background: ${colors.primary_400};
  color: ${colors.neutral_400};
  font-type: ${primaryFont}

  font-size: ${typeScale.header5};
  margin: 2em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.primary_300};
  border-radius: 3px;
`;


export const Edit = styled.div`
  /* ... */
`;

export const Delete = styled.div`
  /* ... */
`;

