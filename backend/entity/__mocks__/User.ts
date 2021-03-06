export class User {
	Name: string;
	Username: string;
	Email: string;
	HashedPassword: string;
	Type: string;
	[key: string]: string|(()=>void);
	
	static users: User[] = [];

	static find(a: any) {
		var result = User.users.slice(0);
		for (let key in a) {
			let value = a[key];
			result = result.filter(function (el: User) {
				return el[key] == value;
			});
		}

		return result
	}

	static findOne(a: any) {
		return this.find(a)[0]
	}

	save() {
		User.users.push(this)
	}
}