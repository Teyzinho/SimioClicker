import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

// Definindo o tipo do hook personalizado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;