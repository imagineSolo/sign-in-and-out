import styled, { css } from 'styled-components'

const flex = ({signin, signup}) => {
        if (signup) {
            return css`
                flex-direction: row;
            `
        } else {
            return css`
                flex-direction: column;
                align-items: center;
            `
        }
    }

const ButtonsWrapper = styled.div`
        display: flex;
        ${flex}
        justify-content: space-between;
        width: 50%;
        margin: 10px 0;
`

export default ButtonsWrapper