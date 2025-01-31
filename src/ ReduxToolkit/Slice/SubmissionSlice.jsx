import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../../api/api";

export const submitTask = createAsyncThunk(
  "submission/submitTask",
  async ({ taskId, githubLink }) => {
    setAuthHeader(localStorage.getItem("jwt", api));

    try {
      const { data } = await api.post(
        `/api/submissions?task_id=${taskId}&github_link=${githubLink}`,
        {}
      );
      console.log("submited task", data);
      return data;
    } catch (error) {
      console.log("catch error:", error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchAllSubmission = createAsyncThunk(
  "submission/fetchAllSubmission",
  async () => {
    setAuthHeader(localStorage.getItem("jwt", api));

    try {
      const { data } = await api.get(`/api/submissions`, {});
      console.log("fetch Submission task", data);
      return data;
    } catch (error) {
      console.log("catch error:", error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchSubmissionByTaskId = createAsyncThunk(
  "submission/fetchSubmissionByTaskId",
  async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt", api));

    try {
      const { data } = await api.get(`/api/submissions/task/${taskId}`, {});
      console.log("fetch Submission By TaskId", data);
      return data;
    } catch (error) {
      console.log("catch error:", error);
      throw Error(error.response.data.error);
    }
  }
);

export const acceptDeclineSubmission = createAsyncThunk(
  "submission/acceptDeclineSubmission",
  async ({ id, status }) => {
    setAuthHeader(localStorage.getItem("jwt", api));

    try {
      const { data } = await api.put(
        `/api/submissions/${id}?status=${status}`,
        {}
      );
      console.log("accept task", data);
      return data;
    } catch (error) {
      console.log("catch error:", error);
      throw Error(error.response.data.error);
    }
  }
);

const submissionSlice = createSlice({
  name: "submission",
  initialState: {
    submissions: [],
    status: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitTask.fulfilled, (state, action) => {
        state.status = "succeded";
        state.submissions.push(action.payload);
      })
      .addCase(submitTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAllSubmission.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSubmission.fulfilled, (state, action) => {
        state.status = "succeded";
        state.submissions = action.payload;
      })
      .addCase(fetchAllSubmission.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchSubmissionByTaskId.fulfilled, (state, action) => {
        state.status = "succeded";
        state.submissions = action.payload;
      })
      .addCase(acceptDeclineSubmission.fulfilled, (state, action) => {
        state.status = "succeded";
        state.submissions = state.submissions.map((item) =>
          item.id !== action.payload ? item : action.payload
        );
      });
  },
});

export default submissionSlice.reducer;
