fetch('https://reqres.in/api/users/2')
	// fetch('https://reqres.in/api/users?page=2')
	.then(response => {
		return response.json()
	})
	.then(value => {
		console.log(value)
		console.log(value.data.avatar)
		console.log(value.data.email)
		console.log(value.data.first_name)
		console.log(value.data.id)
		console.log(value.data.last_name)
		const element = document.querySelector('.demo')
		const html = `
    <div class ="user">
      <img src="${value.data.avatar}" alt="" width="140" />
      <h2>Id:${value.data.id}</h2>
       <h2> Name:${value.data.first_name + '' + value.data.last_name}</h2>
         <h2>Email:${value.data.email}</h2>
         </div>`
		//finally we insert the html to the element here
		element.insertAdjacentHTML('beforeEnd', html)
	})
