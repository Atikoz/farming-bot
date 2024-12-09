export interface ReffersNicks {
  referrer1: UserItem,
  referrer2: UserItem,
  referrer3: UserItem
}

interface UserItem {
  id: number,
  userName: string
}

export interface RefferalNicks {
  level1: UserItem[],
  level2: UserItem[],
  level3: UserItem[]
}


export interface IRefferalTable {
  reffersNicks: ReffersNicks,
  referralNicks: RefferalNicks
}
