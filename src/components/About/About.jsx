
import React, { useEffect, useRef, useState } from "react";
import { GoNorthStar } from "react-icons/go";
import { FaGit, FaLinkedinIn } from "react-icons/fa";
import {
	FaGithub,
	FaReact,
	FaNodeJs,
	FaJava,
	FaPython,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
} from "react-icons/fa";
import {
	SiMongodb,
	SiJavascript,
	SiCplusplus,
	SiC,
	SiExpress,
	SiTailwindcss,
	SiVercel,
} from "react-icons/si";
import classNames from "classnames"

import "./About.css"
export default function About(){
	const height = "calc(100vh - 0rem)";
	const mainDivRef = useRef(null);
	const divRefs = useRef([]);
	const [visibleDivs, setVisibleDivs] = useState([]);
	const [mainInView, setMainInView] = useState(false);

	const icons = [
		{ Component: FaGithub, name: "GitHub" },
		{ Component: FaGit, name: "Git" },
		{ Component: FaReact, name: "React" },
		{ Component: SiMongodb, name: "MongoDB" },
		{ Component: SiJavascript, name: "JavaScript" },
		{ Component: SiCplusplus, name: "C++" },
		{ Component: SiC, name: "C" },
		{ Component: FaJava, name: "Java" },
		{ Component: FaPython, name: "Python" },
		{ Component: FaHtml5, name: "HTML" },
		{ Component: FaCss3Alt, name: "CSS" },
		{ Component: SiTailwindcss, name: "Tailwind CSS" },
		{ Component: FaBootstrap, name: "Bootstrap" },
		{ Component: FaNodeJs, name: "Node.js" },
		{ Component: SiExpress, name: "Express" },
		{ Component: SiVercel, name: "Vercel" },
	];

	useEffect(() => {
		const handleObserver = (entries, observer) => {
			entries.forEach((entry) => {
				const index = entry.target.dataset.index;
				if (entry.isIntersecting) {
					setVisibleDivs((prev) => [...prev, index]);
				} else {
					setVisibleDivs((prev) => prev.filter((i) => i !== index));
				}
			});
		};

		const observer = new IntersectionObserver(handleObserver, {
			threshold: 0.1,
		});

		if (mainInView) {
			divRefs.current.forEach((div) => {
				if (div) {
					observer.observe(div);
				}
			});
		}

		return () => {
			observer.disconnect();
		};
	}, [mainInView]);

	useEffect(() => {
		const mainObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setMainInView(true);
				} else {
					setMainInView(false);
				}
			},
			{ threshold: 0.1 }
		);

		if (mainDivRef.current) {
			mainObserver.observe(mainDivRef.current);
		}

		return () => {
			if (mainDivRef.current) {
				mainObserver.unobserve(mainDivRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={mainDivRef}
			className=" w-full bg-gray-200 mb-0 h-auto max-sm:h-[130vh] flex flex-col justify-center items-center p-4 max-sm:p-2 bg-[size:14px_24px]"
			
		>
			<div className="w-full hidden max-sm:block h-[8rem]">
				{/* <div className="w-full h-full flex justify-center items-center">
					<h1 className="text-4xl text-gray-200">A B O U T</h1>
				</div> */}
			</div>
			<div className="w-full h-full max-sm:h-[100vh] flex flex-col items-center max-sm:mb-12">
				<div className="w-[90%] max-md:w-[100%] h-2/6 flex">
					<div className="w-1/3 max-sm:w-1/2 h-full p-4 max-sm:p-2">
						<div
							className={classNames(
								"w-full h-full rounded-xl shadow-xl bg-gray-700  p-4 max-sm:p-2 transition-opacity duration-1000",
								{
									"opacity-0": !visibleDivs.includes("0"),
									"opacity-100": visibleDivs.includes("0"),
								}
							)}
							data-index="0"
							ref={(el) => (divRefs.current[0] = el)}
						>
							<div className="w-full h-full rounded-xl bg-gray-500 flex justify-center items-center">
								<img
									src="https://avatars.githubusercontent.com/u/129986128?v=4"
									className="w-[50%] max-tnd:w-[60%] max-md:w-[70%] max-sm:w-[80%] border-2 border-gray-900 p-0 bg-gray-900 shadow-2xl rounded-full"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="w-2/3 max-sm:w-1/2 h-full p-4 max-sm:p-2 flex flex-col gap-6 max-sm:gap-2">
						<div className="w-full h-1/4 flex items-center">
							<div className="w-2/12 max-tnd:w-1/12 text-gray-300 text-4xl text-center flex justify-end">
								
							</div>
							{/* <h1 className="w-8/12 max-tnd:w-10/12 text-black font-semibold text-5xl max-sm:text-[14px] max-tnd:text-4xl text-center">
								About
							</h1> */}
							<div className="w-2/12 max-tnd:w-1/12 text-gray-300 text-4xl text-center flex justify-start">
						
							</div>
						</div>
						<div
							className={classNames(
								"w-full h-3/4 shadow-xl bg-gray-700 p-2 rounded-xl transition-opacity duration-1000 pl-4",
								{
									"opacity-0": !visibleDivs.includes("1"),
									"opacity-100": visibleDivs.includes("1"),
								}
							)}
							data-index="1"
							ref={(el) => (divRefs.current[1] = el)}
						>
							<div className="w-full text-2xl max-sm:text-[14px] mb-2 max-sm:mb-0 mt-2 max-sm:-mt-1 text-gray-100">
								<h1>Asif Khan</h1>
							</div>
							<div className="w-11/12 max-sm:w-full h-auto text-gray-200 text-[12px] max-tnd:text-[11px] max-sm:text-[9px]">
								<h2>
									I am a Computer Science pre final year student at IIIT Kota,
									with a focus on web development, Data Structures and Algorithms
									. I have a diverse range of experience
									having worked across various technologies and projects.
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[90%] max-md:w-[100%] h-1/3 flex">
					<div className="w-1/2 h-full p-4 max-sm:p-2 flex justify-center items-center">
						<div
							className={classNames(
								"w-full h-full shadow-xl bg-gray-600 p-2 rounded-xl transition-opacity duration-1000 pl-2 max-md:pl-2 flex flex-col justify-center",
								{
									"opacity-0": !visibleDivs.includes("2"),
									"opacity-100": visibleDivs.includes("2"),
								}
							)}
							data-index="2"
							ref={(el) => (divRefs.current[2] = el)}
						>
							<p className="w-full text-sm text-gray-300 mt-2 text-md">
								Education
							</p>
							<div className="w-full h-1/2 mb-0 flex mt-2 max-sm:gap-2">
								<div className="w-[30%] max-sm:hidden h-full flex justify-center items-start max-sm:items-center">
									<a href="https://www.apsambala.edu.in" target="_blank">
										{" "}
										<img src="https://imgs.search.brave.com/9x882ez6wnkxMhfS_NufsIteMvRZ80qxdQ6wgQy7loA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGQ0Njg5M2Mw/YzFiNjg4NjhjOTZj/MGUyNmJiMmIzN2Zk/ZDQ4N2U1NzNhYmQz/Zjg3ZmQ3YjQxZWZh/ZWE0MWFhZi9zdHNv/bGRpZXIuY29tLw" className="w-[4rem]" alt="" />
									</a>
								</div>
								<div className="w-[70%] max-sm:w-full h-full">
									<p className="text-gray-300 text-[12px] max-tnd:text-[11px] ">
										2018-21
									</p>
									<h2 className="text-gray-100 max-sm:text-[12px] text-md max-sm:text-sm">
										10th and 12th
									</h2>
									<p className="text-gray-300 text-[12px] max-tnd:text-[11px] ">
										Saint Soldier Public School, Tonk.
									</p>
								</div>
							</div>
							<div className="w-full h-1/2 flex max-sm:gap-2">
								<div className="w-[30%] max-sm:hidden h-full flex justify-center items-start max-sm:items-center">
									<a href="https://www.iiitkota.ac.in" target="_blank">
										<img src="https://imgs.search.brave.com/aQWSWG2omJ2-Xr_NgLFZhEnY8tubVm1tOb6IC6YAdjk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGVlYjAwMmNl/NjRmNDhiYWEwZGEz/OTc5MmNkYjlkNGQy/MjkyMTA0ODVmODQ2/NTU5M2NmOWRjYWUy/MjhlMThjYy9paWl0/a290YS5hYy5pbi8" className="w-[3.5rem]" alt="" />
									</a>
								</div>
								<div className="w-[70%] max-sm:w-full h-full">
									<div className="w-full h-auto">
										<p className="text-gray-300 text-[12px] max-tnd:text-[11px] ">
											2022-26
										</p>
										<h2 className="text-gray-100 text-md max-sm:text-[12px] ">
											Bachelor's in Technology
										</h2>
										
										<p className="text-gray-300 text-[12px] max-tnd:text-[11px] ">
											IIIT Kota
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-1/2 h-auto p-4 max-sm:p-2 flex justify-center items-center">
						<div
							className={classNames(
								"w-full h-full rounded-xl shadow-xl bg-gray-700 transition-opacity duration-1000 flex flex-col gap-4 max-sm:p-2 p-2",
								{
									"opacity-0": !visibleDivs.includes("3"),
									"opacity-100": visibleDivs.includes("3"),
								}
							)}
							data-index="3"
							ref={(el) => (divRefs.current[3] = el)}
						>
							<h1 className="w-full text-gray-300 text-md">Skills</h1>
							<div className="slider">
								<div className="slide-track">
									{icons.map(({ Component, name }, i) => (
										<div className="slide" key={i}>
											<Component className="icon text-blue-400" />
										</div>
									))}
									{icons.map(({ Component, name }, i) => (
										<div className="slide" key={i + icons.length}>
											<Component className="icon text-blue-400" />
										</div>
									))}
								</div>
							</div>
							<div className="fast-slider">
								<div className="fast-slide-track">
									{icons.map(({ Component, name }, i) => (
										<div className="fast-slide" key={i}>
											<Component className="fast-icon text-blue-300" />
										</div>
									))}
									{icons.map(({ Component, name }, i) => (
										<div className="fast-slide" key={i + icons.length}>
											<Component className="fast-icon text-blue-300" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

