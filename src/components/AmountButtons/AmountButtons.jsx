import { styled } from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const AmountButtons = ({ amount, handleIncrease, handleDecrease }) => {
	return (
		<StyledAmountButtons>
			<button onClick={handleDecrease}>
				<AiOutlineMinus />
			</button>
			<span>{amount}</span>
			<button onClick={handleIncrease}>
				<AiOutlinePlus />
			</button>
		</StyledAmountButtons>
	);
};

const StyledAmountButtons = styled.div`
	/* width: 18rem; */
	width: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	color: var(--color-primary-700);
	background-color: var(--color-neutral-100);
	border-radius: var(--border-radius-pill);
	button {
		padding: 0.7em 1.5em;
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		svg {
			pointer-events: none;
		}
	}
	span {
		font-size: 1.1em;
	}
`;

export default AmountButtons;
