export interface LoginInfo {
  email: string;
  password: string;
}

export interface SignUpInfo {
  name: string;
  email: string;
  password: string;
  cPassword?: string;
  profile?: string;
}

export interface CreateCampaign {
  id?: number;
  title: string;
  category: string;
  img: string;
  blurImg: string;
  color: string;
  totalDonations?: number;
  tlDonateAmount?: number;
  goal: number;
  fundRaiserName: string;
  fundRaiserPhoto?: string;
  lastDate: string;
  description: string;
}
