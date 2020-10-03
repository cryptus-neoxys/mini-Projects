// const axios = require("axios").default;
// const fs = require("fs");

let userDate = "";

inputDate = document.getElementById("uD");

const setUserDate = (ele) => {
	userDate = ele;
	console.log(ele);
	console.log(userDate);
};

// inputDate.addEventListener("change", setUserDate(ele));

Date.prototype.addDays = function (days) {
	var dat = new Date(this.valueOf());
	dat.setDate(dat.getDate() + days);
	return dat;
};

function getDates(startDate, stopDate) {
	var dateArray = new Array();
	var currentDate = startDate;
	while (currentDate <= stopDate) {
		dateArray.push(
			currentDate
				.toLocaleString("en-IN", {
					day: "2-digit",
					month: "2-digit",
					year: "numeric",
				})
				.split(",")[0]
		);
		currentDate = currentDate.addDays(1);
	}
	return dateArray;
}

var myCurrentDate = new Date();
var myPastDate = new Date(myCurrentDate);
myPastDate.setDate(myPastDate.getDate() - 109);

var dateArray = getDates(myPastDate, new Date().addDays(100));
// for (i = 0; i < dateArray.length; i++) {
// 	// console.log(dateArray[i]);
// }
dateArray.length = 100;
dateArray = dateArray.map((d) => d.split("/"));

// const BUTTON = document.querySelector(".btn");

const RaipurData = {};

const reqData = (date) => {
	axios
		.get(
			`https://api.covid19india.org/v4/data-${date[2]}-${date[1]}-${date[0]}.json`
		)
		.then((res) => {
			// res = JSON.parse(res.data);
			// res = res.data;
			// fs.writeFileSync(
			// 	"RaipurData.txt",
			// 	res["CT"]["districts"]["Raipur"]["delta"]
			// );
			RaipurData[`${date[2]}/${date[1]}/${date[0]}`] =
				res["data"]["CT"]["districts"]["Raipur"]["delta"];
		})
		.catch((error) => {
			// handle error
			// console.log(error);
		});
};

const getData = async () => {
	for (let i = 0, length1 = dateArray.length; i < length1; i++) {
		reqData(dateArray[i]);
	}
	// await
};
// getData();
// console.log(RaipurData);
