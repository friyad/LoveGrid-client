import { ICampaign } from "@/types/campaignTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IProductStates {
  campaignData: ICampaign[];
  isHasMore: boolean;
}

const initialState: IProductStates = {
  campaignData: [],
  isHasMore: true,
};

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    setCampaignData: (state, action: PayloadAction<ICampaign[]>) => {
      state.campaignData = action.payload;
    },
    setIsHasMore: (state, action: PayloadAction<boolean>) => {
      state.isHasMore = action.payload;
    },
  },
});

export const { setCampaignData, setIsHasMore } = campaignSlice.actions;

export default campaignSlice.reducer;
