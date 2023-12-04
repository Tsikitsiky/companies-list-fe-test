export interface CompanyType {
    address: string,
    created_at: string,
    description: string,
    headcount: number,
    id: number
    lease_expiry_date: string,
    lease_length: number
    lease_price: number
    lease_type: string
    maximum_lease_length: number
    move_date: string
    move_score: string
    name: string
    postcode: string
    preferred_budget: number
    preferred_contract_type: string
    preferred_lease_length: number
    preferred_number_of_desks: number
    preferred_number_of_meeting_rooms: number
    preferred_primary_location: string
    preferred_secondary_location: string
    preferred_size: number
    property_size: number
    sector: string
    updated_at: string
    website: string
}


export interface StateType {
    companies: CompanyType[],
    companiesToDisplay: CompanyType[],
    currentPage: number
}

export interface ActionType {
    type: string,
    payload: CompanyType[] | number
}