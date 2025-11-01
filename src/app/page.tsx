import Image from 'next/image'

export default function Home() {
	return (
		<main className='page-root'>
			<div className='notion-card'>
				<div className='banner relative'>
					<Image
						src='/banner.jpg'
						alt='Beautiful banner'
						fill
						priority
						className='object-cover'
					/>
				</div>

				<div className='card-body'>
					<div className='avatar-wrap'>
						<div className='avatar relative'>
							<Image
								src='/me.jpg'
								alt='Profile'
								fill
								priority
								className='object-cover'
							/>
						</div>
					</div>
					<h1 className='card-title'>hi i'm ka'ren ✌️</h1>
					<div>
						<p className='card-text'>
							1 serving of Computer Engineering and Science @ USC, with a side
							of Cybersecurity Cooking at high heat for 2 more years (May 27
							graduation).
						</p>
						<p>
							I love building things that blend hardware and software that make
							peoples lives better. Im interested in mathematics, AI/ML,
							distributed systems, big code, robotics, investing (crypto &
							kalshi), and risking my life for bursts of adrenaline.
						</p>
					</div>
					<div className='card-sections'>
						<div>Content list</div>
						<div>Current</div>
						<div>Past</div>
					</div>
				</div>
			</div>
		</main>
	)
}
