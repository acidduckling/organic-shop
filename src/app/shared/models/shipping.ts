export interface Shipping {
  name: string;
  address: string;
  address2: string;
  city: string;
  state: State;
  postcode: number;
}

export enum State {
  ACT = 'ACT',
  NSW = 'NSW',
  NT = 'NT',
  QLD = 'QLD',
  SA = 'SA',
  TAS = 'TAS',
  WA = 'WA'
}
