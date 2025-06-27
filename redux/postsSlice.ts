
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE = 'http://localhost:5000/admin';

export const fetchAdminPosts = createAsyncThunk('posts/fetchAdmin', async (adminId: string) => {
  const res = await fetch(`${API_BASE}/posts`, {
    headers: { 'admin-id': adminId }
  });
  return await res.json();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    adminPosts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAdminPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdminPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.adminPosts = action.payload;
      })
      .addCase(fetchAdminPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
