//your JS code here. If required.
const tableDiv = document.getElementById("output");
const promise1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({promise:'Promise 1',time:2})
	},2000)
})

const promise2= new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({promise:'Promise 2',time:1})
	},1000)
})

const promise3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({promise:'Promise 3',time:3})
		console.log("Promise 3")
	},3000)
})
Promise.all([promise1,promise2,promise3]).then((data)=>{
	console.log(`conso`,data)
	if(data){
		data.forEach((el, index)=>{
			const tr= tableDiv.insertRow(index);
			const td1= tr.insertCell(0);
			const td2= tr.insertCell(1);
			td1.textContent=el.promise;
			td2.textContent=el.time;			
		})

		const tr= tableDiv.insertRow(data.length);
		const td1= tr.insertCell(0);
		const td2= tr.insertCell(1);
		td1.textContent='Total';
		td2.textContent= new Date().getSeconds();	
	}
}).catch((e)=>{
	console.log(e)
})