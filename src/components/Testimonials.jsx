/** @format */

import { data } from "autoprefixer"
import React from "react"

const Testimonials = ({ data1, data2 }) => {
	return (
		<>
			{/* First Testimonials */}
			<div className="slideshow mb-[40px] ">
				{/* mover - 1  */}
				<div
					className="mover-1 flex gap-[40px] mx-auto items-center w-fit translate-x-[]  "
				>
					{data1.map((item, index) => (
						<div
							key={index}
							className="bg-[#14181C] pt-[32px] px-[21px] pb-[52px] w-[400px] rounded-md translate-x-1 "
						>
							<div className="flex gap-[17px]  items-center mb-[35px] ">
								<div className="rounded-full w-[40px] h-[40px] bg-[#21252E]">
									{item.img && (
										<img
											src={item.img}
											alt="testimonial image"
										/>
									)}
								</div>
								<span className="font-bold"> {item.name}</span>
							</div>
							<p className="text-[#CCCCCC] text-sm ">{item.body}</p>
						</div>
					))}
				</div>


				{/* mover - 2 */}
				<div
					className=" mover-2 flex gap-[40px] mx-auto items-center w-fit translate-x-[]  "
				>
					{data1.map((item, index) => (
						<div
							key={index}
							className="bg-[#14181C] pt-[32px] px-[21px] pb-[52px] w-[400px] rounded-md translate-x-1 "
						>
							<div className="flex gap-[17px]  items-center mb-[35px] ">
								<div className="rounded-full w-[40px] h-[40px] bg-[#21252E]">
									{item.img && (
										<img
											src={item.img}
											alt="testimonial image"
										/>
									)}
								</div>
								<span className="font-bold"> {item.name}</span>
							</div>
							<p className="text-[#CCCCCC] text-sm ">{item.body}</p>
						</div>
					))}
				</div>
			</div>
			{/* Second Testimonials  */}
			<div className="slideshow flex-row-reverse ">
				{/* mover - 1  */}
				<div
					className="mover-1-reverse flex gap-[40px] mx-auto items-center w-fit translate-x-[]  "
				>
					{data1.map((item, index) => (
						<div
							key={index}
							className="bg-[#14181C] pt-[32px] px-[21px] pb-[52px] w-[400px] rounded-md translate-x-1 "
						>
							<div className="flex gap-[17px]  items-center mb-[35px] ">
								<div className="rounded-full w-[40px] h-[40px] bg-[#21252E]">
									{item.img && (
										<img
											src={item.img}
											alt="testimonial image"
										/>
									)}
								</div>
								<span className="font-bold"> {item.name}</span>
							</div>
							<p className="text-[#CCCCCC] text-sm ">{item.body}</p>
						</div>
					))}
				</div>


				{/* mover - 2 */}
				<div
					className=" mover-2-reverse flex gap-[40px] mx-auto items-center w-fit translate-x-[]  "
				>
					{data1.map((item, index) => (
						<div
							key={index}
							className="bg-[#14181C] pt-[32px] px-[21px] pb-[52px] w-[400px] rounded-md translate-x-1 "
						>
							<div className="flex gap-[17px]  items-center mb-[35px] ">
								<div className="rounded-full w-[40px] h-[40px] bg-[#21252E]">
									{item.img && (
										<img
											src={item.img}
											alt="testimonial image"
										/>
									)}
								</div>
								<span className="font-bold"> {item.name}</span>
							</div>
							<p className="text-[#CCCCCC] text-sm ">{item.body}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Testimonials
