export type TRootStackNavParams = {
  Root: TBtmTabNavParams;
  ViewAsModal: undefined;
  NotFound: undefined;
} & TUserStackNavParams;

export type TBtmTabNavParams = {
  Tab1: undefined;
  Tab2: undefined;
};

export type TUserStackNavParams = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
};
