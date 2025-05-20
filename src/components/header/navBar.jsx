import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../../css/components/header.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState(null); 

	const menuItems = [
		{ id: "solution", label: "Soluções" },
		{ id: "security", label: "Segurança" },
		{ id: "partners", label: "Sobre nós" },
		{ id: "difference", label: "Diferenciais" },
		{ id: "faq", label: "FAQ" },
		{ id: "contact", label: "Entre em contato" },
	];

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = (e, id) => {
		e.preventDefault(); 
		setActive(id); 
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" }); 
		}
		setIsOpen(false); 
	};

	return (
		<nav className="navbar">
			<div className="navbar-container">
			
				<button
					className="menu-button text-white"
					onClick={toggleMenu}
				>
					{isOpen ? <X className="icon" /> : <Menu className="icon" />}
				</button>

				<div className={`menu-container ${isOpen ? "open" : ""}`}>
					{isOpen && (
					
						<button className="close-button" onClick={toggleMenu}>
							<X className="icon-close text-white" />
						</button>
					)}
					<ul className="menu">
						<li className="menu-list">
							{menuItems.map((item) => (
								<a
									key={item.id}
									href={`#${item.id}`}
									onClick={(e) => handleClick(e, item.id)}
									style={{
										color: active === item.id ? "#045939" : "",
										borderBottom:
											active === item.id ? "2px solid #045939" : "",
									}}
								>
									{item.label}
								</a>
							))}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;



