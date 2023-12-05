
async function getCompanies() {
    const url = 'http://localhost:4000/companies'
    try {
        const res = await fetch(url)
        return await res.json()
    } catch (error) {
      // You can return the corresponding error here which you can display on the user's screen
        console.error('error::::::', error);
    }
}

export default getCompanies