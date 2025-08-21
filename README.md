# 🛠 Redux Toolkit + RTK Query Setup in Next.js/React

This README will guide you through integrating **Redux Toolkit** and **RTK Query** into your Next.js or React project.

---

## 📂 Folder Structure

```
src/
 ├── redux/
 │   ├── api/
 │   │   └── baseApi.ts
 │   ├── rootReducer.ts
 │   ├── store.ts
 │   └── hooks.ts
 ├── lib/
 │   └── Providers/
 │       └── Providers.tsx
 ├── app/
 │   └── layout.tsx
 └── components/
     ├── Header.tsx
     └── Footer.tsx

```

---

## 1️⃣ Install Dependencies

Run the following command:

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 2️⃣ Create the Store

**File:** `src/redux/store.ts`  
👉 Docs: [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)

```ts
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

## 3️⃣ Create a Provider Component

**File:** `src/lib/Providers/Providers.tsx`

```tsx
"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
```

---

## 4️⃣ Create Typed Hooks

**File:** `src/redux/hooks.ts`  
👉 Docs: [Redux Toolkit + TypeScript](https://redux-toolkit.js.org/tutorials/typescript)

```ts
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
```

---

## 5️⃣ Wrap the Root Layout

**File:** `src/app/layout.tsx`

```tsx
import Providers from "@/lib/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body className={roboto.className}>
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
```

---

## 6️⃣ Configure `baseApi` with RTK Query

**File:** `src/redux/api/baseApi.ts`  
👉 Example using [Pokémon API](https://redux-toolkit.js.org/rtk-query/overview)

```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: () => ({}),
});

export const { useGetPokemonByNameQuery } = baseApi;
```

---

## 7️⃣ Configure Store & Root Reducer

**File:** `src/redux/store.ts`

```ts
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**File:** `src/redux/rootReducer.ts`

```ts
import { baseApi } from "./api/baseApi";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
};
```

---

## ✅ Redux is Now Ready!

You can now use your API hook anywhere in your components:

```tsx
import { useGetPokemonByNameQuery } from "@/redux/api/baseApi";

export default function Pokemon() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## 📝 Notes

- `Provider` **must** wrap your entire app in `layout.tsx`.
- Always add `baseApi.middleware` to the store for RTK Query.
- Type safety comes from `RootState` & `AppDispatch`.
- You can replace the Pokémon API with your own backend API.

---

