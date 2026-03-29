import React from "react"
import { graphql } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

import Seo from '../components/seo'
import Layout from '../components/layout'
import Social from '../components/social-icons'
import layoutStyles from '../components/layout.module.scss'

const AboutContainer = styled.div`
	display: flex;
	flex-direction:row;
	justify-content: flex-start;
	align-items: center;
	margin-bottom:20px;

	@media screen and (max-width:600px){
		flex-direction:column;
	}
	h2{
		color: #A173B1;
		font-size: 1.8rem;
		line-height: 2.25rem;
		font-weight: 500;
	}

	ul {
		margin-top:10px;
		li{
			margin-right:20px;
		}
		img{
			height: 25px;
			
		}
	}
`

const Avatar = styled.img`
	width:200px;
	border-radius:50%;
	flex-grow:0;
	flex-shrink:0;
	margin-right:30px;
`
const Experience = styled.div`
	margin-top:60px;

	h1{
		font-size: 2.1rem;
		background-image: linear-gradient(0deg,rgba(151, 99, 194, .4) 0,rgba(151, 99, 194,.4) 30%,transparent 40%,transparent);

	}

`


const AboutPage = (props) => {
	const intl = useIntl()
	return (
		<Layout>
			<Seo title={intl.formatMessage({ id: "about" })} lang={intl.locale} />
			<section className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<AboutContainer>
						<Avatar src={props.data.site.siteMetadata.image}/>
						<div>
							<h1>{intl.formatMessage({ id: "greeting" })}</h1>
							<h2>{intl.formatMessage({ id: "headline" })}</h2>
							<Social purple={true} />
						</div>
					</AboutContainer>
					<div>
						{intl.locale === "pt" ? (
							<p>
								Carla é Bacharel em Sistemas de Informação pela USP, mestre em <b>Inteligência Artificial</b> pela USP, Engenheira de dados Senior e <a href="https://developers.google.com/community/experts/directory/profile/profile-carla_vieira">Google Developer Expert em Machine Learning</a>. Acredita na tecnologia como ferramenta de transformação social e tem estudado sobre como o viés inconsciente tem afetado a Inteligência Artificial e como tornar algoritmos caixa-preta mais transparentes.
							</p>
						) : (
							<p>
								Carla holds a Bachelor's degree in Information Systems at USP and a masters degre in Artificial Intelligence, senior data engineer and Google Developer Expert in Machine Learning. She believes Technology is steadily changing the social good landscape and has been researching about the unconscious bias in Artificial Intelligence and its impacts on our society.
							</p>
						)}
					</div>
					<Experience>
						<h1>Experiência</h1>
					</Experience>
					

				</div>
			</section>
		</Layout>
	)
}

export default AboutPage


export const query = graphql`
	query {
		site{
		   siteMetadata{
		        author	
		        image
		   }
		}
	}
`