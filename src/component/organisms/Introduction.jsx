export default function Introduction(){
	return(
		<section id="introduction" className="w-full h-auto flex flex-col items-center justify-center">
			<div id="modernstore" className="mt-10 w-full md:w-[95%] rounded-2xl flex flex-col gap-5 items-center justify-center bg-softblue p-0 md:p-5">
				<div id="introductionBox" className="flex flex-col gap-5 justify-center items-center border-blue-500 w-full md:w-3/4 p-2 md:p-5">
					<h2 className="text-xl md:text-3xl text-center text-lg">Discover Modern Elegance at Modern & Stylish Store</h2>
					<p className="w-full md:w-3/4 text-lg">
						Embark on a style journey where modernity meets 
						impeccable style. Redefine fashion on your terms 
						with us. Browse, make a statement, and let your 
						wardrobe radiate contemporary sophistication.
					</p>
				</div>
				<div id="benefits" className="flex flex-col gap-5 justify-center items-center border-blue-500 w-full p-2 md:p-5">
					<h2 className="text-lg md:text-xl text-center">Why Choose Modern & Stylish Store</h2>
					<div id="benefit-list">
						<ul className="flex flex-col md:flex-row gap-3">
							<li>
								<h3 className="text-lg">Unparalleled Style Curation:</h3>
								<span>
									Experience a curated collection of modern 
									and stylish clothing that sets you apart from 
									the crowd. Our handpicked pieces ensure that you 
									stay on the cutting edge of fashion trends.
								</span>
							</li>
							<li>
								<h3 className="text-lg">Timeless Elegance, Modern Flair</h3>
								<span>
									Embrace the perfect blend of classic elegance 
									and modern trends. Our selection offers you 
									versatile options that effortlessly transition 
									from day to night, ensuring you're ready for 
									any occasion.
								</span>
							</li>
							<li>
								<h3 className="text-lg">Quality that Speaks Louder:</h3>
								<span>
									Indulge in clothing crafted with meticulous 
									attention to detail and top-tier craftsmanship. 
									Every piece is a testament to our commitment 
									to delivering garments that not only look 
									exquisite but also stand the test of time.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		)
}