import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Header from './components/header';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import testImg from './assets/img/test.jpg'

const Wrapper = styled(Box)(({ theme }) => ({
	minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight + 16}px)`,
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const PortraitWrapper = styled(Box)(() => ({
	backgroundColor: "#121212"
}));

const Portrait = styled(Typography)(() => ({
	textAlign: "justify",
	background: `url(${testImg}) no-repeat center/cover`,
	backgroundSize: "cover",
	backgroundRepeat: "none",
	backgroundPosition: "center",
	backgroundAttachment: "fixed",
	backgroundClip: "text",
	WebkitTextFillColor: "rgba(225, 225, 225, 0)",
	fontSize: "14px",
	lineHeight: 1,
	letterSpacing: 0.4
}));

function App () {

	return (
		<>
			<CssBaseline />
			<Header />
			<Wrapper className="App">
				<Container maxWidth="md">
					<PortraitWrapper>
						<Portrait>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum vel sem dignissim euismod. Sed ut molestie sapien. Maecenas mattis tellus ac gravida pulvinar. Donec eget justo non libero cursus eleifend ac eget mauris. Fusce scelerisque commodo arcu, ut mattis est convallis pellentesque. Aliquam erat volutpat. Duis in neque iaculis, pulvinar ex eu, lobortis est. Mauris elit massa, accumsan sit amet sem in, mollis convallis nulla. Ut tincidunt lectus ante, ut faucibus enim efficitur ut. Aliquam pharetra in lectus eget commodo. Aliquam in vestibulum mauris. Integer nibh justo, ornare nec pretium et, eleifend vel tellus. In hac habitasse platea dictumst. Integer mattis blandit purus. In condimentum tellus ex, eu vestibulum mauris placerat eget.

							Morbi ornare magna nec dolor venenatis, quis congue orci fermentum. Mauris justo risus, fringilla eget dapibus eget, dignissim vitae ex. Nullam ex quam, placerat vitae pellentesque a, euismod a odio. Vestibulum imperdiet efficitur sapien vel scelerisque. Pellentesque scelerisque, odio id pellentesque faucibus, dolor urna pellentesque odio, eget posuere nulla sem ac diam. Suspendisse rhoncus consectetur sem, non eleifend risus aliquet eget. Cras lobortis scelerisque egestas. Aenean sit amet tellus nec tellus pulvinar rhoncus quis et sem. Quisque tempor egestas maximus. Nulla eu velit et urna aliquet lacinia. Sed convallis turpis ac commodo feugiat.

							In hac habitasse platea dictumst. Duis viverra mollis eleifend. Integer suscipit tristique ipsum, quis bibendum nibh varius non. Sed vel fermentum nibh. In tellus lectus, rhoncus nec porta ac, pharetra non metus. Morbi feugiat sit amet ante nec egestas. Sed aliquam elit et iaculis porttitor. Fusce dolor sapien, lacinia at nibh sed, ultricies mollis mauris.

							Donec malesuada turpis id leo dignissim euismod at auctor nisl. Phasellus ultricies congue iaculis. Ut turpis nibh, pretium eu egestas quis, sodales et ante. Nunc blandit gravida massa eu vestibulum. Mauris finibus iaculis felis quis porta. Duis tristique vitae libero vitae congue. Cras congue leo non ligula sagittis semper. Vivamus augue arcu, faucibus non lectus a, consequat egestas tellus. Suspendisse potenti. Sed vehicula magna ut odio ultricies, eget interdum augue pretium. Duis mattis nibh a nibh luctus, ut elementum sapien pharetra. Fusce non dignissim nulla, et dignissim orci. Mauris tincidunt malesuada lorem, ac pretium erat. Donec lobortis elit id bibendum interdum. Mauris malesuada mollis risus, at feugiat purus tempor sed. Ut placerat est lorem, ut mattis mauris porttitor a.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum vel sem dignissim euismod. Sed ut molestie sapien. Maecenas mattis tellus ac gravida pulvinar. Donec eget justo non libero cursus eleifend ac eget mauris. Fusce scelerisque commodo arcu, ut mattis est convallis pellentesque. Aliquam erat volutpat. Duis in neque iaculis, pulvinar ex eu, lobortis est. Mauris elit massa, accumsan sit amet sem in, mollis convallis nulla. Ut tincidunt lectus ante, ut faucibus enim efficitur ut. Aliquam pharetra in lectus eget commodo. Aliquam in vestibulum mauris. Integer nibh justo, ornare nec pretium et, eleifend vel tellus. In hac habitasse platea dictumst. Integer mattis blandit purus. In condimentum tellus ex, eu vestibulum mauris placerat eget.

							Morbi ornare magna nec dolor venenatis, quis congue orci fermentum. Mauris justo risus, fringilla eget dapibus eget, dignissim vitae ex. Nullam ex quam, placerat vitae pellentesque a, euismod a odio. Vestibulum imperdiet efficitur sapien vel scelerisque. Pellentesque scelerisque, odio id pellentesque faucibus, dolor urna pellentesque odio, eget posuere nulla sem ac diam. Suspendisse rhoncus consectetur sem, non eleifend risus aliquet eget. Cras lobortis scelerisque egestas. Aenean sit amet tellus nec tellus pulvinar rhoncus quis et sem. Quisque tempor egestas maximus. Nulla eu velit et urna aliquet lacinia. Sed convallis turpis ac commodo feugiat.

							In hac habitasse platea dictumst. Duis viverra mollis eleifend. Integer suscipit tristique ipsum, quis bibendum nibh varius non. Sed vel fermentum nibh. In tellus lectus, rhoncus nec porta ac, pharetra non metus. Morbi feugiat sit amet ante nec egestas. Sed aliquam elit et iaculis porttitor. Fusce dolor sapien, lacinia at nibh sed, ultricies mollis mauris.
							Morbi ornare magna nec dolor venenatis, quis congue orci fermentum. Mauris justo risus, fringilla eget dapibus eget, dignissim vitae ex. Nullam ex quam, placerat vitae pellentesque a, euismod a odio. Vestibulum imperdiet efficitur sapien vel scelerisque. Pellentesque scelerisque, odio id pellentesque faucibus, dolor urna pellentesque odio, eget posuere nulla sem ac diam. Suspendisse rhoncus consectetur sem, non eleifend risus aliquet eget. Cras lobortis scelerisque egestas. Aenean sit amet tellus nec tellus pulvinar rhoncus quis et sem. Quisque tempor egestas maximus. Nulla eu velit et urna aliquet lacinia. Sed convallis turpis ac commodo feugiat.

							In hac habitasse platea dictumst. Duis viverra mollis eleifend. Integer suscipit tristique ipsum, quis bibendum nibh varius non. Sed vel fermentum nibh. In tellus lectus, rhoncus nec porta ac, pharetra non metus. Morbi feugiat sit amet ante nec egestas. Sed aliquam elit et iaculis porttitor. Fusce dolor sapien, lacinia at nibh sed, ultricies mollis mauris.
						</Portrait>
					</PortraitWrapper>
				</Container>
			</Wrapper>
		</>
	)
}

export default App
