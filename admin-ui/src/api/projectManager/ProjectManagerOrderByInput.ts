import { SortOrder } from "../../util/SortOrder";

export type ProjectManagerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pmName?: SortOrder;
  pmSalary?: SortOrder;
  updatedAt?: SortOrder;
};
