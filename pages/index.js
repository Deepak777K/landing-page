// pages\index.js

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

function Navbar({ handleShow }) {
	return (
		<nav className="w-full rounded-lg bg-white/5 backdrop-blur-2xl">
			<div className="flex flex-col md:flex-row justify-between items-center p-3">
				<Link href="/">
					<Image src='/stock-logo.svg' alt="Logo" width={120} height={48} />
				</Link>

				<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
					<Link
						href="/whatsapp"
						className="flex items-center justify-center border border-white text-white bg-transparent px-4 py-2 rounded-md hover:bg-white hover:text-black transition h-12"
					>
						<Image src='/whatsapp.svg' alt="WhatsApp Logo" width={24} height={24} />
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
		icon: "/ic1.png",
		title: "Everything you need to learn about ai & algo trading",
		para: "The world of trading is moving fast – extremely fast, and in this era of algo trading and artificial intelligence, we will give you a sneak peek into how this new form of trading can significantly increase the odds of being profitable in the market...",
		rightImg: "/i1.png",
		bg: '#000E2E'
	},
	{
		icon: "/ic2.png",
		title: "Learn to create , back test and deploy trading bots using our secret strategies",
		para: "Unleash the power of algorithmic trading tools which lets you create, test, deploy your strategies spanning across price action, smart money concepts...",
		rightImg: "/i2.png",
		bg: '#002323'
	},
	{
		icon: "/ic3.png",
		title: "Detailed Verified profit/loss statement & algo trade history",
		para: "Get access to detailed case studies of verified real trades executed on autopilot from our proprietary custom algo trading robots...",
		rightImg: "/i3.png",
		bg: '#002419'
	},
	{
		icon: "/ic4.png",
		title: "How tools like ChatGPT, TradingView & StrykeX can get you into the top 1% of elite traders",
		para: "Gone are the days where traders were glued to their screen from 9:15 am till 3:30 pm – scanning, executing, managing their trades manually...",
		rightImg: "/i4.png",
		bg: '#001B26'
	},
];

function OverlapDiv() {
	return (
		<section style={{ padding: "2rem" }}>
			<div>
				<h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
					Webinar Highlights – What will be covered?
				</h1>
			</div>

			<div>
				<p>
					Learn the secret sauce of how professional institutional traders leverage the power of artificial intelligence and algo trading for breakthrough results.
				</p>
			</div>

			<section className="relative h-[400vh]">
				{data.map((item, index) => (
					<div
						key={index}
						className={`sticky top-0 h-screen flex items-center justify-center text-white text-5xl font-bold z-[${10 - index}]`}
						style={{
							display: "flex",
							height: 'fit-content',
							borderRadius: "24px",
							alignItems: "center",
							margin: '20px',
							background: `${item.bg}`,
							padding: '32px'
						}}
					>
						<div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
							<div className="mb-4">
								<Image src={item.icon} alt={`Icon ${index + 1}`} width={40} height={40} />
							</div>
							<h2 className="text-xl sm:text-2xl font-semibold mb-2 break-words">{item.title}</h2>
							<p style={{
								color:'#FFFFFFBF',
								fontSize: '14px', wordBreak: 'break-word',
								fontWeight: 500,
								fontStyle: 'normal',
								fontSize: '18px',
								lineHeight: '28px',
								letterSpacing: '0%',
							}}>{item.para}</p>
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

function MyModal({ isOpen, close }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNo: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form data submitted:', formData);
		setFormData({
			name: '',
			email: '',
			phoneNo: '',
		});
		close();
	};

	return (
		<Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4">
					<DialogPanel className="w-full max-w-md rounded-xl bg-black p-6">
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Image src='/strykeX.png' width={103} height={27} />
						</div>
						<DialogTitle as="h1" className="text-2xl font-semibold text-white text-center">
							Get&nbsp;
							<span className="bg-gradient-to-r from-[#0DB50B] to-[#FFCB15] bg-clip-text text-transparent">
								2 Months Extra Access
							</span>
							<br />+ Special Discount Code
						</DialogTitle>



						<form onSubmit={handleSubmit} className="mt-4">
							<div className="space-y-4">
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Full Name"
									className="w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								/>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email Address"
									className="w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								/>
								<input
									type="tel"
									name="phoneNo"
									value={formData.phoneNo}
									onChange={handleChange}
									placeholder="Phone Number"
									className="w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								/>
							</div>
							<div className="mt-4">
								<Button
									type="submit"
									className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#0DB50B] to-[#FFCB15]  px-3 py-1.5 text-sm font-semibold text-black shadow-inner shadow-white/10 hover:bg-gray-600"
								>
									Submit
								</Button>
							</div>
						</form>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}

export default function Home() {
	const logos = [
		"/angelone.jpg", "/groww.png", "/dhan.png", "/mg.png", "/jp.png"
	];

	let [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setIsOpen(true), 5000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-black text-white font-sans min-h-screen w-full">
			<MyModal isOpen={isOpen} close={() => setIsOpen(false)} />
			<div className="p-6">
				<div className="rounded-[30px] bg-gradient-to-br from-gray-800 to-gray-900">
					<div className="px-4 md:px-8 pt-6">
						<Navbar handleShow={() => setIsOpen(true)} />
					</div>

					<section className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 mt-20">
						<div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full mb-6 bg-white/10">
							<Image src='/customer.svg' alt="User icon" width={20} height={20} style={{ width: "77px", height: "auto", objectFit: "contain" }} />
							1,00,000+ Attendees
						</div>

						<h1 className="text-4xl sm:text-5xl font-bold mb-4">Introducing</h1>
						<h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
							<Image src="/star.svg" alt="Star Icon" width={32} height={32} />
							<span className="bg-gradient-to-r from-[#0DB50B] to-[#FFCB15] bg-clip-text text-transparent">AI Powered</span> Signals
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

						<Image src="/hero-img.svg" alt="Hero Image" className="w-full h-auto" width={0} height={0} priority style={{ width: '700px' }} />
					</section>
				</div>
			</div>

			{/* Logos Marquee */}
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

			{/* Webinar Highlights Section */}
			<OverlapDiv />
		</div>
	);
}
