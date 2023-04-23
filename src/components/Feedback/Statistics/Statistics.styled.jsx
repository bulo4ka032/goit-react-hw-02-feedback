import styled from "@emotion/styled";

export const StatList = styled.ul`
list-style: none;

`

export const StatItem = styled.li`
font-size: 16px;
line-height: 1.44;
display: flex;
align-items: center;
gap: 8px;


          
`
export const Indicator = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
margin-left: 4px;
 
background-color: ${props =>{
    switch (props.prop) {
        case 'good':
            return `#C4DFAA`;
            case 'bad':
            return `#FF9494`;
            case 'neutral':
                return `#FFE6E6`;
        default:
            return `white`;
            }}}
`