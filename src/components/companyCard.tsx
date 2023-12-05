import React from 'react'
import { CompanyType } from '../types'

function CompanyCard({c}: {c: CompanyType}) {
  return (
    <tr key={c.name}>
      <td className='cell'>{c.id}</td>
      <td className='cell'>{c.name}</td>
      <td className='cell'>{c.description}</td>
      <td className='cell'>{c.website}</td>
    </tr>
  )
}

export default CompanyCard
