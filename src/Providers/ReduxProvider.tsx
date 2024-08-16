import * as React from "react";
import { Provider } from 'react-redux';
import { Children } from "@/types/children.type";
import { store } from "@/redux/store";

export const ReduxProvider=({children}:Children)=> {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}