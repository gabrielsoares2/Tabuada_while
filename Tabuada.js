var x = 1

		while (x <=10) {

			y = 1

			while(y <=10) {
				document.write(x + ` * ` + y + ` = ` + (x * y) + `<br>`)
				y++
			}
			document.write(`<hr>`)
			x++
		}