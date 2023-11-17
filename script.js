let bill = "";
let group = "";
let tip = "";

function getBill() {
	bill = parseFloat(document.getElementById("bill-amount").value);
	return bill;
}

function getGroup() {
	group = document.getElementById("group-size").value;
	return group;
}

function resetForm() {
	document.getElementById("total-per").innerHTML = "$0.00";
	document.getElementById("tip-per").innerHTML = "$0.00";
}

function calcTip() {
	getBill();
	getGroup();

	let customTip =
		parseFloat(document.getElementById("tip6").value).toFixed(2) / 100;
	if (customTip > 0 && bill > 0 && group > 0) {
		tip = customTip;
		console.log(tip);

		tip *= bill;
		bill += tip;

		bill /= group;
		document.getElementById("total-per").innerHTML = "$" + bill.toFixed(2);
		tip /= group;
		document.getElementById("tip-per").innerHTML = "$" + tip.toFixed(2);
	}
}

document.addEventListener("DOMContentLoaded", (e) => {
	const tipButton = document.querySelectorAll(".btn");

	tipButton.forEach((bt) => {
		bt.addEventListener("click", (e) => {
			tip = parseFloat(e.target.innerHTML).toFixed(2) / 100;

			tip *= bill;
			console.log(tip.toFixed(2) + " tip");
			bill += tip;
			console.log(bill.toFixed(2) + " bill + tip");
			bill /= group;
			document.getElementById("total-per").innerHTML = "$" + bill.toFixed(2);
			console.log(bill.toFixed(2) + " total / person");
			tip /= group;
			document.getElementById("tip-per").innerHTML = "$" + tip.toFixed(2);
			console.log(tip.toFixed(2) + " tip / person");
		});
	});
});
