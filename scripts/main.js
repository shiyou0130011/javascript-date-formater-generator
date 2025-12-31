window.addEventListener("load", function(){
	let d = new Date()
	// document.querySelector("form#js-date-format-form [name=date]").valueAsDate = new Date
	// document.querySelector("form#js-date-format-form [name=time]").valueAsDate = new Date
	document.querySelector("#date-value").innerText = new Intl.DateTimeFormat(
		"sv-SE",
		{
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
			timeZoneName: "longOffset", 
		}
	).format(d)


	document.querySelector("form#js-date-format-form").addEventListener("change", function(e){
		let lang = this.querySelector("[name=lang]").value || "zh-Hant-TW"
		let extra = ""
		if(this.querySelector("#nu").value){
			extra += `-nu-${this.querySelector("#nu").value}`
		}

		if(this.querySelector("#ca").value){
			extra += `-ca-${this.querySelector("#ca").value}`
		}
		if(extra){
			lang += `-u${extra}`
		}
		
		document.querySelector("#output").innerText = new Intl.DateTimeFormat(
			lang, 
			{
				dateStyle: 'full', 
				timeStyle: 'full'
			}
		).format(d)
	})

	document.querySelector("form#js-date-format-form").dispatchEvent(new CustomEvent("change"))
})