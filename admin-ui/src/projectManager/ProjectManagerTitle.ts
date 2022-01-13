import { ProjectManager as TProjectManager } from "../api/projectManager/ProjectManager";

export const PROJECTMANAGER_TITLE_FIELD = "pmName";

export const ProjectManagerTitle = (record: TProjectManager): string => {
  return record.pmName || record.id;
};
