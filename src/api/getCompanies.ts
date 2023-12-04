import React from 'react'
import { CompanyType } from '../types'

async function getCompanies() {
    const url = 'http://localhost:4000/companies'
    try {
        const res = await fetch(url)
        const companies: CompanyType[] = await res.json()
        return companies
    } catch (error) {
        console.log('error::::::', error);
    }
}

export default getCompanies