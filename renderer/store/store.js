import { createStore } from "easy-peasy";
import { action } from "easy-peasy";
import getReports from "../utils/reporting";

const reports = getReports();

export const store = createStore({
  reports: {
    data: reports,
    addTag: action((state, payload) => {
      if (
        state.data.find((report) => report.title === payload.report.title).tags
          .length === 2
      ) {
        return;
      }

      if (
        state.data
          .find((report) => report.title === payload.report.title)
          .tags.some((tag) => tag.id === payload.tag.id)
      ) {
        return;
      }
      state.data
        .find((report) => report.title === payload.report.title)
        .tags.push(payload.tag);
    }),
    removeTag: action((state, payload) => {
      const report = state.data.find(
        (report) => report.title === payload.report.title
      );
      const index = state.data.findIndex(
        (report) => report.title === payload.report.title
      );

      state.data[index].tags = report.tags.filter(
        (tag) => tag.id !== payload.tag.id
      );
    }),
  },
});
