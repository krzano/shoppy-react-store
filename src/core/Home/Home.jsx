import { styled } from 'styled-components';
import StyledContentWrapper from '../../styles/StyledContentWrapper/StyledContentWrapper';
import Button from '../../components/Button/Button';
const StyledHeader = styled.header`
	padding: 6rem 4rem;
	background-color: var(--color-neutral-0);
	background-image: linear-gradient(
		180deg,
		var(--color-neutral-50) 0%,
		var(--color-neutral-100) 100%
	);
	h1 {
		color: var(--color-primary-900);
		/* letter-spacing: 1px; */
		/* line-height: 1.5; */
		/* font-size: 5rem; */
		text-transform: capitalize;
		margin-bottom: 2rem;
	}
`;

const Home = () => {
	return (
		<>
			<StyledHeader>
				<h1>
					{/* Where Technology Meets Your Needs */}
					The Ultimate Online Store for Tech Lovers
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
					asperiores error quibusdam.
				</p>
				<Button>123</Button>
				<Button variant='primary'>123</Button>
			</StyledHeader>
			<StyledContentWrapper></StyledContentWrapper>
		</>
	);
};
export default Home;