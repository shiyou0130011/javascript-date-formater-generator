window.addEventListener("load", function(){
	document.querySelector("form#js-date-format-form [name=date]").valueAsDate = new Date
	document.querySelector("form#js-date-format-form [name=time]").valueAsDate = new Date


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
		
		document.querySelector("#output").innerText = new Intl.DateTimeFormat(lang).format(
			new Date(`${this.querySelector("[name=date]").value}T${this.querySelector("[name=time]").value}:00+`)
		)

	})
})