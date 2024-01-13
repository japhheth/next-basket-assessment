"use client";

import { useRef } from "react";
import { useAppSelector, useAppDispatch, useAppStore } from "../hooks";

const UseProductModel = () => {
  // Initialize the store with the product information
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    initialized.current = true;
  }
  const name = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return {};
};

export default UseProductModel;
