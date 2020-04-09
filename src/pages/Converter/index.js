import React, { Component } from "react";

import ConverterComponent from "../../components/ConverterComponent";

import "./index.css";

export default class Converter extends Component {
	render() {
		return (
			<div className="converter">
				<h1 className="converter-title">Currency Converter</h1>
				<div className="converter-container">
					<ConverterComponent currencyA="USD" currencyB="BRL" />
					<ConverterComponent currencyA="CAD" currencyB="BRL" />
					<ConverterComponent currencyA="EUR" currencyB="BRL" />
					<ConverterComponent currencyA="GBP" currencyB="BRL" />
				</div>
			</div>
		);
	}
}
