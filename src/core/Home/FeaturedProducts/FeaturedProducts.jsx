import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {
	EffectCoverflow,
	EffectCards,
	EffectFade,
	Autoplay,
	Pagination,
	Navigation,
} from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/effect-cards';
// import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../../features/products/components/ProductCard/ProductCard';
import { useEffect } from 'react';
import { getFeaturedProducts } from '../../../features/products/productsSlice';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
	const dispatch = useDispatch();
	const { isLoading, isError, featuredProducts } = useSelector(
		(store) => store.products
	);

	useEffect(() => {
		dispatch(getFeaturedProducts());
	}, []);

	return (
		<StyledFeaturedProducts>
			{isLoading ? (
				isError ? (
					<p className='error'>
						There was an error when downloading the products list.
						<br />
						Please try again later...
					</p>
				) : (
					<LoadingSpinner />
				)
			) : (
				<StyledSwiperCarousel>
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						grabCursor={true}
						pagination={true}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						speed={1000}
						loop={true}
						spaceBetween={20}
						slidesPerView={1}
						breakpoints={{
							768: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
							992: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}>
						{featuredProducts.map((product) => {
							return (
								<SwiperSlide key={product.product_id}>
									<ProductCard product={product} />
								</SwiperSlide>
							);
						})}
					</Swiper>
					<div className='pagination'></div>
				</StyledSwiperCarousel>
			)}
			<Button as={Link} to='/products'>
				All Products
			</Button>
		</StyledFeaturedProducts>
	);
};

const StyledFeaturedProducts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.6rem;
	.error {
		text-align: center;
		padding: 2rem 4rem;
		border-radius: var(--border-radius-lg);
		border: 1px solid var(--color-neutral-300);
	}
`;

const StyledSwiperCarousel = styled.div`
	width: 100%;
	.swiper {
		padding-bottom: 3rem;
	}
	.swiper-slide {
		border-radius: var(--border-radius-lg);
		border: 1px solid var(--color-primary-100);
	}
	.swiper-pagination {
		display: flex;
		opacity: 0.5;
		border-radius: var(--border-radius-lg);
		overflow: hidden;
	}
	.swiper-pagination-bullet {
		height: 2px;
		width: 100%;
		border-radius: 0px;
		margin: 0 !important;
	}
	.swiper-pagination-bullet-active {
		background: var(--color-primary-700);
		border-radius: var(--border-radius-lg);
	}
`;

export default FeaturedProducts;
