import React from 'react'
import { CompanyType } from '../types'
import { Td, Tr } from '@chakra-ui/react'

function CompanyCard({ c }: { c: CompanyType }) {
  return (
    <Tr key={c.name}>
      <Td isNumeric>{c.id}</Td>
      <Td>{c.name}</Td>
      <Td>{c.description}</Td>
      <Td>{c.website}</Td>
    </Tr>

  )
}

export default CompanyCard
