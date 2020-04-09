import React, { Component } from "react";

import "./ConverterComponent.css";

export default class ConverterComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currencyA_value: "",
			currencyB_value: 0,
		};

		this.converter = this.converter.bind(this);
	}

	converter() {
		const api_key = "f899f81942761a8d555d";
		let from_to = `${this.props.currencyA}_${this.props.currencyB}`;
		let url = `https://free.currconv.com/api/v7/convert?apiKey=${api_key}&q=${from_to}&compact=y`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				let price = json[from_to].val;
				// console.log(price);
				let currencyB_value = (parseFloat(this.state.currencyA_value) * price).toFixed(2);
				// console.log(currencyB_value);
				this.setState({ currencyB_value });
			});
	}

	render() {
		return (
			<div className="converter-box">
				<h2 className="converter-box-title">
					From {this.props.currencyA} to {this.props.currencyB}
				</h2>
				<div className="converter-box-input-group">
					<input
						className="converter-box-input"
						type="currency"
						onChange={(e) => {
							this.setState({ currencyA_value: e.target.value });
						}}
					/>
					<input className="converter-box-button" type="button" value="Converter" onClick={this.converter} />
				</div>
				<div className="converter-box-result">{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(this.state.currencyB_value)}</div>
			</div>
		);
	}
}
