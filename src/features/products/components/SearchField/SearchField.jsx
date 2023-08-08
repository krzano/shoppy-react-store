import { styled } from 'styled-components';

const FilterField = ({ id, labelText, value, onChange, ...restProps }) => {
	return (
		<StyledSearchField>
			<label htmlFor={id}>{labelText || id}</label>
			<input
				id={id}
				type='search'
				value={value}
				onChange={onChange}
				{...restProps}
			/>
		</StyledSearchField>
	);
};

const StyledSearchField = styled.div`
	display: grid;
	label {
		padding-left: 1rem;
		font-size: 1.4rem;
		font-weight: bold;
		text-transform: capitalize;
	}
	input {
		padding: 0.5em 1em;
		border-radius: var(--border-radius-pill);
		background-color: var(--color-neutral-100);
		outline-color: var(--color-primary-700);
		border: 1px solid transparent;
	}
`;

export default FilterField;
