import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Converter from "./pages/Converter";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/Converter" exact component={Converter} />
			</Switch>
		</BrowserRouter>
	);
}
