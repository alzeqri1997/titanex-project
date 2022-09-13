/** @format */

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import styles from "./styles"
import Info from "./components/Info"
import { infoData, steps, testimonials1, testimonials2 } from "./constants"
import Step from "./components/Step"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
function App() {
	return (
		<div className="bg-background w-full overflow-hidden">
			<div
				className={`flex justify-center items-center ${styles.gutter}`}
			>
				<div className="xl:max-w-[1280px] w-full">
					<Navbar />
				</div>
			</div>

			<hr className="bg-[#717B8C] opacity-20" />

			<div className="bg-background flex justify-center items-start">
				<div className={`${styles.boxWidth}`}>
					<Hero />
					<hr id='benefits' className="bg-[#717B8C] opacity-20" />
					<div className={`${styles.gutter}`}>
						{infoData.map((data, index) => (
							<Info
								key={index}
								title={data.title}
								body={data.body}
								image={data.image}
							/>
						))}

						<div id="how-to-works" >
							<h1 className="text-center md:text-[57px] ss:text-[40px] text-[34px] font-bold tracking-wide mb-[67px]">
								How it works
							</h1>
							<div className="flex sm:flex-row flex-col sm:gap-0 gap-[30px]  justify-between items-center mb-[160px]">
								{steps.map((step, index) => (
									<Step
										key={index}
										title={step.title}
										body={step.body}
										image={step.image}
									/>
								))}
							</div>
						</div>
					</div>

					{/* Testimonials */}
					<div id="reviews" className=" sx:mb-[133px] mb-[60px]  ">
						<h1 className="text-center md:text-[57px] ss:text-[40px] text-[34px] font-bold tracking-wide mb-[67px]">
							What our customers say
						</h1>
						<Testimonials
							data1={testimonials1}
							data2={testimonials2}
						/>
					</div>

					<div id="faq" className={` ${styles.gutter} xs:mb-[133px] mb-[60px] `}>
						<h1 className="text-center md:text-[57px] ss:text-[40px] text-[34px] font-bold tracking-wide mb-[67px]">
							FAQ
						</h1>
						<FAQ />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App
