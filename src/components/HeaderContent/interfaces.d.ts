// interfaces
import { VoidFunction } from "../../App/interfaces";

export interface TableOptionProps {
  tableActive: boolean;
  switchView: (isTable: boolean) => VoidFunction;
}

export interface HeadersProps {
  switchView: (isTable: boolean) => VoidFunction;
  tableActive:boolean;
}
