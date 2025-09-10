// pages\index.js

import Image from "next/image";
import Link from "next/link";
import logo from "../public/stock-logo.svg";
import WhatsApp from "../public/whatsapp.svg";
import userIcon from "../public/customer.svg";
import star from "../public/star.svg";
import hero from "../public/hero-img.svg";
import angle from "../public/angelone.jpg";
import groww from "../public/groww.png";
import dhan from "../public/dhan.png";
import mg from "../public/mg.png";
import jp from "../public/jp.png";
import temp from '../public/file.svg'
import i1 from '../public/i1.png'
import i2 from '../public/i2.png'
import i3 from '../public/i3.png'
import i4 from '../public/i4.png'
import { useEffect, useState } from "react";

function Navbar({ handleShow }) {
	return (
		<nav className="w-full rounded-lg bg-black/35">
			<div className="flex flex-col md:flex-row justify-between items-center p-3">
				<Link href="/">
					<Image src={logo} alt="Logo" width={120} height={48} />
				</Link>

				<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
					<Link
						href="/whatsapp"
						className="flex items-center justify-center border border-white text-white bg-transparent px-4 py-2 rounded-md hover:bg-white hover:text-black transition h-12"
					>
						<Image src={WhatsApp} alt="WhatsApp Logo" width={24} height={24} />
					</Link>

					<button
						className="flex items-center justify-center border border-white text-white bg-transparent px-4 py-2 rounded-md hover:bg-white hover:text-black transition h-12 w-[137px]"
						onClick={handleShow}
					>
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
}

const data = [
	{
		icon: temp,
		title: "Everything you need to learn about ai & algo trading",
		para: "The world of trading is moving fast – extremely fast, and in this era of algo trading and artificial intelligence, we will give you a sneak peek into how this new form of trading can significantly increase the odds of being profitable in the market. You’ll learn how big professional trading desks are hunting retail stop losses, exploiting big market movements – all on autopilot. ",
		rightImg: i1,
		bg: '#151e3d'
	},
	{
		icon: temp,
		title: "Learn to create , back test and deploy trading bots using our secreate startegies",
		para: " Unleash the power of algorithmic trading tools which lets you create, test, deploy your strategies spanning across price action, smart money concepts, institutional price action, indicators, volume, open interest and much more in a few clicks without the need of any coding or programming skills. Additionally, you will get access to few of our secret algo strategies – which are ready to deploy in the live markets.",
		rightImg: i2,
		bg: '#1C352D'
	},
	{
		icon: temp,
		title: "Detailed Verified profit /loss statement & algo trad history",
		para: "Get access to detailed case studies of verified real trades executed on autopilot from our proprietary custom algo trading robots which seamlessly scan, analyse, deploy and manage trades in equity, futures and options segment for intraday as well as swing trading styles. Discover a wide variety of directional and non-directional trading strategies, which will make you top dollar even when you sleep.",
		rightImg: i3,
		bg: ' #043927'
	},
	{
		icon: temp,
		title: "How tools like chat gpt ,trading view & strykex can get you to me the top1% elite traders",
		para: "Gone are the days where traders were glued to their screen from 9:15 am till 3:30pm – scanning, executing, managing their trades manually. This is ineffective and a perfect recipe for increasing losses. BUT, with A.I trading tools and platforms such as Trading View & StrykeX combined with Chat GPT, you can do all this on complete automation with 5X better results, without even clicking a button or writing a single line of code. That’s the power of artificial intelligence – that’s the future of retail trading.",
		rightImg: i4,
		bg: '#4B5320'
	},
];

function OverlapDiv() {
	return (
		<section style={{ padding: "2rem" }}>
			<div>
				<h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
					Webinar Highlights - Waht will be covered?
				</h1>
			</div>

			<div>
				<p>Learn the secrets sauce of how professional institutional traders leverage the power of artificial intelligence and algo trading for breakthrough results.</p>
			</div>

			<section className="relative h-[400vh]">
				{data.map((item, index) => (
					<div
						key={index}
						className={`sticky top-0 h-screen flex items-center justify-center text-white text-5xl font-bold z-[${10 - index}]`}
						style={{
							display: "flex",
							height: 'fit-content',
							border: "1px solid #ccc",
							borderRadius: "8px",
							alignItems: "center",
							margin: '20px',
							background: `${item.bg}`,
							padding: '32px'
						}}
					>
						<div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
							<div className="mb-4">
								<Image
									src={item.icon}
									alt={`Icon ${index + 1}`}
									width={40}
									height={40}
								/>
							</div>
							<h2 className="text-xl sm:text-2xl font-semibold mb-2 break-words">{item.title}</h2>
							<p style={{ fontSize: '18px', wordBreak: 'break-word' }}>{item.para}</p>
						</div>

						<div className="md:w-1/2">
							<Image
								src={item.rightImg}
								alt={`Image ${index + 1}`}
								width={400}
								height={250}
								className="rounded-md shadow-md w-full h-auto object-cover"
								style={{ width: 'auto', height: '390px', objectFit: 'contain' }}
							/>
						</div>
					</div>
				))}
			</section>
		</section>
	);
}

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
function MyModal({ isOpen, close }) {

	return (
		<>
			<Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<DialogPanel
							transition
							className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
						>
							<DialogTitle as="h3" className="text-base/7 font-medium text-white">
								Payment successful
							</DialogTitle>
							<p className="mt-2 text-sm/6 text-white/50">
								Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
								order.
							</p>
							<div className="mt-4">
								<Button
									className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
									onClick={close}
								>
									Got it, thanks!
								</Button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	)
}


export default function Home() {
	const logos = [
		angle, groww, dhan, mg, jp
	];

	let [isOpen, setIsOpen] = useState(false)

	function open() {
		setIsOpen(true)
	}

	function close() {
		setIsOpen(false)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			open();
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-black text-white font-sans min-h-screen w-full">
			<MyModal isOpen={isOpen} close={close} />
			<div className="p-6">
				<div className="rounded-[30px] bg-gradient-to-br from-gray-800 to-gray-900">
					<div className="px-4 md:px-8 pt-6">
						<Navbar handleShow={open} />
					</div>

					<section className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 mt-20">
						<div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full mb-6 bg-white/10">
							<Image
								src={userIcon}
								alt="User icon"
								width={20}
								height={20}
								style={{ width: "77px", height: "auto", objectFit: "contain" }}
							/>
							1,00,000+ Attendees
						</div>

						<h1 className="text-4xl sm:text-5xl font-bold mb-4">Introducing</h1>
						<h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
							<Image src={star} alt="Star Icon" width={32} height={32} />
							AI Powered Signals
						</h1>
						<p className="text-lg text-gray-300 mb-8 max-w-xl">
							Trade smarter with AI-Generated Signals — built with institutional precision, made for everyday traders.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Link href="/join/english">
								<button className="flex items-center gap-2 text-sm px-6 py-3 rounded-full bg-white text-black font-semibold transition">
									Join Now English (Free ₹299)
								</button>
							</Link>
							<Link href="/join/hindi">
								<button className="flex items-center gap-2 text-sm px-6 py-3 rounded-full bg-black text-white font-semibold transition hover:bg-white hover:text-black">
									Join Now Hindi (Free ₹299)
								</button>
							</Link>
						</div>

						<div className="mt-12 w-full max-w-md">
							<Image src={hero} alt="Hero Image" className="w-full h-auto" priority />
						</div>
					</section>
				</div>
			</div>

			<section className="mt-20">
				<p className="text-center font-medium mb-6">
					Trusted by Professionals Working At Top Companies Like
				</p>

				<div className="overflow-hidden whitespace-nowrap">
					<div className="inline-flex animate-scroll space-x-12">
						{[...logos, ...logos, ...logos].map((logo, index) => (
							<Image
								key={index}
								src={logo}
								alt={`Trusted company logo ${index + 1}`}
								width={100}
								height={40}
								className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
							/>
						))}
					</div>
				</div>
			</section>
			<OverlapDiv />

		</div>
	);
}
