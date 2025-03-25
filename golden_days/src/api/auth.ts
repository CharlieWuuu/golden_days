export function fakeLogin(email: string, password: string): Promise<string> {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		if (email === 'user@example.com' && password === '123456') {
		  resolve('fake-jwt-token-abc123')
		} else {
		  reject('帳號或密碼錯誤')
		}
	  }, 1000)
	})
  }
