relative у родительского
	//position: absolute; //  если бы это было меню
	//top: 0;
	//left: 0;
	&:hover {
		.nav__menu-border {
		opacity: 1;
		}
	}

absolute у дочернего
	bottom: 0; // прижать вниз маx
	display: block;
	width: 100%;
	opacity: 0;
	transition: .3s opacity;